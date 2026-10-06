import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Music, MapPin, Calendar, CheckCircle2, Tv, Users, ArrowRight, Camera, Sparkles } from 'lucide-react';
import YouTubePortfolio from '../components/YouTubePortfolio';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Historic Projects' },
    { id: 'choral', label: 'Choral & Classical Symphonies' },
    { id: 'corporate', label: 'Corporate & State Summits' },
    { id: 'broadcast', label: 'Broadcast & Media Series' },
  ];

  const clientLogos = [
    { name: 'Harmonious Chorale Ghana', logo: '/images/clients/harmonious-chorale.webp' },
    { name: 'The Symphonials Ghana', logo: '/images/clients/the-symphonials.webp' },
    { name: 'CIMG National Awards', logo: '/images/clients/cimg-logo.webp' },
    { name: 'Business & Financial Times (B&FT)', logo: '/images/clients/bft-logo.webp' },
    { name: 'Presbyterian Church of Ghana', logo: '/images/clients/presbyterian-church-ghana.webp' },
    { name: 'HPC Ghana', logo: '/images/clients/hpc-logo.webp' },
  ];

  const projects = [
    {
      title: 'Harmonious Chorale Ghana at the World Choir Games',
      category: 'choral',
      image: '/images/portfolio/harmonious-chorale-stage.webp',
      venue: 'Tshwane, South Africa & National Theatre, Ghana',
      client: 'Harmonious Chorale Ghana',
      year: 'Historic Collaboration',
      challenge:
        'Capturing 100+ singers with complex 8-part polyphony on international competition stages without monitor bleed or feedback.',
      solution:
        'Dominic Ansah-Asare deployed discrete condenser array zoning and custom acoustic foldback so choristers could hear the piano without acoustic spill.',
      outcome:
        'Awarded Gold and Category Champion honors; hailed as one of the best-sounding African choral presentations on the world stage.',
      tag: 'International Acclaim',
    },
    {
      title: 'University of Ghana Annual Easter Choral Festival',
      category: 'choral',
      image: '/images/portfolio/choral-concert-line-array.webp',
      venue: 'The Great Hall, Legon, Accra',
      client: 'University of Ghana / UG Music Department',
      year: 'Annual National Tradition',
      challenge:
        'High cavernous ceilings with 3.2-second natural reverberation (RT60), creating severe echo for audience members beyond row 20.',
      solution:
        'Precision acoustic time-aligned delay line arrays deployed along the hall columns, delivering crisp consonant intelligibility throughout all 2,500 seats.',
      outcome:
        'Zero feedback across 6 competing university and collegiate choirs; live broadcast feeds sent to Radio Univers and national TV.',
      tag: 'Academic Benchmark',
    },
    {
      title: 'CIMG Customer Satisfaction Index & National Awards',
      category: 'corporate',
      image: '/images/portfolio/corporate-gala-lighting.webp',
      venue: 'Accra International Conference Centre (AICC)',
      client: 'Chartered Institute of Marketing, Ghana (CIMG)',
      year: 'Executive Production',
      challenge:
        'Executive summit featuring state ministers, CEO keynotes, and a 16-piece big band requiring seamless transitions without audio interruptions.',
      solution:
        'Automated digital scene recall on Yamaha digital console, dual P2.9 high-refresh LED backdrop video walls, and encrypted wireless microphones.',
      outcome:
        'Flawless 6-hour live executive conference and gala broadcast across Ghana with 100% speech clarity.',
      tag: 'Corporate Excellence',
    },
    {
      title: 'The Symphonials Ghana – Classical Masterpieces',
      category: 'choral',
      image: '/images/portfolio/orchestra-brass-strings.webp',
      venue: 'Cathedral Sanctuaries & Concert Halls',
      client: 'The Symphonials Ghana',
      year: 'Oratorio Series',
      challenge:
        'Dynamic range swings from whisper-quiet pianissimo to thunderous fortissimo with full orchestral brass and timpani.',
      solution:
        'Multi-track 24-bit/96kHz digital capture using transformerless condenser capsules for choir and custom stereo grand piano isolation.',
      outcome:
        'Released multiple critically acclaimed Ghanaian classical and sacred albums.',
      tag: 'Studio & Live',
    },
    {
      title: 'MIDO Sound Engineering Crew – National Concert Staging',
      category: 'choral',
      image: '/images/production/choral-choir-performance.jpg',
      venue: 'National Theatre of Ghana & Touring Auditoriums',
      client: 'MIDO Technical Crew & Resident Engineers',
      year: 'Touring & Soundcheck',
      challenge:
        'Managing high-channel condenser microphone distribution, multi-monitor acoustic zoning, and live multi-track capture across touring venues.',
      solution:
        'Dominic Ansah-Asare leads resident MIDO audio engineers deploying Dante digital stage boxes and real-time spectrum analyzers.',
      outcome:
        'Consistently acclaimed for setting the benchmark of professional sound engineering discipline on Ghanaian stages.',
      tag: 'MIDO Technical Crew',
    },
    {
      title: '"Choral Insight" Documentary & TV Series',
      category: 'broadcast',
      image: '/images/portfolio/broadcast-streaming-control.webp',
      venue: 'Mido Studios (Oyibi) & On-Location Across Ghana',
      client: 'Produced & Hosted by Dominic Ansah-Asare',
      year: 'Archival Initiative',
      challenge:
        'Preserving Ghana’s choral heritage and exploring the rehearsal techniques of iconic conductors and composers.',
      solution:
        'Broadcast multi-camera 4K cinematography, studio dialogue restoration, and archival audio mastering at the Oyibi Complex.',
      outcome:
        'Widely celebrated across Ghanaian television and social media for elevating music technology education.',
      tag: 'Cultural Heritage',
    },
    {
      title: 'Cathedral Acoustic Sound Reinforcement',
      category: 'choral',
      image: '/images/portfolio/cathedral-sound-reinforcement.webp',
      venue: 'Major Cathedrals & Sanctuaries, Greater Accra',
      client: 'Presbyterian Church of Ghana & Ecumenical Bodies',
      year: 'Sacred Architecture',
      challenge:
        'Vast stained-glass and marble sanctuaries with intense high-frequency reflection obscuring spoken liturgy and choir verses.',
      solution:
        'Cardioid steerable column arrays focused strictly on the congregational seating plane, minimizing ceiling reflections.',
      outcome:
        'Pristine sermon comprehension and celestial choral blend during major commemorative services.',
      tag: 'Acoustic Architecture',
    },
    {
      title: 'Arena LED Video Walls & 4K IMAG Staging',
      category: 'corporate',
      image: '/images/portfolio/led-video-backdrop.webp',
      venue: 'Mega Stadiums & Convention Centers',
      client: 'National Corporate Summits & Mega Conventions',
      year: 'Arena Production',
      challenge:
        'Massive spectator distance requiring instantaneous low-latency video magnification and bright daylight visibility.',
      solution:
        'NovaStar-driven P3.9 modular outdoor LED walls with sub-frame camera switching and certified aluminum truss grids.',
      outcome:
        'Uninterrupted 1080p60 visual magnification with vivid contrast and zero camera flicker.',
      tag: 'Visual Rigging',
    },
    {
      title: 'Certified Box Truss & Flying Roof Rigging',
      category: 'corporate',
      image: '/images/portfolio/stage-box-truss.webp',
      venue: 'Open Parks & Outdoor Grounds',
      client: 'Outdoor Music Festivals & State Galas',
      year: 'Structural Engineering',
      challenge:
        'Safely suspending tons of moving beam lights, line arrays, and video panels in outdoor open-air environments with unpredictable wind loads.',
      solution:
        'Eurotruss-standard certified ground-support towers with engineered ballast calculations and certified chain hoists.',
      outcome:
        '100% safety record maintained over 24 years of large-scale open-air staging across Ghana.',
      tag: 'Structural Safety',
    },
  ];

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-mono text-[#0A188F] dark:text-sky-300 font-bold">
          <Camera className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
          <span>AUTHENTIC PORTFOLIO & CASE STUDIES</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Two Decades on Ghana’s Grandest Stages.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
          From international choir championships to presidential state summits, explore genuine photographs and technical breakdowns from MIDO Productions' historic archive.
        </p>
      </div>

      {/* 2. Client Partner Logo Bar (Genuine Clients from Mido Site) */}
      <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm transition-colors">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-[#0A188F] dark:text-sky-400 font-bold">
            Trusted By Ghana’s Foremost Choirs & Institutions
          </span>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Official Production Partners</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center gap-2 h-24 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain dark:brightness-110"
              />
              <span className="text-[10px] text-slate-600 dark:text-slate-300 font-mono text-center line-clamp-1">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Filter Tabs */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === c.id
                ? 'bg-[#0A188F] dark:bg-blue-600 text-white font-bold shadow-md shadow-blue-900/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* 4. Projects Grid with Genuine Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((proj) => (
          <div
            key={proj.title}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-sky-500 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm overflow-hidden group"
          >
            <div>
              {/* Genuine Project Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/90 text-[#0A188F] dark:text-sky-300 font-bold text-[10px] uppercase font-mono shadow-sm">
                    {proj.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 text-white font-mono text-[10px] backdrop-blur-sm">
                    {proj.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">
                    {proj.title}
                  </h2>
                  <div className="text-xs text-blue-700 dark:text-sky-400 mt-1.5 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                    <span className="line-clamp-1">{proj.venue}</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                    <strong className="text-rose-700 dark:text-rose-400 block mb-0.5 font-mono text-[10px] font-bold uppercase">
                      Acoustic Challenge:
                    </strong>
                    <p className="line-clamp-3">{proj.challenge}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50">
                    <strong className="text-[#0A188F] dark:text-sky-300 block mb-0.5 font-mono text-[10px] font-bold uppercase">
                      MIDO Solution:
                    </strong>
                    <p className="line-clamp-3">{proj.solution}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                <strong className="text-slate-900 dark:text-white">Outcome: </strong>
                {proj.outcome}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 5. Live YouTube Video Showcase & Channel Broadcasts */}
      <YouTubePortfolio />

      {/* 6. Production Atmosphere Showcase */}
      <section className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm transition-colors">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider font-bold">
            Live Production Gallery
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
            Precision Gear in Action
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Genuine photographs from live sound checks, moving head lighting programs, and grand piano acoustic miking across Accra.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 shadow-sm group">
            <img
              src="/images/production/lighting-moving-heads.webp"
              alt="Sharpy moving heads stage lighting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 shadow-sm group">
            <img
              src="/images/production/concert-grand-piano.webp"
              alt="Concert grand piano acoustic miking"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 shadow-sm group">
            <img
              src="/images/production/sound-engineer-foh.webp"
              alt="MIDO sound engineer at FOH desk"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-44 shadow-sm group">
            <img
              src="/images/production/stage-truss-rigging.webp"
              alt="Aluminum box truss rigging"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-700 text-white text-center space-y-4 shadow-xl">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Have an upcoming concert, church convention, or corporate summit?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Contact our technical team to discuss acoustic modeling and production riders for your venue.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/quote"
            className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A188F] font-bold text-xs uppercase tracking-wide transition-all shadow-md active:scale-95"
          >
            Build Event Tech Rider &rarr;
          </Link>
          <Link
            to="/ceo"
            className="px-6 py-3.5 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 text-white font-semibold text-xs border border-white/20 transition-all"
          >
            Meet Chief Engineer Dominic Ansah-Asare
          </Link>
        </div>
      </div>

    </div>
  );
}
