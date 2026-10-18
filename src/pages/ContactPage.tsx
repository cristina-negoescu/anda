import { Mail } from 'lucide-react';
import { Heading } from '../components/Heading';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  return (
    <section className="container inner-page">
      <Heading label="CONTACT ȘI PROGRAMARE" title="Primul pas poate fi un mesaj.">
        Nu este nevoie să găsești cuvintele perfecte sau să îți explici întreaga poveste.
      </Heading>
      <div className="contact-layout">
        <div className="prose">
          <Mail size={32} strokeWidth={1} />
          <h2>Să începem cu o conversație.</h2>
          <p>
            Înainte de confirmare, vei primi informații despre disponibilitate, tarif și
            formatul ședinței.
          </p>
          <div className="editorial-note">
            Site demonstrativ. Datele reale de contact și serviciul de programare nu sunt
            încă configurate. Formularul nu transmite și nu salvează informații.
          </div>
          <p className="small">
            Nu este nevoie să descrii experiențe personale sau informații medicale în
            acest formular.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
