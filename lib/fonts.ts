import { Montserrat, Literata } from "next/font/google";

// next/font lädt die Schriften beim Build herunter und liefert sie von der eigenen Domain aus.
// Es werden also keine Daten an Google übertragen (wichtig für DSGVO).
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});
