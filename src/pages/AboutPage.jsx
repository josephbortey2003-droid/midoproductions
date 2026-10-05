import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Mic, Music, BookOpen, ShieldCheck, CheckCircle2, MapPin, Phone, ArrowRight, Radio, Sparkles } from 'lucide-react';
import MidoLogo from '../components/MidoLogo';

export default function AboutPage() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'British Council Scholar',
      detail: 'Trained in Music Technology in Ghana under renowned Scottish audio educator Dr. Gordon Ross.',
    },
    {
      icon: Award,
      title: 'Berklee College Member',
      detail: 'Professional member of Berklee College of Music (USA), specializing in modern acoustic engineering.',
    },
    {
      icon: Mic,
      title: 'TV3 Mentor Judge',
      detail: 'Celebrated national judge on Ghana’s premier music talent show, evaluating vocal tone and live performance.',
    },
    {
      icon: Award,
      title: 'Choral Engineer of the Year',
      detail: 'Honored at the GH Youth Choir Choral Festival for excellence in live symphonic and choral sound.',
    },
  ];

  const methodology = [
    {
      step: '01',
      title: 'Acoustic RT60 Room Profiling',
      desc: 'Before any concert, our engineers calculate the reverberation time and reflection points of the hall (whether the National Theatre, Legon Great Hall, or a tent). We align electronic delay lines so sound arrives at every ear in phase.',
    },
    {
      step: '02',
      title: 'Vocal Section Separation',
      desc: '100 choristers singing together cannot be treated like a solo singer. We deploy specialized cardioid condenser arrays tuned specifically to soprano brilliance, alto richness, tenor punch, and bass foundation.',
    },
    {
      step: '03',
      title: 'Zero-Feedback Architecture',
      desc: 'Using ultra-cardioid polar rejection and real-time DSP parametric notch filtration, MIDO guarantees zero squeals or mic howl, even with 30+ open microphones on stage.',
    },
    {
      step: '04',
      title: 'Dual-Mix Broadcast Isolation',
      desc: 'We never send the FOH auditorium mix to television or live streams. A dedicated broadcast engineer mixes independent stems so diaspora viewers on YouTube and Facebook hear album-grade acoustic balance.',
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      
      {/* 1. Page Header with Official Logo */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-3">
          <img
            src="/mido-logo-badge.jpg"
            alt="MIDO Official Emblem"
            className="h-10 w-auto rounded-lg border border-blue-200 p-0.5 bg-[#001080]"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-[#0A188F] font-bold">
            <span>ABOUT MIDO PRODUCTIONS LTD</span>
          </div>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          A Quarter-Century of Acoustic Excellence & African Art Music.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Founded in 2000, MIDO Productions Ltd has grown from an ambitious music studio in Accra into West Africa’s most respected technical event production firm and the definitive gold standard for choral sound engineering.
        </p>
      </div>

      {/* 2. Founder Showcase Section (Dominic Ansah-Asare - Real Photos from Old Site) */}
      <section id="ceo" className="bg-gradient-to-br from-blue-50/70 via-slate-50 to-white rounded-3xl border border-blue-100 p-8 sm:p-12 shadow-lg relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Real Photos of Dominic Ansah-Asare */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Portrait from midoproductions.com/ceo/ */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl group">
              <img
                src="/images/dominic/dominic-ansa-asare-portrait.webp"
                alt="Mr. Dominic Ansah-Asare, CEO of MIDO Productions Ltd"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold block">
                  FOUNDER & CHIEF ENGINEER
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  Mr. Dominic Ansah-Asare
                </h3>
                <p className="text-xs text-slate-200 mt-0.5">
                  British Council Music Technology Alumnus • TV3 Mentor Judge
                </p>
              </div>
            </div>

            {/* In Action Soundboard Photo & Teaching Photo Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group">
                <img
                  src="/images/dominic/dominic-ansa-asare-soundboard.webp"
                  alt="Dominic Ansah-Asare mixing live on digital console"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/70 p-1.5 text-[10px] text-white font-mono text-center">
                  Live FOH Console Tuning
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group">
                <img
                  src="/images/dominic/dominic-ansa-asare-teaching.webp"
                  alt="Dominic Ansah-Asare conducting training at Music Solutions School"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/70 p-1.5 text-[10px] text-white font-mono text-center">
                  Acoustic Masterclass
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Founder Biography & Pedigree */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0A188F]">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#0A188F] font-bold uppercase tracking-wider block">
                  Executive Profile
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900">
                  Leadership Rooted in Musical Heritage
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              <p>
                Coming from a deeply celebrated Ghanaian musical lineage—his father was the revered <strong>Julius Ansa-Asare</strong>—Dominic Ansah-Asare graduated from the University of Ghana, Legon, before dedicating his life to acoustic science, sound engineering, and event production.
              </p>
              <p>
                His professional training in Music Technology was guided directly by <strong>Dr. Gordon Ross</strong> through the British Council in Ghana. To continuously align his craft with world-class international standards, he pursued professional membership at the prestigious <strong>Berklee College of Music</strong> in Boston, USA.
              </p>
              <p>
                As a respected judge on TV3’s nationwide talent show <strong><em>Mentor</em></strong>, Dominic evaluated and coached aspiring vocalists on vocal intonation, tone projection, and microphone discipline. Through his television and media series <strong><em>Choral Insight</em></strong>, he has documented and celebrated the lives and masterpieces of Ghana's greatest choir directors, choral composers, and instrumentalists.
              </p>
            </div>

            {/* Founder Quote */}
            <div className="p-4 rounded-xl bg-white border-l-4 border-blue-600 text-xs sm:text-sm italic text-slate-800 shadow-sm">
              "We do not simply amplify sound; we respect the acoustic architecture of the room and the emotional dignity of the human voice."
              <div className="mt-1 font-mono not-italic text-[11px] text-[#0A188F] font-bold">
                — Dominic Ansah-Asare, CEO & Chief Audio Engineer
              </div>
            </div>

            {/* Credentials Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.title}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                      <div className="font-bold text-slate-900 text-xs">{cred.title}</div>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-snug pl-6">
                      {cred.detail}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. The Context-Responsive Engineering Methodology */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono text-[#0A188F] uppercase tracking-wider font-bold">
            Our Proprietary Approach
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            The "Context-Responsive" Engineering Philosophy
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            While standard PA providers use generic, one-size-fits-all volume presets, MIDO Productions approaches every live event through a 4-step acoustic discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((m) => (
            <div
              key={m.step}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 relative overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-display font-black text-blue-100">
                {m.step}
              </div>
              <h3 className="font-bold text-base text-slate-900">
                {m.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Facilities: Oyibi Complex & Music Solutions School with Real Production Images */}
      <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-10 shadow-sm">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono text-[#0A188F] uppercase tracking-wider font-bold">
            Physical Facilities & Operations
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            The Mido Productions Infrastructure
          </h2>
          <p className="text-slate-600 text-sm">
            Two strategic locations serving greater Accra and national touring productions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Oyibi Hub */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 h-48">
                <img
                  src="/images/production/studio-production-oyibi.webp"
                  alt="Mido Productions Oyibi Studio Complex"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#0A188F] font-bold uppercase">
                  HEADQUARTERS & TECHNICAL COMPLEX
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900 mt-1">
                  Mido Productions Complex — Oyibi
                </h3>
                <div className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Near Gbortsui, Oyibi, Greater Accra Region</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Our state-of-the-art facility housing professional tracking and mastering studios, live sound gear warehousing, fleet staging docks, and the affiliated <strong>Music Solutions School</strong> for audio training.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Contact: +233 540 235 560</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Active Complex</span>
            </div>
          </div>

          {/* Music Solutions School & Audio Academy Hub */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 h-48">
                <img
                  src="/images/dominic/dominic-ansa-asare-teaching.webp"
                  alt="Music Solutions School Audio Engineering Masterclass"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#0A188F] font-bold uppercase">
                  TRAINING ACADEMY & MASTERCLASSES
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900 mt-1">
                  Music Solutions School (MSS) — Oyibi
                </h3>
                <div className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Located at the Mido Productions Complex, Oyibi</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Our educational division spearheaded by Dominic Ansah-Asare. Offering rigorous practical training in live sound management, digital FOH console operation, vocal technique, and choir director acoustic masterclasses.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Enrollment: 050 265 1282 / 020 401 0267</span>
              <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Academy Hub</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Direct Connect CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-700 text-white text-center space-y-4 shadow-xl">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Ready to experience the MIDO difference?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Contact Mr. Dominic Ansah-Asare and our senior engineering team to schedule a site acoustic survey for your next event.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/quote"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A188F] font-bold text-xs uppercase tracking-wide transition-all shadow-md active:scale-95"
          >
            Request Event Tech Rider &rarr;
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 text-white font-semibold text-xs border border-white/20 transition-all"
          >
            Contact Oyibi Technical Complex
          </Link>
        </div>
      </div>

    </div>
  );
}
