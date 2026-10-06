<script setup lang="ts">
interface OrbitTech { name: string; active: boolean; style: string; className?: string }
interface ActiveTech { name: string; kind: string; desc: string }
defineProps<{ techs: OrbitTech[]; activeTech: ActiveTech; activeTechNumber: string; spokeStyle: string; archStyle: string; logoStyle: string; logoSrc: string; hint: string }>()

defineEmits(['move', 'leave', 'next'])
</script>

<template>
  <div class="relative my-6 w-full max-w-[320px] translate-y-[160px] cursor-crosshair justify-self-center [perspective:900px] before:pointer-events-none before:absolute before:-inset-[35%] before:z-0 before:bg-orbit-glow max-[900px]:w-[min(82vw,300px)] max-[900px]:max-w-[300px] max-[900px]:translate-y-0 max-[480px]:my-2" aria-hidden="true" @mousemove="$emit('move', $event)" @mouseleave="$emit('leave')" @click="$emit('next')">
    <div class="absolute inset-0 z-[1] translate-x-[18px] translate-y-[18px] rounded-[999px_999px_28px_28px] border border-line" />
    <div class="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-0 w-0 after:absolute after:left-0 after:top-[-1px] after:h-0.5 after:w-[240px] after:origin-left after:rotate-[var(--a)] after:bg-spoke after:opacity-60" :style="spokeStyle" />
    <div class="relative z-[2] grid aspect-[4/5] place-items-center overflow-hidden rounded-[999px_999px_28px_28px] bg-arch transition-transform duration-200 after:absolute after:inset-0 after:bg-arch-glow" :style="archStyle"><img class="relative z-[1] w-[74%] transition-transform duration-200" :src="logoSrc" alt="" :style="logoStyle" /></div>
    <span v-for="tech in techs" :key="tech.name" :class="['absolute z-[5] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3.5 py-2 font-mono text-xs text-muted transition duration-200', tech.active ? 'scale-[1.18] border-accent bg-accent text-white' : 'border-line bg-paper']" :style="tech.style">{{ tech.name }}</span>
    <div class="absolute bottom-[-4%] left-[-22%] z-[4] w-[min(280px,78%)] rounded-2xl border border-line bg-surface p-4 px-[18px] shadow-[0_18px_40px_rgba(0,0,0,.25)] max-[900px]:left-[-4%] max-[480px]:p-3 max-[480px]:px-3.5">
      <div class="flex justify-between font-mono text-[10px] uppercase tracking-[.08em] text-muted"><span>{{ activeTechNumber }}</span><span>{{ activeTech.kind }}</span></div>
      <h3 class="my-2 font-serif text-[28px] leading-none text-ink">{{ activeTech.name }}</h3>
      <p class="mt-2.5 font-mono text-[10px] font-medium tracking-[.06em] text-accent">{{ hint }}</p>
    </div>
  </div>
</template>
