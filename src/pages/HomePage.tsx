import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Flower2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Botanical } from '../components/Botanical';
import { CTA } from '../components/CTA';
import { areas } from '../data/services';

export function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          {/* <span className="eyebrow">
            <span className="tiny-line" /> PSIHOTERAPIE PERINATALĂ
          </span> */}
          <h1>
            În această nouă
            <br />
            etapă, este loc
            <br />
            și pentru <em>tine.</em>
          </h1>
          <p>
            Sprijin pentru lumea ta interioară, înainte de sarcină, în timpul ei și după
            naștere. Cu blândețe, în ritmul tău.
          </p>
          <div className="hero-actions">
            <Button />
            <Link className="text-link" to="/prima-sedinta">
              Despre prima ședință <ArrowRight size={16} />
            </Link>
          </div>
         
        </div>
        <div className="hero-art">
          <div className="arch">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"
              alt="Lumină caldă printre copacii unei păduri liniștite"
            />
            <div className="image-wash" />
          </div>
          <div className="art-stamp">
            aici, în ritmul tău
            <Flower2 size={28} strokeWidth={1} />
          </div>
          <Botanical className="hero-botanical" />
        </div>
      </section>
      <section className="intro-strip">
        <span>Nu există un singur fel de a trăi maternitatea.</span>
        <p>Orice simți acum, merită să fie ascultat.</p>
      </section>
      <section className="container section">
        <div className="section-top">
          <div>
            {/* <span className="eyebrow">CUM TE POT AJUTA</span> */}
            <h2>
              Pentru fiecare etapă.
              <br />
              Pentru tot ce simți.
            </h2>
          </div>
        </div>
        <div className="area-grid">
          {areas.map(({ id, icon: Icon, title, text }) => (
            <Link to={'/cum-te-pot-ajuta#' + id} className="area-card" key={title}>
              <Icon size={30} strokeWidth={1.2} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="card-link">
                Descoperă mai mult <ArrowUpRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="about-preview container">
        <div className="about-art">
          <Botanical />
          <span>
            Întâlnirea începe
            <br />
            cu ascultare.
          </span>
        </div>
        <div>
          {/* <span className="eyebrow">DESPRE SPAȚIUL NOSTRU</span> */}
          <h2>
            Mai întâi, ești un om.
            <br />
            Apoi, toate celelalte.
          </h2>
          <p>
            Dincolo de roluri și așteptări, există povestea ta. Relația terapeutică oferă
            un spațiu în care ea poate fi auzită, cu respect pentru ceea ce trăiești.
          </p>
          <p>
            Nu există o variantă „corectă” a emoțiilor tale și nici un ritm pe care
            trebuie să îl urmezi.
          </p>
          <Link className="text-link" to="/despre-mine">
            Despre mine și felul în care lucrăm <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container section steps-section">
        {/* <span className="eyebrow">UN ÎNCEPUT SIMPLU</span> */}
        <h2>Pas cu pas, împreună.</h2>
        <div className="steps">
          {[
            [
              'Îmi scrii',
              'Trimiți o solicitare, cu atât de multe sau de puține cuvinte cât îți este confortabil.',
            ],
            [
              'Stabilim detaliile',
              'Clarificăm disponibilitatea, formatul, tariful și întrebările tale înainte de întâlnire.',
            ],
            [
              'Ne cunoaștem',
              'Prima ședință este un spațiu de explorare, în care vedem cum putem lucra împreună.',
            ],
          ].map(([title, text], i) => (
            <div key={title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <Button to="/prima-sedinta">Cum decurge prima ședință</Button>
      </section>
      <CTA />
    </>
  );
}
