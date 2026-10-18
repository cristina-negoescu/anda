import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Brand } from '../Brand';

export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <Brand />
        <p>
          Cu blândețe, pentru tine.
          <br />
          În toate schimbările maternității.
        </p>
        <Link to="/contact" className="text-link">
          Să facem primul pas <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Psihoterapie perinatală · Concept de prezentare
        </span>
        <Link to="/confidentialitate">Confidențialitate</Link>
        <span>Un spațiu pentru emoțiile tale.</span>
      </div>
    </footer>
  );
}
