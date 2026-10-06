<script setup lang="ts">
import ProjectRow from './ProjectRow.vue'
import type { Project } from '../../data/portfolio'

defineProps<{ t: { projects: string; projectsNote: string }; projects: Project[] }>()
</script>

<template>
  <section id="projetos" class="mx-auto w-[min(1180px,calc(100%-72px))] py-[120px] max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:py-20">
    <div class="mb-14 flex items-baseline justify-between gap-6 border-t border-line pt-5 max-[700px]:mb-9 max-[700px]:flex-col max-[700px]:gap-2">
      <p class="font-mono text-xs uppercase tracking-[.24em] text-script">01 — {{ t.projects }}</p>
      <p class="whitespace-pre-line text-right text-[15px] leading-[1.4] text-muted max-[700px]:text-left">{{ t.projectsNote }}</p>
    </div>
    <ol class="border-t border-line">
      <ProjectRow v-for="project in projects" :key="project.number" :project="project" />
    </ol>
  </section>
</template>
