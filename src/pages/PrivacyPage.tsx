import { Heading } from '../components/Heading';

export function PrivacyPage() {
  return (
    <section className="container inner-page narrow prose">
      <Heading label="CONFIDENȚIALITATE" title="Grijă pentru datele tale." />
      <p>
        Această versiune este o demonstrație. Formularul nu trimite și nu stochează date.
        Nu sunt integrate instrumente de analiză sau cookies de marketing.
      </p>
      <h2>Resurse externe</h2>
      <p>
        Fotografia de pe pagina principală este încărcată de la Unsplash, iar fonturile de
        la Google Fonts. Acești furnizori pot primi date tehnice ale conexiunii, inclusiv
        adresa IP. Pentru producție, recomandăm găzduirea locală a imaginii și fonturilor.
      </p>
      <h2>Înainte de lansare</h2>
      <p>
        Politica finală trebuie completată cu identitatea operatorului, datele de contact,
        scopurile și temeiurile prelucrării, furnizorii, termenele de păstrare și
        informațiile privind exercitarea drepturilor. Acest text nu reprezintă politica
        finală a unui cabinet.
      </p>
    </section>
  );
}
