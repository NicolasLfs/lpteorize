import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { JsonLd } from "@/components/lp/JsonLd";
import { TrackingScripts } from "@/components/lp/TrackingScripts";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const title =
  "Teorize | Dashboard Profissional para Análise de Dados e Crescimento Digital";
const description =
  "Centralize indicadores, automatize relatórios e visualize o lucro real do seu negócio digital. Crie sua conta grátis na Teorize.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: "Teorize",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedinPartnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID
    ? Number(process.env.NEXT_PUBLIC_HOTJAR_ID)
    : undefined;

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] font-[family-name:var(--font-inter)] text-white">
        <JsonLd />
        <TrackingScripts
          gtmId={gtmId}
          ga4Id={ga4Id}
          metaPixelId={metaPixelId}
          linkedinPartnerId={linkedinPartnerId}
          clarityId={clarityId}
          hotjarId={hotjarId}
        />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#ff6a00] focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
