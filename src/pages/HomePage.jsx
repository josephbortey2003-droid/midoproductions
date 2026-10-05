import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, Award, ShieldCheck, ArrowRight, CheckCircle2, Sliders, Radio, Music2, Phone, Sparkles, UserCheck, Play, ExternalLink, X } from 'lucide-react';
import { YoutubeIcon } from '../components/SocialIcons';
import AudioVisualizer from '../components/AudioVisualizer';
import SoundboardDemo from '../components/SoundboardDemo';

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const clientLogos = [
    { name: 'Harmonious Chorale Ghana', logo: '/images/clients/harmonious-chorale.webp' },
    { name: 'The Symphonials Ghana', logo: '/images/clients/the-symphonials.webp' },
    { name: 'CIMG National Awards', logo: '/images/clients/cimg-logo.webp' },
    { name: 'Business & Financial Times', logo: '/images/clients/bft-logo.webp' },
    { name: 'Presbyterian Church of Ghana', logo: '/images/clients/presbyterian-church-ghana.webp' },
    { name: 'HPC Ghana', logo: '/images/clients/hpc-logo.webp' },
  ];

  const featuredVideos = [
    {
      id: 'BXnc5jMzZ7c',
      title: 'Interview & Studio Session With Lordina The Soprano',
      category: 'Choral Art Music',
      published: 'September 2026',
      duration: '4:20',
      description: 'Premier Ghanaian classical soprano Lordina shares her experience working with MIDO Productions Ltd on vocal reproduction and acoustic clarity.',
    },
    {
      id: 'fh0BZj4EdwE',
      title: 'Ghana Armed Forces Military Band: "Oman Beye Yie"',
      category: 'Symphonic Brass',
      published: 'March 2026',
      duration: '6:15',
      description: 'Uncle Ato’s classic tracked live by the GAF Military Band at Mido Studios Oyibi, demonstrating warm acoustic brass and percussion separation.',
    },
    {
      id: 'qdLP1yi5FOo',
      title: 'Chamber of Marketers / Cocoa Ghana Launch Event',
      category: 'Corporate Summit',
      published: 'August 2026',
      duration: '3:45',
      description: 'Turnkey live sound reinforcement, stage lighting, and video displays for this milestone national gathering at AICC.',
    },
  ];

  return (
    <div className="space-y-24 pt-20 pb-16 bg-white">
      
      {/* 1. Hero Section (Official Royal Blue & White Branding) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Subtle Ambient Royal Blue Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 -right-20 w-[450px] h-[450px] bg-sky-100/60 rounded-full blur-[150px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Official Logo Banner & Tagline */}
            <div className="flex flex-wrap items-center gap-3">
              <img
                src="/mido-logo-badge.jpg"
                alt="MIDO Productions Official Emblem"
                className="h-11 w-auto rounded-xl border border-blue-200 shadow-sm bg-[#001080] object-contain p-1"
              />
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0A188F]">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-bold tracking-wide">ESTABLISHED 2000 • ACCRA, GHANA</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight">
                Pioneering <span className="text-[#0A188F]">Live Sound & Choral Acoustics</span> for Over Two Decades.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
                Founded by veteran sound engineer <strong>Mr. Dominic Ansah-Asare</strong>, <strong>MIDO Productions Ltd</strong> is Ghana’s definitive benchmark for live concert audio, classical choral acoustics, intelligent stage lighting, 4K LED video walls, and global broadcast transmission.
              </p>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="text-[#0A188F] font-display font-bold text-2xl">24+ Years</div>
                <div className="text-slate-600 text-xs font-medium">Acoustic Mastery</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="text-slate-900 font-display font-bold text-2xl">1,500+</div>
                <div className="text-slate-600 text-xs font-medium">Concerts & Galas</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                <div className="text-blue-600 font-display font-bold text-2xl">World Games</div>
                <div className="text-slate-600 text-xs font-medium">Harmonious Partner</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/quote"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-sm tracking-wide shadow-md shadow-blue-900/20 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>Request Event Tech Rider</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/ceo"
                className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-200 transition-all flex items-center gap-1.5"
              >
                <UserCheck className="w-4 h-4 text-[#0A188F]" />
                <span>CEO Profile</span>
              </Link>

              <a
                href="tel:+233244843666"
                className="text-xs text-slate-600 hover:text-[#0A188F] flex items-center gap-1.5 transition-colors py-2 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call Director: +233 244 843 666</span>
              </a>
            </div>

            {/* Credibility Stamp */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Context-Responsive Calibration • Yamaha & DiGiCo Consoles • Zero-Feedback Guarantee</span>
            </div>

          </div>

          {/* Right Column: Interactive 5-Band EQ & Room Tuner */}
          <div className="lg:col-span-5">
            <AudioVisualizer />
          </div>

        </div>

      </section>

      {/* 2. Genuine Client Logos Marquee / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0A188F] font-bold">
              Trusted Technical Partners Across Ghana
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Choral Champions, Universities & National Institutions
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center pt-2">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 h-24 hover:border-blue-300 transition-colors"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain"
                />
                <span className="text-[10px] text-slate-600 font-mono text-center line-clamp-1">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* 3. Official YouTube Channel & Video Archive Spotlight (Prominently Featured) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-50/70 via-slate-50 to-white rounded-3xl border border-red-100 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-xs font-mono text-red-700 font-bold">
                <YoutubeIcon className="w-4 h-4 text-red-600" />
                <span>OFFICIAL YOUTUBE BROADCASTS • CHANNEL ID: UCw0DzAjtJQe9wO_6eEFSnyw</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Watch Live Productions & Studio Masterclasses
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
                Experience why Ghana's premier choirs, artists, and corporations trust MIDO Productions. Stream full choral performances, Armed Forces band sessions, and audio masterclasses recorded at our Oyibi complex.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/portfolio"
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wide transition-all shadow-md flex items-center gap-2 active:scale-95"
              >
                <span>Browse All 9 Videos in Archive</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.youtube.com/channel/UCw0DzAjtJQe9wO_6eEFSnyw"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4 text-red-600" />
                <span>@midoproductions</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-xl transition-all overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => setSelectedVideo(video)}
                    className="relative h-48 overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-slate-900 font-mono text-[10px] font-bold">
                      {video.category}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[10px] font-semibold">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4
                      onClick={() => setSelectedVideo(video)}
                      className="font-bold text-slate-900 text-sm line-clamp-1 cursor-pointer hover:text-red-600 transition-colors"
                    >
                      {video.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    <span>Watch Video</span>
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">
                    {video.published}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Soundboard A/B Comparison Tool */}
      <SoundboardDemo />

      {/* 4. The Dominic Ansah-Asare Leadership & Heritage (With Real Photo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50/70 via-slate-50 to-white rounded-3xl border border-blue-100 p-8 sm:p-12 shadow-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-mono text-[#0A188F] font-bold">
                <Sliders className="w-3.5 h-3.5 text-blue-600" />
                <span>LEADERSHIP & ENGINEERING HERITAGE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                "Sound is acoustic science in service of musical emotion."
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Under the leadership of <strong>Mr. Dominic Ansah-Asare</strong>—a distinguished British Council Music Technology alumnus under Dr. Gordon Ross, professional member of the Berklee College of Music, and celebrated judge on TV3’s <em>Mentor</em>—MIDO Productions has set the national benchmark for choral music engineering and high-profile event production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="font-bold text-slate-900 text-xs mb-1">Context-Responsive Acoustics</div>
                  <div className="text-[11px] text-slate-600 leading-snug">
                    Tuning line arrays to match room reverberation times and architectural reflections.
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="font-bold text-slate-900 text-xs mb-1">Choral Sound Engineer of the Year</div>
                  <div className="text-[11px] text-slate-600 leading-snug">
                    Honored at the Ghana Youth Choir Festival for pristine symphonic sound.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  to="/ceo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A188F] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Explore CEO Profile & Career Archive</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="text-xs text-slate-600 hover:text-[#0A188F] font-semibold"
                >
                  About the 24-year journey &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Genuine Portrait of Dominic Ansah-Asare */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl group">
                <img
                  src="/images/dominic/dominic-ansa-asare-portrait.webp"
                  alt="Mr. Dominic Ansah-Asare, CEO of MIDO Productions Ltd"
                  className="w-full h-80 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold block">
                      FOUNDER & CHIEF ENGINEER
                    </span>
                    <h3 className="font-serif font-bold text-lg text-white">
                      Mr. Dominic Ansah-Asare
                    </h3>
                    <p className="text-[11px] text-slate-300">
                      British Council Scholar • Berklee Affiliate • TV3 Mentor
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs font-mono shadow-sm">
                <span className="text-slate-600">Facility: Oyibi Production Complex</span>
                <span className="text-emerald-700 font-bold">● Active Operations</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. 6 Core Production Pillars Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono text-[#0A188F] uppercase tracking-wider font-bold block mb-2">
              Comprehensive Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              6 Core Production Pillars
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-bold text-[#0A188F] hover:text-blue-700 flex items-center gap-1.5"
          >
            <span>View detailed technical packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Live Concert & Choral Sound',
              desc: 'High-headroom line-array dispersion, multi-channel FOH consoles, and specialized choir condenser microphones.',
              tag: 'Flagship Craft',
            },
            {
              title: 'Intelligent Concert Stage Lighting',
              desc: 'Computer-controlled moving beam fixtures, wash profiles, and vocalist-safe theatrical haze for breathtaking atmosphere.',
              tag: 'Atmosphere',
            },
            {
              title: 'Concert LED Walls & 4K IMAG',
              desc: 'High-refresh P2.9/P3.9 indoor and outdoor modular LED screens, multi-camera live switching, and instant magnification.',
              tag: 'Visual Reach',
            },
            {
              title: 'Global Live Streaming Broadcast',
              desc: 'Cellular bonding broadcast units delivering low-latency 1080p/4K feeds with independent broadcast mastering.',
              tag: 'Diaspora Reach',
            },
            {
              title: 'Oyibi Recording & Mastering Studio',
              desc: 'Acoustically isolated tracking suites at the Mido Complex for choral albums, film scores, and voiceovers.',
              tag: 'Mido Complex',
            },
            {
              title: 'Stage Staging, Trussing & Rentals',
              desc: 'Heavy-duty certified aluminum box trussing, concert risers, concert grand pianos, and silenced diesel power generators.',
              tag: 'Infrastructure',
            },
          ].map((srv) => (
            <div
              key={srv.title}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-[#0A188F] font-bold border border-blue-200 mb-3 inline-block">
                  {srv.tag}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
                <Link
                  to="/services"
                  className="text-[#0A188F] hover:text-blue-700 font-bold flex items-center gap-1"
                >
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/quote"
                  className="text-slate-500 hover:text-slate-900 font-medium"
                >
                  Get Quote &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Historic Ghanaian Projects Preview with Real Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#0A188F] uppercase tracking-wider font-bold block mb-2">
                Proven Track Record
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">
                Historic Choral & Corporate Collaborations
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-xs font-bold text-[#0A188F] hover:text-blue-700 flex items-center gap-1"
            >
              <span>View full project portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="h-44 overflow-hidden">
                  <img
                    src="/images/portfolio/harmonious-chorale-stage.webp"
                    alt="Harmonious Chorale at World Choir Games"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">South Africa & Ghana</span>
                  <h3 className="font-display font-bold text-base text-slate-900">Harmonious Chorale Ghana</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Long-term technical audio partner, including live sound engineering at the 2018 World Choir Games in South Africa.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="h-44 overflow-hidden">
                  <img
                    src="/images/portfolio/choral-concert-line-array.webp"
                    alt="UG Easter Choral Festival Great Hall"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Great Hall, Legon</span>
                  <h3 className="font-display font-bold text-base text-slate-900">UG Easter Choral Festival</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Managing multi-choir staging, acoustic delay lines, and live radio broadcasting for over 2,500 collegiate patrons.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="h-44 overflow-hidden">
                  <img
                    src="/images/portfolio/corporate-gala-lighting.webp"
                    alt="CIMG National Awards Gala"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">AICC Accra</span>
                  <h3 className="font-display font-bold text-base text-slate-900">CIMG National Awards</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Flawless corporate speech intelligibility, high-refresh LED backdrop video walls, and live presidential protocol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 8. Direct Call to Action */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-700 text-white rounded-3xl p-10 sm:p-14 shadow-2xl text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Plan Your Next Major Production With <span className="text-sky-300">MIDO</span>
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you are staging a cathedral symphony, an executive summit, or a large church convention, our engineers are ready to conduct an acoustic site assessment.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A188F] font-bold text-sm tracking-wide shadow-lg transition-transform active:scale-95"
            >
              Launch Interactive Tech Rider Builder
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-medium text-sm border border-white/30 backdrop-blur-sm transition-all"
            >
              Visit Oyibi Complex / Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Modal Video Player for Featured Videos */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
          >
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5 pr-4">
                <YoutubeIcon className="w-5 h-5 text-red-600 shrink-0" />
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 line-clamp-1">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* YouTube IFrame Embed (Responsive 16:9) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-5 sm:p-6 bg-white space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded bg-red-50 text-red-700 font-mono text-xs font-bold border border-red-200">
                  {selectedVideo.category}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Channel ID: UCw0DzAjtJQe9wO_6eEFSnyw
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedVideo.description}
              </p>
              <div className="pt-2 flex flex-wrap justify-end gap-3">
                <Link
                  to="/portfolio"
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>All Portfolio Videos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>Open on YouTube App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
