import React from 'react';
import { Award, BookOpen, GraduationCap, Mic, Music, Sliders, CheckCircle2, Star, Quote } from 'lucide-react';

export default function DominicLegacy() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'British Council Scholar',
      detail: 'Trained in Music Technology in Ghana under Dr. Gordon Ross.',
    },
    {
      icon: Award,
      title: 'Berklee College Member',
      detail: 'Professional member of Berklee College of Music (USA).',
    },
    {
      icon: Mic,
      title: 'TV3 Mentor Judge',
      detail: 'Celebrated national judge mentoring vocalists and studio talent.',
    },
    {
      icon: Star,
      title: 'Choral Engineer of the Year',
      detail: 'GH Youth Choir Festival laureate for exceptional live sound.',
    },
  ];

  const pillars = [
    {
      title: '01. Spatial RT60 Calibration',
      desc: 'No two venues sound alike. In reverberant halls like the Great Hall or National Theatre, we map early reflections and calculate acoustic delay lines so sound arrives in perfect phase cohesion.',
    },
    {
      title: '02. Polyphonic Choral Isolation',
      desc: 'Choral voices require organic air, not artificial compression. We employ calibrated condenser arrays tuned specifically to soprano brilliance, alto richness, tenor punch, and bass foundation.',
    },
    {
      title: '03. Zero-Feedback Gain Architecture',
      desc: 'Using ultra-cardioid boundary techniques and surgical notch DSP, MIDO guarantees zero squeals or mic howl, even with 100+ live stage mics active before thousands of attendees.',
    },
    {
      title: '04. High-Fidelity Broadcast Summing',
      desc: 'Simultaneous FOH (Front-of-House) reinforcement and independent multi-track broadcast feeds, guaranteeing that live stream listeners on YouTube and Facebook hear album-grade mastering.',
    },
  ];

  return (
    <section id="legacy" className="py-24 relative overflow-hidden bg-[#05070B]">
      
      {/* Background glow and subtle stage grid */}
      <div className="pointer-events-none absolute top-1/2 -left-40 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-[140px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-xs font-mono text-[#FFB800] mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>THE ARCHITECT OF MODERN GHANAIAN ACOUSTICS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Dominic Ansah-Asare Legacy & <br />
            <span className="text-gold-gradient">The "Context-Responsive" Approach</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded by <strong>Dominic Opare Ansah-Asare</strong>, MIDO Productions was born from an unwavering obsession with acoustic truth. Coming from a venerable musical family (son of Julius Ansa-Asare) and educated at the University of Ghana, Legon, Dominic revolutionized how live art music and choral symphonies are captured in Africa.
          </p>
        </div>

        {/* Two-Column Grid: Founder Profile & Credentials vs. Context-Responsive Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Founder Persona & Credentials Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-[#0F1422] to-[#080B12] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              
              {/* Founder Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFB800] to-[#E59400] p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-[14px] bg-[#0A0D15] flex items-center justify-center text-[#FFB800]">
                    <Music className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    Dominic Ansah-Asare
                  </h3>
                  <div className="text-xs font-mono text-[#FFB800]">
                    Founder, CEO & Chief Sound Engineer
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Host of "Choral Insight" • Est. 2000
                  </div>
                </div>
              </div>

              {/* Quote Card */}
              <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <Quote className="w-8 h-8 text-[#FFB800]/20 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "Sound engineering is not merely turning knobs; it is an intimate scientific dialogue between the architectural acoustics of the venue, the timbre of the choir, and the emotional intent of the composer."
                </p>
                <div className="mt-3 text-[11px] font-mono text-slate-400 font-semibold">
                  — Dominic Ansah-Asare
                </div>
              </div>

              {/* Academic & Professional Credentials List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Distinctions & Pedigree
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {credentials.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.title}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#FFB800]/30 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-[#FFB800] mb-1.5" />
                        <div className="font-bold text-xs text-white">{c.title}</div>
                        <div className="text-[11px] text-slate-400 leading-snug mt-1">
                          {c.detail}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Facility Badge */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Facility: Mido Complex, Oyibi</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active Recording
              </span>
            </div>

          </div>

          {/* Right Column: The 4 Tenets of Context-Responsive Acoustics */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-[#090C13] border border-white/10 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-mono text-[#00F2FE] uppercase tracking-wider block">
                    The Proprietary Methodology
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    What Makes "Context-Responsive" Engineering Different?
                  </h3>
                </div>
                <div className="hidden sm:flex px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-slate-400 border border-white/10">
                  AES / Berklee Grounded
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillars.map((p, idx) => (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00F2FE]/40 transition-all group"
                  >
                    <div className="text-xs font-mono text-[#FFB800] font-bold mb-2 group-hover:text-[#00F2FE] transition-colors">
                      {p.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Choral Partnership Callout */}
            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#FFB800]/10 via-transparent to-[#00F2FE]/10 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-white">
                  Long-term Technical Partner for Harmonious Chorale Ghana
                </div>
                <div className="text-[11px] text-slate-400">
                  Engineered live in South Africa at the 2018 World Choir Games & nationwide tours.
                </div>
              </div>
              <a
                href="#portfolio"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs whitespace-nowrap transition-colors"
              >
                View Case Studies &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
