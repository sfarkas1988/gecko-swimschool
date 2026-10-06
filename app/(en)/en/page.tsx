import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { alternates } from "@/lib/routes";
import { texts } from "@/lib/texts";

export const metadata: Metadata = {
  alternates: alternates("home", "en"),
};

export default function Home() {
  return <HomePage t={texts.en} />;
}
