import { Reveal } from "@/components/lp/Reveal";

const TRUST = [
  "Dados criptografados",
  "Suporte humano",
  "Atualização em tempo real",
  "Relatórios exportáveis",
];

export function AuthorityBar() {
  return (
    <section
      className="border-y border-[#222] bg-[#0a0a0a] py-10"
      aria-label="Prova de autoridade"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-wider text-[#666]">
            Confiança e segurança
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {TRUST.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#222] bg-[#111] px-4 py-2 text-sm text-[#a0a0a0]"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[#a0a0a0]">
            Integração com{" "}
            <a
              href="https://tintim.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#ff6a00] underline-offset-4 hover:underline"
            >
              Tintim
            </a>{" "}
            para orquestrar comunicações ao lado dos seus dados.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
