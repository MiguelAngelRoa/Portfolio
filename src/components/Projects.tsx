import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../types';
import './Projects.css';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electronico con carrito de compras, pasarela de pagos y panel de administracion.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Aplicacion de gestion de tareas con drag & drop, filtros y modo oscuro/claro.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Dashboard del clima con datos en tiempo real, graficas interactivas y pronostico a 7 dias.',
    tags: ['React', 'Chart.js', 'API REST'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Portfolio v2',
    description: 'Este mismo portafolio, disenado con animaciones fluidas y texturas de puntos.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Aplicacion de chat en tiempo real con WebSockets, salas y notificaciones.',
    tags: ['React', 'Socket.io', 'Express'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Blog CMS',
    description: 'Sistema de gestion de contenido para blogs con editor markdown y deploy automatico.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
    github: '#',
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
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
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
                  {project.github && (
                    <a href={project.github} className="projects__card-link" target="_blank" rel="noreferrer">
                      <FiGithub size={15} />
                    </a>
                  )}
                  <a href={project.link} className="projects__card-link" target="_blank" rel="noreferrer">
                    <FiExternalLink size={15} />
                  </a>
                </div>
              </div>

              <div className="projects__card-preview">
                <div className="projects__card-preview-inner">
                  <span className="projects__card-preview-text">{project.title}</span>
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
