import React from 'react';
import { Link } from 'react-router-dom';
import { Music2, Phone, Mail, MapPin, Video, ArrowRight } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from './SocialIcons';
import MidoLogo from './MidoLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCw0DzAjtJQe9wO_6eEFSnyw',
      handle: '@midoproductions',
      icon: YoutubeIcon,
      color: 'hover:text-red-600 hover:border-red-200',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/midoproductions/',
      handle: '@midoproductions',
      icon: InstagramIcon,
      color: 'hover:text-pink-600 hover:border-pink-200',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/MidoProductionsLtd/',
      handle: 'MidoProductionsLtd',
      icon: FacebookIcon,
      color: 'hover:text-blue-600 hover:border-blue-200',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@midoproductionsltd',
      handle: '@midoproductionsltd',
      icon: TikTokIcon,
      color: 'hover:text-slate-900 hover:border-slate-300',
    },
    {
      name: 'LinkedIn',
      url: 'https://gh.linkedin.com/company/mido-productions',
      handle: 'MIDO Productions',
      icon: LinkedinIcon,
      color: 'hover:text-blue-700 hover:border-blue-200',
    },
    {
      name: 'Audiomack',
      url: 'https://audiomack.com/midoproductions',
      handle: 'Mido Productions',
      icon: Music2,
      color: 'hover:text-amber-600 hover:border-amber-200',
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-850 pt-16 pb-12 text-slate-700 dark:text-slate-300 relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand & Mission (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <MidoLogo />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Founded in 2000 by <strong>Mr. Dominic Ansah-Asare</strong>. West Africa’s benchmark provider for live choral acoustics, concert audio reinforcement, stage lighting design, 4K LED video walls, and global broadcast streaming.
            </p>

            {/* Social Media Link Badges */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider font-bold block mb-2">
                Official Channels & Broadcasts
              </span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm transition-all ${s.color}`}
                      title={s.name}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="font-medium text-[11px]">{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors">Home Overview</Link></li>
              <li><Link to="/about" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors">About MIDO</Link></li>
              <li><Link to="/ceo" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors font-medium text-slate-900 dark:text-white">Dominic Ansah-Asare (CEO)</Link></li>
              <li><Link to="/services" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors">6 Production Pillars</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors">Historic Portfolio & Videos</Link></li>
              <li><Link to="/equipment" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors">Equipment Arsenal</Link></li>
              <li><Link to="/quote" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors">Tech Rider Estimator</Link></li>
              <li><Link to="/contact" className="hover:text-[#0A188F] dark:hover:text-sky-400 transition-colors">Oyibi Complex / Contact</Link></li>
            </ul>
          </div>

          {/* Production Specialties (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono text-[#0A188F] uppercase tracking-wider font-bold">
              Specialties
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Choral & Oratorio Audio</li>
              <li>Symphonic Orchestra Staging</li>
              <li>DMX Stage Lighting</li>
              <li>Modular LED Video Walls</li>
              <li>Multi-Camera Live IMAG</li>
              <li>Global Broadcast Streaming</li>
              <li>Oyibi Studio Mastering</li>
              <li>Box Trussing & Rigging</li>
            </ul>
          </div>

          {/* Contact Dispatch (3 Cols) - 100% Oyibi Headquarters */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider font-bold">
              Headquarters & Dispatch
            </div>
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-slate-900 dark:text-white">Mido Productions Complex</strong><br />
                  Near Gbortsui, Oyibi, Greater Accra, Ghana
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-500 pl-6">
                Postal: P.O. Box AN 12782, Accra North
              </div>
              <div className="flex items-center gap-2 pt-1 font-mono text-slate-900 dark:text-white font-bold">
                <Phone className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                <span>+233 24 437 6900 / 024 484 3666</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-slate-600 dark:text-slate-400 text-[11px]">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                <span>info@midoproductions.com</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/233244843666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-mono text-[11px] font-bold transition-colors"
                >
                  <span>WhatsApp Chief Engineer</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {currentYear} MIDO Productions Ltd. All Rights Reserved. Accra, Ghana.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Acoustic Engineering</span>
            <span>•</span>
            <span>Choral Acoustics</span>
            <span>•</span>
            <span>Turnkey Production</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
