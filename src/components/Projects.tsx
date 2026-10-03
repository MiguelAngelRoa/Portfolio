import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import './Projects.css';

const ASSET_PATH = import.meta.env.BASE_URL;

interface RepoLink {
  label: string;
  url: string;
}

interface ProjectItem {
  id: number;
  title: string;
  descKey: TranslationKey;
  tags: string[];
  link?: string;
  github?: string;
  repos?: RepoLink[];
  image?: string;
  video?: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'IRD Balancing VE',
    descKey: 'projects.ird.desc',
    tags: ['React', 'JavaScript', 'Responsive Design'],
    link: 'https://irdbalancingve.com/',
    image: `${ASSET_PATH}ird.png`,
  },
  {
    id: 2,
    title: 'Toro Purpura',
    descKey: 'projects.toro.desc',
    tags: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
    link: 'https://www.toropurpura.com/',
    image: `${ASSET_PATH}toropurpura.png`,
  },
  {
    id: 3,
    title: 'Rutinapp',
    descKey: 'projects.rutinapp.desc',
    tags: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'],
    github: 'https://github.com/MiguelAngelRoa/Rutinapp',
    video: `${ASSET_PATH}rutinapp-preview.mp4`,
  },
  {
    id: 4,
    title: 'VenecoBot',
    descKey: 'projects.venecobot.desc',
    tags: ['React', 'TypeScript', 'LangGraph', 'Gemini', 'WhatsApp'],
    repos: [
      { label: 'Backend', url: 'https://github.com/MiguelAngelRoa/VenecoBotBack' },
      { label: 'Frontend', url: 'https://github.com/MiguelAngelRoa/VenecoBotFront' },
    ],
    image: `${ASSET_PATH}venecobot.png`,
  },
];

export default function Projects() {
  const { tStr } = useLanguage();
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
          <span className="projects__label">{tStr('projects.label')}</span>
          <h2 className="projects__title">
            {tStr('projects.titlePrefix')} <span className="projects__highlight">{tStr('projects.titleHighlight')}</span> {tStr('projects.titleSuffix')}
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
                      alt={`${tStr('projects.alt')} ${project.title}`}
                    />
                  ) : (
                    <div className="projects__card-preview-inner">
                      <span className="projects__card-preview-text">{project.title}</span>
                    </div>
                  )}
                </div>

                <div className="projects__card-body">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-desc">{tStr(project.descKey)}</p>
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