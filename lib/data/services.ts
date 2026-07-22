import {
  Film,
  Megaphone,
  Building2,
  Sparkles,
  Mic,
  Music,
} from "lucide-react";
import type { Service } from "@/types";

/**
 * Service offerings. Title/description localized via `services.items.<slug>`.
 */
export const services: Service[] = [
  { slug: "music-videos", icon: Film },
  { slug: "commercials", icon: Megaphone },
  { slug: "corporate", icon: Building2 },
  { slug: "animation", icon: Sparkles },
  { slug: "voice-over", icon: Mic },
  { slug: "music-production", icon: Music },
];
