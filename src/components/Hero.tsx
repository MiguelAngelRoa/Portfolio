import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import DotField from './DotField';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <DotField count={100} color="rgba(0,255,136,0.07)" maxSize={2.5} />

      <div className="hero__grid-bg" />

      <div className="container hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero__badge-dot" />
          Disponible para trabajar
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Hola, soy{' '}
          <span className="hero__name glow-text">Tu Nombre</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Desarrollador <span className="hero__highlight">Full Stack</span> apasionado por
          crear experiencias digitales <span className="hero__highlight">innovadoras</span> y
          <span className="hero__highlight"> funcionales</span>.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#projects" className="hero__btn hero__btn--primary">
            Ver proyectos
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Contactame
          </a>
        </motion.div>

        <motion.div
          className="hero__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hero__social-link">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hero__social-link">
            <FiLinkedin size={18} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <FiArrowDown className="hero__scroll-icon" />
        </motion.a>
      </div>
    </section>
  );
}
