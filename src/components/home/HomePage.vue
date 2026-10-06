<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import ProjectsSection from './ProjectsSection.vue'
import ClosingCta from './ClosingCta.vue'
import type { Project } from '../../data/portfolio'
import type { Translation } from '../../data/translations'

interface OrbitTech { name: string; active: boolean; style: string }
interface ActiveTech { name: string; kind: string; desc: string }

defineProps<{ t: Translation; techs: OrbitTech[]; activeTech: ActiveTech; activeTechNumber: string; spokeStyle: string; archStyle: string; logoStyle: string; logoSrc: string; projects: Project[] }>()

defineEmits(['contact', 'move-tech', 'leave-tech', 'next-tech'])
</script>

<template>
  <div>
    <HeroSection
      :t="t"
      :techs="techs"
      :active-tech="activeTech"
      :active-tech-number="activeTechNumber"
      :spoke-style="spokeStyle"
      :arch-style="archStyle"
      :logo-style="logoStyle"
      :logo-src="logoSrc"
      @contact="$emit('contact')"
      @move-tech="$emit('move-tech', $event)"
      @leave-tech="$emit('leave-tech')"
      @next-tech="$emit('next-tech')"
    />
    <ProjectsSection :t="t" :projects="projects" />
    <ClosingCta :t="t" @contact="$emit('contact')" />
  </div>
</template>
