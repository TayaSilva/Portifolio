<script setup lang="ts">
defineProps({
  isDark: { type: Boolean, required: true },
  label: { type: String, required: true }
})

defineEmits(['toggle'])
</script>

<template>
  <button type="button" class="grid size-11 place-items-center rounded-full border border-line bg-transparent transition-colors hover:border-burgundy hover:bg-burgundy hover:text-cream max-[700px]:size-10" :aria-label="label" @click="$emit('toggle')">
    <svg v-if="isDark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  </button>
</template>
