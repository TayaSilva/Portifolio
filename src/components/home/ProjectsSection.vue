<script setup lang="ts">
import ProjectRow from './ProjectRow.vue'
import type { Project } from '../../data/portfolio'

defineProps<{ t: { demo: string; publishedProjects: string }; projects: Project[] }>()
</script>

<template>
  <section id="projetos" class="mx-auto w-[min(1180px,calc(100%-72px))] py-[120px] max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:py-20">
    <p class="mb-5 font-mono text-xs uppercase tracking-[.24em] text-script">{{ t.publishedProjects }}</p>
    <ol class="border-t border-line">
      <ProjectRow v-for="project in projects" :key="project.number" :project="project" :demo="t.demo" />
    </ol>
  </section>
</template>
