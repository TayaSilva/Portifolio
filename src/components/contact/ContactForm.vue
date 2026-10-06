<script setup lang="ts">
defineProps<{ t: { fName: string; fEmail: string; fMessage: string; send: string; preview: string }; sent?: boolean; isDark: boolean }>()

defineEmits(['submit'])
</script>

<template>
  <form class="flex flex-col gap-[22px] bg-transparent pt-[60px] max-[900px]:pt-2" @submit.prevent="$emit('submit')">
    <div class="flex flex-col gap-2">
      <label class="font-mono text-xs uppercase tracking-[.08em] text-muted" for="f-name">{{ t.fName }}</label>
      <input class="w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2 text-[17px] text-ink outline-none focus:border-rose-script" id="f-name" type="text" name="name" autocomplete="name" required />
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-mono text-xs uppercase tracking-[.08em] text-muted" for="f-email">{{ t.fEmail }}</label>
      <input class="w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-2 text-[17px] text-ink outline-none focus:border-rose-script" id="f-email" type="email" name="email" autocomplete="email" required />
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-mono text-xs uppercase tracking-[.08em] text-muted" for="f-message">{{ t.fMessage }}</label>
      <textarea class="min-h-[120px] w-full resize-y rounded-none border-0 border-b border-line bg-transparent px-0 py-2 text-[17px] text-ink outline-none focus:border-rose-script" id="f-message" name="message" rows="5" required />
    </div>
    <button type="submit" :class="['inline-flex min-h-[52px] self-start items-center gap-3 rounded-full border border-transparent px-7 text-[15px] font-medium transition hover:-translate-y-px', isDark ? 'bg-burgundy text-cream hover:bg-wine' : 'bg-cream text-wine hover:bg-white']">{{ t.send }} ↗</button>
    <p v-if="sent" class="text-sm text-accent" role="status">{{ t.preview }}</p>
  </form>
</template>
