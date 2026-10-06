<script setup lang="ts">
import ContactPage from './components/contact/ContactPage.vue'
import HomePage from './components/home/HomePage.vue'
import IntroScreen from './components/common/IntroScreen.vue'
import NoiseOverlay from './components/common/NoiseOverlay.vue'
import SiteFooter from './components/common/SiteFooter.vue'
import SiteHeader from './components/common/SiteHeader.vue'
import ResumePage from './components/resume/ResumePage.vue'
import TransitionCurtain from './components/common/TransitionCurtain.vue'
import { usePortfolio } from './composables/usePortfolio'

const { viewModel: v, actions } = usePortfolio()
</script>

<template>
  <div :class="['min-h-screen flex flex-col overflow-x-hidden font-sans antialiased transition-colors duration-700', v.rootClass]">
    <NoiseOverlay />
    <TransitionCurtain :class-name="v.curtainClass" :line-class="v.curtainLineClass" />
    <IntroScreen :role="v.t.role" :discover="v.t.introDiscover" />

    <SiteHeader
      :tabs="v.tabs"
      :t="v.t"
      :is-dark="v.isDark"
      :lang-class="v.langClass"
      :pt-class="v.ptClass"
      :en-class="v.enClass"
      @navigate="actions.go"
      @home="actions.goHome"
      @pt="actions.setPt"
      @en="actions.setEn"
      @toggle-theme="actions.toggleTheme"
    />

    <main>
      <HomePage
        v-if="v.view === 'home'"
        :t="v.t"
        :projects="v.projects"
        @contact="actions.goContact"
      />

      <ResumePage
        v-else-if="v.view === 'resume'"
        :t="v.t"
        :skills="v.skills"
        :jobs="v.jobs"
        :schools="v.schools"
      />

      <ContactPage
        v-else-if="v.view === 'contact'"
        :t="v.t"
        :is-dark="v.isDark"
        :mailto="v.mailto"
        :elsewhere="v.elsewhere"
        :sent="v.sent"
        @submit="actions.send"
      />
    </main>

    <SiteFooter
      :mailto="v.mailto"
      :linkedin="v.elsewhere.find((link) => link.label === 'LinkedIn')?.href ?? '#'"
      whatsapp="https://wa.me/5511939529261"
    />
  </div>
</template>
