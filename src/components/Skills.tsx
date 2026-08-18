import { motion } from 'framer-motion';
import { useInView } from './useInView';
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiTailwindcss,
  SiGit, SiMongodb, SiPostgresql, SiDocker, SiHtml5, SiCss, SiVite,
} from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'React', icon: <SiReact />, level: 90, color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 90, color: '#F7DF1E' },
  { name: 'Node.js', icon: <SiNodedotjs />, level: 80, color: '#339933' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: '#06B6D4' },
  { name: 'Git', icon: <SiGit />, level: 82, color: '#F05032' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 75, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 72, color: '#4169E1' },
  { name: 'Docker', icon: <SiDocker />, level: 65, color: '#2496ED' },
  { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss />, level: 90, color: '#1572B6' },
  { name: 'Vite', icon: <SiVite />, level: 85, color: '#BD34FE' },
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
