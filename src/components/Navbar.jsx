import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { YoutubeIcon, WhatsAppIcon } from './SocialIcons';
import MidoLogo from './MidoLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
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
                      ? 'text-[#0A188F] font-bold'
                      : 'text-slate-600 hover:text-[#0A188F]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A188F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Quick Actions (YouTube, WhatsApp & Quote) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://www.youtube.com/channel/UCw0DzAjtJQe9wO_6eEFSnyw"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors"
              title="Watch on YouTube (@midoproductions)"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/233244843666?text=Hello%20MIDO%20Productions,%20I%20am%20inquiring%20about%20event%20sound%20and%20production%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0A188F] border border-blue-200 text-xs font-semibold transition-all"
              title="Chat with us on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#0A188F]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-[#0A188F] font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0A188F]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.youtube.com/channel/UCw0DzAjtJQe9wO_6eEFSnyw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-200"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://wa.me/233244843666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200"
                >
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href="tel:+233244843666"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 text-xs font-mono border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
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
