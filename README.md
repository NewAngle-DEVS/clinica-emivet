# EMIVET Clínica Veterinária

Site institucional premium da EMIVET — clínica veterinária 24 horas em Campinas/SP.

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis (smooth scroll)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O build gera `dist/` pronto para hospedagem estática.

## Deploy (GitHub → Cloudflare Pages)

1. Envie o repositório para o GitHub
2. No Cloudflare Pages, conecte o repositório
3. Configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Apontar o domínio `.com.br` nas configurações de custom domain
5. SSL/HTTPS é provisionado automaticamente pela Cloudflare

Arquivos de suporte incluídos:

- `public/_redirects` — SPA fallback
- `public/404.html` — página não encontrada
- `public/robots.txt` e `public/sitemap.xml` — SEO base

## Contatos da clínica

- WhatsApp: (19) 97153-1810
- Endereço: Av. Washington Luiz, 115 — Ponte Preta, Campinas/SP
- Instagram: [@clinicaemivet](https://www.instagram.com/clinicaemivet)
