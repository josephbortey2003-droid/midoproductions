import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sliders, Mic2, Sparkles, Tv, Layers, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function EquipmentPage() {
  const [activeTab, setActiveTab] = useState('audio');

  const categories = [
    { id: 'audio', label: 'Audio & Choral Mics', icon: Sliders },
    { id: 'lighting', label: 'Concert Lighting & Haze', icon: Sparkles },
    { id: 'video', label: 'LED Walls & 4K Video', icon: Tv },
    { id: 'truss', label: 'Trussing & Backline', icon: Layers },
    { id: 'power', label: 'Power & Distribution', icon: Zap },
  ];

  const categoryBanners = {
    audio: {
      image: '/images/portfolio/digital-mixing-console.webp',
      title: 'Digital FOH Consoles & Choral Condenser Arrays',
      desc: 'Yamaha & DiGiCo digital mixing desks, Dante stage boxes, and DPA/Shure cardioid condenser capsules bench-tested in Accra.',
    },
    lighting: {
      image: '/images/production/lighting-moving-heads.webp',
      title: 'Sharpy Moving Heads & Theatrical Washes',
      desc: 'Computer-controlled DMX512 beam fixtures, atmospheric water-based hazers, and warm high-CRI stage facial washes.',
    },
    video: {
      image: '/images/portfolio/led-video-backdrop.webp',
      title: 'P2.9 / P3.9 High-Refresh LED Displays',
      desc: 'NovaStar ultra-low latency video scalers, Blackmagic 4K live switching, and cellular bonding streaming racks.',
    },
    truss: {
      image: '/images/portfolio/stage-box-truss.webp',
      title: 'Certified Box Truss & Stage Risers',
      desc: 'Eurotruss aluminum rigging, tiered choir riser blocks, and concert grand piano rentals with custom isolation.',
    },
    power: {
      image: '/images/production/live-event-atmosphere.webp',
      title: 'Silenced Mobile Power & Distro',
      desc: 'Uninterruptible diesel generators with balanced power distribution units (PDUs) ensuring zero ground-loop hum.',
    },
  };

  const gear = {
    audio: [
      {
        model: 'Yamaha QL5 / CL5 Digital Mixing Consoles',
        role: 'FOH & Choral Broadcast Mixing',
        specs: '64 to 72 mono + 8 stereo channels, Dante native network, premium Rupert Neve Designs VCM processing.',
        why: 'Chosen for ultra-low noise floor, transparent mic preamps, and recallable scene automation during live concerts.',
        status: 'Active Touring Inventory',
      },
      {
        model: 'MIDO Calibrated Line Array Modules & Subs',
        role: 'Main Auditorium / Arena PA',
        specs: '110° horizontal dispersion, neodymium drivers, companion dual-18" cardioid subwoofer arrays.',
        why: 'Enables even sound pressure from row 1 to row 80 without blaring the front rows or muddying reflections.',
        status: 'Scalable up to 24 boxes',
      },
      {
        model: 'DPA & AKG Specialized Choir Condenser Arrays',
        role: 'Vocal Section Capture (Soprano, Alto, Tenor, Bass)',
        specs: 'Ultra-wide dynamic range, high-SPL handling, tight hyper-cardioid and cardioid polar patterns.',
        why: 'Captures full choir breath and consonant articulation with extraordinary feedback rejection.',
        status: '16+ Matched Capsules',
      },
      {
        model: 'Shure Axient Digital & ULX-D Wireless Systems',
        role: 'Soloists, Masters of Ceremony & Conductors',
        specs: 'Frequency-diversity wireless with AES-256 encryption and Dante network integration.',
        why: 'Zero RF dropouts in dense radio environments like downtown Accra and major conference centres.',
        status: 'Rack Inventory',
      },
      {
        model: 'Neumann KM184 & Shure Beta Instrument Microphones',
        role: 'Grand Piano, Brass, Woodwinds & Drums',
        specs: 'Class-A transformerless circuitry, transparent transient capture.',
        why: 'Concert grand piano stereo isolation kits included for acoustic transparency.',
        status: 'Studio & Stage Kits',
      },
    ],
    lighting: [
      {
        model: 'Intelligent Sharpy Moving Beam Fixtures (10R / 17R)',
        role: 'Concert Air Effects & Prism Beam Dynamics',
        specs: 'Razor-sharp 2° beam angle, 14 dichroic colors, 17 gobos, 8-facet rotating prism.',
        why: 'Punches through ambient arena light to create majestic, synchronized lighting scenes.',
        status: '48+ Moving Heads',
      },
      {
        model: 'High-CRI Theatrical Stage Wash Fixtures',
        role: 'Choral Illumination & Face Tone Balance',
        specs: 'High Color Rendering Index (CRI > 95), smooth 0-100% flicker-free dimming for HD television cameras.',
        why: 'Delivers warm, natural skin tones that look brilliant on live cameras.',
        status: 'Full Stage Rig',
      },
      {
        model: 'Water-Based Theatrical Stage Hazers',
        role: 'Atmospheric Beam Definition',
        specs: 'Continuous microscopic haze output, zero residue, scent-free formulation.',
        why: '100% safe for vocalists (will not dry out or irritate singers\' throats during choral performances).',
        status: 'Touring Units',
      },
    ],
    video: [
      {
        model: 'Modular High-Refresh LED Video Walls (P2.9 / P3.9)',
        role: 'Backdrop Video, Hymn Lyrics & 4K IMAG Magnification',
        specs: '3,840Hz refresh rate, 1,200 to 5,500 nits daylight brightness, 160° viewing angle.',
        why: 'Zero camera scanline flicker on DSLR or television broadcast feeds.',
        status: 'Custom Sizing Available',
      },
      {
        model: 'Blackmagic Design 4K Live Broadcast Switching',
        role: 'Multi-Camera Live Video Direction & IMAG',
        specs: '12G-SDI connections, hardware control panels, real-time graphics and lower-thirds.',
        why: 'Sub-frame switching latency for real-time IMAG stage screens.',
        status: 'Complete Video Flightcases',
      },
      {
        model: 'Broadcast Redundant Live Stream Encoders',
        role: 'Global Multi-Platform Transmission',
        specs: 'HEVC / H.264 hardware encoders with cellular bonding across multiple networks.',
        why: 'Automatic failover guarantees unbroken stream during power or line dips.',
        status: 'Deployable Anywhere in Ghana',
      },
    ],
    truss: [
      {
        model: 'Certified Aluminum Box Trussing & Ground Support',
        role: 'Concert Roof Systems & Lighting Grids',
        specs: 'Eurotruss / Prolyte standard aluminum box trussing with certified load ratings.',
        why: 'Safe, certified overhead suspension for moving lights, line arrays, and LED walls.',
        status: 'Full Structural Inventory',
      },
      {
        model: 'Tiered Modular Choral Riser Platforms',
        role: 'Choir Staging Architecture',
        specs: 'Anti-slip surface, modular 3-tier and 4-tier configurations with guardrails.',
        why: 'Ensures proper line-of-sight for every choir row to conductor and acoustic microphones.',
        status: 'Up to 200 Chorister Capacity',
      },
      {
        model: 'Concert Grand Piano & Digital Organ Rentals',
        role: 'Classical Concert Backline',
        specs: 'Concert acoustic grand pianos, Yamaha Clavinova and Hammond/Nord stage organs.',
        why: 'Tuned on-site by certified piano technicians prior to every major performance.',
        status: 'Flightcased & Climate Controlled',
      },
    ],
    power: [
      {
        model: 'Silenced Mobile Diesel Power Generators (60kVA – 250kVA)',
        role: 'Uninterruptible Event Power Supply',
        specs: 'Silenced enclosure (< 65 dBA at 7m), automatic transfer switch (ATS), balanced distribution boards.',
        why: 'Guarantees the show continues without disruption regardless of local grid fluctuations.',
        status: 'Mobile Standby Ready',
      },
    ],
  };

  const currentBanner = categoryBanners[activeTab];

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-[#0A188F] font-bold">
          <span>TOUR-GRADE TECHNICAL INVENTORY</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Calibrated Tour & Studio Equipment.
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          We maintain a comprehensive, tour-grade inventory at our Oyibi warehouse. Every microphone, console, line-array module, and moving light is bench-tested before deployment.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === c.id
                  ? 'bg-[#0A188F] text-white font-bold shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Genuine Photo Banner */}
      <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-slate-50 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-3">
            <span className="text-[11px] font-mono text-[#0A188F] font-bold uppercase tracking-wider block">
              FEATURED INVENTORY CATEGORY
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              {currentBanner.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              {currentBanner.desc}
            </p>
          </div>
          <div className="lg:col-span-5 h-56 lg:h-72 overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
            <img
              src={currentBanner.image}
              alt={currentBanner.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Gear Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gear[activeTab].map((item) => (
          <div
            key={item.model}
            className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#0A188F] font-mono text-[11px] uppercase font-bold">
                  {item.role}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  {item.status}
                </span>
              </div>

              <h2 className="font-display font-bold text-lg text-slate-900">
                {item.model}
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.specs}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-[#0A188F] block mb-0.5 font-mono text-[11px] font-bold">Why We Use This:</strong>
                {item.why}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">
                Calibrated in Accra
              </span>
              <Link
                to="/quote"
                className="text-[#0A188F] hover:text-blue-800 font-bold flex items-center gap-1"
              >
                <span>Add to Rider</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Guarantee */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-700 text-white text-center space-y-4 shadow-xl">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Require custom stage rigging or generator power?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Our senior technical team can coordinate full equipment freight, staging safety sign-offs, and generator fuel logistics for events across Ghana.
        </p>
        <div className="pt-2">
          <Link
            to="/quote"
            className="inline-block px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A188F] font-bold text-xs uppercase tracking-wide transition-all shadow-md active:scale-95"
          >
            Calculate Equipment Package &rarr;
          </Link>
        </div>
      </div>

    </div>
  );
}
