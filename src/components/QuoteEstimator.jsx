import React, { useState } from 'react';
import { Calculator, CheckCircle, Sliders, ArrowRight, MessageSquare, Phone, Send, Sparkles, Users, MapPin, Volume2 } from 'lucide-react';

export default function QuoteEstimator() {
  const [eventType, setEventType] = useState('choral');
  const [attendance, setAttendance] = useState('1500');
  const [venueType, setVenueType] = useState('hall');
  const [selectedServices, setSelectedServices] = useState({
    sound: true,
    lighting: true,
    led: false,
    streaming: false,
    truss: false,
    generator: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [clientInfo, setClientInfo] = useState({ name: '', phone: '', eventDate: '', notes: '' });

  const eventTypes = [
    { id: 'choral', label: 'Choral Concert / Classical Oratorio', multiplier: 1.2 },
    { id: 'corporate', label: 'Corporate Summit / National Awards', multiplier: 1.1 },
    { id: 'concert', label: 'Live Band / Contemporary Concert', multiplier: 1.3 },
    { id: 'convention', label: 'Church Convention / Mega Gathering', multiplier: 1.25 },
    { id: 'wedding', label: 'High-Profile Wedding & Banquet', multiplier: 1.0 },
  ];

  const attendanceTiers = [
    { id: '500', label: 'Up to 500 Guests', soundSpec: '4x Tops + 2x Dual-18" Subs (Ground Stack)' },
    { id: '1500', label: '500 – 1,500 Guests', soundSpec: '8x Line Array Elements + 4x Dual-18" Subs' },
    { id: '5000', label: '1,500 – 5,000 Guests', soundSpec: '16x Flown Line Array + 8x Cardioid Subs' },
    { id: '15000', label: '5,000 – 15,000 Arena', soundSpec: '24x Flown Array + Delay Towers + 16x Subs' },
  ];

  const venueOptions = [
    { id: 'hall', label: 'Auditorium / Theatrical Hall (e.g. National Theatre, Great Hall)' },
    { id: 'outdoor', label: 'Open Grounds / Stadium / Park' },
    { id: 'ballroom', label: 'Hotel Ballroom / Marquee Tent' },
    { id: 'church', label: 'Church Sanctuary' },
  ];

  const serviceOptions = [
    { id: 'sound', label: 'Concert Audio & Digital FOH Desk', baseGHS: 7500 },
    { id: 'lighting', label: 'Intelligent Beam & Wash Lighting', baseGHS: 5000 },
    { id: 'led', label: 'High-Refresh LED Video Wall & 4K IMAG', baseGHS: 6500 },
    { id: 'streaming', label: 'Global Live Streaming Broadcast', baseGHS: 3500 },
    { id: 'truss', label: 'Certified Box Truss & Stage Platforms', baseGHS: 4500 },
    { id: 'generator', label: 'Silenced Mobile Generator & Power Distro', baseGHS: 2500 },
  ];

  const toggleService = (id) => {
    setSelectedServices((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentAttendance = attendanceTiers.find((t) => t.id === attendance) || attendanceTiers[1];
  const currentType = eventTypes.find((t) => t.id === eventType) || eventTypes[0];

  let rawTotal = 0;
  serviceOptions.forEach((s) => {
    if (selectedServices[s.id]) {
      const attendanceScale = attendance === '500' ? 1 : attendance === '1500' ? 1.4 : attendance === '5000' ? 2.2 : 3.5;
      rawTotal += s.baseGHS * attendanceScale * currentType.multiplier;
    }
  });

  const crewSize =
    attendance === '500' ? '4-5 Specialists' : attendance === '1500' ? '6-8 Specialists' : attendance === '5000' ? '10-14 Specialists' : '18+ Crew';

  const generateWhatsAppMessage = () => {
    const text = `Hello MIDO Productions Ltd!
I used your online Tech Rider Estimator:
- Event: ${currentType.label}
- Estimated Crowd: ${currentAttendance.label}
- Venue: ${venueOptions.find((v) => v.id === venueType)?.label}
- Services Selected: ${Object.keys(selectedServices).filter((k) => selectedServices[k]).join(', ')}
- Estimated Sound Spec: ${currentAttendance.soundSpec}
- Recommended Crew: ${crewSize}
Name: ${clientInfo.name || 'Not provided'}
Phone: ${clientInfo.phone || 'Not provided'}
Event Date: ${clientInfo.eventDate || 'TBD'}

Please review my tech rider and send an official quote.`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-mono text-[#0A188F] dark:text-sky-300 font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE PRODUCTION PLANNER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Build Your Event <span className="text-[#0A188F] dark:text-sky-400">Technical Rider</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Specify your expected audience size, venue acoustics, and production requirements to calculate recommended equipment specifications, technical crew deployment, and budget guidance.
          </p>
        </div>

        {/* The Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 shadow-sm">
            
            {/* 1. Event Type */}
            <div>
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3 font-bold">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {eventTypes.map((et) => (
                  <button
                    key={et.id}
                    type="button"
                    onClick={() => setEventType(et.id)}
                    className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                      eventType === et.id
                        ? 'bg-blue-50 dark:bg-blue-950/70 border-[#0A188F] dark:border-sky-400 text-[#0A188F] dark:text-sky-300 font-bold shadow-sm ring-1 ring-[#0A188F] dark:ring-sky-400'
                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {et.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Crowd Attendance */}
            <div>
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3 font-bold">
                2. Expected Audience Capacity
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {attendanceTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setAttendance(tier.id)}
                    className={`p-3 rounded-xl text-center border text-xs font-mono transition-all ${
                      attendance === tier.id
                        ? 'bg-[#0A188F] dark:bg-blue-600 border-[#0A188F] dark:border-blue-500 text-white font-bold shadow-md shadow-blue-900/20'
                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Venue Nature */}
            <div>
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3 font-bold">
                3. Venue Acoustic Nature
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {venueOptions.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVenueType(v.id)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      venueType === v.id
                        ? 'bg-blue-50 dark:bg-blue-950/70 border-[#0A188F] dark:border-sky-400 text-[#0A188F] dark:text-sky-300 font-bold shadow-sm ring-1 ring-[#0A188F] dark:ring-sky-400'
                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Production Modules Needed */}
            <div>
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-3 font-bold">
                4. Select Production Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((serv) => (
                  <div
                    key={serv.id}
                    onClick={() => toggleService(serv.id)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      selectedServices[serv.id]
                        ? 'bg-blue-50/70 dark:bg-blue-950/50 border-[#0A188F] dark:border-sky-400 text-slate-900 dark:text-white font-medium'
                        : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-xs font-medium">{serv.label}</span>
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${
                        selectedServices[serv.id]
                          ? 'bg-[#0A188F] border-[#0A188F] text-white'
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                      }`}
                    >
                      {selectedServices[serv.id] && <CheckCircle className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Tech Rider Output & Submission */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl relative sticky top-28">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-xs font-mono text-[#0A188F] dark:text-sky-400 tracking-wider uppercase font-bold">
                  Technical Rider Summary
                </span>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mt-0.5">
                  Recommended Deployment
                </h3>
              </div>
              <Sparkles className="w-5 h-5 text-[#0A188F] dark:text-sky-400" />
            </div>

            {/* Recommended Rig Specs Box */}
            <div className="space-y-3 bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-mono">
              <div className="flex justify-between items-start text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span className="text-slate-500 dark:text-slate-400">Audio Rig:</span>
                <span className="text-[#0A188F] dark:text-sky-300 font-bold text-right max-w-[200px]">{currentAttendance.soundSpec}</span>
              </div>
              <div className="flex justify-between text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span className="text-slate-500 dark:text-slate-400">FOH Console:</span>
                <span className="text-slate-900 dark:text-white font-semibold">Yamaha / DiGiCo 64-Ch Digital</span>
              </div>
              <div className="flex justify-between items-center text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span className="text-slate-500 dark:text-slate-400">Crew Deployment:</span>
                <span className="text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">{crewSize}</span>
              </div>
              <div className="flex justify-between text-slate-700 dark:text-slate-300">
                <span className="text-slate-500 dark:text-slate-400">Phase & Delay Tuning:</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">Included (RT60 Analyzer)</span>
              </div>
            </div>

            {/* Estimated Cost Guide */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-slate-800/90 dark:to-blue-950/60 border border-blue-200 dark:border-blue-900 text-center shadow-sm">
              <div className="text-[11px] font-mono text-[#0A188F] dark:text-sky-300 uppercase tracking-wider font-bold">
                Indicative Production Cost Range
              </div>
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
                GHS {Math.round(rawTotal * 0.85).toLocaleString()} – GHS {Math.round(rawTotal * 1.25).toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                *Subject to venue acoustic survey, generator fuel, and rehearsal days.
              </div>
            </div>

            {/* Fast Action Options */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Org"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                  />
                </div>
                <input
                  type="date"
                  value={clientInfo.eventDate}
                  onChange={(e) => setClientInfo({ ...clientInfo, eventDate: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                />

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/20 transition-all"
                  >
                    Submit Technical Rider Inquiry
                  </button>

                  <a
                    href={`https://wa.me/233244843666?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-mono text-xs text-center flex items-center justify-center gap-2 font-bold transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Send Directly via WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Tech Rider Submitted!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Mr. Dominic Ansah-Asare & the MIDO technical team will review your specifications and contact you shortly.
                </p>
                <a
                  href={`https://wa.me/233244843666?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
                >
                  Confirm on WhatsApp Now
                </a>
              </div>
            )}

            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 text-center">
              Direct Production Dispatch: <strong className="text-slate-800 dark:text-slate-200">+233 24 437 6900 / 024 484 3666</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
