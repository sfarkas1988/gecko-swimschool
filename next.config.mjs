/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: Die Seite wird als reines HTML/CSS gebaut (Ordner "out")
  // und läuft auf jedem Hoster – Vercel, Netlify, Cloudflare Pages oder klassischem Webspace.
  output: "export",
  // Die Prüfung vor dem Push baut in einen eigenen Ordner, damit "npm run dev" ungestört weiterläuft.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
