import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { contact, nav } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label="MIDO Productions home" className="shrink-0">
          <img src="mido-logo.png" alt="MIDO Productions" className="h-10 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${isActive ? 'text-brand' : 'text-ink/80 hover:text-brand'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:${contact.salesTel}`} className="flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-brand">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contact.salesPhone}
          </a>
          <Link to="/contact" className="btn-primary py-2.5">
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 p-2 text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" onClick={(e) => e.target.closest('a') && close()} className="border-t border-line bg-white lg:hidden">
          <ul className="container-site py-3">
            {[{ label: 'Home', path: '/' }, ...nav].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `block border-b border-line/70 py-3 text-base font-medium ${isActive ? 'text-brand' : 'text-ink'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="container-site flex flex-col gap-3 pb-5">
            <Link to="/contact" className="btn-primary">Request a quote</Link>
            <a href={`tel:${contact.salesTel}`} className="btn-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {contact.salesPhone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
