"use client";

import { track } from "@/lib/analytics";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

export function DemoLink({ children, className, onClick }: Props) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        track("demo_click");
        onClick();
      }}
    >
      {children}
    </button>
  );
}
