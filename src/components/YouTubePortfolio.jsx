import React, { useState } from 'react';
import { Play, ExternalLink, Calendar, CheckCircle2, Sparkles, X, Radio } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

export default function YouTubePortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const channelId = "UCw0DzAjtJQe9wO_6eEFSnyw";
  const channelUrl = `https://www.youtube.com/channel/${channelId}`;

  const categories = [
    { id: 'all', label: 'All Productions' },
    { id: 'choral', label: 'Choral & Classical Vocals' },
    { id: 'corporate', label: 'Corporate Summits & Launches' },
    { id: 'military', label: 'Armed Forces Symphonic Bands' },
    { id: 'training', label: 'Live Sound Masterclasses (LMT)' },
  ];

  const videos = [
    {
      id: 'BXnc5jMzZ7c',
      title: 'Interview & Studio Session With Lordina The Soprano',
      category: 'choral',
      published: 'September 2026',
      duration: '4:20',
      description: 'Premier Ghanaian classical soprano Lordina shares her experience working with MIDO Productions Ltd, discussing acoustic balance, vocal reproduction, and choral sound engineering.',
      tag: 'Choral Art Music',
    },
    {
      id: 'fh0BZj4EdwE',
      title: 'Ghana Armed Forces Military Band: "Oman Beye Yie"',
      category: 'military',
      published: 'March 2026',
      duration: '6:15',
      description: 'Powerful live brass and woodwind ensemble tracking of Uncle Ato’s classic "Oman Beye Yie", captured live at the Mido Studios acoustic tracking suites in Oyibi.',
      tag: 'Symphonic Brass',
    },
    {
      id: 'qdLP1yi5FOo',
      title: 'Chamber of Marketers / Cocoa Ghana Launch Event',
      category: 'corporate',
      published: 'August 2026',
      duration: '3:45',
      description: 'Official production highlight showing MIDO Productions providing turnkey live sound reinforcement, stage lighting, and video displays for this milestone national gathering.',
      tag: 'Corporate Launch',
    },
    {
      id: 'jh2L8qK3rj8',
      title: 'Ghana Armed Forces Music School: Highlife & Kpanlogo Medley',
      category: 'military',
      published: 'March 2026',
      duration: '7:10',
      description: 'The military dance and brass band delivers an electrifying Highlife & Kpanlogo medley. Exemplary instrumental separation and dynamic range tracking.',
      tag: 'African Big Band',
    },
    {
      id: 'HR-UrLgu8yw',
      title: 'Business & Financial Times (B&FT) Marine Insurance Forum',
      category: 'corporate',
      published: 'July 2026',
      duration: '2:50',
      description: 'Multi-microphone corporate speech transmission and executive audio coverage at the annual Marine Insurance Forum organized by B&FT.',
      tag: 'Executive Summit',
    },
    {
      id: '2fmK-F6feIA',
      title: 'Gary Al-Smith Sports Recap & Studio Dialogue Session',
      category: 'corporate',
      published: 'August 2026',
      duration: '5:30',
      description: 'Renowned sports journalist Gary Al-Smith in the Mido Studios tracking suite for an in-depth conversation and broadcast media session.',
      tag: 'Studio Broadcast',
    },
    {
      id: '2ATzFQtj3WY',
      title: 'Live Sound Management Training Programme (LMT)',
      category: 'training',
      published: 'April 2026',
      duration: '3:15',
      description: 'Dominic Ansah-Asare and senior engineers teaching console gain staging, cable impedance, and feedback notch filters to church audio teams.',
      tag: 'Audio Masterclass',
    },
    {
      id: 'VRkkTXe8faI',
      title: 'Must Churches Pay Musicians? LMT Industry Panel',
      category: 'training',
      published: 'March 2026',
      duration: '8:45',
      description: 'Mido Productions hosts esteemed music directors, theologians, and live sound engineers for a frank discussion on church acoustics and musician welfare.',
      tag: 'Industry Dialogue',
    },
    {
      id: 'DoXaA6vApOQ',
      title: 'Ghana Armed Forces Band: "Osiee Yiee" (George Darko)',
      category: 'military',
      published: 'March 2026',
      duration: '5:50',
      description: 'A classic Highlife arrangement by George Darko performed with military precision and warm acoustic tonality at Mido Studios.',
      tag: 'Highlife Heritage',
    },
  ];

  const filtered =
    activeCategory === 'all'
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-red-50/60 via-slate-50 to-white rounded-3xl border border-red-100 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 border border-red-200 text-xs font-mono text-red-700 font-bold">
            <YoutubeIcon className="w-4 h-4 text-red-600" />
            <span>OFFICIAL YOUTUBE CHANNEL • @MIDOPRODUCTIONS</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Live Concert & Studio Video Archive
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Watch real concert performances, Armed Forces military band recordings at Mido Studios, choral solo sessions, and corporate summits produced by MIDO Productions.
          </p>
        </div>

        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 shrink-0 active:scale-95"
        >
          <YoutubeIcon className="w-4 h-4" />
          <span>Subscribe to Channel</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCategory(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === c.id
                ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((video) => (
          <div
            key={video.id}
            className="rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between shadow-sm group"
          >
            <div>
              {/* Thumbnail Container with Play Overlay */}
              <div
                onClick={() => setSelectedVideo(video)}
                className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-semibold">
                  {video.duration}
                </span>

                {/* Tag Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-900 font-bold text-[10px] uppercase font-mono shadow-sm">
                  {video.tag}
                </span>

                {/* Big Red Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-500 transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{video.published}</span>
                </div>

                <h3
                  onClick={() => setSelectedVideo(video)}
                  className="font-display font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors cursor-pointer line-clamp-2 leading-snug"
                >
                  {video.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => setSelectedVideo(video)}
                className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1"
              >
                <span>Watch Video</span>
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900 flex items-center gap-1 font-mono text-[11px]"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal Video Player */}
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
                <span className="px-2.5 py-1 rounded bg-blue-50 text-[#0A188F] font-mono text-xs font-bold border border-blue-200">
                  {selectedVideo.tag}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Channel ID: {channelId}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedVideo.description}
              </p>
              <div className="pt-2 flex justify-end gap-3">
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
    </section>
  );
}
