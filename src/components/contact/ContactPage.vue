<script setup lang="ts">
import SocialLinks from './SocialLinks.vue'
import ContactForm from './ContactForm.vue'
import tsImg from '../../assets/imagens/ts.png'
import type { Translation } from '../../data/translations'
import type { SocialLink } from '../../data/portfolio'

defineProps<{ t: Translation; isDark: boolean; mailto: string; elsewhere: SocialLink[]; sent?: boolean }>()

defineEmits(['submit'])
</script>

<template>
  <section class="mx-auto w-[min(1180px,calc(100%-72px))] py-20 pb-[120px] max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:py-14 max-[700px]:pb-20">
    <div class="mx-auto max-w-[1000px]">
      <div class="rounded-lg border-[3px] border-dotted border-accent bg-letter-frame bg-[length:9px_9px] p-3.5">
        <div :class="['relative grid grid-cols-[minmax(0,1fr)_1px_minmax(0,1.2fr)] gap-11 rounded bg-paper p-[52px] text-ink max-[900px]:grid-cols-1 max-[900px]:gap-7 max-[900px]:px-[26px] max-[900px]:py-[34px] max-[480px]:gap-6 max-[480px]:px-[18px] max-[480px]:py-6', isDark ? '' : '[--ink:#F8F1EC] [--muted:#E4C9CC] [--paper:#591B2B] [--surface:#7A263A] [--line:rgba(248,241,236,.28)] [--accent:#F2C4CB] [--script:#F2C4CB]']">
          <div class="absolute right-[30px] top-[26px] grid h-[92px] w-[74px] place-items-center border-2 border-dashed border-accent bg-surface p-1.5 rotate-1 max-[900px]:right-5 max-[900px]:top-5 max-[900px]:h-[72px] max-[900px]:w-[58px] max-[480px]:right-4 max-[480px]:top-4 max-[480px]:h-[60px] max-[480px]:w-[50px]" aria-hidden="true">
            <img class="size-full object-contain" :src="tsImg" alt="" />
          </div>

          <svg class="absolute right-[104px] top-[18px] size-[104px] -rotate-14 text-muted opacity-55 max-[900px]:hidden" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="pm" d="M60,60 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0" /></defs>
            <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" stroke-width="1.5" />
            <circle cx="60" cy="60" r="28" fill="none" stroke="currentColor" stroke-width="1" />
            <text font-size="10" letter-spacing="3" fill="currentColor"><textPath href="#pm">TAIANE SILVA · 2026 · TS ·</textPath></text>
          </svg>

          <div>
            <p class="font-mono text-xs uppercase tracking-[.24em] text-script">{{ t.contact }}</p>
            <h2 class="mt-4 font-serif text-[clamp(44px,5vw,68px)] font-medium leading-[.95] tracking-[-.025em] max-[480px]:text-[clamp(38px,13vw,52px)]">{{ t.contactTitle }} <em class="font-serif font-normal italic text-script">{{ t.contactAccent }}</em></h2>
            <a class="mt-8 inline-flex items-center gap-4 overflow-wrap-anywhere border-b border-ink pb-2 font-serif text-[clamp(20px,2.4vw,28px)] font-medium tracking-[-.01em] transition hover:border-rose-script hover:text-accent max-[480px]:mt-6 max-[480px]:text-[18px]" :href="mailto">{{ t.email }} ↗</a>
            <SocialLinks :links="elsewhere" :label="t.elsewhere" />
          </div>

          <div class="bg-line max-[900px]:hidden" aria-hidden="true" />
          <ContactForm :t="t" :sent="sent" :is-dark="isDark" @submit="$emit('submit')" />
        </div>
      </div>
    </div>
  </section>
</template>
