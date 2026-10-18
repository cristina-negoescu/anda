import { Outlet } from 'react-router-dom';
import { usePageNavigation } from '../../hooks/usePageNavigation';
import { Header } from './Header';
import { Footer } from './Footer';

export function SiteLayout() {
  usePageNavigation();

  return (
    <>
      <a href="#continut" className="skip-link">
        Sari la conținut
      </a>
      <Header />
      <main id="continut">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
