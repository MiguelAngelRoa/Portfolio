import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

interface RepoLink {
  label: string;
  url: string;
}

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  repos?: RepoLink[];
  image?: string;
  video?: string;
}

const base = import.meta.env.BASE_URL;

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'IRD Balancing VE',
    description: 'Sitio web corporativo para empresa de balanceo y servicios industriales. Desarrollado con React puro para un rendimiento optimo y una experiencia de navegacion fluida.',
    tags: ['React', 'JavaScript', 'Responsive Design'],
    link: 'https://irdbalancingve.com/',
    image: `${base}ird.png`,
  },
  {
    id: 2,
    title: 'Toro Purpura',
    description: 'Plataforma educativa de inversiones y trading. WordPress con tema personalizado, secciones de guias, cursos online, blog y newsletter para la comunidad financiera.',
    tags: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
    link: 'https://www.toropurpura.com/',
    image: `${base}toropurpura.png`,
  },
  {
    id: 3,
    title: 'Rutinapp',
    description: 'App movil para gestionar rutinas de ejercicio con temporizador de descanso, agenda semanal, recordatorios y modo oscuro. Desarrollada con Expo y TypeScript.',
    tags: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'],
    github: 'https://github.com/MiguelAngelRoa/Rutinapp',
    video: `${base}rutinapp-preview.mp4`,
  },
  {
    id: 4,
    title: 'VenecoBot',
    description: 'Bot de WhatsApp con IA que entiende la jerga venezolana y resuelve tareas de interes diario, como consultar el dolar oficial (BCV), el euro y el promedio del dolar en Binance P2P. Usa LangGraph para enrutar cada mensaje a agentes especializados desde un supervisor basado en grafos.',
    tags: ['React', 'TypeScript', 'LangGraph', 'Gemini', 'WhatsApp'],
    repos: [
      { label: 'Backend', url: 'https://github.com/MiguelAngelRoa/VenecoBotBack' },
      { label: 'Frontend', url: 'https://github.com/MiguelAngelRoa/VenecoBotFront' },
    ],
    image: `${base}venecobot.png`,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="projects section-padding" ref={ref}>
      <div className="dot-texture-green" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="projects__label">// Proyectos</span>
          <h2 className="projects__title">
            Mis <span className="projects__highlight">trabajos</span> recientes
          </h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => {
            const cardUrl =
              project.link || project.github || project.repos?.[0]?.url || '#';
            return (
              <motion.div
                key={project.id}
                role={cardUrl !== '#' ? 'link' : undefined}
                tabIndex={cardUrl !== '#' ? 0 : undefined}
                onClick={() => {
                  if (cardUrl !== '#') window.open(cardUrl, '_blank', 'noopener,noreferrer');
                }}
                onKeyDown={(e) => {
                  if (cardUrl !== '#' && (e.key === 'Enter' || e.key === ' ')) {
                    window.open(cardUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="projects__card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="projects__card-top">
                  <div className="projects__card-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="projects__card-links">
                    {project.repos ? (
                      project.repos.map((repo) => (
                        <a
                          key={repo.url}
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          title={repo.label}
                          aria-label={`Repositorio ${repo.label}`}
                          className="projects__card-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub size={15} />
                        </a>
                      ))
                    ) : (
                      project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Repositorio en GitHub"
                          className="projects__card-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub size={15} />
                        </a>
                      )
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Sitio en vivo"
                        className="projects__card-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="projects__card-preview">
                  {project.video ? (
                    <video
                      className="projects__card-video"
                      src={project.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => {
                        const v = e.target as HTMLVideoElement;
                        v.pause();
                        v.currentTime = 0;
                      }}
                    />
                  ) : project.image ? (
                    <img
                      className="projects__card-img projects__card-img--loaded"
                      src={project.image}
                      alt={`Screenshot de ${project.title}`}
                    />
                  ) : (
                    <div className="projects__card-preview-inner">
                      <span className="projects__card-preview-text">{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="projects__card-body">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{project.description}</p>
                  <div className="projects__card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projects__card-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
