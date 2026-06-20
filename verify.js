/* Dependency-free verification of the GSC list builder data + engines. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = __dirname;
let pass = 0, fail = 0;
const ok = (c, m) => { c ? (pass++, console.log("  ✓ " + m)) : (fail++, console.log("  ✗ FAIL: " + m)); };

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(dir, "gsc-data.js"), "utf8"), sandbox);
const D = sandbox.window.GSC_DATA;
const det = id => D.detachments.find(d => d.id === id);

console.log("\n[1] Data structure");
ok(!!D, "GSC_DATA loaded");
ok(D.units.length === 24, "24 units (got " + D.units.length + ")");
ok(D.detachments.length === 9, "9 detachments (got " + D.detachments.length + ")");

console.log("\n[2] Units valid (fields + points + stats)");
let bad = [];
for (const u of D.units) {
  const f = u.id && u.name && u.category && u.sizes.length && u.stats.length && Array.isArray(u.weapons);
  const p = u.sizes.every(s => Number.isFinite(s.base) && s.base > 0 && Number.isFinite(s.repeat) && s.repeat >= s.base);
  const st = u.stats.every(s => s.M && s.T && s.SV && s.W && s.LD && s.OC);
  if (!(f && p && st)) bad.push(u.id);
}
ok(bad.length === 0, "all units valid" + (bad.length ? " — bad: " + bad.join(", ") : ""));

console.log("\n[3] Points spot-check vs the PDF");
const P = id => D.units.find(u => u.id === id);
ok(P("aberrants").sizes[0].base === 150 && P("aberrants").sizes[0].repeat === 160, "Aberrants 5: 150 / 160 (3rd+)");
ok(P("sanctus").sizes[0].base === 65, "Sanctus 65 (PDF, not 39k's 50)");
ok(P("patriarch").sizes[0].base === 80, "Patriarch 80 (PDF, not 39k's 75)");

console.log("\n[4] Escalating-cost engine");
function baseCost(entries, e) {
  const u = P(e.unitId), size = u.sizes[e.sizeIdx] || u.sizes[0];
  const same = entries.filter(x => x.unitId === e.unitId);
  const ord = same.indexOf(e) + 1;
  return (ord > 2 && size.repeat !== size.base) ? size.repeat : size.base;
}
const ab = [{ unitId: "aberrants", sizeIdx: 0 }, { unitId: "aberrants", sizeIdx: 0 }, { unitId: "aberrants", sizeIdx: 0 }];
ok(JSON.stringify(ab.map(e => baseCost(ab, e))) === JSON.stringify([150, 150, 160]), "3× Aberrants(5) → 150,150,160");

console.log("\n[5] Detachments — all 9 now have full rules");
ok(D.detachments.every(d => d.rule && d.rule.text), "every detachment has rule text");
ok(D.detachments.every(d => d.enhancements.length >= 2 && d.enhancements.every(e => Number.isFinite(e.pts) && e.text)),
   "every detachment has enhancements with pts + text");
ok(D.detachments.every(d => d.stratagems.length >= 3), "every detachment has ≥3 stratagems");
ok(det("heroes").rule.name === "Killer Reputation" && det("heroes").enhancements.find(e => e.name === "Gene-tailored Toxins").pts === 35,
   "Heroes: Killer Reputation + Gene-tailored Toxins 35");
ok(det("purestrainswarm").enhancements.find(e => e.upgrade) && det("xenocult").enhancements.find(e => e.upgrade),
   "Purestrain Broodswarm & Xenocult Masses each have an Upgrade enhancement");

console.log("\n[6] DP combine logic (3 DP budget + unique tags)");
const dpc = d => parseInt(d.dp, 10) || 0;
ok(dpc(det("host")) === 3, "Host of Ascension = 3 DP");
ok(["xenocreed", "outlander", "finalday", "broodbrothers", "biosanctic"].every(id => dpc(det(id)) === 2), "39k detachments = 2 DP");
ok(["heroes", "purestrainswarm", "xenocult"].every(id => dpc(det(id)) === 1), "extra detachments = 1 DP");
function canCombine(ids) {
  let dp = 0; const uq = new Set();
  for (const id of ids) { const d = det(id); dp += dpc(d); if (dp > 3) return false; if (d.unique) { if (uq.has(d.unique)) return false; uq.add(d.unique); } }
  return true;
}
ok(canCombine(["host"]) && !canCombine(["host", "heroes"]), "Host (3) fills the budget — nothing else fits");
ok(canCombine(["xenocreed", "heroes"]), "2-DP + 1-DP = 3 ✓");
ok(canCombine(["heroes", "purestrainswarm", "xenocult"]), "1+1+1 = 3 ✓");
ok(!canCombine(["biosanctic", "purestrainswarm"]), "two PURESTRAIN detachments blocked");
ok(!canCombine(["host", "xenocult"]), "Host + Xenocult blocked (HOSTS clash / over DP)");
ok(!canCombine(["xenocreed", "outlander"]), "2 + 2 = 4 → over budget");

console.log("\n[7] Leader-attachment targets exist");
let lb = [];
for (const u of D.units) (u.leads || []).forEach(id => { if (!P(id)) lb.push(u.id + "→" + id); });
ok(lb.length === 0, "all 'leads' point to real units" + (lb.length ? " — " + lb.join(", ") : ""));

console.log("\n[8] App script syntactically valid (both builds)");
for (const file of ["index.html", "Genestealer-Cults-List-Builder.html"]) {
  const html = fs.readFileSync(path.join(dir, file), "utf8");
  const m = html.match(/<script>\s*\(function\(\)\{[\s\S]*?\}\)\(\);\s*<\/script>/);
  if (!m) { ok(false, file + ": app script not found"); continue; }
  try { new vm.Script(m[0].replace(/<\/?script>/g, "")); ok(true, file + ": app script parses"); }
  catch (e) { ok(false, file + ": " + e.message); }
}

console.log("\n──────────────");
console.log(`RESULT: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
