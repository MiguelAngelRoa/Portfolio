import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiCode, FiLayout, FiServer } from 'react-icons/fi';
import './About.css';

const stats = [
  { number: '6+', label: 'Anos de experiencia' },
];

const services = [
  { icon: <FiLayout />, title: 'Frontend', desc: 'Interfaces modernas y responsivas con React, TypeScript y animaciones fluidas.' },
  { icon: <FiServer />, title: 'Backend', desc: 'APIs robustas y escalables con Node.js, Express y bases de datos.' },
  { icon: <FiCode />, title: 'Full Stack', desc: 'Soluciones completas de principio a fin, integrando todo el ecosistema.' },
];

export default function About() {
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
          <span className="about__label">// Sobre mi</span>
          <h2 className="about__title">
            Transformo ideas en{' '}
            <span className="about__highlight">codigo</span>
          </h2>
          <p className="about__desc">
            Desarrollador con experiencia en creacion de soluciones web y moviles.
            Me gusta enfrentar retos que me hagan crecer profesionalmente.
          </p>
        </motion.div>

        <div className="about__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="about__stat glass"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <span className="about__stat-number">{s.number}</span>
              <span className="about__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="about__services">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="about__service glass-green"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="about__service-icon">{s.icon}</div>
              <h3 className="about__service-title">{s.title}</h3>
              <p className="about__service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
