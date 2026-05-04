export const siteConfig = {
  name: "Teorize",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://teorize.com.br",
  signupUrl:
    process.env.NEXT_PUBLIC_TEORIZE_SIGNUP_URL ?? "https://teorize.com.br/cadastro",
  termsUrl:
    process.env.NEXT_PUBLIC_TERMS_URL ?? "https://teorize.com.br/termos",
  privacyUrl:
    process.env.NEXT_PUBLIC_PRIVACY_URL ?? "https://teorize.com.br/privacidade",
  social: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/company/teorize",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/teorize",
    youtube:
      process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://www.youtube.com/@teorize",
  },
};
