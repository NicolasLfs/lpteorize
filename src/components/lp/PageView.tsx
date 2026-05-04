"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function PageView() {
  useEffect(() => {
    track("page_view");
  }, []);
  return null;
}
