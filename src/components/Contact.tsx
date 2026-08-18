import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
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
            <a href="mailto:miguel.roa.dev@gmail.com" className="contact__info-card glass">
              <FiMail className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">miguel.roa.dev@gmail.com</span>
              </div>
            </a>
            <div className="contact__info-card glass">
              <FiMapPin className="contact__info-icon" />
              <div>
                <span className="contact__info-label">Ubicacion</span>
                <span className="contact__info-value">Puerto Ordaz, Venezuela</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-green"
            onSubmit={handleSubmit}
            action={`https://formspree.io/f/${FORMSPREE_ID}`}
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__form-group">
              <label className="contact__form-label">Nombre</label>
              <input
                type="text"
                name="name"
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
                name="email"
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
                name="message"
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
              className={`contact__form-btn ${status === 'sent' ? 'contact__form-btn--sent' : ''} ${status === 'error' ? 'contact__form-btn--error' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' && 'Enviando...'}
              {status === 'sent' && 'Mensaje enviado!'}
              {status === 'error' && 'Error, intenta de nuevo'}
              {status === 'idle' && (
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
