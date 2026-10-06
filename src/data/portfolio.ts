export interface Project { number: string; context: string; title: string; description: string; tags: string[] }
export interface TimelineEntry { period: string; role: string; place: string; description?: string }
export interface SocialLink { label: string; value: string; href: string }
export interface Tech { name: string; kind: string; desc: string }

export const techData: Tech[] = [
  { name: 'React', kind: 'Biblioteca', desc: 'Interfaces web com componentes, usadas no dia a dia na Pathbit.' }, { name: 'Next.js', kind: 'Framework', desc: 'Projeto atual: integração com backend e consumo de APIs.' }, { name: 'Vue', kind: 'Framework', desc: 'Este portfólio é feito com Vue 3 e Vite.' }, { name: 'TypeScript', kind: 'Linguagem', desc: 'Tipagem para código mais seguro e fácil de manter.' }, { name: 'Tailwind CSS', kind: 'Estilização', desc: 'Estilos rápidos e consistentes, do protótipo ao projeto final.' }, { name: 'React Native', kind: 'Mobile', desc: 'Apps mobile testados com Expo Go e emulador Android.' }, { name: 'Gluestack', kind: 'Componentes UI', desc: 'Design system para web e mobile nos projetos da Pathbit.' }, { name: 'Vite', kind: 'Ferramenta de build', desc: 'Ambiente de desenvolvimento rápido e builds enxutos.' }
]

export const projectData: Project[] = [
  { number: '01', context: 'Pathbit', title: 'App web com React e Gluestack', description: 'Desenvolvimento de interface com React e Gluestack, com versionamento em Git e GitHub.', tags: ['React', 'Gluestack', 'Git / GitHub'] }, { number: '02', context: 'Pathbit', title: 'App mobile com React Native', description: 'Aplicativos mobile com React Native, Expo Go e Gluestack, testados em emulador no Android Studio.', tags: ['React Native', 'Expo Go', 'Gluestack'] }, { number: '03', context: 'Pathbit', title: 'Next.js e Tailwind', description: 'Projeto atual: boas práticas com ESLint, integração com backend e consumo de APIs testado no Insomnia.', tags: ['Next.js', 'Tailwind CSS', 'ESLint'] }
]

export const skills = ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS', 'React Native', 'Gluestack', 'Vite']
export const jobs: TimelineEntry[] = [
  { period: 'Jul 2024 — Atual', role: 'Desenvolvedora Trainee', place: 'Pathbit · São Paulo', description: 'Desenvolvimento com React, Next.js, React Native, Gluestack e Tailwind. Integração com APIs e backend, versionamento com Git, GitHub e GitLab, e trabalho em time ágil com Figma e Miro.' }, { period: 'Mar 2022 — Jul 2024', role: 'Analista de suporte de TI', place: 'UOL · São Paulo', description: 'Suporte a ferramentas corporativas (proxy e VPN), gestão de chamados com SLA no Jira, administração de usuários no AD e suporte remoto em Linux, macOS e Windows.' }, { period: 'Ago 2021 — Mar 2022', role: 'Analista de suporte de TI', place: 'Stefanini Brasil · São Paulo', description: 'Atendimento a usuários internos, instalação de software, correção de erros de VPN e gestão de chamados via Jira, Teams e e-mail.' }
]
export const schools: TimelineEntry[] = [
  { period: 'Abr — Dez 2026', role: 'MBA em UX Design, Arquitetura da Informação e Usabilidade', place: 'Instituto Infnet' }, { period: 'Fev 2025 — Set 2025', role: 'Pós-graduação Lato Sensu - Especialização, Desenvolvimento FullStack', place: 'Faculdade Líbano' }, { period: 'Fev 2022 — Jul 2024', role: 'Análise e Desenvolvimento de Sistemas', place: 'FAM' }, { period: 'Fev 2019 — Jul 2020', role: 'Técnico em Administração', place: 'ETEC · Escola Técnica Estadual de São Paulo' }
]
export const socialLinks: SocialLink[] = [{ label: 'GitHub', value: 'github.com/TayaSilva', href: 'https://github.com/TayaSilva' }, { label: 'LinkedIn', value: 'linkedin.com/in/taianesilva99', href: 'https://www.linkedin.com/in/taianesilva99/' }]
