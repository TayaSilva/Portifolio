<script setup lang="ts">
import RevealOnScroll from '../common/RevealOnScroll.vue'

defineProps<{ t: { about: string; aboutParagraphs: string[]; skills: string }; skills: string[] }>()
</script>

<template>
  <aside class="flex flex-col gap-12 self-start">
    <RevealOnScroll>
      <h3 class="mb-5 font-mono text-xs uppercase tracking-[.2em] text-script">{{ t.about }}</h3>
      <p v-for="paragraph in t.aboutParagraphs" :key="paragraph" class="font-normal text-[17px] leading-[1.6] text-muted [&+p]:mt-3.5 max-[480px]:text-base">{{ paragraph }}</p>
    </RevealOnScroll>
    <RevealOnScroll :delay="120">
      <h3 class="mb-5 font-mono text-xs uppercase tracking-[.2em] text-script">{{ t.skills }}</h3>
      <ul class="flex flex-wrap gap-2">
        <li v-for="skill in skills" :key="skill" class="rounded-full border border-line px-3 py-1.5 font-mono text-[11px]">{{ skill }}</li>
      </ul>
    </RevealOnScroll>
  </aside>
</template>
