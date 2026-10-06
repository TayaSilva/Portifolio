<script setup lang="ts">
import silvaImg from '../../assets/imagens/silva.png'
import type { Translation } from '../../data/translations'

defineProps<{ t: Translation }>()

defineEmits(['contact'])
</script>

<template>
  <section class="relative mx-auto w-[min(1180px,calc(100%-72px))] py-[88px] pb-6 max-[900px]:py-14 max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:pt-14 max-[480px]:py-10">
    <div>
      <div class="relative z-[1] max-w-[820px] max-[700px]:mx-auto max-[700px]:flex max-[700px]:flex-col max-[700px]:items-center max-[700px]:text-center">
        <p class="font-mono text-xs uppercase tracking-[.24em] text-script">{{ t.hello }}</p>
        <h1 class="relative mt-10 inline-block pb-[.74em] font-serif text-[clamp(88px,15vw,210px)] font-medium leading-[.9] tracking-[-.02em] max-[700px]:mt-7 max-[700px]:text-[clamp(64px,22vw,128px)]" aria-label="Taiane Silva">
          <span aria-hidden="true"><span class="inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">T</span><span class="ml-[-.05em] inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">a</span><span class="inline-block bg-hatch bg-clip-text text-transparent [-webkit-text-stroke:3px_var(--script)] transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">i</span><span class="inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">a</span><span class="inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">n</span><span class="inline-block bg-hatch bg-clip-text text-transparent [-webkit-text-stroke:3px_var(--script)] transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">e</span></span>
          <img class="pointer-events-none absolute left-[34%] top-[.82em] h-auto w-[69%] max-w-none" :src="silvaImg" alt="" aria-hidden="true" />
        </h1>
        <p class="mt-1 font-serif text-[clamp(22px,2.6vw,30px)] font-medium">{{ t.role }}</p>
        <div class="mt-14 flex flex-col items-start gap-8 pb-10 max-[700px]:mt-12 max-[480px]:mt-9">
          <div class="flex flex-wrap gap-3 max-[700px]:justify-center max-[480px]:gap-2">
            <a href="#projetos" class="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-transparent bg-burgundy px-7 text-[15px] font-medium text-cream transition hover:-translate-y-px hover:bg-wine max-[700px]:min-h-11 max-[700px]:px-5 max-[700px]:text-sm">{{ t.viewProjects }} ↓</a>
            <button type="button" class="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-line bg-transparent px-7 text-[15px] font-medium text-ink transition hover:border-rose-script hover:text-accent max-[700px]:min-h-11 max-[700px]:px-5 max-[700px]:text-sm" @click="$emit('contact')">{{ t.talk }}</button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
