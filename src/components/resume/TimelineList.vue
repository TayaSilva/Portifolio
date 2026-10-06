<script setup lang="ts">
import RevealOnScroll from '../common/RevealOnScroll.vue'

interface TimelineEntry { period: string; role: string; place: string; description?: string }
defineProps<{ entries: TimelineEntry[]; showDescription?: boolean }>()
</script>

<template>
  <ol>
    <RevealOnScroll v-for="(entry, index) in entries" :key="`${entry.period}-${entry.role}`" as="li" :delay="index * 100" class="grid grid-cols-[150px_minmax(0,1fr)] gap-6 border-t border-line py-7 last:border-b max-[700px]:grid-cols-1 max-[700px]:gap-1">
      <span class="pt-1.5 font-mono text-xs text-muted">{{ entry.period }}</span>
      <div>
        <h4 class="font-serif text-[26px] font-medium leading-[1.2] max-[480px]:text-[23px]">{{ entry.role }}</h4>
        <p class="mt-1 text-sm text-accent">{{ entry.place }}</p>
        <p v-if="showDescription" class="mt-3 max-w-[520px] text-base leading-[1.55] text-muted">{{ entry.description }}</p>
      </div>
    </RevealOnScroll>
  </ol>
</template>
