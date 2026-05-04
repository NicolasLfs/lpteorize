import { Reveal } from "@/components/lp/Reveal";

const PAINS = [
  "Dados espalhados em planilhas, Meta Ads, Google Analytics e ferramentas que não conversam",
  "Horas perdidas montando relatórios manuais toda semana",
  "Na hora da reunião, não consegue provar o lucro real com clareza",
  "Cada canal mostra um número diferente. Qual é o verdadeiro?",
];

export function Problem() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
            Ainda gerenciando seu negócio no achismo?
          </h2>
          <ul className="mt-8 space-y-4 text-[#a0a0a0]">
            {PAINS.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6a00]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="relative">
          <div className="rounded-2xl border border-[#222] bg-[#111] p-8 shadow-[0_0_60px_-24px_rgba(255,106,0,0.25)]">
            <div className="space-y-3">
              {["Meta", "GA4", "Planilhas", "Ads"].map((label, i) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-xl bg-[#0a0a0a] px-4 py-3 ring-1 ring-[#222]"
                  style={{ transform: `translateX(${i * 6}px)` }}
                >
                  <span className="text-sm text-[#a0a0a0]">{label}</span>
                  <span className="text-xs text-[#666]">número diferente</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-[#666]">
              Caos de ferramentas → uma única fonte de verdade na Teorize.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
