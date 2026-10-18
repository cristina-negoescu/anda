import { Link } from 'react-router-dom';

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Psihoterapie perinatală — Acasă">
      <strong>
        PSIHOTERAPIE
        <br />
        PERINATALĂ
      </strong>
      <span>SPAȚIU PENTRU TINE</span>
    </Link>
  );
}
