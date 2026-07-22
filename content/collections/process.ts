import { Ear, Search, BookOpen, Compass, Clapperboard, Send } from "lucide-react";
import type { ProcessStep } from "@/content/types";

/**
 * Creative-process timeline steps, in order. Localized via `process.steps.<slug>`.
 */
export const processSteps: ProcessStep[] = [
  { slug: "listen", icon: Ear },
  { slug: "research", icon: Search },
  { slug: "story", icon: BookOpen },
  { slug: "direction", icon: Compass },
  { slug: "production", icon: Clapperboard },
  { slug: "delivery", icon: Send },
];
