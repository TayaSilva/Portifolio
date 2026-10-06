<script setup lang="ts">
import TechOrbit from './TechOrbit.vue'
import silvaImg from '../../assets/imagens/silva.png'
import type { Translation } from '../../data/translations'

interface OrbitTech { name: string; active: boolean; style: string }
interface ActiveTech { name: string; kind: string; desc: string }

defineProps<{ t: Translation; techs: OrbitTech[]; activeTech: ActiveTech; activeTechNumber: string; spokeStyle: string; archStyle: string; logoStyle: string; logoSrc: string }>()

defineEmits(['contact', 'move-tech', 'leave-tech', 'next-tech'])
</script>

<template>
  <section class="relative mx-auto w-[min(1180px,calc(100%-72px))] py-[88px] pb-6 max-[900px]:py-14 max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:pt-14 max-[480px]:py-10">
    <div class="grid grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] items-center gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-14">
      <div class="relative z-[1]">
        <p class="font-mono text-xs uppercase tracking-[.24em] text-script">{{ t.hello }}</p>
        <h1 class="relative mt-10 inline-block pb-[.74em] font-serif text-[clamp(88px,15vw,210px)] font-medium leading-[.9] tracking-[-.02em] max-[700px]:mt-7 max-[700px]:text-[clamp(64px,22vw,128px)]" aria-label="Taiane Silva">
          <span aria-hidden="true"><span class="inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">T</span><span class="ml-[-.05em] inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">a</span><span class="inline-block bg-hatch bg-clip-text text-transparent [-webkit-text-stroke:3px_var(--script)] transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">i</span><span class="inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">a</span><span class="inline-block transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">n</span><span class="inline-block bg-hatch bg-clip-text text-transparent [-webkit-text-stroke:3px_var(--script)] transition-transform duration-300 hover:-translate-y-[.07em] hover:-rotate-4">e</span></span>
          <img class="pointer-events-none absolute left-[34%] top-[.82em] h-auto w-[69%] max-w-none" :src="silvaImg" alt="" aria-hidden="true" />
        </h1>
        <p class="mt-1 font-serif text-[clamp(22px,2.6vw,30px)] font-medium">{{ t.role }}</p>
        <div class="mt-14 flex flex-col items-start gap-8 pb-10 max-[700px]:mt-12 max-[480px]:mt-9">
          <div class="flex flex-wrap gap-3 max-[480px]:gap-2">
            <a href="#projetos" class="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-transparent bg-burgundy px-7 text-[15px] font-medium text-cream transition hover:-translate-y-px hover:bg-wine">{{ t.viewProjects }} ↓</a>
            <button type="button" class="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-line bg-transparent px-7 text-[15px] font-medium text-ink transition hover:border-rose-script hover:text-accent" @click="$emit('contact')">{{ t.talk }}</button>
          </div>
        </div>
      </div>

      <TechOrbit
        :techs="techs"
        :active-tech="activeTech"
        :active-tech-number="activeTechNumber"
        :spoke-style="spokeStyle"
        :arch-style="archStyle"
        :logo-style="logoStyle"
        :logo-src="logoSrc"
        :hint="t.hoverHint"
        @move="$emit('move-tech', $event)"
        @leave="$emit('leave-tech')"
        @next="$emit('next-tech')"
      />
    </div>
  </section>
</template>
