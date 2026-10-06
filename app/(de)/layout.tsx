import type { Viewport } from "next";
import SiteLayout, { siteMetadata } from "@/components/SiteLayout";
import "../globals.css";

export const metadata = siteMetadata("de");

export const viewport: Viewport = {
  themeColor: "#9DFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout lang="de">{children}</SiteLayout>;
}
