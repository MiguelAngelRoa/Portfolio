import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__dots" />
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__bracket">&lt;</span>dev<span className="footer__dot">.</span>/&gt;
          </span>
          <p className="footer__copy">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        <div className="footer__links">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer__social">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="footer__social">
            <FiLinkedin size={18} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer__social">
            <FiTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
