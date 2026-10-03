import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import DotField from './DotField';
import { useLanguage } from '../i18n/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { tStr, tSegs } = useLanguage();

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
          {tStr('hero.badge')}
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {tStr('hero.greeting')}{' '}
          <span className="hero__name glow-text">Miguel Roa</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {tSegs('hero.subtitle').map((seg, i) => (
            <Fragment key={i}>
              {seg.hl ? (
                <span className="hero__highlight">{seg.text}</span>
              ) : (
                seg.text
              )}
            </Fragment>
          ))}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#projects" className="hero__btn hero__btn--primary">
            {tStr('hero.btnProjects')}
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            {tStr('hero.btnContact')}
          </a>
        </motion.div>

        <motion.div
          className="hero__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <a href="https://github.com/MiguelAngelRoa" target="_blank" rel="noreferrer" className="hero__social-link">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/miguel-roa-709299274/" target="_blank" rel="noreferrer" className="hero__social-link">
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