import { Reveal } from "@/components/lp/Reveal";

const CARDS = [
  {
    title: "Centralização Total",
    body: "Conecte todos os seus canais em uma única dashboard.",
  },
  {
    title: "Lucro Real",
    body: "Entenda o quanto você realmente lucra por cliente, canal e campanha.",
  },
  {
    title: "Relatórios Automatizados",
    body: "Gere relatórios profissionais em segundos.",
  },
  {
    title: "Indicadores que Importam",
    body: "Foque no que move a agulha.",
  },
  {
    title: "Dados Seguros",
    body: "Criptografia e controle de acesso.",
  },
  {
    title: "Tempo Real",
    body: "Decisões baseadas no que está acontecendo agora.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
            Tudo que você precisa para escalar com dados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#a0a0a0]">
            Pilares de valor pensados para gestores digitais e times que precisam
            apresentar resultado.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <Reveal key={c.title}>
              <article className="group h-full rounded-2xl border border-[#222] bg-[#111] p-6 transition hover:-translate-y-1 hover:shadow-[0_12px_40px_-16px_rgba(255,106,0,0.22)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff6a00]/15 text-[#ff6a00] ring-1 ring-[#ff6a00]/30">
                  <span className="text-lg" aria-hidden>
                    ◆
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a0a0a0]">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
