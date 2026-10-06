<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineProps<{ role: string; discover: string }>()

const isVisible = ref(true)
const isReady = ref(false)
const isOpening = ref(false)
const prefersReducedMotion = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | undefined
let readyFrame: number | undefined

const openIntro = () => {
  if (isOpening.value) return

  isOpening.value = true
  closeTimer = window.setTimeout(() => {
    isVisible.value = false
  }, prefersReducedMotion.value ? 0 : 900)
}

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  readyFrame = window.requestAnimationFrame(() => {
    isReady.value = true
  })
})

onUnmounted(() => {
  if (closeTimer) window.clearTimeout(closeTimer)
  if (readyFrame) window.cancelAnimationFrame(readyFrame)
})
</script>

<template>
  <div v-if="isVisible" class="fixed inset-0 z-[100] overflow-hidden bg-transparent" role="dialog" aria-modal="true" aria-label="Introdução">
    <div
      :class="[
        'absolute inset-x-0 top-0 h-1/2 origin-bottom bg-wine transition-transform duration-[800ms] ease-[cubic-bezier(.76,0,.24,1)] motion-reduce:transition-none',
        isOpening ? '-translate-y-full scale-y-[1.04]' : 'translate-y-0 scale-y-100',
      ]"
    />
    <div
      :class="[
        'absolute inset-x-0 bottom-0 h-1/2 origin-top bg-wine transition-transform duration-[800ms] ease-[cubic-bezier(.76,0,.24,1)] motion-reduce:transition-none',
        isOpening ? 'translate-y-full scale-y-[1.04]' : 'translate-y-0 scale-y-100',
      ]"
    />

    <div
      :class="[
        'pointer-events-none absolute left-1/2 top-1/2 z-[1] size-[min(70vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose/10 blur-[100px] transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
        isOpening ? 'scale-150 opacity-0' : 'scale-100 opacity-100',
      ]"
    />
    <div
      :class="[
        'pointer-events-none absolute inset-x-0 top-1/2 z-[2] h-px origin-center bg-rose/30 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none',
        isOpening ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
      ]"
    />

    <div class="relative z-10 flex min-h-full items-center justify-center px-6 text-center max-[480px]:px-4">
      <div :class="['flex max-w-full flex-col items-center transition-[opacity,transform,filter] duration-600 ease-out motion-reduce:transition-none', isOpening ? 'scale-105 opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0']">
        <div class="font-serif text-[clamp(58px,12vw,148px)] font-medium leading-[.86] tracking-[-.045em] max-[480px]:flex max-[480px]:flex-col">
          <span :class="['text-cream transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none', isReady ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm']" :style="{ transitionDelay: '0ms' }">Taiane</span>
          <span :class="['font-normal italic text-rose transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none max-[480px]:mt-3', isReady ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm']" :style="{ transitionDelay: '200ms' }">Silva</span>
        </div>

        <p :class="['mt-10 font-mono text-xs uppercase tracking-[.3em] text-cream transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none max-[480px]:mt-8 max-[480px]:tracking-[.2em]', isReady ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm']" :style="{ transitionDelay: '400ms' }">
          {{ role }}
        </p>

        <button
          type="button"
          :class="['group mt-10 inline-flex items-center gap-3 border-0 bg-transparent font-mono text-xs tracking-[.12em] text-cream transition-[opacity,transform,filter,color] duration-700 ease-out hover:text-rose focus-visible:text-rose motion-reduce:transition-none max-[480px]:mt-8 max-[480px]:text-[11px] max-[480px]:tracking-[.06em]', isReady ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-8 opacity-0 blur-sm', isOpening ? 'scale-105 opacity-0' : 'scale-100']"
          :style="{ transitionDelay: isOpening ? '0ms' : '600ms' }"
          @click="openIntro"
        >
          <span class="relative inline-flex size-3 items-center justify-center" aria-hidden="true">
            <span class="absolute size-3 animate-ping rounded-full bg-rose/70 motion-reduce:animate-none" />
            <span class="relative size-2 rounded-full bg-rose transition-transform duration-300 group-hover:scale-125" />
          </span>
          {{ discover }}
        </button>
      </div>
    </div>
  </div>
</template>
