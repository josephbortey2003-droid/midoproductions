import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Radio, CheckCircle, AlertTriangle, Disc, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function SoundboardDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMix, setSelectedMix] = useState('mido'); // 'standard' or 'mido'
  const [activeTrack, setActiveTrack] = useState(0);
  const [progress, setProgress] = useState(35);

  const audioCtxRef = useRef(null);
  const filterLowRef = useRef(null);
  const filterMidRef = useRef(null);
  const filterHighRef = useRef(null);
  const masterGainRef = useRef(null);
  const oscNodesRef = useRef([]);

  const tracks = [
    {
      title: 'Choral Symphony Live: Harmonious Chorale',
      ensemble: '120-Voice Choir + Concert Grand Piano',
      venue: 'National Theatre of Ghana',
      midoNote: 'Precise vocal section isolation, zero acoustic bleed into choir mics, warm natural acoustic body.',
      standardNote: 'Muddled mid frequencies, vocal masking, frequent high-frequency feedback whistling.',
    },
    {
      title: 'Easter Choral Festival: Classical Oratorio',
      ensemble: 'Full Brass & String Ensemble + Soprano Soloist',
      venue: 'The Great Hall, University of Ghana, Legon',
      midoNote: 'Context-responsive RT60 acoustic delay calibration; solo voice cuts through naturally without piercing.',
      standardNote: 'Echo slapback off rear concrete walls; orchestra drowns out the vocal soloists.',
    },
    {
      title: 'CIMG National Summit & Awards Broadcast',
      ensemble: 'Keynote Lectern + Live Corporate Big Band',
      venue: 'Accra International Conference Centre (AICC)',
      midoNote: 'Speech Transmission Index (STI) > 0.88; pristine broadcast feed direct to national television.',
      standardNote: 'Boomy room rumble, audience struggling to discern speakers on line-level audio.',
    },
  ];

  // Initialize or resume Web Audio engine
  const setupAudio = async () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const master = ctx.createGain();
      master.gain.setValueAtTime(0.55, ctx.currentTime);
      masterGainRef.current = master;

      // 3 DSP Filters for A/B Simulation
      const fLow = ctx.createBiquadFilter();
      const fMid = ctx.createBiquadFilter();
      const fHigh = ctx.createBiquadFilter();

      fLow.type = 'peaking';
      fLow.frequency.setValueAtTime(220, ctx.currentTime);
      fLow.Q.setValueAtTime(1.5, ctx.currentTime);

      fMid.type = 'peaking';
      fMid.frequency.setValueAtTime(3200, ctx.currentTime);
      fMid.Q.setValueAtTime(1.0, ctx.currentTime);

      fHigh.type = 'highshelf';
      fHigh.frequency.setValueAtTime(9000, ctx.currentTime);

      const comp = ctx.createDynamicsCompressor();
      comp.threshold.setValueAtTime(-15, ctx.currentTime);

      master.connect(fLow);
      fLow.connect(fMid);
      fMid.connect(fHigh);
      fHigh.connect(comp);
      comp.connect(ctx.destination);

      filterLowRef.current = fLow;
      filterMidRef.current = fMid;
      filterHighRef.current = fHigh;
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }
  };

  const applyMixProfile = (mixType) => {
    setSelectedMix(mixType);
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    if (mixType === 'mido') {
      // MIDO Calibrated: Notch out 220Hz room mud, boost vocal clarity, airy high-end
      filterLowRef.current?.gain.setTargetAtTime(-7, now, 0.05);
      filterMidRef.current?.gain.setTargetAtTime(4.5, now, 0.05);
      filterHighRef.current?.gain.setTargetAtTime(3.5, now, 0.05);
    } else {
      // Standard PA: Boomy 220Hz resonance (+8dB), harsh resonance, muffled 9kHz high end (-10dB)
      filterLowRef.current?.gain.setTargetAtTime(9, now, 0.05);
      filterMidRef.current?.gain.setTargetAtTime(-4, now, 0.05);
      filterHighRef.current?.gain.setTargetAtTime(-10, now, 0.05);
    }
  };

  const startSound = async () => {
    await setupAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    stopSound();
    applyMixProfile(selectedMix);

    const master = masterGainRef.current;
    const nodes = [];

    // Choral harmony simulation: C Major triad with organ and soprano melody
    const freqs = activeTrack === 0 
      ? [130.81, 196.00, 261.63, 329.63, 392.00, 523.25]
      : activeTrack === 1
      ? [146.83, 220.00, 293.66, 369.99, 440.00, 587.33]
      : [110.00, 164.81, 220.00, 277.18, 329.63, 440.00];

    freqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx === 0 ? 'triangle' : idx % 2 === 0 ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(f, ctx.currentTime);

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(4.8 + idx * 0.3, ctx.currentTime);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.08, ctx.currentTime);

      osc.connect(g);
      g.connect(master);
      osc.start();
      nodes.push(osc, lfo);
    });

    oscNodesRef.current = nodes;
  };

  const stopSound = () => {
    if (oscNodesRef.current) {
      oscNodesRef.current.forEach((n) => {
        try {
          n.stop();
          n.disconnect();
        } catch (e) {}
      });
      oscNodesRef.current = [];
    }
  };

  const togglePlay = async () => {
    if (isPlaying) {
      stopSound();
      setIsPlaying(false);
    } else {
      await startSound();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  const changeTrack = async (idx) => {
    setActiveTrack(idx);
    setProgress(10);
    if (isPlaying) {
      stopSound();
      setTimeout(() => startSound(), 50);
    }
  };

  const currentTrack = tracks[activeTrack];

  return (
    <section className="py-20 relative bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-xs font-mono text-[#0A188F] dark:text-sky-300 font-bold">
            <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 animate-pulse" />
            <span>INTERACTIVE ACOUSTIC AUDITION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Hear The <span className="text-[#0A188F] dark:text-sky-400">MIDO Acoustic Difference</span>.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Experience why Ghana’s most celebrated choirs and corporate institutions rely on Dominic Ansah-Asare’s engineering discipline. Compare standard event PA setups with MIDO’s calibrated acoustic mixing.
          </p>
        </div>

        {/* The Soundboard Console Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden transition-colors">
          
          {/* Top Mix Switcher (A/B Toggle) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono text-[#0A188F] dark:text-sky-400 uppercase tracking-widest block mb-1 font-bold">
                Acoustic Processing Profile
              </span>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Select Audio Routing Mode to Compare:
              </div>
            </div>

            {/* Big A/B Buttons */}
            <div className="grid grid-cols-2 gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 w-full sm:w-auto">
              <button
                onClick={() => applyMixProfile('standard')}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-2 ${
                  selectedMix === 'standard'
                    ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 font-bold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Standard PA Mix</span>
              </button>

              <button
                onClick={() => applyMixProfile('mido')}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-2 ${
                  selectedMix === 'mido'
                    ? 'bg-gradient-to-r from-[#0A188F] via-blue-700 to-sky-600 text-white font-extrabold shadow-md shadow-blue-900/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>MIDO Calibrated Mix</span>
              </button>
            </div>
          </div>

          {/* Track Selection Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
            {tracks.map((t, idx) => (
              <button
                key={t.title}
                onClick={() => changeTrack(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeTrack === idx
                    ? 'bg-blue-50/70 dark:bg-blue-950/50 border-blue-400 dark:border-sky-500 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:bg-slate-100/70 dark:hover:bg-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-mono">
                  <span>Track 0{idx + 1}</span>
                  {activeTrack === idx && (
                    <span className="text-[#0A188F] dark:text-sky-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-sky-400 animate-ping" />
                      SELECTED
                    </span>
                  )}
                </div>
                <div className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-1">{t.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{t.ensemble}</div>
              </button>
            ))}
          </div>

          {/* Interactive Player Console Area */}
          <div className="bg-[#070D1A] rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col gap-6">
            
            {/* Track Info & Visual Equalizer VU-Bars */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-sky-400 tracking-wide uppercase font-semibold">
                  Currently Auditioning • {currentTrack.venue}
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {currentTrack.title}
                </h3>
                <div className="text-xs text-slate-300 font-sans">
                  Ensemble: {currentTrack.ensemble}
                </div>
              </div>

              {/* Animated VU-Meter Bar Display */}
              <div className="flex items-end gap-1.5 h-10 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                {[45, 80, 60, 95, 75, 50, 90, 70, 85, 60, 100, 65, 40, 85].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full transition-all duration-150"
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * (progress + i * 10)) % 100)}%` : '20%',
                      backgroundColor:
                        selectedMix === 'mido'
                          ? i > 10
                            ? '#FFFFFF'
                            : '#38BDF8'
                          : i > 10
                          ? '#EF4444'
                          : '#94A3B8',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Timeline Scrubber */}
            <div className="space-y-1.5">
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden relative cursor-pointer">
                <div
                  className={`h-full transition-all duration-300 ${
                    selectedMix === 'mido'
                      ? 'bg-gradient-to-r from-sky-500 to-sky-300'
                      : 'bg-rose-500'
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>01:14</span>
                <span>03:45</span>
              </div>
            </div>

            {/* Play Controls & Acoustic Profile Commentary */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-2">
              
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-xl bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center transition-all shadow-lg shadow-sky-500/25 active:scale-95"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>

                <div className="text-xs">
                  <div className="text-white font-semibold">
                    {isPlaying ? 'Auditioning Live Audio Simulation' : 'Click Play to Audition Simulation'}
                  </div>
                  <div className="text-slate-400 text-[11px] font-mono">
                    24-bit 96kHz Digital Multitrack Master
                  </div>
                </div>
              </div>

              {/* Dynamic Note on Active Mix */}
              <div
                className={`p-3.5 rounded-xl border text-xs leading-relaxed max-w-xl w-full ${
                  selectedMix === 'mido'
                    ? 'bg-sky-500/10 border-sky-400/30 text-sky-100'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 mb-1 font-mono uppercase text-[11px]">
                  {selectedMix === 'mido' ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-sky-400" />
                      <span>MIDO Acoustic Characteristic:</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                      <span>Standard PA Vulnerability:</span>
                    </>
                  )}
                </div>
                <p>
                  {selectedMix === 'mido' ? currentTrack.midoNote : currentTrack.standardNote}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
