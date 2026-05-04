import { Reveal } from "@/components/lp/Reveal";

const ITEMS = [
  {
    quote:
      "Graças à Teorize hoje meus relatórios são muito mais apresentáveis.",
    name: "Marina Rocha",
  },
  {
    quote:
      "Com a Teorize consegui enxergar o lucro dos meus clientes de um jeito que planilha nunca mostrou.",
    name: "Lucas Pereira",
  },
  {
    quote:
      "Tudo num lugar só na Teorize — acabou aquela sensação de cada um com um número diferente.",
    name: "Amanda Costa",
  },
  {
    quote: "Canal e projeto ficam juntos; simples explicar resultado sem planilha.",
    name: "Diego Barbosa",
  },
  {
    quote:
      "Com a Teorize a gente enxerga indicadores sem ficar pulando de ferramenta em ferramenta.",
    name: "Nina Vieira",
  },
  {
    quote:
      "Investimento e entrega finalmente conversam — pra mim isso mudou depois que centralizei na Teorize.",
    name: "Gabriel Oliveira",
  },
  {
    quote:
      "Reunião com cliente ficou mais leve. Abro a Teorize e a conversa anda com dado, não de opinião.",
    name: "Patrícia Mendes",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
            O que dizem quem já usa
          </h2>
        </Reveal>
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {ITEMS.map((t) => (
            <Reveal key={t.name} className="min-w-[min(100%,320px)] snap-center lg:min-w-0">
              <article className="h-full rounded-2xl border border-[#222] bg-[#111] p-5">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1a1a1a] text-sm font-semibold text-[#ff6a00] ring-1 ring-[#222]"
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-medium text-white">{t.name}</p>
                    <p className="text-[#ff6a00]" aria-label="5 de 5 estrelas">
                      ★★★★★
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">{t.quote}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
