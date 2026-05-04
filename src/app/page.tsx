import { AuthorityBar } from "@/components/lp/AuthorityBar";
import { Benefits } from "@/components/lp/Benefits";
import { DemoSection } from "@/components/lp/DemoSection";
import { Faq } from "@/components/lp/Faq";
import { Footer } from "@/components/lp/Footer";
import { Hero } from "@/components/lp/Hero";
import { HowItWorks } from "@/components/lp/HowItWorks";
import { MidCta } from "@/components/lp/MidCta";
import { PageView } from "@/components/lp/PageView";
import { Problem } from "@/components/lp/Problem";
import { ScrollDepthTracker } from "@/components/lp/ScrollDepthTracker";
import { Testimonials } from "@/components/lp/Testimonials";

export default function Home() {
  return (
    <>
      <PageView />
      <ScrollDepthTracker />
      <main id="conteudo-principal">
        <Hero />
        <AuthorityBar />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <DemoSection />
        <MidCta />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
