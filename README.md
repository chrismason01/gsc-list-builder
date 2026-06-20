# Genestealer Cults — List Builder

A fast, offline army list builder for Warhammer 40,000 Genestealer Cults.

**Live app:** open the GitHub Pages URL on your phone, then **Share → Add to Home Screen** for a full-screen offline app.

## Features
- All 24 datasheets with statlines, weapon profiles, abilities, keywords and composition
- All 9 detachments with full rules, enhancements and stratagems
- **Combinable detachments** with a 3-DP budget (Host of Ascension = 3 DP; codex detachments = 2 DP; the three extra = 1 DP), enforcing the DP cap and the PURESTRAIN / HOSTS unique-tag clashes
- Escalating per-copy points (some units cost more for your 3rd+ copy)
- Live points counter vs your limit, enhancement & leader attachment, copy-to-text, save / export-import JSON
- Works fully offline; data is stored in your browser

## Data sources
- **Points:** Munitorum Field Manual points pack (custom/escalating)
- **Statlines, abilities & detachment rules:** 39k.pro + official Faction Pack v1.0

## Files
- `index.html` — the app (loads `gsc-data.js`)
- `gsc-data.js` — all unit + detachment data
- `Genestealer-Cults-List-Builder.html` — single-file standalone build (data embedded)
- `verify.js` — Node test harness (`node verify.js`)

Unofficial fan tool. Not affiliated with Games Workshop.
