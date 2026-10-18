import { Flower2 } from 'lucide-react';
import { Button } from './Button';

export function CTA() {
  return (
    <section className="cta">
      <Flower2 size={38} strokeWidth={1} />
      <h2>Și tu meriți să fii ascultată.</h2>
      <p>Nu trebuie să ai toate cuvintele. Putem începe de acolo de unde ești.</p>
      <Button light />
    </section>
  );
}
