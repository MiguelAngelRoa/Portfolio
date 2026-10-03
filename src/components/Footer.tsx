import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { tStr } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer__dots" />
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__bracket">&lt;</span>miguel<span className="footer__dot">.dev</span>/&gt;
          </span>
          <p className="footer__copy">&copy; {new Date().getFullYear()} Miguel Roa. {tStr('footer.rights')}</p>
        </div>

        <div className="footer__links">
          <a href="https://github.com/MiguelAngelRoa" target="_blank" rel="noreferrer" className="footer__social">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/miguel-roa-709299274/" target="_blank" rel="noreferrer" className="footer__social">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:miguel.roa.dev@gmail.com" className="footer__social">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
