"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/config";
import { track } from "@/lib/analytics";
import { PrimaryCta } from "@/components/lp/PrimaryCta";
import { Reveal } from "@/components/lp/Reveal";

export function Footer() {
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (email.trim()) params.set("email", email.trim());
    track("sign_up", { source: "footer_email" });
    const url =
      params.toString().length > 0
        ? `${siteConfig.signupUrl}?${params.toString()}`
        : siteConfig.signupUrl;
    window.location.assign(url);
  }

  return (
    <footer className="border-t border-[#222] bg-[#000] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p className="font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
              Comece hoje. É grátis.
            </p>
            <p className="mt-3 text-[#a0a0a0]">
              Junte-se a gestores que já transformaram dados em decisões.
            </p>
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <label htmlFor="footer-email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => track("form_start", { source: "footer" })}
                className="min-h-12 flex-1 rounded-lg border border-[#222] bg-[#0a0a0a] px-4 text-white placeholder:text-[#666] focus:border-[#ff6a00] focus:outline-none focus:ring-2 focus:ring-[#ff6a00]/40"
              />
              <button
                type="submit"
                className="min-h-12 rounded-lg bg-[#ff6a00] px-6 text-base font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00]"
              >
                Criar conta
              </button>
            </form>
            <PrimaryCta
              href={siteConfig.signupUrl}
              source="footer_cta"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-8 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Acessar Teorize
            </PrimaryCta>
          </div>
        </Reveal>
        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-[#222] pt-10 sm:flex-row">
          <Link href="/" className="font-[family-name:var(--font-sora)] text-xl font-bold">
            <span className="text-white">Teor</span>
            <span className="text-[#ff6a00]">ize</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#a0a0a0]">
            <Link href={siteConfig.termsUrl} className="hover:text-white">
              Termos e Condições
            </Link>
            <span className="text-[#222]" aria-hidden>
              |
            </span>
            <Link href={siteConfig.privacyUrl} className="hover:text-white">
              Política de Privacidade
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.social.linkedin}
              className="text-[#a0a0a0] hover:text-[#ff6a00]"
              aria-label="LinkedIn"
            >
              in
            </Link>
            <Link
              href={siteConfig.social.instagram}
              className="text-[#a0a0a0] hover:text-[#ff6a00]"
              aria-label="Instagram"
            >
              ig
            </Link>
            <Link
              href={siteConfig.social.youtube}
              className="text-[#a0a0a0] hover:text-[#ff6a00]"
              aria-label="YouTube"
            >
              yt
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-[#666]">
          © {new Date().getFullYear()} Teorize. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
