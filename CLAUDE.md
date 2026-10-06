# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Gecko Swimschool – Hinweise für Claude

Dieses Projekt wird von einer **nicht-technischen Person** gepflegt. Sie committet und pusht über GitHub Desktop.

- Auf Deutsch und in einfacher Sprache antworten, ohne Fachbegriffe; Ergebnisse statt Technik beschreiben.
- Technische Schritte selbst erledigen, statt die Person darum zu bitten.
- Nach Änderungen selbst prüfen, dass `npm run build` und `npm run format:check` durchlaufen. Fehler selbst beheben.
- Die Git-Hooks in `.githooks/` nie umgehen (kein `--no-verify`).
- Auf dem Windows-Rechner der Person gibt es kein `git` im PATH und kein `bash`. Git liegt unter `%LOCALAPPDATA%\GitHubDesktop\app-*\resources\app\git\cmd\git.exe`. In den Hooks deshalb `node …` direkt aufrufen, nicht `npm`/`npx`. Hook-Meldungen ohne Umlaute schreiben (GitHub Desktop zeigt sie sonst falsch an).
- Code-Kommentare sind auf Deutsch und erklären das _Warum_ in einfachen Worten – so beibehalten.

## Befehle

```bash
npm install            # aktiviert auch die Git-Hooks (scripts/setup-hooks.mjs via "prepare")
npm run dev            # Vorschau auf http://localhost:3000
npm run build          # statischer Export nach out/ – dient zugleich als Typprüfung
npm run format         # Prettier auf alles anwenden
npm run format:check   # wie in der GitHub-Action
```

Es gibt keine Tests und kein ESLint (`npm run lint` ist nicht eingerichtet). Prüfung = Build + Prettier.

Automatisch: `pre-commit` formatiert geänderte Dateien (lint-staged), `pre-push` baut mit `NEXT_DIST_DIR=.next-check`, damit ein laufendes `npm run dev` nicht gestört wird. `.github/workflows/check.yml` wiederholt Format-Check und Build.

## Aufbau

Next.js 15 (App Router) als **statischer Export** (`output: "export"`, `trailingSlash: true`, Bilder unoptimiert) – keine Server-Funktionen, API-Routen oder dynamisches Rendering verwenden. `experimental.cpus: 1` ist nötig, sonst bricht der Build auf dem Server (Coolify) wegen Speicher ab. Formatierung: Prettier-Standardregeln (`.prettierrc.json` ist absichtlich leer).

**Zweisprachigkeit (DE unter `/`, EN unter `/en/`)** über zwei Route-Gruppen mit je eigenem Root-Layout: `app/(de)/layout.tsx` und `app/(en)/layout.tsx`. Es gibt kein `app/layout.tsx`; deshalb `app/global-not-found.tsx` (mit `experimental.globalNotFound`) als gemeinsame 404-Seite. Beide Layouts nutzen `components/SiteLayout.tsx` (html/body, Header, Footer, Metadaten je Sprache).

- `lib/routes.ts` ist die zentrale Liste aller Seiten mit Adresse pro Sprache. Daraus entstehen `hreflang`/Canonical (`alternates()`), die Sitemap (`app/sitemap.ts`) und der Sprachumschalter (`components/LangSwitch.tsx`). Neue Seite = Eintrag in `routes` + je eine `page.tsx` in beiden Route-Gruppen.
- Startseiten-Texte liegen in `lib/texts/de.ts`; `en.ts` ist als `Texts = typeof de` typisiert – fehlt ein Schlüssel im Englischen, schlägt der Build fehl. Beide Startseiten rendern dieselbe `components/HomePage.tsx` mit `t={texts.<lang>}`.
- Rechtstexte (Impressum/Datenschutz) sind dagegen eigene Seiten pro Sprache und müssen von Hand parallel gepflegt werden.
- Spanisch ist vorbereitet, aber ausgeblendet: zum Einschalten `Lang` in `lib/routes.ts` erweitern, Seiten/Texte anlegen und `"es"` in `LangSwitch.tsx` ergänzen.

**Zentrale Daten:** `lib/site.ts` (`site`: Kontakt, URL; `legal`: Pflichtangaben). Werte in `[ECKIGEN KLAMMERN]` sind Platzhalter; auf den Rechtsseiten werden sie mit `className="todo"` rosa markiert und müssen vor dem Livegang ersetzt werden (siehe README, „Vor dem Livegang ausfüllen“).

**Gestaltung:** Alles in `app/globals.css` (Farben als Variablen in `:root`, Layout, Mobil-Ansicht) – kein CSS-Framework. Schriften über `next/font/google` in `lib/fonts.ts` (werden selbst ausgeliefert, wichtig für DSGVO – keine externen Font-/CDN-Links einbauen).

## Inhaltliche Regel

Jede Textänderung in **beiden Sprachen** vornehmen (Startseite: `lib/texts/de.ts` + `en.ts`; Rechtstexte: beide Seiten-Dateien).
