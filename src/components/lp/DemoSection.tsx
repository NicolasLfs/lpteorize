import { DashboardMockup } from "@/components/lp/DashboardMockup";
import { Reveal } from "@/components/lp/Reveal";

export function DemoSection() {
  return (
    <section
      id="demo"
      className="scroll-mt-24 bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
            Uma dashboard que fala a língua do seu negócio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[#a0a0a0]">
            Interface limpa, dados claros, decisões rápidas.
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
