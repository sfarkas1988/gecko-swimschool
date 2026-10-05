/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statischer Export: Die Seite wird als reines HTML/CSS gebaut (Ordner "out")
  // und läuft auf jedem Hoster – Vercel, Netlify, Cloudflare Pages oder klassischem Webspace.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
