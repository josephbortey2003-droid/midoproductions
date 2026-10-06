import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import AmbientStageLight from './components/AmbientStageLight';
import PageTransition from './components/PageTransition';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import EquipmentPage from './pages/EquipmentPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import CeoPage from './pages/CeoPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/ceo" element={<PageTransition><CeoPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/equipment" element={<PageTransition><EquipmentPage /></PageTransition>} />
        <Route path="/quote" element={<PageTransition><QuotePage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        {/* 1. Silky Smooth Momentum Scrolling (Lenis) */}
        <SmoothScroll />

        {/* 2. Top Scroll Micro-Progress Indicator */}
        <ScrollProgress />

        {/* 3. Organic Ambient Stage Lighting with Lerp Physics */}
        <AmbientStageLight />

        {/* 4. Instant Reset on Page Transition */}
        <ScrollToTop />

        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-[#0A188F] dark:selection:text-sky-300 relative z-10 transition-colors duration-300">
          {/* Navigation Bar */}
          <Navbar />

        {/* Dynamic Route Pages with Animated Transitions */}
        <main className="flex-1">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  </ThemeProvider>
  );
}
