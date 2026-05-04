"use client";

import { useId } from "react";
import { track } from "@/lib/analytics";
import { Reveal } from "@/components/lp/Reveal";

const FAQS = [
  {
    q: "A Teorize é gratuita?",
    a: "Você pode começar gratuitamente. Temos planos que escalam conforme seu crescimento.",
  },
  {
    q: "Preciso saber programar?",
    a: "Não. Foi feita para gestores, não apenas analistas. Interface visual e intuitiva.",
  },
  {
    q: "Quais ferramentas integro?",
    a: "Meta Ads, Google Ads, Google Analytics, planilhas, sistemas de pagamento e mais.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Criptografia de ponta e controle total de permissões.",
  },
  {
    q: "Posso usar para apresentar a clientes?",
    a: "Sim. Relatórios automáticos com visual profissional, prontos para exportar.",
  },
];

export function Faq() {
  const baseId = useId();
  return (
    <section className="bg-[#111] px-4 py-20 sm:px-6 lg:px-8" aria-labelledby={`${baseId}-faq`}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2
            id={`${baseId}-faq`}
            className="text-center font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl"
          >
            Dúvidas comuns
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {FAQS.map((item, index) => (
            <Reveal key={item.q}>
              <details
                className="group rounded-2xl border border-[#222] bg-[#0a0a0a] px-5 py-4 open:shadow-[0_0_40px_-20px_rgba(255,106,0,0.2)]"
                onToggle={(e) => {
                  const t = e.currentTarget;
                  if (t.open) {
                    track("faq_open", { index });
                  }
                }}
              >
                <summary className="cursor-pointer list-none font-medium text-white outline-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-[#ff6a00] transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#a0a0a0]">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
