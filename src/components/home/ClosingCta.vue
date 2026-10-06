<script setup lang="ts">
import type { Translation } from '../../data/translations'
defineProps<{ t: Translation }>()

defineEmits(['contact'])
</script>

<template>
  <section class="mx-auto w-[min(1180px,calc(100%-72px))] py-10 pb-[120px] text-center max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:pb-20">
    <p class="font-mono text-xs uppercase tracking-[.24em] text-script">02 — {{ t.contact }}</p>
    <h2 class="my-5 mb-10 font-serif text-[clamp(40px,6vw,84px)] font-medium leading-none tracking-[-.02em]">{{ t.closingTitle }} <em class="font-serif font-normal italic text-script">{{ t.closingAccent }}</em></h2>
    <button type="button" class="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-transparent bg-burgundy px-7 text-[15px] font-medium text-cream transition hover:-translate-y-px hover:bg-wine" @click="$emit('contact')">{{ t.talk }} ↗</button>
  </section>
</template>
