import { motion } from 'framer-motion';
import { useInView } from './useInView';
import {
  SiTypescript, SiJavascript, SiPostgresql, SiMysql,
  SiPhp, SiReact,
} from 'react-icons/si';
import { FaJava, FaBrain } from 'react-icons/fa';
import './Skills.css';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript />, level: 92, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 95, color: '#F7DF1E' },
  { name: 'React', icon: <SiReact />, level: 95, color: '#61DAFB' },
  { name: 'React Native', icon: <SiReact />, level: 92, color: '#61DAFB' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88, color: '#4169E1' },
  { name: 'MySQL', icon: <SiMysql />, level: 72, color: '#4479A1' },
  { name: 'Java', icon: <FaJava />, level: 90, color: '#ED8B00' },
  { name: 'PHP', icon: <SiPhp />, level: 65, color: '#777BB4' },
  { name: 'IA / Machine Learning', icon: <FaBrain />, level: 70, color: '#00ff88' },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="skills" className="skills section-padding" ref={ref}>
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="skills__label">// Skills</span>
          <h2 className="skills__title">
            Mis <span className="skills__highlight">tecnologias</span>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skills__card glass"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                y: -6,
                borderColor: `${skill.color}40`,
                transition: { duration: 0.2 },
              }}
            >
              <div className="skills__card-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className="skills__card-name">{skill.name}</span>
              <div className="skills__bar">
                <motion.div
                  className="skills__bar-fill"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: 'easeOut' }}
                  style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
