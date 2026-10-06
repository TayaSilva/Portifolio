<script setup lang="ts">
import type { Project } from '../../data/portfolio'
defineProps<{ project: Project; demo: string }>()
</script>

<template>
  <li>
    <article class="group relative isolate grid grid-cols-[64px_minmax(0,1.5fr)_minmax(0,1fr)_auto] items-center gap-7 overflow-hidden border-b border-line px-4 py-[34px] transition-[padding] duration-500 before:absolute before:inset-0 before:z-[-1] before:origin-left before:scale-x-0 before:bg-burgundy before:transition-transform before:duration-500 hover:px-[30px] hover:before:scale-x-100 max-[900px]:grid-cols-[40px_minmax(0,1fr)] max-[900px]:gap-x-5 max-[900px]:gap-y-3 max-[700px]:px-0 max-[480px]:gap-x-3 max-[480px]:py-7">
      <span class="font-mono text-xs font-medium text-script transition-colors group-hover:text-cream">{{ project.number }}</span>
      <div>
        <h3 class="font-serif text-[clamp(26px,3.2vw,40px)] font-medium leading-[1.1] tracking-[-.01em] transition-colors group-hover:text-cream">{{ project.title }}</h3>
        <p class="mt-2 max-w-[440px] text-[15px] leading-[1.5] text-muted transition-colors group-hover:text-cream">{{ project.description }}</p>
      </div>
      <ul class="flex flex-wrap gap-2 max-[900px]:col-start-2">
        <li v-for="tag in project.tags" :key="tag" class="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] transition-colors group-hover:border-cream/50 group-hover:text-cream">{{ tag }}</li>
      </ul>
      <div class="flex flex-col items-end gap-2 max-[900px]:col-start-2 max-[900px]:flex-row max-[900px]:items-center max-[900px]:gap-5 max-[480px]:flex-wrap"><span class="font-mono text-xs font-medium uppercase tracking-[.06em] text-accent transition-colors group-hover:text-cream">{{ project.context }}</span><a class="font-mono text-xs uppercase tracking-[.06em] text-ink underline decoration-line underline-offset-4 transition-colors group-hover:text-cream hover:text-cream" :href="project.href" target="_blank" rel="noopener noreferrer">{{ demo }} ↗</a></div>
    </article>
  </li>
</template>
