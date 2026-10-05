import React from 'react';
import { Star, Quote, Award, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        'When you have 120 choristers, a live brass section, and a grand piano on stage, you cannot afford guesswork. Dominic and MIDO Productions are the only team in Ghana that understands choral balance and reverberation without drowning the voices in feedback.',
      author: 'Choral Director & Conductor',
      ensemble: 'Leading Ghanaian Choral Ensemble',
      badge: 'World Choir Games Partner',
      rating: 5,
    },
    {
      quote:
        'The Great Hall at Legon is an acoustically treacherous space with long natural reverberation. MIDO’s delayed line array configuration during the Easter Choral Festival made every lyric distinctly audible from the front row to the uppermost balcony.',
      author: 'Festival Producer',
      ensemble: 'University of Ghana Annual Choral Series',
      badge: 'Annual Festival Partner',
      rating: 5,
    },
    {
      quote:
        'Our corporate summit involved live television broadcast, presidential protocol, and international delegates. MIDO delivered flawless audio intelligibility, immaculate P2.9 LED backdrops, and zero hiccups across two full days.',
      author: 'Corporate Communications Director',
      ensemble: 'CIMG National Summit Production',
      badge: 'Corporate Standard',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative bg-[#05070B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-xs font-mono text-[#FFB800] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY ACCLAIM</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Masters of Music & Corporate Leaders
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Over two decades of acoustic discipline have made MIDO the default production choice for Ghana’s most demanding live events.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={r.author}
              className="p-8 rounded-3xl bg-[#0A0D15] border border-white/10 hover:border-[#FFB800]/40 transition-all flex flex-col justify-between relative shadow-xl group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-6 text-[#FFB800]">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-white/10 mb-4 group-hover:text-[#FFB800]/30 transition-colors" />

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="font-display font-bold text-white text-sm">
                  {r.author}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {r.ensemble}
                </div>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>{r.badge}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
