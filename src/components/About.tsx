import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiCode, FiLayout, FiServer } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';
import './About.css';

const stats: { number: string; labelKey: TranslationKey }[] = [
  { number: '6+', labelKey: 'about.statYears' },
];

const services: { icon: React.ReactNode; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: <FiLayout />, titleKey: 'about.service.frontend.title', descKey: 'about.service.frontend.desc' },
  { icon: <FiServer />, titleKey: 'about.service.backend.title', descKey: 'about.service.backend.desc' },
  { icon: <FiCode />, titleKey: 'about.service.fullstack.title', descKey: 'about.service.fullstack.desc' },
];

export default function About() {
  const { tStr } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="about section-padding" ref={ref}>
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="about__label">{tStr('about.label')}</span>
          <h2 className="about__title">
            {tStr('about.titlePrefix')}{' '}
            <span className="about__highlight">{tStr('about.titleHighlight')}</span>
          </h2>
          <p className="about__desc">{tStr('about.desc')}</p>
        </motion.div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              className="about__stat glass"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <span className="about__stat-number">{s.number}</span>
              <span className="about__stat-label">{tStr(s.labelKey)}</span>
            </motion.div>
          ))}
        </div>

        <div className="about__services">
          {services.map((s, i) => (
            <motion.div
              key={s.titleKey}
              className="about__service glass-green"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="about__service-icon">{s.icon}</div>
              <h3 className="about__service-title">{tStr(s.titleKey)}</h3>
              <p className="about__service-desc">{tStr(s.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}