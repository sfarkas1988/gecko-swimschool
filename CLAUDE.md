# Gecko Swimschool – Hinweise für Claude

Dieses Projekt wird von einer **nicht-technischen Person** gepflegt. Sie committet und pusht über GitHub Desktop.

- Auf Deutsch und in einfacher Sprache antworten, ohne Fachbegriffe; Ergebnisse statt Technik beschreiben.
- Technische Schritte selbst erledigen, statt die Person darum zu bitten.
- Nach Änderungen selbst prüfen, dass `npm run build` und `npm run format:check` durchlaufen. Fehler selbst beheben.
- Die Git-Hooks in `.githooks/` nie umgehen (kein `--no-verify`).
- Auf diesem Rechner gibt es kein `git` im PATH und kein `bash`. Git liegt unter `%LOCALAPPDATA%\GitHubDesktop\app-*\resources\app\git\cmd\git.exe`. In den Hooks deshalb `node …` direkt aufrufen, nicht `npm`/`npx`.

## Aufbau

Next.js 15 (App Router) als statischer Export, siehe `README.md`. Formatierung: Prettier-Standardregeln (`.prettierrc.json` ist absichtlich leer).
