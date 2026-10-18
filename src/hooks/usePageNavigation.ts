import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageTitles } from '../data/navigation';

export function usePageNavigation() {
  const location = useLocation();

  useEffect(() => {
    const title =
      pageTitles.find(({ path }) => path === location.pathname)?.title ??
      'Pagină negăsită';
    document.title = `${title} — Psihoterapie perinatală`;

    if (location.hash) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
      });
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
  }, [location]);
}
