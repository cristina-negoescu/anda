import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CTA } from '../components/CTA';
import { Heading } from '../components/Heading';
import { areas } from '../data/services';

export function ServicesPage() {
  return (
    <>
      <section className="container inner-page">
        <Heading label="CUM TE POT AJUTA" title="Pentru ceea ce trăiești acum.">
          Nu trebuie să te regăsești într-o categorie exactă. Aceste teme pot fi un punct
          de pornire pentru o conversație.
        </Heading>
        <div className="editorial-note">
          Ariile de mai jos sunt orientative. Oferta finală va reflecta formarea și
          competențele confirmate ale terapeutului.
        </div>
        <div className="service-list">
          {areas.map(({ id, icon: Icon, title, text, details }) => (
            <article id={id} key={title}>
              <div className="service-symbol">
                <Icon size={46} strokeWidth={1} />
              </div>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{details}</p>
                <Link to="/contact" className="text-link">
                  Hai să vorbim 1<ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
