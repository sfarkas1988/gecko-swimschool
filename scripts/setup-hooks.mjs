// Aktiviert die Git-Hooks aus dem Ordner ".githooks".
// Läuft automatisch bei "npm install" (Script "prepare") und schlägt nie fehl.
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

function findGit() {
  if (spawnSync("git", ["--version"]).status === 0) return "git";

  // Kein Git im PATH: das in GitHub Desktop eingebaute Git verwenden (Windows).
  const desktop = join(process.env.LOCALAPPDATA ?? "", "GitHubDesktop");
  if (!existsSync(desktop)) return null;
  const candidates = readdirSync(desktop)
    .filter((name) => name.startsWith("app-"))
    .sort()
    .reverse()
    .map((name) =>
      join(desktop, name, "resources", "app", "git", "cmd", "git.exe"),
    );
  return candidates.find((path) => existsSync(path)) ?? null;
}

if (process.env.CI || !existsSync(".git")) process.exit(0);

const git = findGit();
if (!git) {
  console.warn(
    "Hinweis: Git wurde nicht gefunden – die automatischen Prüfungen vor Commit/Push sind nicht aktiv.",
  );
  process.exit(0);
}

const result = spawnSync(git, ["config", "core.hooksPath", ".githooks"]);
if (result.status === 0) {
  console.log("Automatische Prüfungen vor Commit/Push sind aktiv.");
} else {
  console.warn(
    "Hinweis: Die automatischen Prüfungen konnten nicht aktiviert werden.",
  );
}
