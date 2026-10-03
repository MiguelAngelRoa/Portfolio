export type Language = 'en' | 'es';

export interface Segment {
  text: string;
  hl?: boolean;
}

const en = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',

  'hero.badge': 'Available for work',
  'hero.greeting': "Hi, I'm",
  'hero.subtitle': [
    { text: 'Full Stack', hl: true },
    { text: ' Developer passionate about creating ' },
    { text: 'innovative', hl: true },
    { text: ' and ' },
    { text: 'functional', hl: true },
    { text: ' digital experiences.' },
  ] as Segment[],
  'hero.btnProjects': 'View projects',
  'hero.btnContact': 'Contact me',

  'about.label': '// About me',
  'about.titlePrefix': 'I turn ideas into',
  'about.titleHighlight': 'code',
  'about.desc': 'Developer with experience building web and mobile solutions. I enjoy taking on challenges that help me grow professionally.',
  'about.statYears': 'Years of experience',
  'about.service.frontend.title': 'Frontend',
  'about.service.frontend.desc': 'Modern, responsive interfaces with React, TypeScript and smooth animations.',
  'about.service.backend.title': 'Backend',
  'about.service.backend.desc': 'Robust and scalable APIs with Node.js, Express and databases.',
  'about.service.fullstack.title': 'Full Stack',
  'about.service.fullstack.desc': 'End-to-end solutions, integrating the entire ecosystem.',

  'skills.label': '// Skills',
  'skills.titlePrefix': 'My',
  'skills.titleHighlight': 'technologies',
  'skills.ai': 'AI / Machine Learning',

  'projects.label': '// Projects',
  'projects.titlePrefix': 'My',
  'projects.titleHighlight': 'recent',
  'projects.titleSuffix': 'work',
  'projects.ird.desc': 'Corporate website for an industrial balancing and services company. Built with pure React for optimal performance and smooth navigation.',
  'projects.toro.desc': 'Investment and trading education platform. WordPress with a custom theme, guides, online courses, blog and newsletter for the financial community.',
  'projects.rutinapp.desc': 'Mobile app to manage workout routines with rest timer, weekly schedule, reminders and dark mode. Built with Expo and TypeScript.',
  'projects.venecobot.desc': 'AI WhatsApp bot that understands Venezuelan slang and handles everyday tasks, like checking the official BCV dollar rate, the euro and the average Binance P2P dollar. It uses LangGraph to route every message to specialized agents from a graph-based supervisor.',
  'projects.alt': 'Screenshot of',

  'contact.label': '// Contact',
  'contact.titlePrefix': "Let's work",
  'contact.titleHighlight': 'together',
  'contact.desc': "Have a project in mind? I'd love to hear your idea.",
  'contact.location': 'Location',
  'contact.form.nameLabel': 'Name',
  'contact.form.namePlaceholder': 'Your name',
  'contact.form.emailLabel': 'Email',
  'contact.form.emailPlaceholder': 'you@email.com',
  'contact.form.messageLabel': 'Message',
  'contact.form.messagePlaceholder': 'Tell me about your project...',
  'contact.form.sending': 'Sending...',
  'contact.form.sent': 'Message sent!',
  'contact.form.error': 'Error, try again',
  'contact.form.submit': 'Send message',

  'footer.rights': 'All rights reserved.',

  'lang.toEs': 'Change to Spanish',
  'lang.toEn': 'Change to English',
};

export type TranslationKey = keyof typeof en;
export type TranslationDict = { [K in TranslationKey]: typeof en[K] };

const es: TranslationDict = {
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mi',
  'nav.skills': 'Skills',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',

  'hero.badge': 'Disponible para trabajar',
  'hero.greeting': 'Hola, soy',
  'hero.subtitle': [
    { text: 'Desarrollador ' },
    { text: 'Full Stack', hl: true },
    { text: ' apasionado por crear experiencias digitales ' },
    { text: 'innovadoras', hl: true },
    { text: ' y ' },
    { text: 'funcionales', hl: true },
    { text: '.' },
  ] as Segment[],
  'hero.btnProjects': 'Ver proyectos',
  'hero.btnContact': 'Contactame',

  'about.label': '// Sobre mi',
  'about.titlePrefix': 'Transformo ideas en',
  'about.titleHighlight': 'codigo',
  'about.desc': 'Desarrollador con experiencia en creacion de soluciones web y moviles. Me gusta enfrentar retos que me hagan crecer profesionalmente.',
  'about.statYears': 'Anos de experiencia',
  'about.service.frontend.title': 'Frontend',
  'about.service.frontend.desc': 'Interfaces modernas y responsivas con React, TypeScript y animaciones fluidas.',
  'about.service.backend.title': 'Backend',
  'about.service.backend.desc': 'APIs robustas y escalables con Node.js, Express y bases de datos.',
  'about.service.fullstack.title': 'Full Stack',
  'about.service.fullstack.desc': 'Soluciones completas de principio a fin, integrando todo el ecosistema.',

  'skills.label': '// Skills',
  'skills.titlePrefix': 'Mis',
  'skills.titleHighlight': 'tecnologias',
  'skills.ai': 'IA / Machine Learning',

  'projects.label': '// Proyectos',
  'projects.titlePrefix': 'Mis',
  'projects.titleHighlight': 'trabajos',
  'projects.titleSuffix': 'recientes',
  'projects.ird.desc': 'Sitio web corporativo para empresa de balanceo y servicios industriales. Desarrollado con React puro para un rendimiento optimo y una experiencia de navegacion fluida.',
  'projects.toro.desc': 'Plataforma educativa de inversiones y trading. WordPress con tema personalizado, secciones de guias, cursos online, blog y newsletter para la comunidad financiera.',
  'projects.rutinapp.desc': 'App movil para gestionar rutinas de ejercicio con temporizador de descanso, agenda semanal, recordatorios y modo oscuro. Desarrollada con Expo y TypeScript.',
  'projects.venecobot.desc': 'Bot de WhatsApp con IA que entiende la jerga venezolana y resuelve tareas de interes diario, como consultar el dolar oficial (BCV), el euro y el promedio del dolar en Binance P2P. Usa LangGraph para enrutar cada mensaje a agentes especializados desde un supervisor basado en grafos.',
  'projects.alt': 'Captura de',

  'contact.label': '// Contacto',
  'contact.titlePrefix': 'Trabajemos',
  'contact.titleHighlight': 'juntos',
  'contact.desc': 'Tienes un proyecto en mente? Me encantaria escuchar tu idea.',
  'contact.location': 'Ubicacion',
  'contact.form.nameLabel': 'Nombre',
  'contact.form.namePlaceholder': 'Tu nombre',
  'contact.form.emailLabel': 'Email',
  'contact.form.emailPlaceholder': 'tu@email.com',
  'contact.form.messageLabel': 'Mensaje',
  'contact.form.messagePlaceholder': 'Cuentame sobre tu proyecto...',
  'contact.form.sending': 'Enviando...',
  'contact.form.sent': 'Mensaje enviado!',
  'contact.form.error': 'Error, intenta de nuevo',
  'contact.form.submit': 'Enviar mensaje',

  'footer.rights': 'Todos los derechos reservados.',

  'lang.toEs': 'Cambiar a espanol',
  'lang.toEn': 'Cambiar a ingles',
};

export const translations: Record<Language, TranslationDict> = { en, es };