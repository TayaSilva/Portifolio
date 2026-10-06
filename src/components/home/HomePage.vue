<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import ProjectsSection from './ProjectsSection.vue'
import ClosingCta from './ClosingCta.vue'
import type { Project } from '../../data/portfolio'
import type { Translation } from '../../data/translations'

defineProps<{ t: Translation; projects: Project[] }>()

defineEmits(['contact'])
</script>

<template>
  <div>
    <HeroSection
      :t="t"
      @contact="$emit('contact')"
    />
    <ProjectsSection :t="t" :projects="projects" />
    <ClosingCta :t="t" @contact="$emit('contact')" />
  </div>
</template>
