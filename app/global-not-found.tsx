import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import { routes } from "@/lib/routes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Gecko Swimschool Mallorca",
};

// Wird angezeigt, wenn jemand eine Adresse aufruft, die es nicht gibt (in beiden Sprachen).
export default function GlobalNotFound() {
  return (
    <SiteLayout lang="de">
      <article className="container legal">
        <h1>Seite nicht gefunden</h1>
        <p>
          Diese Seite gibt es leider nicht.{" "}
          <a href={routes.home.de}>Zur Startseite</a>
        </p>
        <p lang="en">
          Sorry, this page does not exist.{" "}
          <a href={routes.home.en} hrefLang="en">
            Go to the English home page
          </a>
        </p>
      </article>
    </SiteLayout>
  );
}
