import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { YoutubeIcon, WhatsAppIcon } from './SocialIcons';
import MidoLogo from './MidoLogo';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'CEO', path: '/ceo' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Equipment', path: '/equipment' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3'
          : 'bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <MidoLogo />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#0A188F] dark:text-sky-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0A188F] dark:hover:text-sky-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A188F] dark:bg-sky-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Quick Actions (Theme Toggle, YouTube, WhatsApp & Quote) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer group"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 transition-transform group-hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12 text-slate-700" />
              )}
            </button>

            <a
              href="https://www.youtube.com/channel/UCw0DzAjtJQe9wO_6eEFSnyw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 transition-colors"
              title="Watch on YouTube (@midoproductions)"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/233244843666?text=Hello%20MIDO%20Productions,%20I%20am%20inquiring%20about%20event%20sound%20and%20production%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-[#0A188F] dark:text-sky-300 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold transition-all"
              title="Chat with us on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400 animate-ping" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/quote"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-900/20 transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls (Theme Toggle + Menu Button) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-slate-700"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#0A188F]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop/Tablet Mobile Menu Toggle for 640px - 1024px */}
          <div className="hidden sm:flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-[#0A188F]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-[#0A188F] dark:text-sky-300 font-bold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0A188F] dark:hover:text-sky-400'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.youtube.com/channel/UCw0DzAjtJQe9wO_6eEFSnyw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-900/40"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://wa.me/233244843666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-900/40"
                >
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href="tel:+233244843666"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                <span>+233 24 437 6900 / 024 484 3666</span>
              </a>

              <Link
                to="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-[#0A188F] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wide text-center shadow-md"
              >
                Request Event Tech Rider
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
