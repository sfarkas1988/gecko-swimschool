import type { Lang } from "@/lib/routes";
import { de, type Texts } from "./de";
import { en } from "./en";

export type { Texts };

export const texts: Record<Lang, Texts> = { de, en };
