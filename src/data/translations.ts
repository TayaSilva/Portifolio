export type Language = 'pt' | 'en'

export interface Translation {
  navLabel: string; homeLabel: string; langLabel: string; themeLabel: string
  home: string; resume: string; contact: string; hello: string; role: string; introDiscover: string
  available: string; hoverHint: string; viewProjects: string; talk: string
  code: string; demo: string; publishedProjects: string
  closingTitle: string; closingAccent: string; resumeTitle: string; resumeAccent: string; download: string
  about: string; aboutParagraphs: string[]; skills: string; experience: string; education: string
  contactTitle: string; contactAccent: string; email: string; elsewhere: string
  fName: string; fEmail: string; fMessage: string; send: string; sending: string; preview: string; sendError: string
}

export const translations: Record<Language, Translation> = {
  pt: {
    navLabel: 'Principal', homeLabel: 'Página inicial', langLabel: 'Idioma', themeLabel: 'Alternar tema claro e escuro',
    home: 'Início', resume: 'Currículo', contact: 'Contato', hello: 'Olá, eu sou', role: 'Desenvolvedora Web', introDiscover: 'Clique aqui para descobrir',
    available: 'São Paulo, Brasil', hoverHint: 'Mova o mouse para explorar ↗',
    viewProjects: 'Ver projetos', talk: 'Fale comigo', code: 'Código', demo: 'Ver online', publishedProjects: 'Projetos publicados',
    closingTitle: 'Tem uma ideia', closingAccent: 'em mente?', resumeTitle: 'Minha', resumeAccent: 'trajetória.', download: 'Baixar PDF',
    about: 'Sobre', aboutParagraphs: ['Desenvolvedora Front End com formação em Análise e Desenvolvimento de Sistemas, pós-graduação em Desenvolvimento Full Stack e MBA em andamento em UX Design, Arquitetura da Informação e Usabilidade.', 'Trabalho com React, Next.js, React Native, TypeScript e Tailwind na criação de interfaces web e mobile. Tenho ampliado meus conhecimentos em UX/UI para aproximar cada vez mais desenvolvimento e design, buscando criar experiências digitais intuitivas, acessíveis e centradas no usuário.', 'Meu objetivo é crescer como Desenvolvedora Front End, combinando código, design e experiência do usuário para transformar ideias em produtos digitais de qualidade.'],
    skills: 'Habilidades', experience: 'Experiência', education: 'Formação',
    contactTitle: 'Vamos', contactAccent: 'conversar?', email: 'taianens99@gmail.com', elsewhere: 'Em outros lugares', fName: 'Nome', fEmail: 'E-mail', fMessage: 'Mensagem', send: 'Enviar mensagem', sending: 'Enviando...', preview: 'Mensagem enviada com sucesso. Obrigada pelo contato!', sendError: 'Não foi possível enviar agora. Tente novamente em instantes.'
  },
  en: {
    navLabel: 'Main', homeLabel: 'Homepage', langLabel: 'Language', themeLabel: 'Toggle light and dark theme',
    home: 'Home', resume: 'Résumé', contact: 'Contact', hello: "Hi, I'm", role: 'Web Developer', introDiscover: 'Click here to discover', available: 'São Paulo, Brazil', hoverHint: 'Move your mouse to explore ↗',
    viewProjects: 'View projects', talk: 'Get in touch', code: 'Code', demo: 'Live demo', publishedProjects: 'Published projects', closingTitle: 'Have an idea', closingAccent: 'in mind?', resumeTitle: 'My', resumeAccent: 'journey.', download: 'Download PDF',
    about: 'About', aboutParagraphs: ['Front End Developer with a degree in Systems Analysis and Development, a postgraduate degree in Full Stack Development, and an MBA in progress in UX Design, Information Architecture, and Usability.', 'I work with React, Next.js, React Native, TypeScript, and Tailwind to create web and mobile interfaces. I have been expanding my UX/UI knowledge to bring development and design closer together, creating intuitive, accessible, and user-centered digital experiences.', 'My goal is to grow as a Front End Developer, combining code, design, and user experience to turn ideas into quality digital products.'],
    skills: 'Skills', experience: 'Experience', education: 'Education', contactTitle: "Let's", contactAccent: 'talk?', email: 'taianens99@gmail.com', elsewhere: 'Elsewhere', fName: 'Name', fEmail: 'Email', fMessage: 'Message', send: 'Send message', sending: 'Sending...', preview: 'Message sent successfully. Thank you for reaching out!', sendError: 'We could not send it now. Please try again in a moment.'
  }
}
