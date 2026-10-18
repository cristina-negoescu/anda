import { Check } from 'lucide-react';
import { Botanical } from '../components/Botanical';
import { CTA } from '../components/CTA';
import { Heading } from '../components/Heading';

export function AboutPage() {
  return (
    <>
      <section className="container inner-page">
        <Heading label="DESPRE MINE" title="O relație construită pe încredere.">
          Un spațiu pentru povestea ta, cu atenție la persoana din spatele fiecărui rol.
        </Heading>
        <div className="two-column">
          <div className="about-art">
            <Botanical />
            <span>
              Prezență.
              <br />
              Respect.
              <br />
              Blândețe.
            </span>
          </div>
          <div className="prose">
            <h2>Omul din spatele practicii</h2>
            <p>
              Prezentarea personală a terapeutului va apărea aici. Înainte de publicare,
              această secțiune trebuie completată cu numele, titulatura profesională,
              experiența și motivația de a lucra în domeniul perinatal.
            </p>
            <div className="editorial-note">
              Conținut în pregătire: calificările și acreditările vor fi adăugate după
              verificare.
            </div>
            <h3>Cum lucrăm împreună</h3>
            <p>
              La început, discutăm despre nevoile și așteptările tale. Abordarea
              terapeutică, cadrul și obiectivele colaborării sunt explicate înainte de a
              decide continuarea.
            </p>
            <h3>Ce contează în acest spațiu</h3>
            <ul className="values">
              {[
                'Respect pentru povestea și alegerile tale',
                'Un ritm stabilit împreună',
                'Transparență despre cadrul terapeutic',
                'Grijă pentru confidențialitate',
              ].map((x) => (
                <li key={x}>
                  <Check size={17} />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
