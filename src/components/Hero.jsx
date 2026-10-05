import React, { useState } from 'react';
import { Volume2, Sparkles, Sliders, ArrowRight, ShieldCheck, Award, MapPin, Zap, Play } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

export default function Hero({ onOpenEstimator }) {
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 30 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setSpotlightPos({
      x: (clientX / innerWidth) * 100,
      y: (clientY / innerHeight) * 100,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Concert Stage Lighting Spotlight (tracks mouse) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255, 184, 0, 0.12), rgba(0, 242, 254, 0.05) 45%, transparent 70%)`,
        }}
      />

      {/* Stage Beams & Ambient Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-96 h-96 bg-[#00F2FE]/10 rounded-full blur-[150px]" />
      
      {/* Subtle concert grid background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Heritage Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
            <span className="font-semibold text-white tracking-wide">EST. 2000 • ACCRA, GHANA</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 font-mono">Dominic Ansah-Asare Direction</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Active Production Fleet: Greater Accra & West Africa</span>
          </div>
        </div>

        {/* Main Grid: Headline + Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Engineering <br className="hidden sm:inline" />
                <span className="text-gold-gradient">Sonic Perfection</span> <br />
                & Visual Splendor.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                For over <strong className="text-white font-semibold">24 years</strong>, <strong className="text-[#FFB800] font-semibold">MIDO Productions Ltd</strong> has been the definitive gold standard in Ghanaian live concert sound, monumental choral acoustics, intelligent stage lighting, 4K LED video walls, and global broadcast transmission.
              </p>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#FFB800] font-display font-bold text-xl sm:text-2xl">24+ Years</div>
                <div className="text-slate-400 text-xs font-mono">Acoustic Mastery</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[#00F2FE] font-display font-bold text-xl sm:text-2xl">1,500+</div>
                <div className="text-slate-400 text-xs font-mono">Concerts & Galas</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-emerald-400 font-display font-bold text-xl sm:text-2xl">World Games</div>
                <div className="text-slate-400 text-xs font-mono">Harmonious Partner</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#FFA000] to-[#E59400] text-black font-bold text-sm tracking-wide uppercase shadow-[0_0_25px_rgba(255,184,0,0.35)] hover:shadow-[0_0_35px_rgba(255,184,0,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Calculate Event Tech Rider</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <span>Explore 6 Production Pillars</span>
              </a>

              <a
                href="tel:+233244843666"
                className="text-xs font-mono text-slate-400 hover:text-[#FFB800] transition-colors flex items-center gap-1.5 py-2"
              >
                <span>Direct Dispatch: +233 244 843 666</span>
              </a>
            </div>

            {/* Trusted Stamp */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#FFB800]" />
              <span>Certified Technical Engineers • Calibrated Yamaha & DiGiCo Caliber • DPA Choral Rigging</span>
            </div>
          </div>

          {/* Right Column: Audio Frequency Visualizer & Rig Telemetry */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <AudioVisualizer />

            {/* Live Rig Highlight Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800]">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Context-Responsive Acoustics</div>
                  <div className="text-slate-400 text-[11px]">Real-time RT60 room resonance compensation</div>
                </div>
              </div>
              <a
                href="#legacy"
                className="text-[#FFB800] hover:underline font-mono text-[11px]"
              >
                Read Philosophy &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
