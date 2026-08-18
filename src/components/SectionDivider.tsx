import { motion } from 'framer-motion';
import './SectionDivider.css';

export default function SectionDivider({ flipped = false }: { flipped?: boolean }) {
  return (
    <motion.div
      className={`divider ${flipped ? 'divider--flipped' : ''}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="divider__line" />
      <div className="divider__dot" />
      <div className="divider__line" />
    </motion.div>
  );
}
