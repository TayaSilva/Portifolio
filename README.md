# Portfólio — Taiane Silva

Vue 3 + Vite + TypeScript + Tailwind CSS. Abas Início / Currículo / Contato, tema escuro/claro e PT/EN.

## Rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
```

- Componentes compartilhados: `src/components/common/`.
- Seções por página: `src/components/home/`, `src/components/resume/` e `src/components/contact/`.
- Estado e interações: `src/composables/usePortfolio.ts`.
- Textos e dados: `src/data/translations.ts` e `src/data/portfolio.ts`.
- Componentes visuais usam `<script setup lang="ts">` e utilities Tailwind diretamente nos templates.
- Configuração TypeScript: `tsconfig.json`. Imagens: `src/assets/imagens/`.
- O envio do formulário é só uma prévia; para receber mensagens, conecte um serviço (ex.: Formspree) ou use o mailto.
