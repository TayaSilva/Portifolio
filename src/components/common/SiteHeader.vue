<script setup lang="ts">
import BrandLogo from './BrandLogo.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

interface Tab { id: string; label: string; current: string }
interface HeaderCopy { homeLabel: string; navLabel: string; langLabel: string; themeLabel: string }
defineProps<{ tabs: Tab[]; t: HeaderCopy; isDark: boolean; langClass: string; ptClass?: string; enClass?: string }>()

defineEmits(['navigate', 'home', 'pt', 'en', 'toggle-theme'])
</script>

<template>
  <header class="relative z-10 border-b border-line">
    <div class="mx-auto grid min-h-[84px] w-[min(1180px,calc(100%-72px))] grid-cols-[1fr_auto_1fr] items-center gap-6 max-[700px]:min-h-[70px] max-[700px]:w-[min(calc(100%-40px),1180px)] max-[700px]:grid-cols-[1fr_auto] max-[700px]:grid-rows-[70px_44px]">
      <BrandLogo :is-dark="isDark" :label="t.homeLabel" @home="$emit('home')" />

      <nav class="flex gap-10 max-[700px]:col-span-2 max-[700px]:row-start-2 max-[700px]:justify-between max-[700px]:gap-3" :aria-label="t.navLabel">
        <template v-for="(tab, index) in tabs" :key="tab.id">
        <span v-if="index > 0" class="self-center font-mono text-xs text-muted opacity-60 max-[700px]:hidden">/</span>
        <button
          type="button"
          class="relative min-h-11 border-0 bg-transparent px-0.5 font-mono text-xs uppercase tracking-[.08em] text-muted transition-colors hover:text-ink after:absolute after:bottom-2 after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-script after:transition-transform after:duration-300 max-[700px]:flex-1 max-[700px]:text-center"
          :class="tab.current === 'page' ? 'text-ink after:scale-x-100' : ''"
          :aria-current="tab.current === 'page' ? 'page' : undefined"
          @click="$emit('navigate', tab.id)"
        >
          {{ tab.label }}
        </button>
        </template>
      </nav>

      <div class="flex items-center justify-end gap-3 max-[700px]:gap-2">
        <LanguageSwitcher
          :lang-class="langClass"
          :pt-class="ptClass"
          :en-class="enClass"
          :label="t.langLabel"
          @pt="$emit('pt')"
          @en="$emit('en')"
        />
        <ThemeToggle :is-dark="isDark" :label="t.themeLabel" @toggle="$emit('toggle-theme')" />
      </div>
    </div>
  </header>
</template>
