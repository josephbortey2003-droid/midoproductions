import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, Sparkles, Tv, Radio, Mic2, Layers, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'sound',
      title: 'Concert & Choral Sound Engineering',
      image: '/images/portfolio/choral-concert-line-array.webp',
      icon: Volume2,
      subtitle: 'The gold standard for multi-voice choirs, full orchestras, and stadium live sound.',
      description:
        'MIDO is famous across Ghana for solving live sound’s most complex problem: large choral ensembles and classical oratorios. We deploy calibrated line-array dispersion, discrete choir condenser microphones, and zero-feedback gain structures so 100+ singers and a 40-piece orchestra sound perfectly balanced.',
      features: [
        'Up to 128-Channel Digital FOH Consoles (Yamaha / DiGiCo / Allen & Heath)',
        'Calibrated Line Array Systems & Dual-18" Subwoofers for up to 50,000 attendees',
        'Specialized Choral Boundary & Condenser Microphone Arrays (DPA, Shure, AKG)',
        'Stage Foldback & Stereo In-Ear Monitoring (IEM) for Choir Directors & Soloists',
        'Real-Time Multitrack DAW Recording direct from digital stage racks',
      ],
      ideal: 'Choral Concerts, Classical Oratorios, Church Conventions, Live Band Concerts, State Banquets',
      badge: 'Core Specialty',
    },
    {
      id: 'lighting',
      title: 'Intelligent Concert Stage Lighting',
      image: '/images/production/lighting-moving-heads.webp',
      icon: Sparkles,
      subtitle: 'Atmospheric visual design programmed to match the emotional dynamics of every piece.',
      description:
        'Lighting is the visual heartbeat of a performance. Our lighting directors deploy computerized moving beam heads, spot profiles, warm theatrical washes, and vocal-safe theatrical haze to sculpt the stage and immerse audiences in visual majesty.',
      features: [
        'DMX512 / Art-Net Computer-Controlled Moving Heads & Sharpy Beam Rigs',
        'Warm Tungsten & High-CRI LED Washes designed for natural choral skin tones',
        'Theatrical Stage Hazers (Water-based formula, 100% safe for vocalists\' vocal cords)',
        'Strobe Matrices, Stage Blinders & Architectural Column Uplighting',
        'Custom Pre-Programmed Light Shows synced to musical movements and anthems',
      ],
      ideal: 'Grand Concerts, Corporate Galas, Live Broadcasts, National Pageants, High-Profile Weddings',
      badge: 'Visual Impact',
    },
    {
      id: 'led',
      title: 'Concert LED Video Walls & 4K IMAG',
      image: '/images/portfolio/led-video-backdrop.webp',
      icon: Tv,
      subtitle: 'Ultra-bright, flicker-free modular LED walls providing full visual magnification.',
      description:
        'Ensure every patron in the arena has a front-row view. We provide high-refresh indoor and outdoor LED screens with multi-camera 4K IMAG (Image Magnification), custom stage backdrops, and live hymn lyric typography.',
      features: [
        'Modular High-Refresh P2.9 Indoor / P3.9 Outdoor LED Panels',
        'NovaStar Ultra-Low Latency Video Processors & 4K Video Scalers',
        'Multi-Camera Live Video Switching with Sub-Frame Latency for Live Screens',
        'Dynamic Motion Graphic Stage Backdrops, Song Lyrics & Presenter Lower-Thirds',
        'Certified Weatherproof Ground-Stacking & Flying Aluminum Truss Rigging',
      ],
      ideal: 'Arena Conventions, Stadium Concerts, Corporate AGMs, Festivals, Broadcast Galas',
      badge: 'Ultra High-Def',
    },
    {
      id: 'streaming',
      title: 'Global Live Streaming Broadcast',
      image: '/images/portfolio/broadcast-streaming-control.webp',
      icon: Radio,
      subtitle: 'High-definition, low-latency multi-platform streaming connecting Ghana to the diaspora.',
      description:
        'Ghanaian events command an enormous international audience across North America, Europe, and Africa. Our broadcast unit delivers pristine 1080p60/4K video feeds with dedicated multi-channel audio broadcast mastering (completely independent of the auditorium PA).',
      features: [
        'Redundant Cellular & Satellite Bonding Internet (Uninterrupted Stream Guarantee)',
        'Dedicated Broadcast Audio Mixing Engineer (No room echo or muffled live feed)',
        'Simultaneous Multi-Platform Restreaming (YouTube, Facebook, Private Portals)',
        'Real-time Lower Thirds, Choral Solos Titles & Sponsor Graphics Integration',
        'Full HD / 4K Master Archival Recording delivered immediately following the event',
      ],
      ideal: 'International Choral Concerts, Diaspora Funerals, Corporate Summits, Church Conferences',
      badge: 'Broadcast Standard',
    },
    {
      id: 'studio',
      title: 'Mido Studios Complex: Recording & Mastering',
      image: '/images/production/studio-production-oyibi.webp',
      icon: Mic2,
      subtitle: 'Professional acoustic tracking, dialogue restoration, and commercial audio mastering.',
      description:
        'Located at our Oyibi Headquarters, Mido Studios features floating-floor acoustic isolation, Class-A analog preamplifiers, and calibrated listening environments. We specialize in live choral multitrack tracking, album mastering, and audiovisual post-production.',
      features: [
        'Multi-Room Acoustic Tracking Facility with Variable Reverberation Traps',
        'Pro Tools Ultimate & Studio One Digital Audio Workstation Rigs',
        'Class-A Microphone Preamp Arsenal (Neve, SSL, Universal Audio circuitry)',
        'Album Mastering, Audio Restoration & High-Precision Stem Mixing',
        'Voiceover Booth for Commercials, Documentaries & Radio Broadcasts',
      ],
      ideal: 'Choir Album Productions, Gospel Tracking, Movie Scoring, Audio Documentaries',
      badge: 'Oyibi Complex',
    },
    {
      id: 'truss',
      title: 'Stage Staging, Roof Trussing & Backline Rentals',
      image: '/images/portfolio/stage-box-truss.webp',
      icon: Layers,
      subtitle: 'Certified structural box trussing, choir risers, and professional stage backline.',
      description:
        'From modular aluminum stage decks to full outdoor concert roof structures, we provide certified structural staging and premium backline instruments (concert grand pianos, professional drum kits, organ consoles).',
      features: [
        'Heavy-Duty Certified Aluminum Box Trussing & Ground Support Tower Systems',
        'Modular Height-Adjustable Stage Platforms & Tiered Choir Riser Blocks',
        'Concert Grand Pianos & Professional Stage Synthesizers (Yamaha, Nord)',
        'Touring Drum Kits (DW / Pearl), Ampeg Bass Rigs & Fender Guitar Amplifiers',
        'Silenced Diesel Power Generators with Certified Distribution Boards (PDUs)',
      ],
      ideal: 'Outdoor Festivals, Stadium Stages, Cathedral Risers, Touring Concerts, Mega Rallies',
      badge: 'Infrastructure',
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-mono text-[#0A188F] dark:text-sky-300 font-bold">
          <span>OUR PRODUCTION SERVICES</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Comprehensive Audio-Visual & Stage Engineering.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          From sound design for 120-voice choirs to arena-scale concert lighting, LED screens, and international broadcast streaming—MIDO delivers turnkey production under one accountable roof.
        </p>
      </div>

      {/* Services Grid with Real Deployment Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-sky-500 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm overflow-hidden"
            >
              <div className="space-y-5">
                
                {/* Real Image Header */}
                <div className="rounded-2xl overflow-hidden h-48 border border-slate-200 dark:border-slate-800 relative group">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 text-[#0A188F] dark:text-sky-300 border border-blue-200 dark:border-blue-900 font-bold shadow-sm">
                      {s.badge}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#0A188F] dark:text-sky-300 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {s.title}
                    </h2>
                    <p className="text-xs font-semibold text-blue-700 dark:text-sky-400">
                      {s.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {s.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider font-bold">
                    Technical Specifications:
                  </div>
                  {s.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Ideal For:</strong> {s.ideal}
                </div>

              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  to="/quote"
                  className="px-5 py-2.5 rounded-xl bg-[#0A188F] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wide transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>Build Rider Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="tel:+233244843666"
                  className="text-xs text-slate-600 dark:text-slate-400 hover:text-[#0A188F] dark:hover:text-sky-400 flex items-center gap-1 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>Call Engineer</span>
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Turnkey Framework */}
      <section className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 space-y-8 shadow-sm transition-colors">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider font-bold">
            Engagement Framework
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
            How We Deliver Your Event
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="text-2xl font-mono font-bold text-blue-600 dark:text-sky-400">01. Survey</div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Acoustic & Venue Inspection</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              We analyze room dimensions, RT60 reverberation, generator tap points, and sightlines to formulate an exact tech rider.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="text-2xl font-mono font-bold text-blue-600 dark:text-sky-400">02. Calibration</div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Rigging & Sound Check</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Line arrays are laser-aligned, choir microphones polarity-checked, and lighting cues pre-programmed during rehearsals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div className="text-2xl font-mono font-bold text-blue-600 dark:text-sky-400">03. Execution</div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Live Engineering & Broadcast</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Dedicated FOH, monitor, lighting, and streaming directors manage the event in real-time with zero feedback and redundant backups.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-700 text-white text-center space-y-4 shadow-xl">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Require a tailored multi-discipline production package?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Use our interactive tech rider calculator or reach out directly to Mr. Dominic Ansah-Asare.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/quote"
            className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A188F] font-bold text-xs uppercase tracking-wide transition-all shadow-md active:scale-95"
          >
            Launch Interactive Estimator &rarr;
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 text-white font-semibold text-xs border border-white/20 transition-all"
          >
            Contact Oyibi Headquarters
          </Link>
        </div>
      </div>

    </div>
  );
}
