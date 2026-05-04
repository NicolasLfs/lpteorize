# Deploy da LP Teorize em VPS (Next.js 16)

## Build standalone

Na VPS (Node 20+):

```bash
npm ci
npm run build
```

O artefato `output: "standalone"` gera `.next/standalone` com `server.js` e cópias necessárias de `public` e `.next/static` conforme a [documentação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying#nodejs-server).

### Arranjo de pastas sugerido após `next build`

Copiar para o mesmo diretório do servidor:

- `.next/standalone/**`
- `.next/static` → `.next/standalone/.next/static`
- `public` → `.next/standalone/public`

### Variáveis de ambiente

Definir em systemd, Docker ou painel da VPS (valores reais, não commitar secrets):

- URLs públicas e cadastro: ver `.env.example`
- IDs de GTM/GA4/Pixel/Clarity/Hotjar apenas como `NEXT_PUBLIC_*` quando forem públicos

### Processo

```bash
cd .next/standalone
NODE_ENV=production PORT=3000 node server.js
```

Encaminhar HTTPS no Nginx ou Caddy para `127.0.0.1:3000`. Habilitar compressão e cache de assets estáticos.

### Verificação em produção

- `curl -I` confirma 200 e headers de cache em `/`
- Meta tags e JSON-LD inspecionados no HTML
- Eventos `page_view` e profundidade de scroll presentes em `dataLayer` quando GTM/GA estiver configurado
- Links de cadastro e políticas abrem URLs corretas
