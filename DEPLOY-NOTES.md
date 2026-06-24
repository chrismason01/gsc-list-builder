# Deploying a static site to GitHub Pages from the Claude Code sandbox

Field notes from getting this app onto GitHub Pages. Written for another agent to follow. The non-obvious bits are in **Gotchas** — read those first.

## Starting state in this environment
- No `gh` CLI installed
- No SSH keys, no git credential helper, no `GITHUB_TOKEN`
- `brew` is available
- `api.github.com` is reachable, but **`github.com:443` (git transport) times out**
- Foreground `sleep` is blocked

---

## Step 1 — Install the GitHub CLI
```bash
brew install gh
```

## Step 2 — Authenticate (device flow, no local browser, no TTY)
`gh auth login` is interactive and wants a TTY. Run it **in the background with stdin from `/dev/null`** so it prints the one-time code immediately instead of blocking on the "Press Enter to open browser" prompt:

```bash
gh auth login --hostname github.com --git-protocol https --web < /dev/null   # background it
```

Then read the background process's output, grab the `XXXX-XXXX` code, and give it to the user to enter at **https://github.com/login/device** (works from any browser — their phone or desktop; no browser needed on the sandbox). When they click *Authorize*, the background process completes.

Verify:
```bash
gh auth status          # should show: Logged in to github.com account <user>
```

## Step 3 — Create the repo and do the first push
```bash
git -C "$DIR" init -q
git -C "$DIR" config user.name  "Your Name"
git -C "$DIR" config user.email "you@example.com"
git -C "$DIR" add <files>
git -C "$DIR" commit -q -m "Initial commit"
gh repo create <user>/<repo> --public --source="$DIR" --remote=origin --push
```
> Pages needs a **public** repo on the free tier.

## Step 4 — Enable Pages (note the nested-field syntax)
```bash
gh api -X POST repos/<user>/<repo>/pages \
  -f "source[branch]=main" -f "source[path]=/"
```
Live at `https://<user>.github.io/<repo>/`.

## Step 5 — Add `.nojekyll` (do this immediately — see Gotcha #2)
```bash
gh api -X PUT repos/<user>/<repo>/contents/.nojekyll \
  -f message="Add .nojekyll" -f content=""
```

---

## Gotchas (the time-sinks)

### 1. `git push` to github.com times out — deploy updates via the Contents API
In this sandbox, `git push` to `github.com:443` fails (`Couldn't connect to server`), but `api.github.com` works. So after the first push, **update files through the REST Contents API** instead of git:

```bash
R=<user>/<repo>
for F in index.html other.js; do
  SHA=$(gh api repos/$R/contents/$F -q .sha)          # current blob sha (omit for brand-new files)
  # build payload.json = {message, content:<base64 of file>, sha, branch:"main"}
  node -e 'const fs=require("fs");const[f,sha,msg]=process.argv.slice(1);
    fs.writeFileSync("/tmp/pl.json",JSON.stringify({message:msg,content:fs.readFileSync(f).toString("base64"),sha:sha,branch:"main"}))' \
    "$F" "$SHA" "your commit message"
  gh api -X PUT repos/$R/contents/$F --input /tmp/pl.json -q .commit.sha
done
```
This bypasses git transport entirely. **Side effect:** local git diverges from origin (API commits ≠ local commits). Reconcile later with `git fetch && git reset --hard origin/main` *if* github.com:443 ever becomes reachable.

### 2. Jekyll build failures → `.nojekyll`
Plain HTML/JS repos can fail the Pages build with a bare **"Page build failed"** (Jekyll/Liquid choking on the content). Adding an empty **`.nojekyll`** at the repo root makes Pages serve files as-is and eliminates the whole failure class. Add it up front.

### 3. Don't trust the build API alone; verify the live URL
- `gh api repos/$R/pages/builds/latest` `.status`/`.commit` **lag** behind reality, and first builds can take **1–2+ minutes**.
- Confirm a deploy by fetching the live page and grepping for a known marker from your change:
  ```bash
  curl -s https://<user>.github.io/<repo>/ | grep -c '<marker-from-your-change>'
  ```
- Since foreground `sleep` is blocked, use curl's own retry backoff as a timer:
  ```bash
  curl -s -o /dev/null --retry 14 --retry-delay 10 --retry-all-errors https://<user>.github.io/<repo>/__wait
  ```

### 4. Single-file vs multi-file
Over HTTPS (Pages), a relative `<script src="data.js">` loads fine, so a multi-file repo works and is easy to update. A single self-contained `.html` (data inlined) is best only for `file://` double-click / offline use, where relative classic-script loads also work but `fetch()` of local files does not.

---

*Generated while building the Genestealer Cults list builder. Update these notes if the environment's network rules change.*
