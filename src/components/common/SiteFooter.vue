<script setup lang="ts">
defineProps<{ mailto: string; linkedin: string; whatsapp: string }>()
</script>

<template>
  <footer class="mt-auto border-t border-line">
    <div class="mx-auto flex w-[min(1180px,calc(100%-72px))] flex-wrap justify-between gap-4 py-[22px] font-mono text-[11px] uppercase tracking-[.06em] text-muted max-[700px]:w-[min(calc(100%-40px),1180px)]">
      <span>© 2026 Taiane Silva</span>
      <nav class="flex items-center gap-4" aria-label="Redes sociais e contato">
        <a class="transition-colors hover:text-accent" :href="whatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.56 0 .24 5.32.24 11.86c0 2.09.55 4.13 1.6 5.92L.13 24l6.37-1.67a11.84 11.84 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.45-8.41ZM12.1 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.8 9.8 0 0 1-1.5-5.19C2.22 6.42 6.65 2 12.1 2a9.8 9.8 0 0 1 6.96 2.89 9.8 9.8 0 0 1 2.88 6.98c0 5.43-4.42 9.83-9.84 9.83Zm5.39-7.37c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.24-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
          <span class="sr-only">WhatsApp</span>
        </a>
        <a class="transition-colors hover:text-accent" :href="linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.25h4.96V23H.5V8.25ZM8.5 8.25h4.76v2.02h.07c.66-1.26 2.28-2.59 4.7-2.59 5.03 0 5.97 3.31 5.97 7.62V23h-4.96v-6.84c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.61V23H8.5V8.25Z" />
          </svg>
          <span class="sr-only">LinkedIn</span>
        </a>
        <a class="transition-colors hover:text-accent" :href="mailto" aria-label="E-mail">
          <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
            <path d="m3 6 8.1 6.2a1.5 1.5 0 0 0 1.8 0L21 6" />
          </svg>
          <span class="sr-only">E-mail</span>
        </a>
      </nav>
    </div>
  </footer>
</template>
