"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Zählt einmal pro Seitenaufruf, wenn ein Abschnitt die Bildschirmmitte erreicht –
// so sieht man, wie viele Besucher bis zu den Preisen bzw. zum Kontakt kommen.
export default function TrackSectionView({
  sectionId,
  event,
}: {
  sectionId: string;
  event: "View Prices" | "View Contact";
}) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trackEvent(event);
          observer.disconnect();
        }
      },
      // Schmaler Streifen in der Bildschirmmitte: funktioniert auch bei sehr hohen Abschnitten.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionId, event]);

  return null;
}
