import { Button } from '../components/Button';
import { Heading } from '../components/Heading';

export function NotFoundPage() {
  return (
    <section className="container inner-page">
      <Heading label="404" title="Această pagină nu există." />
      <Button to="/">Înapoi acasă</Button>
    </section>
  );
}
