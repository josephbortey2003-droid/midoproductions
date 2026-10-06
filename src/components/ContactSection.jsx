import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'sound',
    eventDate: '',
    venue: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-mono text-[#0A188F] dark:text-sky-300 font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>ACCRA HEADQUARTERS & TECHNICAL DISPATCH</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Connect With Our <span className="text-[#0A188F] dark:text-sky-400">Engineering Team</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Planning a major concert, choral festival, corporate summit, or studio recording session? Contact our engineering team at the Oyibi Complex for acoustic site surveys, equipment riders, and studio bookings.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Locations & Contact Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Hub: Oyibi Complex */}
            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-sky-500 hover:bg-white dark:hover:bg-slate-850 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#0A188F] dark:text-sky-300">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Mido Productions Complex (Headquarters)
                  </h3>
                  <span className="text-[11px] font-mono text-[#0A188F] dark:text-sky-400 font-bold">
                    Acoustic Studios, Gear Warehouse & Staging Fleet
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Near Gbortsui, Oyibi, Greater Accra, Ghana.
              </p>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 shadow-sm">
                Consolidated headquarters housing our live touring sound fleet, floating tracking studios, and master control suites.
              </div>
            </div>

            {/* Training Academy: Music Solutions School */}
            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-sky-500 hover:bg-white dark:hover:bg-slate-850 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#0A188F] dark:text-sky-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Music Solutions School & Masterclass Hub
                  </h3>
                  <span className="text-[11px] font-mono text-[#0A188F] dark:text-sky-400 font-bold">
                    Professional Audio Training & Consultations
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Mido Productions Complex, Near Gbortsui, Oyibi, Accra, Ghana.
              </p>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2">
                Postal: P.O. Box AN 12782, Accra North, Ghana
              </div>
            </div>

            {/* Direct Phone & WhatsApp Dispatch */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="text-xs font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider font-bold">
                Direct Communication Lines
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+233244376900"
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 hover:bg-blue-50/70 dark:hover:bg-blue-950/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-sky-500 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0A188F] dark:text-sky-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">+233 24 437 6900</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">General Production Hotline</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#0A188F] dark:text-sky-400 font-bold">CALL</span>
                </a>

                <a
                  href="tel:+233244843666"
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 hover:bg-blue-50/70 dark:hover:bg-blue-950/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-sky-500 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0A188F] dark:text-sky-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">+233 244 843 666</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Dominic Ansah-Asare / Chief Engineer</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#0A188F] dark:text-sky-400 font-bold">CALL</span>
                </a>

                <a
                  href="tel:+233540235560"
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 hover:bg-blue-50/70 dark:hover:bg-blue-950/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-sky-500 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0A188F] dark:text-sky-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">+233 540 235 560 / 050 265 1282</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Oyibi Complex / Studio Sessions</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#0A188F] dark:text-sky-400 font-bold">STUDIO</span>
                </a>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-center gap-3 text-xs">
                  <Mail className="w-4 h-4 text-[#0A188F] dark:text-sky-400" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">info@midoproductions.com</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Official Corporate Inquiries</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/233244843666?text=Hello%20MIDO%20Productions!%20I%20am%20contacting%20you%20from%20your%20website%20regarding%20event%20production%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between transition-all text-emerald-800 dark:text-emerald-300"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold font-mono">WhatsApp Fast Track</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400">ONLINE</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Booking Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-lg">
            <div className="mb-6">
              <span className="text-xs font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-wider block font-bold">
                Official Booking & Site Survey Request
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-1">
                Request an Acoustic Consultation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Fill in your project parameters. Mr. Dominic Ansah-Asare and our senior production team will prepare an acoustic evaluation and equipment proposal.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-700 dark:text-slate-300 block mb-1.5 font-bold">
                      Contact Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Harmonious Chorale / CIMG"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-700 dark:text-slate-300 block mb-1.5 font-bold">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+233 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-700 dark:text-slate-300 block mb-1.5 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-700 dark:text-slate-300 block mb-1.5 font-bold">
                      Primary Service Required
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                    >
                      <option value="sound">Concert & Choral Sound Engineering</option>
                      <option value="lighting">Intelligent Concert Stage Lighting</option>
                      <option value="led">Concert LED Screens & 4K IMAG</option>
                      <option value="stream">Live Streaming Broadcast</option>
                      <option value="studio">Oyibi Studio Recording & Mastering</option>
                      <option value="full">Full Turnkey Production (Sound, Light, LED, Stage)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono text-slate-700 dark:text-slate-300 block mb-1.5 font-bold">
                      Proposed Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-700 dark:text-slate-300 block mb-1.5 font-bold">
                      Venue / Location (if known)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. National Theatre / Legon Great Hall"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-700 dark:text-slate-300 block mb-1.5 font-bold">
                    Technical Specifications / Ensemble Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your ensemble size, audience attendance, room acoustic concerns, or specific gear requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-[#0A188F] dark:focus:border-sky-400 focus:ring-1 focus:ring-[#0A188F] dark:focus:ring-sky-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Technical Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. Your technical parameters have been routed to Dominic Ansah-Asare and the senior production engineers at the Oyibi Complex.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href="https://wa.me/233244843666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
