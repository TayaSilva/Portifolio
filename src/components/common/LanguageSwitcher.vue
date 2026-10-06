<script setup lang="ts">
defineProps({
  langClass: { type: String, required: true },
  ptClass: { type: String, default: '' },
  enClass: { type: String, default: '' },
  label: { type: String, required: true }
})

defineEmits(['pt', 'en'])
</script>

<template>
  <div :class="['relative flex rounded-full border border-line p-[3px]', langClass]" role="group" :aria-label="label">
    <span class="absolute inset-y-[3px] left-[3px] z-0 w-[calc(50%-3px)] rounded-full bg-burgundy transition-transform duration-300 ease-out" :class="enClass ? 'translate-x-full' : ''" aria-hidden="true" />
    <button type="button" :class="['relative z-10 min-h-9 min-w-11 rounded-full border-0 bg-transparent px-2 font-mono text-xs text-muted transition-colors hover:text-ink', ptClass ? 'text-white' : '']" aria-label="Português" @click="$emit('pt')">PT</button>
    <button type="button" :class="['relative z-10 min-h-9 min-w-11 rounded-full border-0 bg-transparent px-2 font-mono text-xs text-muted transition-colors hover:text-ink', enClass ? 'text-white' : '']" aria-label="English" @click="$emit('en')">EN</button>
  </div>
</template>
