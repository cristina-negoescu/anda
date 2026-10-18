import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FirstSessionPage } from './pages/FirstSessionPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="despre-mine" element={<AboutPage />} />
        <Route path="cum-te-pot-ajuta" element={<ServicesPage />} />
        <Route path="prima-sedinta" element={<FirstSessionPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="confidentialitate" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
