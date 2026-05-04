"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

const THRESHOLDS = [0.25, 0.5, 0.75, 0.9] as const;
const EVENTS = {
  0.25: "scroll_25" as const,
  0.5: "scroll_50" as const,
  0.75: "scroll_75" as const,
  0.9: "scroll_90" as const,
};

export function ScrollDepthTracker() {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      for (const t of THRESHOLDS) {
        if (ratio >= t && !fired.current.has(t)) {
          fired.current.add(t);
          track(EVENTS[t]);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
