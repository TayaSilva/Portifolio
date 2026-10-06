<script setup lang="ts">
import type { Project } from '../../data/portfolio'
defineProps<{ project: Project }>()
</script>

<template>
  <li>
    <article class="group relative isolate grid grid-cols-[64px_minmax(0,1.5fr)_minmax(0,1fr)_auto] items-center gap-7 overflow-hidden border-b border-line px-4 py-[34px] transition-[padding] duration-500 before:absolute before:inset-0 before:z-[-1] before:origin-left before:scale-x-0 before:bg-burgundy before:transition-transform before:duration-500 hover:px-[30px] hover:before:scale-x-100 max-[900px]:grid-cols-[40px_minmax(0,1fr)] max-[900px]:gap-x-5 max-[900px]:gap-y-3 max-[700px]:px-0 max-[480px]:gap-x-3 max-[480px]:py-7">
      <span class="font-mono text-xs font-medium text-script">{{ project.number }}</span>
      <div>
        <h3 class="font-serif text-[clamp(26px,3.2vw,40px)] font-medium leading-[1.1] tracking-[-.01em]">{{ project.title }}</h3>
        <p class="mt-2 max-w-[440px] text-[15px] leading-[1.5] text-muted">{{ project.description }}</p>
      </div>
      <ul class="flex flex-wrap gap-2 max-[900px]:col-start-2">
        <li v-for="tag in project.tags" :key="tag" class="rounded-full border border-line px-3 py-1.5 font-mono text-[11px]">{{ tag }}</li>
      </ul>
      <div class="flex flex-col items-end gap-1 max-[900px]:col-start-2 max-[900px]:flex-row max-[900px]:items-center max-[900px]:gap-5"><span class="font-mono text-xs font-medium uppercase tracking-[.06em] text-accent">{{ project.context }}</span></div>
    </article>
  </li>
</template>
