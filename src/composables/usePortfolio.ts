import { computed, reactive } from 'vue'
import tsImg from '../assets/imagens/ts.png'
import { translations, type Language } from '../data/translations'
import { jobs, projectData, schools, skills, socialLinks, techData, type Project, type Tech, type TimelineEntry } from '../data/portfolio'

type View = 'home' | 'resume' | 'contact'
type Transition = 'idle' | 'in' | 'out'

interface PortfolioState { theme: 'dark' | 'light'; lang: Language; view: View; transition: Transition; sent: boolean; tech: number; tilt: { x: number; y: number } }

export function usePortfolio() {
  const state = reactive<PortfolioState>({ theme: 'dark', lang: 'pt', view: 'home', transition: 'idle', sent: false, tech: 0, tilt: { x: 0, y: 0 } })
  const t = computed(() => translations[state.lang])
  const isDark = computed(() => state.theme === 'dark')
  const techCount = techData.length
  const activeTechIndex = computed(() => Math.min(techCount - 1, Math.max(0, state.tech)))

  const localizedTechData = computed<Tech[]>(() => {
    if (state.lang === 'pt') return techData
    const copy: Record<string, [string, string]> = {
      React: ['Library', 'Component-based web interfaces, used daily at Pathbit.'], 'Next.js': ['Framework', 'Current project: backend integration and API consumption.'], Vue: ['Framework', 'This portfolio is built with Vue 3 and Vite.'], TypeScript: ['Language', 'Typing for safer, more maintainable code.'], 'Tailwind CSS': ['Styling', 'Fast, consistent styling from prototype to final project.'], 'React Native': ['Mobile', 'Mobile apps tested with Expo Go and an Android emulator.'], Gluestack: ['UI components', 'UI system for web and mobile in Pathbit projects.'], Vite: ['Build tool', 'Fast dev environment and lean builds.']
    }
    return techData.map((tech) => ({ name: tech.name, kind: copy[tech.name][0], desc: copy[tech.name][1] }))
  })

  const navigate = (view: View) => {
    if (view === state.view || state.transition !== 'idle') return
    state.transition = 'in'; state.sent = false
    window.setTimeout(() => { state.view = view; state.transition = 'out'; window.scrollTo(0, 0) }, 600)
    window.setTimeout(() => { state.transition = 'idle' }, 1300)
  }

  const moveAcrossTechStage = (event: globalThis.MouseEvent) => {
    const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const dx = (event.clientX - bounds.left) / bounds.width - 0.5
    const dy = (event.clientY - bounds.top) / bounds.height - 0.5
    let activeTech = state.tech
    if (Math.hypot(dx, dy) > 0.12) {
      let degrees = Math.atan2(dy, dx) * 180 / Math.PI + 90
      degrees = (degrees + 360 + (360 / techCount) / 2) % 360
      activeTech = Math.floor(degrees / (360 / techCount)) % techCount
    }
    state.tech = activeTech; state.tilt = { x: +(dx * 2).toFixed(2), y: +(dy * 2).toFixed(2) }
  }

  const angleForTech = (index: number) => -90 + (360 / techCount) * index
  const techs = computed(() => localizedTechData.value.map((tech, index) => {
    const angle = angleForTech(index) * Math.PI / 180
    return { name: tech.name, active: index === activeTechIndex.value, style: `left:${(50 + 62 * Math.cos(angle)).toFixed(1)}%;top:${(50 + 54 * Math.sin(angle)).toFixed(1)}%` }
  }))

  const translateProject = (project: Project): Project => {
    if (state.lang === 'pt') return project
    const titles: Record<string, string> = { 'App web com React e Gluestack': 'Web app with React and Gluestack', 'App mobile com React Native': 'Mobile app with React Native', 'Next.js e Tailwind': 'Next.js and Tailwind', 'We School': 'We School', 'RE Pathbit': 'RE Pathbit', 'Kate Nascimento': 'Kate Nascimento' }
    const descriptions: Record<string, string> = { 'Desenvolvimento de interface com React e Gluestack, com versionamento em Git e GitHub.': 'Interface development with React and Gluestack, versioned with Git and GitHub.', 'Aplicativos mobile com React Native, Expo Go e Gluestack, testados em emulador no Android Studio.': 'Mobile apps with React Native, Expo Go and Gluestack, tested on an Android Studio emulator.', 'Projeto atual: boas práticas com ESLint, integração com backend e consumo de APIs testado no Insomnia.': 'Current project: ESLint best practices, backend integration and API consumption tested with Insomnia.', 'Projeto web publicado com foco em interface, organização de conteúdo e experiência do usuário.': 'Published web project focused on interface, content organization, and user experience.', 'Projeto web publicado para a Pathbit, com interface responsiva e navegação orientada ao produto.': 'Published web project for Pathbit, with a responsive interface and product-focused navigation.', 'Projeto web publicado com identidade visual e apresentação de conteúdo profissional.': 'Published web project with visual identity and professional content presentation.' }
    const contexts: Record<string, string> = { 'Pathbit': 'Pathbit', 'Projeto publicado': 'Published project' }
    return { ...project, context: contexts[project.context] || project.context, title: titles[project.title] || project.title, description: descriptions[project.description] || project.description }
  }

  const translateEntry = (entry: TimelineEntry): TimelineEntry => {
    if (state.lang === 'pt') return entry
    const values: Record<string, string> = { 'Jul 2024 — Atual': 'Jul 2024 — Present', 'Abr — Dez 2026': 'Apr — Dec 2026', 'Fev 2025 — Set 2025': 'Feb 2025 — Sep 2025', 'Fev 2022 — Jul 2024': 'Feb 2022 — Jul 2024', 'Fev 2019 — Jul 2020': 'Feb 2019 — Jul 2020', 'Desenvolvedora Trainee': 'Trainee Developer', 'MBA em UX Design, Arquitetura da Informação e Usabilidade': 'MBA in UX Design, Information Architecture and Usability', 'Pós-graduação Lato Sensu - Especialização, Desenvolvimento FullStack': 'Postgraduate Lato Sensu - Specialization, Full Stack Development', 'Análise e Desenvolvimento de Sistemas': 'Systems Analysis and Development', 'Técnico em Administração': 'Technical degree in Administration', 'Analista de suporte de TI': 'IT Support Analyst', 'Desenvolvimento com React, Next.js, React Native, Gluestack e Tailwind. Integração com APIs e backend, versionamento com Git, GitHub e GitLab, e trabalho em time ágil com Figma e Miro.': 'Development with React, Next.js, React Native, Gluestack and Tailwind. API and backend integration, version control with Git, GitHub and GitLab, and agile teamwork via Figma and Miro.', 'Suporte a ferramentas corporativas (proxy e VPN), gestão de chamados com SLA no Jira, administração de usuários no AD e suporte remoto em Linux, macOS e Windows.': 'Support for corporate tools (proxy and VPN), ticket management with SLAs in Jira, user administration in AD and remote support on Linux, macOS and Windows.', 'Atendimento a usuários internos, instalação de software, correção de erros de VPN e gestão de chamados via Jira, Teams e e-mail.': 'Internal user support, software installation, VPN error fixes and ticket handling via Jira, Teams and email.' }
    return Object.fromEntries(Object.entries(entry).map(([key, value]) => [key, values[value] || value])) as TimelineEntry
  }

  const viewModel = computed(() => ({
    t: t.value, view: state.view,
    rootClass: isDark.value ? state.view === 'resume' ? 'bg-night-deep text-cream [--ink:#F8F1EC] [--muted:#E4C9CC] [--paper:#2A0F15] [--surface:rgba(18,9,11,.5)] [--line:rgba(248,241,236,.25)] [--accent:#F2C4CB] [--script:#F2C4CB]' : state.view === 'contact' ? 'bg-night-deep text-cream [--ink:#F8F1EC] [--muted:#E4C9CC] [--paper:#591B2B] [--surface:#211013] [--line:rgba(248,241,236,.3)] [--accent:#F2C4CB] [--script:#F2C4CB]' : 'bg-night text-cream [--ink:#F8F1EC] [--muted:#CDB3B3] [--paper:#12090B] [--surface:#211013] [--line:rgba(228,166,175,.22)] [--accent:#E4A6AF] [--script:#C76B7C]' : state.view === 'resume' ? 'bg-surface-light text-ink-dark [--ink:#241316] [--muted:#5E4348] [--paper:#F1E1DC] [--surface:#E9CFC9] [--line:rgba(122,38,58,.28)] [--accent:#7A263A] [--script:#7A263A]' : state.view === 'contact' ? 'bg-page-light text-ink-dark [--ink:#241316] [--muted:#3E262B] [--paper:#D9909C] [--surface:#E9B6BE] [--line:rgba(36,19,22,.3)] [--accent:#591B2B] [--script:#591B2B]' : 'bg-cream text-ink-dark [--ink:#241316] [--muted:#5E4348] [--paper:#F8F1EC] [--surface:#F1E1DC] [--line:rgba(122,38,58,.22)] [--accent:#7A263A] [--script:#7A263A]',
    curtainClass: `fixed inset-0 z-[70] grid place-items-center bg-burgundy transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] ${state.transition === 'in' ? 'translate-y-0' : 'translate-y-full'}${state.transition === 'out' ? ' -translate-y-full' : ''}`,
    curtainLineClass: state.transition === 'in' ? 'h-0.5 w-[72px] origin-left scale-x-100 bg-cream transition-transform duration-500 delay-100' : 'h-0.5 w-[72px] origin-left scale-x-0 bg-cream transition-transform duration-500 delay-100',
    isDark: isDark.value, tabs: (['home', 'resume', 'contact'] as View[]).map((id) => ({ id, label: t.value[id], current: state.view === id ? 'page' : 'false' })), langClass: state.lang === 'en' ? 'translate-x-0' : '', ptClass: state.lang === 'pt' ? 'active' : '', enClass: state.lang === 'en' ? 'active' : '', techs: techs.value, activeTech: localizedTechData.value[activeTechIndex.value], activeTechNumber: `0${activeTechIndex.value + 1}`, spokeStyle: `--a:${angleForTech(activeTechIndex.value)}deg`, archStyle: `transform:rotateY(${(state.tilt.x * 10).toFixed(1)}deg) rotateX(${(-state.tilt.y * 10).toFixed(1)}deg)`, logoStyle: `transform:translate(${(state.tilt.x * -14).toFixed(1)}px,${(state.tilt.y * -14).toFixed(1)}px)`, projects: projectData.map(translateProject), skills, jobs: jobs.map(translateEntry), schools: schools.map(translateEntry), elsewhere: socialLinks, mailto: `mailto:${t.value.email}`, sent: state.sent
  }))

  return { viewModel, tsImg, actions: { go: navigate, goHome: () => navigate('home'), goContact: () => navigate('contact'), setPt: () => { state.lang = 'pt' }, setEn: () => { state.lang = 'en' }, toggleTheme: () => { state.theme = isDark.value ? 'light' : 'dark' }, send: () => { state.sent = true }, moveAcrossTechStage, resetTechStage: () => { state.tilt = { x: 0, y: 0 } }, nextTech: () => { state.tech = (activeTechIndex.value + 1) % techCount } } }
}
