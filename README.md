# Gecko Swimschool Mallorca – Website (v0.1)

Next.js 15 (App Router) als **statischer Export** – keine Server-Funktionen nötig.

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # erzeugt den Ordner "out" mit der fertigen Website
```

## Online stellen

**Vercel (empfohlen):** Projekt auf GitHub hochladen → auf vercel.com „Add New Project“ → Repository wählen → Deploy.
Danach unter *Settings → Domains* `gecko-swimschool.com` hinzufügen und die angezeigten DNS-Einträge bei deinem Domain-Anbieter eintragen.

**Netlify / Cloudflare Pages:** Build-Befehl `npm run build`, Ausgabeordner `out`.

**Klassischer Webspace (IONOS, Strato …):** `npm run build` ausführen und den Inhalt von `out/` per FTP hochladen.

> Achtung beim Domain-Umzug: E-Mail-Einträge (MX-Records) für info@gecko-swimschool.com nicht löschen.

## Vor dem Livegang ausfüllen

- `lib/site.ts` → Block `legal`: Name, Rechtsform, Anschrift, NIF/NIE, ggf. USt-IdNr. und Registereintrag
- `app/datenschutz/page.tsx` → Hosting-Anbieter und Speicherdauer der Logfiles
- `app/page.tsx` → Fahrtkosten-Pauschale, echte Bewertungen, Teamfotos
- Rechtstexte von Gestor / Anwalt prüfen lassen

Rosa hinterlegter Text auf Impressum und Datenschutz = noch offener Platzhalter.

## Wo was liegt

| Datei | Inhalt |
|---|---|
| `lib/site.ts` | Telefon, E-Mail, WhatsApp, Pflichtangaben |
| `app/page.tsx` | Startseite (alle Abschnitte) |
| `app/globals.css` | Farben (`:root`), Layout, Mobil-Ansicht |
| `app/impressum/`, `app/datenschutz/` | Rechtstexte |
| `public/` | Logo-Dateien |

## Später geplant

Buchungssystem mit Zahlung, Kontaktformular (Resend), Englisch/Spanisch, Instagram.
