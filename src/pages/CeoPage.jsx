import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Mic, Music, BookOpen, ShieldCheck, CheckCircle2, Phone, Mail, ArrowRight, Play, Sparkles } from 'lucide-react';
import { YoutubeIcon } from '../components/SocialIcons';

export default function CeoPage() {
  const achievements = [
    {
      year: '2000',
      title: 'Founded MIDO Productions Ltd',
      desc: 'Established as an acoustic studio in Accra dedicated to high-fidelity audio recording, classical vocal reinforcement, and church sound design.',
    },
    {
      year: 'British Council',
      title: 'Music Technology Training with Dr. Gordon Ross',
      desc: 'Completed advanced audio engineering instruction under Scottish educator Dr. Gordon Ross, standardizing acoustic measurements in Ghana.',
    },
    {
      year: 'Berklee USA',
      title: 'Berklee College of Music Affiliation',
      desc: 'Professional membership in Boston, USA, specializing in modern acoustic engineering, digital signal processing, and psychoacoustics.',
    },
    {
      year: 'TV3 Mentor',
      title: 'National Television Judge & Vocal Coach',
      desc: 'Served as an esteemed national judge on Ghana’s premier musical discovery competition TV3 Mentor, evaluating vocal technique and performance.',
    },
    {
      year: 'Choral Insight',
      title: 'Documentary Producer & Cultural Archivist',
      desc: 'Created and hosted "Choral Insight", documenting Ghanaian composers, choral conductors, and the history of African Art Music.',
    },
    {
      year: 'Award Winning',
      title: 'Choral Sound Engineer of the Year',
      desc: 'Honored by the Ghana Youth Choir Choral Festival for setting the benchmark in live symphonic and choral sound engineering.',
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      
      {/* 1. Header Banner */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-[#0A188F] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>CHIEF EXECUTIVE OFFICER & FOUNDER</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
          Mr. Dominic Ansah-Asare
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Pioneering live sound engineer, classical choral acoustic architect, British Council Music Technology alumnus, and champion of Ghanaian Art Music.
        </p>
      </div>

      {/* 2. Main Executive Profile Section */}
      <section className="bg-gradient-to-br from-blue-50/60 via-slate-50 to-white rounded-3xl border border-blue-100 p-8 sm:p-12 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Portrait Photo (Genuine Image from midoproductions.com/ceo/) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl group">
              <img
                src="/images/dominic/dominic-ansa-asare-portrait.webp"
                alt="Mr. Dominic Ansah-Asare"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs font-mono text-sky-400 font-bold uppercase">
                    CEO / CHIEF AUDIO ENGINEER
                  </div>
                  <div className="font-serif font-bold text-xl text-white">
                    Dominic Ansah-Asare
                  </div>
                  <div className="text-xs text-slate-300">
                    Mido Productions Ltd • Est. 2000
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Executive Line</div>
                <div className="text-xs font-bold text-slate-900">+233 244 843 666</div>
              </div>
              <a
                href="tel:+233244843666"
                className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0A188F] font-bold text-xs border border-blue-200 transition-colors"
              >
                Call Office
              </a>
            </div>
          </div>

          {/* Biography Text & Philosophical Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Mr. Dominic Ansah-Asare</strong> is one of Ghana's most respected authorities on concert sound reinforcement, choral acoustics, and broadcast audio. Son of the revered composer and choir master <strong>Julius Ansa-Asare</strong>, Dominic was immersed from early childhood in the disciplines of vocal harmony, organ performance, and Ghanaian choral traditions.
              </p>
              <p>
                After graduating from the University of Ghana, Legon, he received intensive audio engineering and music technology mentorship from Scottish educator <strong>Dr. Gordon Ross</strong> through the British Council in Ghana. He further expanded his professional pedigree through affiliation with the <strong>Berklee College of Music</strong> in Boston, USA.
              </p>
              <p>
                In 2000, he founded <strong>MIDO Productions Ltd</strong>, transforming it into the gold standard for live event production across West Africa. Today, under his direct engineering leadership, MIDO delivers sound reinforcement, intelligent lighting, and 4K LED visuals for Ghana's most prestigious choirs, state ceremonies, and multinational corporate summits.
              </p>
            </div>

            {/* Key Quote Box */}
            <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm relative">
              <div className="text-3xl text-blue-300 font-serif absolute top-3 left-4">“</div>
              <p className="text-sm sm:text-base italic text-slate-800 font-serif relative z-10 pl-6 leading-relaxed">
                The human voice is the most delicate and expressive instrument created. When 100 voices sing together, you cannot simply make them loud. You must understand reverberation, phase alignment, and vocal timbre so the audience hears every consonant and feels every lyric.
              </p>
              <div className="mt-3 pl-6 text-xs font-mono text-[#0A188F] font-bold">
                — Dominic Ansah-Asare
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. In the Field: Console Mixing & Masterclasses */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono text-[#0A188F] uppercase tracking-wider font-bold">
            Engineering in Action
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            From the FOH Console to the Classroom
          </h2>
          <p className="text-slate-600 text-sm">
            Genuine photographs from live concert tours, mixing sessions, and educational masterclasses at the Mido Complex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white space-y-3 p-3">
            <div className="rounded-xl overflow-hidden h-56">
              <img
                src="/images/dominic/dominic-ansa-asare-soundboard.webp"
                alt="Dominic Ansah-Asare live mixing on digital console"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2 space-y-1">
              <div className="text-xs font-mono text-[#0A188F] font-bold uppercase">LIVE CONCERT FOH</div>
              <h4 className="font-bold text-slate-900 text-sm">Touring Digital Console Mixing</h4>
              <p className="text-xs text-slate-600">
                Operating 64-channel digital desks with real-time multi-track capture during choral concerts.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white space-y-3 p-3">
            <div className="rounded-xl overflow-hidden h-56">
              <img
                src="/images/dominic/dominic-ansa-asare-teaching.webp"
                alt="Dominic Ansah-Asare teaching music technology"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2 space-y-1">
              <div className="text-xs font-mono text-[#0A188F] font-bold uppercase">EDUCATION & TRAINING</div>
              <h4 className="font-bold text-slate-900 text-sm">Music Solutions School</h4>
              <p className="text-xs text-slate-600">
                Mentoring the next generation of Ghanaian sound engineers, lighting operators, and choir directors.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white space-y-3 p-3">
            <div className="rounded-xl overflow-hidden h-56">
              <img
                src="/images/dominic/dominic-ansa-asare-founder.webp"
                alt="Dominic Ansah-Asare founder portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2 space-y-1">
              <div className="text-xs font-mono text-[#0A188F] font-bold uppercase">LEADERSHIP</div>
              <h4 className="font-bold text-slate-900 text-sm">Acoustic Consultation</h4>
              <p className="text-xs text-slate-600">
                Providing architectural acoustic evaluations for auditoriums, cathedrals, and event venues across Ghana.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Career Milestones & Honors */}
      <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-sm">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono text-[#0A188F] uppercase tracking-wider font-bold">
            Career Chronology
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            A Legacy of Excellence & Cultural Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-blue-300 transition-colors"
            >
              <div className="text-xs font-mono font-bold text-[#0A188F] bg-blue-50 inline-block px-2.5 py-1 rounded-md border border-blue-200">
                {item.year}
              </div>
              <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-700 text-white text-center space-y-4 shadow-xl">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Book an Acoustic Consultation with Dominic Ansah-Asare
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          For large choral concerts, cathedral acoustic treatments, or major corporate galas, consult directly with our Chief Engineer.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 w-full max-w-md mx-auto sm:max-w-none">
          <Link
            to="/quote"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0A188F] font-bold text-xs uppercase tracking-wide transition-all shadow-md active:scale-95 text-center"
          >
            Submit Tech Rider for Review &rarr;
          </Link>
          <a
            href="https://wa.me/233244843666?text=Hello%20Mr.%20Dominic%20Ansah-Asare!%20I%20would%20like%20to%20consult%20with%20you%20regarding%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md text-center"
          >
            Direct WhatsApp Consultation
          </a>
          <a
            href="https://www.youtube.com/channel/UCw0DzAjtJQe9wO_6eEFSnyw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>Watch On YouTube</span>
          </a>
        </div>
      </div>

    </div>
  );
}
