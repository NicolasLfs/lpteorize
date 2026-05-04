import { Reveal } from "@/components/lp/Reveal";

const STEPS = [
  { title: "Conecte", body: "Integre seus canais em minutos." },
  { title: "Visualize", body: "Dashboard personalizada gerada automaticamente." },
  { title: "Decida", body: "Acompanhe métricas e apresente resultados com confiança." },
];

export function HowItWorks() {
  return (
    <section className="border-y border-[#222] bg-[#111] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
            Comece a usar em 3 passos
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title}>
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6a00] text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(255,106,0,0.7)]">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-[#a0a0a0]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
