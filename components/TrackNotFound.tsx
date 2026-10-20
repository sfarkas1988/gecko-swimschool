"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Meldet aufgerufene Adressen, die es nicht gibt – so findet man kaputte Links.
export default function TrackNotFound() {
  useEffect(() => {
    trackEvent("404", { path: window.location.pathname });
  }, []);

  return null;
}
