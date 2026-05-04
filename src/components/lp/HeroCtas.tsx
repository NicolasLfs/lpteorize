"use client";

import { siteConfig } from "@/lib/config";
import { DemoLink } from "@/components/lp/DemoLink";
import { PrimaryCta } from "@/components/lp/PrimaryCta";

export function HeroCtas() {
  return (
    <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
      <PrimaryCta
        href={siteConfig.signupUrl}
        source="hero_primary"
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#ff6a00] px-8 text-base font-semibold text-white shadow-[0_8px_30px_-8px_rgba(255,106,0,0.55)] transition hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00]"
      >
        Criar conta grátis
      </PrimaryCta>
      <DemoLink
        className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 bg-transparent px-8 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        onClick={() => {
          document.getElementById("demo")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        Ver demonstração
      </DemoLink>
    </div>
  );
}
