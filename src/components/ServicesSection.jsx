import React, { useState } from 'react';
import { Volume2, Sparkles, Tv, Radio, Mic2, Layers, CheckCircle, ChevronRight, Sliders, ArrowUpRight } from 'lucide-react';

export default function ServicesSection({ onOpenEstimator }) {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'sound',
      title: 'Concert & Choral Sound Engineering',
      icon: Volume2,
      tagline: 'Precision acoustic reinforcement from intimate sanctuaries to 50,000-seat stadiums.',
      description:
        'MIDO is world-renowned for solving the hardest challenge in live sound: large choral ensembles and acoustic orchestras. We deploy calibrated line-array dispersion, Dante digital multi-channel routing, and high-headroom stage monitors so every voice shines with total clarity and zero feedback.',
      specs: [
        'Up to 128-Channel Digital Mix Consoles (Yamaha / DiGiCo / Allen & Heath caliber)',
        'Calibrated High-Throw Line Array Systems & Dual-18" Subwoofers',
        'Specialized Choral Boundary & Condenser Mic Arrays (DPA, Shure, AKG)',
        'RF Frequency Coordination for 30+ Wireless Channels without Interference',
        'Real-time Multitrack Audio Recording direct from FOH console',
      ],
      idealFor: 'Choral Concerts, Classical Oratorios, Mega-Churches, Music Festivals, State Events',
      badge: 'Core Specialty',
    },
    {
      id: 'lighting',
      title: 'Intelligent Concert Stage Lighting',
      icon: Sparkles,
      tagline: 'Cinematic visual atmosphere programmed to match the emotion of every movement.',
      description:
        'Lighting is the emotional heartbeat of a performance. Our lighting designers utilize moving beam fixtures, spot profiles, warm choral washes, and controlled theatrical haze to sculpt the stage and immerse audiences in mesmerizing visual splendor.',
      specs: [
        'DMX512 / Art-Net Computer-Controlled Moving Heads & Beam Sharpy Rigs',
        'Tungsten & Warm LED Choral Wash Fixtures for Natural Skin Tones',
        'Theatrical Stage Hazers & Atmosphere Generators (Safe for Vocalists)',
        'Strobe Matrices, Blind Matrix Panels & Architectural Stage Uplighting',
        'Pre-Programmed Dynamic Cue Stacks synced to Musical Scores',
      ],
      idealFor: 'Grand Concerts, Corporate Galas, Live Broadcast Shows, Pageants, High-Profile Weddings',
      badge: 'Visual Impact',
    },
    {
      id: 'led',
      title: 'Concert LED Video Walls & 4K IMAG',
      icon: Tv,
      tagline: 'High-refresh, ultra-bright modular video walls delivering razor-sharp visual reach.',
      description:
        'Ensure every audience member has the best seat in the house. We provide high-refresh indoor/outdoor LED screens with multi-camera 4K IMAG (Image Magnification), custom stage backdrops, and live song lyric typography.',
      specs: [
        'Modular High-Refresh P2.9 Indoor / P3.9 Outdoor LED Panels',
        'NovaStar Ultra-Low Latency Video Processors & 4K Scalers',
        'Multi-Camera Live Video Switching & Director Communications Rig',
        'Dynamic Stage Backdrop Graphics, Song Lyrics & Presenter Lower-Thirds',
        'Weatherproof Outdoor Truss Suspension & Ground Stacking Systems',
      ],
      idealFor: 'Stadium Conventions, Arena Concerts, Outdoor Festivals, Corporate AGMs, Summits',
      badge: 'Ultra High-Def',
    },
    {
      id: 'stream',
      title: 'Global Live Streaming Broadcast',
      icon: Radio,
      tagline: 'Low-latency, multi-platform streaming connecting local events to the global diaspora.',
      description:
        'Ghanaian music and events command a massive international audience. Our broadcast streaming unit delivers television-grade 1080p/4K feeds with independent multi-track broadcast audio mastering so virtual viewers feel like they are front row.',
      specs: [
        'Redundant Multi-SIM Cellular & Satellite Internet Bonding',
        'Independent Broadcast Audio Master (Separate from Live Room PA)',
        'Simultaneous Multi-Platform Restreaming (YouTube, Facebook, RTMP, Web)',
        'Custom Interactive Live Chat Overlays & Sponsor Graphic Integration',
        'Full HD / 4K Master Archival Recording delivered within 2 hours',
      ],
      idealFor: 'International Choral Broadcasts, Diaspora Funerals, Corporate Summits, Church Conferences',
      badge: 'Broadcast Standard',
    },
    {
      id: 'studio',
      title: 'Mido Studios Complex: Recording & Mastering',
      icon: Mic2,
      tagline: 'State-of-the-art acoustic facility in Oyibi for choirs, bands, and album mastering.',
      description:
        'Located at the Mido Productions Complex in Oyibi, our recording studios provide treated tracking rooms, vocal isolation booths, and master control rooms capable of multi-tracking large ensembles, symphonic works, and commercial albums.',
      specs: [
        'Acoustically Isolated Tracking Rooms for Large Choirs and Orchestras',
        'High-End Analog Preamps, Valve Compressors & Pristine A/D Converters',
        'Spatial Audio & Dolby Atmos Mastering Readiness',
        'Album Production, Vocal Pitch Correction & Audio Restoration Suites',
        'Comfortable Production Lounge & On-Site Engineering Lodging',
      ],
      idealFor: 'Choir Album Projects, Gospel Recording, Movie Scoring, Voiceovers, Audio Documentaries',
      badge: 'Oyibi Complex',
    },
    {
      id: 'truss',
      title: 'Stage Staging, Roof Trussing & Backline Rentals',
      icon: Layers,
      tagline: 'Certified structural engineering, heavy aluminum trussing, and premium instruments.',
      description:
        'From modular aluminum stage decks to full concert roof structures, we provide certified structural support and backline rentals so performers have world-class equipment under their fingers.',
      specs: [
        'Heavy-Duty Certified Aluminum Box Trussing & Ground Support Towers',
        'Modular Height-Adjustable Stage Platforms & Choir Riser Blocks',
        'Concert Grand Pianos, Professional Keyboards (Nord, Yamaha Motif)',
        'Pro Drum Kits (DW / Pearl), Ampeg Bass Rigs & Fender Guitar Amps',
        'Silent Diesel Mobile Power Generators & Certified Power Distribution (PDUs)',
      ],
      idealFor: 'Outdoor Festivals, Stadium Stages, Cathedral Risers, Touring Concerts, Mega Rallies',
      badge: 'Heavy Infrastructure',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#090C13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-xs font-mono text-[#FFB800] mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>END-TO-END TECHNICAL EXECUTION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              6 Core Production Pillars
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every dimension of live technical event execution—managed under one roof with unyielding standards of acoustic fidelity and visual sophistication.
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            className="self-start md:self-end px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 hover:border-[#FFB800]/50 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>Quote Multiple Services</span>
            <ChevronRight className="w-4 h-4 text-[#FFB800]" />
          </button>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="p-7 rounded-3xl bg-gradient-to-b from-[#111726]/80 to-[#0A0D15]/90 border border-white/10 hover:border-[#FFB800]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(255,184,0,0.15)]"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFB800] group-hover:scale-110 group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/30 transition-all p-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:border-[#FFB800]/30 group-hover:text-[#FFB800] transition-colors">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#FFB800] transition-colors">
                    {s.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-[#00F2FE] mb-4">
                    {s.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  {/* Bullet Specs */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Technical Capabilities:
                    </div>
                    {s.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FFB800] shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Ideal For & CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400 truncate max-w-[180px]">
                    Ideal: {s.idealFor.split(',')[0]}
                  </div>

                  <button
                    onClick={onOpenEstimator}
                    className="text-xs font-mono font-semibold text-[#FFB800] hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>Request Rig</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
