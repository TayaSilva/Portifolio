<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import RevealOnScroll from '../common/RevealOnScroll.vue'
import ResumeSidebar from './ResumeSidebar.vue'
import TimelineList from './TimelineList.vue'
import type { Translation } from '../../data/translations'
import type { TimelineEntry } from '../../data/portfolio'

const props = defineProps<{ t: Translation; skills: string[]; jobs: TimelineEntry[]; schools: TimelineEntry[] }>()

const typedAccent = ref('')
const isDeleting = ref(false)
const fontIndex = ref(0)
const accentFonts = ['font-serif italic', 'font-sans not-italic', 'font-mono not-italic']
let typingTimer: ReturnType<typeof setTimeout> | undefined

const accentFont = computed(() => accentFonts[fontIndex.value])

const clearTypingTimer = () => {
  if (typingTimer) window.clearTimeout(typingTimer)
}

const typeAccent = () => {
  const target = props.t.resumeAccent

  if (!isDeleting.value) {
    typedAccent.value = target.slice(0, typedAccent.value.length + 1)

    if (typedAccent.value === target) {
      isDeleting.value = true
      typingTimer = window.setTimeout(typeAccent, 1800)
      return
    }

    typingTimer = window.setTimeout(typeAccent, 105)
    return
  }

  typedAccent.value = target.slice(0, Math.max(0, typedAccent.value.length - 1))

  if (!typedAccent.value) {
    isDeleting.value = false
    fontIndex.value = (fontIndex.value + 1) % accentFonts.length
    typingTimer = window.setTimeout(typeAccent, 350)
    return
  }

  typingTimer = window.setTimeout(typeAccent, 65)
}

const restartTyping = () => {
  clearTypingTimer()
  typedAccent.value = ''
  isDeleting.value = false
  typeAccent()
}

onMounted(restartTyping)
watch(() => props.t.resumeAccent, restartTyping)
onUnmounted(clearTypingTimer)
</script>

<template>
  <section class="mx-auto w-[min(1180px,calc(100%-72px))] py-20 pb-[120px] max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:py-14 max-[700px]:pb-20">
    <div class="flex flex-wrap items-end justify-between gap-8 pb-14">
      <div>
        <p class="font-mono text-xs uppercase tracking-[.24em] text-script">{{ t.resume }}</p>
        <h2 class="mt-5 font-serif text-[clamp(52px,8vw,112px)] font-medium leading-[.95] tracking-[-.025em]" :aria-label="`${t.resumeTitle} ${t.resumeAccent}`">
          {{ t.resumeTitle }}
          <em :class="['font-normal text-script transition-[font-family] duration-300', accentFont]" aria-hidden="true">
            {{ typedAccent }}<span class="ml-0.5 inline-block font-mono not-italic animate-pulse">|</span>
          </em>
        </h2>
      </div>
    </div>

    <div class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] gap-[8%] border-t border-line pt-12 max-[900px]:grid-cols-1 max-[900px]:gap-16">
      <ResumeSidebar :t="t" :skills="skills" />

      <div class="flex flex-col gap-16">
        <RevealOnScroll>
          <h3 class="mb-5 font-mono text-xs uppercase tracking-[.2em] text-script">{{ t.experience }}</h3>
          <TimelineList :entries="jobs" show-description />
        </RevealOnScroll>
        <RevealOnScroll :delay="120">
          <h3 class="mb-5 font-mono text-xs uppercase tracking-[.2em] text-script">{{ t.education }}</h3>
          <TimelineList :entries="schools" />
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
