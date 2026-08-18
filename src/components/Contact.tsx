import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section-padding" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="contact__label">// Contacto</span>
          <h2 className="contact__title">
            Trabajemos <span className="contact__highlight">juntos</span>
          </h2>
          <p className="contact__desc">
            Tienes un proyecto en mente? Me encantaria escuchar tu idea.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-card glass">
              <FiMail className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">hola@tuemail.dev</span>
              </div>
            </div>
            <div className="contact__info-card glass">
              <FiMapPin className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Ubicacion</span>
                <span className="contact__info-value">Tu Ciudad, Pais</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-green"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__form-group">
              <label className="contact__form-label">Nombre</label>
              <input
                type="text"
                className="contact__form-input"
                placeholder="Tu nombre"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label">Email</label>
              <input
                type="email"
                className="contact__form-input"
                placeholder="tu@email.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label">Mensaje</label>
              <textarea
                className="contact__form-textarea"
                placeholder="Cuentame sobre tu proyecto..."
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="contact__form-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <span className="contact__form-btn-sent">Mensaje enviado!</span>
              ) : (
                <>
                  <FiSend size={16} />
                  Enviar mensaje
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
