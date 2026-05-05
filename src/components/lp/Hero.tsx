"use client";

import { HeroCtas } from "@/components/lp/HeroCtas";
import { LpScreenshot } from "@/components/lp/LpScreenshot";
import { Reveal } from "@/components/lp/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,106,0,0.12),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-wider text-[#ff6a00]">
              Teorize
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-sora)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
              Dashboard profissional para análise de dados e crescimento corporativo
              no digital
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#a0a0a0] lg:mx-0">
              Centralize indicadores, automatize relatórios e tome decisões baseadas em
              dados — não em achismos. Tudo numa única plataforma.
            </p>
            <HeroCtas />
          </div>
        </Reveal>
        <Reveal className="lg:justify-self-end">
          <LpScreenshot
            src="/lp/home.png"
            alt="Tela inicial da plataforma Teorize"
            caption="Home"
            className="w-full max-w-xl"
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
