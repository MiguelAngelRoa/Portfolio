import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID';

export default function Contact() {
  const { tStr } = useLanguage();
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
          <span className="contact__label">{tStr('contact.label')}</span>
          <h2 className="contact__title">
            {tStr('contact.titlePrefix')} <span className="contact__highlight">{tStr('contact.titleHighlight')}</span>
          </h2>
          <p className="contact__desc">
            {tStr('contact.desc')}
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
                <span className="contact__info-label">{tStr('contact.location')}</span>
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
              <label className="contact__form-label">{tStr('contact.form.nameLabel')}</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder={tStr('contact.form.namePlaceholder')}
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label">{tStr('contact.form.emailLabel')}</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder={tStr('contact.form.emailPlaceholder')}
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
              />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label">{tStr('contact.form.messageLabel')}</label>
              <textarea
                name="message"
                className="contact__form-textarea"
                placeholder={tStr('contact.form.messagePlaceholder')}
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
              {status === 'sending' && tStr('contact.form.sending')}
              {status === 'sent' && tStr('contact.form.sent')}
              {status === 'error' && tStr('contact.form.error')}
              {status === 'idle' && (
                <>
                  <FiSend size={16} />
                  {tStr('contact.form.submit')}
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
