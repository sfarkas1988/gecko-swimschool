/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: Die Seite wird als reines HTML/CSS gebaut (Ordner "out")
  // und läuft auf jedem Hoster – Vercel, Netlify, Cloudflare Pages oder klassischem Webspace.
  output: "export",
  // Die Prüfung vor dem Push baut in einen eigenen Ordner, damit "npm run dev" ungestört weiterläuft.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  trailingSlash: true,
  images: { unoptimized: true },
  // Nur ein Arbeitsprozess beim Bauen: Sonst braucht der Build über 1 GB Arbeitsspeicher
  // und wird auf dem Server (Coolify) mittendrin abgebrochen.
  // globalNotFound: Die „Seite nicht gefunden“-Seite (app/global-not-found.tsx) gilt für beide Sprachen.
  experimental: { cpus: 1, globalNotFound: true },
};

export default nextConfig;
