import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CeoPage from './pages/CeoPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ceo" element={<CeoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Old routes from the previous version of the site */}
          <Route path="/portfolio" element={<Navigate to="/work" replace />} />
          <Route path="/equipment" element={<Navigate to="/services" replace />} />
          <Route path="/quote" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
