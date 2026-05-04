"use client";

import { siteConfig } from "@/lib/config";
import { PrimaryCta } from "@/components/lp/PrimaryCta";
import { Reveal } from "@/components/lp/Reveal";

export function MidCta() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#222] bg-[linear-gradient(135deg,#0a0a0a_0%,#1a0f08_45%,#0a0a0a_100%)] px-6 py-14 text-center shadow-[0_0_80px_-30px_rgba(255,106,0,0.35)] sm:px-12">
          <p className="text-xl font-semibold text-white sm:text-2xl">
            Pronto para parar de adivinhar e começar a escalar com dados?
          </p>
          <PrimaryCta
            href={siteConfig.signupUrl}
            source="mid_cta"
            className="mt-8 inline-flex min-h-14 min-w-[220px] items-center justify-center rounded-lg bg-[#ff6a00] px-10 text-lg font-semibold text-white transition hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00]"
          >
            Criar minha conta grátis
          </PrimaryCta>
        </div>
      </Reveal>
    </section>
  );
}
