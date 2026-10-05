import React, { useState } from 'react';
import { Award, Music, Radio, Tv, Users, MapPin, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Historic Productions' },
    { id: 'choral', label: 'Choral Symphonies & Classical' },
    { id: 'corporate', label: 'Corporate Summits & Awards' },
    { id: 'broadcast', label: 'Broadcast & Media Series' },
  ];

  const projects = [
    {
      title: 'Harmonious Chorale at the World Choir Games',
      category: 'choral',
      venue: 'Tshwane, South Africa & National Theatre, Ghana',
      date: 'Historic Partnership',
      overview:
        'Official sound engineering partner for Harmonious Chorale Ghana during their landmark global performance at the World Choir Games in South Africa, as well as their annual sold-out concert series in Accra.',
      technicalHighlights: [
        'Multi-channel condenser choral arrays for 100+ voices',
        'Direct multi-track recording and documentary sound design',
        'Phase-aligned acoustic foldback for choir director',
      ],
      impact: 'Gold and Champion honors; acclaimed as one of the best-sounding African choirs globally.',
      tag: 'International Flagship',
    },
    {
      title: 'University of Ghana Annual Easter Choral Festival',
      category: 'choral',
      venue: 'The Great Hall, Legon, Accra',
      date: 'Annual Tradition',
      overview:
        'The nation’s most prestigious annual academic choral gathering, featuring multiple rival collegiate and independent choirs performing intricate classical oratorios and Ghanaian art music.',
      technicalHighlights: [
        'Acoustic RT60 delay management in high-ceiling hall',
        'Instant multi-choir staging turnaround without mic feedback',
        'Broadcast audio feed direct to Radio Univers and national networks',
      ],
      impact: 'Over 2,500 live attendees in the Great Hall with pristine vocal clarity.',
      tag: 'Academic Landmark',
    },
    {
      title: 'CIMG Customer Satisfaction Index & Awards',
      category: 'corporate',
      venue: 'Accra International Conference Centre (AICC)',
      date: 'Corporate Production',
      overview:
        'Technical audiovisual production for the Chartered Institute of Marketing, Ghana (CIMG) flagship summit, featuring presidential dignitaries, CEO panels, and a live entertainment big band.',
      technicalHighlights: [
        'Dual P2.9 high-refresh LED backdrop video walls',
        'Speech Transmission Index > 0.88 across 1,800 delegates',
        'Live broadcast streaming to multinational corporate viewers',
      ],
      impact: 'Flawless 6-hour live executive conference with zero audio interruptions.',
      tag: 'Corporate Excellence',
    },
    {
      title: 'One Voice Choir & The Symphonials Oratorios',
      category: 'choral',
      venue: 'Accra / Kumasi Cathedral Concerts',
      date: 'Classical Series',
      overview:
        'Comprehensive live acoustic sound engineering and studio album production for One Voice Choir and The Symphonials Ghana, capturing Handel, Mozart, and indigenous Ghanaian choral anthems.',
      technicalHighlights: [
        'Specialized pipe organ and grand piano stereo capture',
        'High dynamic range capture without digital clipping',
        'Subsequent multi-track studio mastering at Oyibi complex',
      ],
      impact: 'Released multiple top-charting Ghanaian gospel and classical albums.',
      tag: 'Studio & Live',
    },
    {
      title: '"Choral Insight" Television & Documentary Series',
      category: 'broadcast',
      venue: 'Studio Production & On-Location Across Ghana',
      date: 'Media Creation',
      overview:
        'An original educational and documentary initiative hosted and produced by Dominic Ansah-Asare, delving into the minds of Ghana’s iconic conductors, composers, and vocal legends.',
      technicalHighlights: [
        'Broadcast multi-camera 4K cinematography',
        'Studio acoustic dialogue mastering and restoration',
        'Archival digitization of historic Ghanaian choral manuscripts',
      ],
      impact: 'Educated hundreds of thousands of aspiring musicians and sound enthusiasts.',
      tag: 'Cultural Heritage',
    },
    {
      title: 'Grand Cathedral Celebrations & Presidential Galas',
      category: 'corporate',
      venue: 'Accra State House & Cathedral Sanctuaries',
      date: 'State & Sacred',
      overview:
        'Full turnkey event infrastructure including aluminum stage box trussing, concert beam lighting, dual LED IMAG screens, and redundant generator power for major state and sacred occasions.',
      technicalHighlights: [
        'Redundant power distribution with zero blackout risk',
        'Intelligent beam light choreography timed to hymn fanfares',
        'Multi-lingual wireless translation and press audio distribution',
      ],
      impact: 'Standard-setting ceremonial presentation for heads of state and global ambassadors.',
      tag: 'State & Protocol',
    },
  ];

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative bg-[#090C13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-xs font-mono text-[#FFB800] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>PROVEN PRODUCTION TRACK RECORD</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Signature Projects & Historic Collaborations
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              From international choir competitions to the most demanding state banquets, discover how MIDO delivers under the spotlight.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#FFB800] text-black font-bold shadow'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, idx) => (
            <div
              key={proj.title}
              className="p-7 rounded-3xl bg-[#0C101A] border border-white/10 hover:border-[#FFB800]/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Tag & Venue */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 font-semibold text-[10px] uppercase">
                    {proj.tag}
                  </span>
                  <span className="text-slate-400 text-[11px] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span className="truncate max-w-[150px]">{proj.venue.split('&')[0]}</span>
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#FFB800] transition-colors leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {proj.overview}
                </p>

                {/* Technical highlights */}
                <div className="space-y-2 mb-5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-[#00F2FE] uppercase tracking-wider font-semibold">
                    Technical Execution:
                  </div>
                  {proj.technicalHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-[#00F2FE] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Callout */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono text-slate-400">
                  <span className="text-white font-semibold">Outcome: </span>
                  {proj.impact}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
