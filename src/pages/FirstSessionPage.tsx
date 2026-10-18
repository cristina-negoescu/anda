import { CTA } from '../components/CTA';
import { Heading } from '../components/Heading';
import { FAQ } from '../components/FAQ';
import { faqs } from '../data/faqs';

export function FirstSessionPage() {
  return (
    <>
      <section className="container inner-page narrow">
        <Heading label="PRIMA ȘEDINȚĂ" title="Nu trebuie să știi de unde să începi.">
          Este suficient să vii așa cum ești. Prima întâlnire este despre a ne cunoaște și
          a înțelege ce sprijin cauți.
        </Heading>
        <div className="prose">
          <h2>Ce se întâmplă la prima întâlnire?</h2>
          <p>
            Vorbim despre ce te preocupă, ce ai nevoie în această perioadă și ce aștepți
            de la terapie. Poți pune întrebări despre abordare și despre colaborare, fără
            obligația de a continua.
          </p>
        </div>
        <div className="practical-grid">
          {[
            ['Durata', 'Va fi comunicată înainte de confirmare.'],
            ['Tariful', 'Va fi comunicat înainte de confirmare.'],
            ['Formatul', 'Online sau cabinet: disponibilitatea se confirmă la contact.'],
            [
              'Reprogramarea',
              'Condițiile de anulare și reprogramare se comunică înainte de prima ședință.',
            ],
          ].map(([a, b]) => (
            <div key={a}>
              <span className="eyebrow">{a}</span>
              <p>{b}</p>
            </div>
          ))}
        </div>
        <h2>Poate te întrebi…</h2>
        <FAQ items={faqs} />
      </section>
      <CTA />
    </>
  );
}
