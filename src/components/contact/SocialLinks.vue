<script setup lang="ts">
interface SocialLink { label: string; value: string; href: string }
defineProps<{ links: SocialLink[]; label: string }>()
</script>

<template>
  <div class="mt-10 border-t border-line" role="group" :aria-label="label">
    <a v-for="link in links" :key="link.label" class="flex min-h-[60px] min-w-0 items-center justify-between gap-4 border-b border-line transition-[padding,color] duration-200 hover:pl-3 hover:text-accent max-[480px]:min-h-[54px]" :href="link.href" target="_blank" rel="noopener noreferrer">
      <span class="font-mono text-xs uppercase tracking-[.08em] text-muted">{{ link.label }}</span>
      <span class="inline-flex min-w-0 items-center gap-2 text-right text-base font-medium max-[480px]:max-w-[68%] max-[480px]:break-all max-[480px]:text-sm">{{ link.value }} ↗</span>
    </a>
  </div>
</template>
