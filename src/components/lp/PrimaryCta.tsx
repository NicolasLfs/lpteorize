"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  source: string;
};

export function PrimaryCta({ href, children, className, source }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track("cta_click", { source })}
    >
      {children}
    </Link>
  );
}
