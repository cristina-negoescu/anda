import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

export function ContactForm() {
  const [ready, setReady] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setReady(true);
      }}
      onChange={() => setReady(false)}
    >
      <label htmlFor="name">Nume</label>
      <input
        id="name"
        name="name"
        autoComplete="name"
        required
        placeholder="Cum te numești?"
      />
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        autoComplete="email"
        type="email"
        required
        placeholder="adresa@exemplu.ro"
      />
      <label htmlFor="phone">
        Telefon <span>(opțional)</span>
      </label>
      <input id="phone" name="phone" type="tel" autoComplete="tel" />
      <label htmlFor="format">Cum ai prefera să ne întâlnim?</label>
      <select id="format" name="format">
        <option>Nu am o preferință</option>
        <option>Online</option>
        <option>La cabinet</option>
      </select>
      <label htmlFor="message">
        Mesaj <span>(opțional)</span>
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Ce ai dori să mă întrebi?"
      />
      <p className="small">
        Previzualizare: folosește date fictive.{' '}
        <Link to="/confidentialitate">Despre confidențialitate</Link>.
      </p>
      <button className="button" type="submit">
        Verifică formularul demo <ArrowUpRight size={17} />
      </button>
      {ready && (
        <p className="form-result" role="status">
          <Check size={20} /> Câmpurile sunt completate corect. Nicio solicitare nu a fost
          trimisă; programarea va deveni disponibilă după configurarea contactului.
        </p>
      )}
    </form>
  );
}
