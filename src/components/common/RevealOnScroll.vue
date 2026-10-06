<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

withDefaults(defineProps<{ delay?: number; as?: string }>(), {
  delay: 0,
  as: 'div',
})

const element = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!element.value) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return

      isVisible.value = true
      observer?.unobserve(entry.target)
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )

  observer.observe(element.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <component
    :is="as"
    ref="element"
    :class="[
      'transition-all duration-700 ease-out motion-reduce:transition-none',
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
    ]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </component>
</template>
