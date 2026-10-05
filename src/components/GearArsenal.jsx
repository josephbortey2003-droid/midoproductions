import React, { useState } from 'react';
import { Sliders, Cpu, Radio, Sparkles, Tv, Layers, Check, Shield } from 'lucide-react';

export default function GearArsenal({ onOpenEstimator }) {
  const [activeCategory, setActiveCategory] = useState('consoles');

  const categories = [
    { id: 'consoles', label: 'FOH Mixing & DSP', icon: Sliders },
    { id: 'speakers', label: 'Line Arrays & PA', icon: Cpu },
    { id: 'mics', label: 'Microphones & RF', icon: Radio },
    { id: 'lighting', label: 'Lighting & Effects', icon: Sparkles },
    { id: 'video', label: 'LED & Broadcast', icon: Tv },
  ];

  const inventory = {
    consoles: [
      {
        name: 'Digital Multichannel Consoles (Yamaha / DiGiCo Class)',
        role: 'Front of House (FOH) & Broadcast Engine',
        specs: 'Up to 128 channels, 96kHz internal DSP, Dante primary/secondary redundant network, touch faders.',
        feature: 'Instant multi-track DAW recording & iPad wireless remote stage mixing.',
        available: 'Touring & Local Fleet Ready',
      },
      {
        name: 'Allen & Heath / Soundcraft Digital Rigs',
        role: 'Monitor Desk & Sub-mix Substation',
        specs: '64 input channels, 32 discrete aux mixes for in-ear monitoring and choir section feeds.',
        feature: 'Ultra-low 0.7ms latency stage monitoring.',
        available: 'In Stock Accra',
      },
      {
        name: 'Dante Stage I/O Racks (Rio / DX32 Caliber)',
        role: 'Pristine Stage Box Pre-amplification',
        specs: 'Pure analog-to-digital preamps, optical fiber transmission, zero ground loop hum.',
        feature: 'Galvanic isolation over 300 meters Cat6a cabling.',
        available: 'Multiple Racks Available',
      },
    ],
    speakers: [
      {
        name: 'Concert High-Throw Line Array Elements',
        role: 'Main Arena & Auditorium Sound Reinforcement',
        specs: 'Dual-10" / Dual-12" neodymium drivers with titanium compression horns, 110° horizontal dispersion.',
        feature: 'Uniform SPL coverage from row 1 to row 120 without ear-piercing front peaks.',
        available: 'Flying or Ground-Stacked Rigs',
      },
      {
        name: 'Dual-18" High-Excursion Ground Subwoofers',
        role: 'Sub-Bass Foundation (28Hz – 90Hz)',
        specs: '4,000W peak handling per cabinet, cardioid array beam-steering capability.',
        feature: 'Deep bass that does not rattle choral condenser microphones.',
        available: 'Up to 24 Sub Enclosures',
      },
      {
        name: 'Coaxial Active Stage Wedges & In-Ear Monitors',
        role: 'Soloist, Conductor & Band Reference Monitoring',
        specs: '12" / 15" coaxial low-profile wedges with Sennheiser / Shure stereo wireless IEM belts.',
        feature: 'Precision foldback ensuring conductors hear choir and instruments in exact sync.',
        available: 'Comprehensive Stage Setup',
      },
    ],
    mics: [
      {
        name: 'DPA & AKG Choral Boundary & Condenser Array',
        role: '100+ Voice Choral Capture & String Section',
        specs: 'Flat frequency response (20Hz - 20kHz), exceptional off-axis rejection, high SPL tolerance.',
        feature: 'Eliminates choral phase cancellation and reproduces natural vocal bloom.',
        available: 'Specialized Choral Rig',
      },
      {
        name: 'Shure Axient & ULX-D Digital Wireless Systems',
        role: 'Keynote Speakers, Soloists & Pastors',
        specs: 'Encrypted AES-256 digital transmission, rechargeable battery telemetry, true diversity antennas.',
        feature: 'Zero RF dropouts, even in high-congestion central Accra venues.',
        available: '32+ Wireless Channels',
      },
      {
        name: 'Neumann KM184 & Shure Beta Instrument Mics',
        role: 'Grand Piano, Brass, Woodwinds & Drums',
        specs: 'Class-A transformerless circuitry, transparent transient capture.',
        feature: 'Concert grand piano stereo isolation kits included.',
        available: 'Studio & Stage Kits',
      },
    ],
    lighting: [
      {
        name: 'Intelligent Sharpy Moving Beam Fixtures (10R / 17R)',
        role: 'Concert Air Effects & Prism Beam Dynamics',
        specs: 'Razor-sharp 2° beam angle, 14 dichroic colors, 17 gobos, 8-facet rotating prism.',
        feature: 'Punches through ambient light for majestic arena beams.',
        available: '48+ Moving Heads',
      },
      {
        name: 'RGBW High-Output Theatrical Stage Wash Lights',
        role: 'Choral Illumination & Face Tone Balance',
        specs: 'High CRI > 95, smooth 0-100% flicker-free dimming for HD television broadcast.',
        feature: 'Flattering, warm skin tones that look brilliant on live cameras.',
        available: 'Large Array in Stock',
      },
      {
        name: 'Theatrical Safe Water-Based Concert Hazers',
        role: 'Atmospheric Beam Definition',
        specs: 'Continuous microscopic haze output, zero residue, scent-free formulation.',
        feature: '100% vocal-safe (will not dry out or irritate singers\' throats).',
        available: 'Touring Tour Units',
      },
    ],
    video: [
      {
        name: 'Modular High-Refresh LED Video Walls (P2.9 / P3.9)',
        role: 'Backdrop Video, Song Lyrics & 4K IMAG Magnification',
        specs: '3,840Hz refresh rate, 1,200 to 5,500 nits daylight brightness, 160° viewing angle.',
        feature: 'Zero camera scanline flicker on DSLR or broadcast television feeds.',
        available: 'Custom Sizing up to 100+ sq meters',
      },
      {
        name: 'Blackmagic Design 4K Live Broadcast Switching',
        role: 'Multi-Camera Live Video Direction & IMAG',
        specs: '12G-SDI connections, hardware control panels, real-time graphics and lower-thirds.',
        feature: 'Sub-frame switching latency for real-time IMAG stage screens.',
        available: 'Complete Video Control Flightcases',
      },
      {
        name: 'Broadcast Redundant Live Stream Encoders',
        role: 'Global Multi-Platform Transmission',
        specs: 'HEVC / H.264 hardware encoders with cellular bonding across multiple networks.',
        feature: 'Automatic failover guarantees unbroken stream during power or line dips.',
        available: 'Deployable Anywhere in Ghana',
      },
    ],
  };

  return (
    <section id="gear" className="py-24 relative bg-[#05070B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/30 text-xs font-mono text-[#00F2FE] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE TECHNICAL ARSENAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tour-Grade Equipment Inventory
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We do not compromise with unbranded gear. Every piece of equipment in our Oyibi warehouse is tour-tested, calibrated, and maintained to international broadcast standards.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-[#FFB800] text-black font-bold shadow-[0_0_20px_rgba(255,184,0,0.35)] scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Inventory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inventory[activeCategory].map((item, idx) => (
            <div
              key={item.name}
              className="p-6 rounded-3xl bg-[#0B0F19] border border-white/10 hover:border-[#00F2FE]/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-[#00F2FE] uppercase tracking-wider">
                    {item.role}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.available}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-[#FFB800] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.specs}
                </p>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-400 leading-snug">
                  <span className="text-[#FFB800] font-semibold block mb-0.5 font-mono text-[11px]">
                    Engineering Edge:
                  </span>
                  {item.feature}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Inspected & Calibrated
                </span>
                <button
                  onClick={onOpenEstimator}
                  className="text-xs font-mono text-[#00F2FE] hover:underline"
                >
                  Add to Rider &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Equipment Maintenance Quality Stamp */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#FFB800]" />
            <span>
              All audio, lighting, and video systems undergo pre-event bench tests at the Oyibi facility before deployment.
            </span>
          </div>
          <button
            onClick={onOpenEstimator}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white whitespace-nowrap transition-colors"
          >
            Request Full Technical Rider List
          </button>
        </div>

      </div>
    </section>
  );
}
