<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ t: { fName: string; fEmail: string; fMessage: string; send: string; sending: string; preview: string; sendError: string }; mailto: string; sent?: boolean; isDark: boolean }>()
const emit = defineEmits<{ submit: [] }>()

const form = ref<HTMLFormElement | null>(null)
const isSending = ref(false)
const hasError = ref(false)

const submitForm = async () => {
  if (!form.value || isSending.value) return

  isSending.value = true
  hasError.value = false

  const data = new FormData(form.value)
  data.append('_subject', 'Nova mensagem pelo portfólio')
  data.append('_captcha', 'false')
  data.append('_template', 'table')

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${props.mailto.replace('mailto:', '')}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    })

    if (!response.ok) throw new Error('Form submission failed')

    form.value.reset()
    emit('submit')
  } catch {
    hasError.value = true
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <form ref="form" class="flex flex-col gap-[22px] bg-transparent pt-[60px] max-[900px]:pt-2" @submit.prevent="submitForm">
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
    <button type="submit" :disabled="isSending" :class="['inline-flex min-h-[52px] self-start items-center gap-3 rounded-full border border-transparent px-7 text-[15px] font-medium transition hover:-translate-y-px disabled:cursor-wait disabled:opacity-60 max-[700px]:self-center', isDark ? 'bg-burgundy text-cream hover:bg-wine' : 'bg-cream text-wine hover:bg-white']">{{ isSending ? t.sending : t.send }} ↗</button>
    <p v-if="sent" class="text-sm text-accent" role="status">{{ t.preview }}</p>
    <p v-if="hasError" class="text-sm text-accent" role="alert">{{ t.sendError }}</p>
  </form>
</template>
