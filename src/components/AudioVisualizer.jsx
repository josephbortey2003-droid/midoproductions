import React, { useEffect, useRef, useState } from 'react';
import { Sliders, Volume2, VolumeX, RotateCcw, Sparkles, Info, CheckCircle2, Play, Pause, Music, ExternalLink, Disc3, Radio } from 'lucide-react';
import { AudiomackIcon } from './SocialIcons';

export default function AudioVisualizer() {
  // 3 Official MIDO Productions Audiomack Catalog Tracks
  const tracks = [
    {
      id: 'talk-piano',
      title: 'Talk Piano (Acoustic Solo)',
      artist: 'MIDO Productions • Dominic Ansah-Asare',
      source: 'Talk Piano Album',
      file: '/audio/talk-piano.wav',
      audiomackUrl: 'https://audiomack.com/midoproductions',
      tag: 'Piano Acoustic',
      explanation: 'Acoustic grand piano progression showcasing warm resonance, subtle hammer attack, and delicate decay.',
    },
    {
      id: 'passion-hymns',
      title: 'My Passion for Hymns (SATB)',
      artist: 'MIDO Productions • Choral Ensemble',
      source: 'Gospel & Hymnal Collection',
      file: '/audio/passion-for-hymns.wav',
      audiomackUrl: 'https://audiomack.com/midoproductions',
      tag: 'Choral Choir',
      explanation: 'Four-part choral harmony demonstrating vocal diction clarity at 4kHz and control of hall resonance at 250Hz.',
    },
    {
      id: 'postlude-organ',
      title: 'Postlude (Grand Organ & Brass)',
      artist: 'MIDO Productions • House of Praise',
      source: 'Cathedral Staging',
      file: '/audio/postlude-organ.wav',
      audiomackUrl: 'https://audiomack.com/midoproductions',
      tag: 'Organ & Brass',
      explanation: 'Pipe organ and festive brass recessional testing deep 60Hz sub-bass and 12kHz high-frequency shimmer.',
    },
  ];

  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const currentTrack = tracks[activeTrackIndex];

  // 5 Interactive EQ Bands with default values (dB gain from -12 to +12)
  const [eqBands, setEqBands] = useState([
    { id: 'sub', freq: '60 Hz', label: 'Sub-Bass', gain: 3, role: 'Acoustic Foundation' },
    { id: 'lowMid', freq: '250 Hz', label: 'Low-Mid', gain: -4, role: 'Hall Mud Cut' },
    { id: 'mid', freq: '1.2 kHz', label: 'Vocal Mid', gain: 2, role: 'String & Voice Body' },
    { id: 'presence', freq: '4 kHz', label: 'Presence', gain: 5, role: 'Choral Diction' },
    { id: 'air', freq: '12 kHz', label: 'High Air', gain: 3, role: 'Acoustic Shimmer' },
  ]);

  const [activePreset, setActivePreset] = useState('cathedral');
  const [hoveredFreq, setHoveredFreq] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const mediaSourceRef = useRef(null);
  const filtersRef = useRef([]);
  const masterGainRef = useRef(null);
  const compressorRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);
  const eqBandsRef = useRef(eqBands);

  useEffect(() => {
    eqBandsRef.current = eqBands;
  }, [eqBands]);

  const presets = {
    cathedral: {
      name: 'Cathedral / Great Hall (Choral Clarity)',
      bands: [2, -6, 2, 7, 5],
      explanation: 'Surgically notches 250Hz boom of stone walls while enhancing 4kHz vocal diction for 100+ voices.',
    },
    arena: {
      name: 'Arena & Open Festival (High SPL)',
      bands: [7, -2, 1, 5, 4],
      explanation: 'Reinforces 60Hz line-array throw and delivers punchy vocal projection through open-air dispersion.',
    },
    broadcast: {
      name: 'Television & Live Stream Master',
      bands: [0, -3, 4, 5, 3],
      explanation: 'Optimized for domestic speakers and smartphones, maximizing Speech Transmission Index (STI).',
    },
    flat: {
      name: 'Flat Reference (0 dB Neutral)',
      bands: [0, 0, 0, 0, 0],
      explanation: 'Unprocessed line-level baseline before venue-specific acoustic calibration.',
    },
  };

  // Initialize Web Audio Graph connected to the HTML5 Audio element
  const initAudioGraph = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : volume, ctx.currentTime);
      masterGainRef.current = masterGain;

      // 5-Band Biquad Filter Nodes matching the 5 EQ faders
      const filterSpecs = [
        { type: 'lowshelf', freq: 60, q: 0.7 },
        { type: 'peaking', freq: 250, q: 1.0 },
        { type: 'peaking', freq: 1200, q: 1.0 },
        { type: 'peaking', freq: 4000, q: 1.2 },
        { type: 'highshelf', freq: 12000, q: 0.7 },
      ];

      const filters = filterSpecs.map((spec, i) => {
        const filter = ctx.createBiquadFilter();
        filter.type = spec.type;
        filter.frequency.setValueAtTime(spec.freq, ctx.currentTime);
        filter.Q.setValueAtTime(spec.q, ctx.currentTime);
        filter.gain.setValueAtTime(eqBandsRef.current[i].gain, ctx.currentTime);
        return filter;
      });
      filtersRef.current = filters;

      // Studio Dynamics Compressor to prevent clipping
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.setValueAtTime(-12, ctx.currentTime);
      compressor.knee.setValueAtTime(12, ctx.currentTime);
      compressor.ratio.setValueAtTime(4, ctx.currentTime);
      compressor.attack.setValueAtTime(0.003, ctx.currentTime);
      compressor.release.setValueAtTime(0.15, ctx.currentTime);
      compressorRef.current = compressor;

      // Frequency Analyser Node
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.82;
      analyserRef.current = analyser;

      // Connect filters in series: Source -> Filter0 -> Filter1 -> Filter2 -> Filter3 -> Filter4 -> Compressor -> MasterGain -> Analyser -> Destination
      for (let i = 0; i < filters.length - 1; i++) {
        filters[i].connect(filters[i + 1]);
      }
      filters[filters.length - 1].connect(compressor);
      compressor.connect(masterGain);
      masterGain.connect(analyser);
      analyser.connect(ctx.destination);

      // Connect HTML5 Audio Element to the first filter
      if (audioRef.current && !mediaSourceRef.current) {
        const source = ctx.createMediaElementSource(audioRef.current);
        source.connect(filters[0]);
        mediaSourceRef.current = source;
      }
    } catch (err) {
      console.warn('Web Audio initialization error:', err);
    }
  };

  // Play / Pause toggle
  const togglePlay = async () => {
    initAudioGraph();

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Playback blocked by browser policy:', err);
      }
    }
  };

  // Switch to another Audiomack track
  const switchTrack = (index) => {
    setActiveTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].file;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  // Handle Band Gain Changes
  const handleBandChange = (index, newGain) => {
    const updated = [...eqBands];
    updated[index].gain = Number(newGain);
    setEqBands(updated);
    setActivePreset('custom');

    // Update real Web Audio filter in real-time
    if (filtersRef.current[index] && audioCtxRef.current) {
      filtersRef.current[index].gain.setTargetAtTime(
        Number(newGain),
        audioCtxRef.current.currentTime,
        0.05
      );
    }
  };

  // Apply Preset
  const applyPreset = (presetKey) => {
    setActivePreset(presetKey);
    const targetBands = presets[presetKey].bands;
    const updated = eqBands.map((band, idx) => ({
      ...band,
      gain: targetBands[idx],
    }));
    setEqBands(updated);

    if (audioCtxRef.current && filtersRef.current.length === 5) {
      targetBands.forEach((gainVal, idx) => {
        filtersRef.current[idx].gain.setTargetAtTime(
          gainVal,
          audioCtxRef.current.currentTime,
          0.05
        );
      });
    }
  };

  // Reset Flat
  const resetBands = () => {
    applyPreset('flat');
  };

  // Volume slider update
  const handleVolumeChange = (newVol) => {
    const val = parseFloat(newVol);
    setVolume(val);
    if (isMuted) setIsMuted(false);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(val, audioCtxRef.current.currentTime, 0.05);
    }
  };

  // Mute toggle
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(
        nextMuted ? 0 : volume,
        audioCtxRef.current.currentTime,
        0.05
      );
    }
  };

  // Canvas visualizer loop (runs smoothly without freezing on mouse hover)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let phase = 0;
    const bufferLength = analyserRef.current ? analyserRef.current.frequencyBinCount : 64;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      phase += 0.04;
      const width = canvas.width;
      const height = canvas.height;

      // Clear with soft gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#020617');
      bgGrad.addColorStop(1, '#0A188F');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle acoustic grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1;
      for (let y = 30; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Read real audio frequency data if playing, or render idle acoustic baseline
      let hasRealAudio = false;
      if (analyserRef.current && isPlaying) {
        analyserRef.current.getByteFrequencyData(dataArray);
        // check if dataArray has energy
        const sum = dataArray.reduce((acc, v) => acc + v, 0);
        if (sum > 50) hasRealAudio = true;
      }

      // Draw 32 modern spectrum bars
      const numBars = 32;
      const barWidth = (width / numBars) - 3;

      for (let i = 0; i < numBars; i++) {
        let barHeight = 0;

        if (hasRealAudio) {
          // Map FFT bins to 32 bars with log frequency weighting
          const binIndex = Math.min(Math.floor(Math.pow(i / numBars, 1.4) * (bufferLength / 2)), bufferLength - 1);
          const rawVal = dataArray[binIndex] / 255;
          
          // Influence from current EQ bands
          const bandFactor = (
            (eqBandsRef.current[0].gain * (1 - i / numBars) * 0.03) +
            (eqBandsRef.current[2].gain * Math.sin((i / numBars) * Math.PI) * 0.02) +
            (eqBandsRef.current[4].gain * (i / numBars) * 0.03)
          );
          
          barHeight = Math.max(8, (rawVal * (height * 0.78)) * (1 + bandFactor));
        } else {
          // Idle ambient pulse (so it never looks dead or frozen)
          const baseSine = Math.sin(phase + i * 0.25) * 12 + Math.cos(phase * 0.7 + i * 0.15) * 8;
          const bandGain = eqBandsRef.current[Math.min(4, Math.floor((i / numBars) * 5))].gain;
          barHeight = Math.max(6, 24 + baseSine + (bandGain * 2.2));
        }

        const x = i * (barWidth + 3) + 2;
        const y = height - barHeight;

        // Gradient from Sky Blue to Gold to Royal White
        const barGrad = ctx.createLinearGradient(0, y, 0, height);
        barGrad.addColorStop(0, '#38BDF8');
        barGrad.addColorStop(0.5, '#0284C7');
        barGrad.addColorStop(1, '#0A188F');

        ctx.fillStyle = barGrad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [3, 3, 0, 0]);
        ctx.fill();

        // Shimmer cap on top of each bar
        ctx.fillStyle = '#BAE6FD';
        ctx.fillRect(x, y - 2, barWidth, 2);
      }

      // Draw smooth parametric curve overlay matching the 5 EQ faders
      ctx.beginPath();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#38BDF8';
      ctx.shadowBlur = 8;

      const faderPoints = [
        { x: width * 0.08, y: height * 0.5 - eqBandsRef.current[0].gain * 3.5 },
        { x: width * 0.28, y: height * 0.5 - eqBandsRef.current[1].gain * 3.5 },
        { x: width * 0.50, y: height * 0.5 - eqBandsRef.current[2].gain * 3.5 },
        { x: width * 0.72, y: height * 0.5 - eqBandsRef.current[3].gain * 3.5 },
        { x: width * 0.92, y: height * 0.5 - eqBandsRef.current[4].gain * 3.5 },
      ];

      ctx.moveTo(faderPoints[0].x, faderPoints[0].y);
      for (let i = 0; i < faderPoints.length - 1; i++) {
        const xc = (faderPoints[i].x + faderPoints[i + 1].x) / 2;
        const yc = (faderPoints[i].y + faderPoints[i + 1].y) / 2;
        ctx.quadraticCurveTo(faderPoints[i].x, faderPoints[i].y, xc, yc);
      }
      ctx.lineTo(faderPoints[faderPoints.length - 1].x, faderPoints[faderPoints.length - 1].y);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw control nodes
      faderPoints.forEach((pt, idx) => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.strokeStyle = '#0284C7';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors duration-300">
      
      {/* Hidden Audio Element with loop enabled */}
      <audio
        ref={audioRef}
        src={currentTrack.file}
        loop
        preload="auto"
        onTimeUpdate={() => {
          if (audioRef.current && audioRef.current.duration) {
            setTrackProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
          }
        }}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Top Header & Audiomack Badge */}
      <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-[#0A188F] dark:text-sky-300 text-[11px] font-mono font-bold uppercase tracking-wide">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Acoustic Calibration Suite</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-[11px] font-mono font-bold">
              <Disc3 className="w-3.5 h-3.5 animate-spin" />
              <span>Audiomack Player</span>
            </span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
            Real Music EQ & Live Acoustic Tuning
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 max-w-xl">
            Stream real tracks from MIDO Productions’ Audiomack catalog and test how our acoustic tuning sculpts sub-bass foundation, hall reflections, and choral diction in real-time.
          </p>
        </div>

        {/* Official Audiomack Link Button */}
        <a
          href="https://audiomack.com/midoproductions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wide transition-all shadow-sm shrink-0 self-start sm:self-auto"
          title="Open MIDO Productions on Audiomack"
        >
          <AudiomackIcon className="w-4 h-4 fill-current" />
          <span>Audiomack Catalog</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      {/* Audiomack Song Selector Tabs */}
      <div className="px-4 sm:px-6 pt-4 pb-2 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold mb-2 flex items-center justify-between">
          <span>Select Official MIDO Song To Calibrate:</span>
          <span className="text-[#0A188F] dark:text-sky-400 font-bold">3 Mastered Tracks</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {tracks.map((t, idx) => {
            const isSelected = activeTrackIndex === idx;
            return (
              <button
                key={t.id}
                onClick={() => switchTrack(idx)}
                className={`p-3 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                  isSelected
                    ? 'bg-blue-50/80 dark:bg-blue-950/70 border-[#0A188F] dark:border-sky-400 shadow-sm ring-1 ring-[#0A188F] dark:ring-sky-400'
                    : 'bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? 'bg-[#0A188F] text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {isSelected && isPlaying ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                  ) : (
                    <Music className="w-4 h-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-xs text-slate-900 dark:text-white truncate">
                      {t.title}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {t.artist}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Visualizer Stage */}
      <div className="p-4 sm:p-6 space-y-6">
        
        {/* Real Spectrum Canvas Screen */}
        <div className="relative rounded-2xl overflow-hidden shadow-inner border border-slate-900 bg-slate-950">
          <canvas
            ref={canvasRef}
            width={720}
            height={220}
            className="w-full h-44 sm:h-56 block cursor-crosshair"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const xNorm = (e.clientX - rect.left) / rect.width;
              if (xNorm < 0.2) setHoveredFreq('60 Hz (Sub-Bass Foundation)');
              else if (xNorm < 0.4) setHoveredFreq('250 Hz (Room & Wall Resonance)');
              else if (xNorm < 0.6) setHoveredFreq('1.2 kHz (Vocal Body & Strings)');
              else if (xNorm < 0.8) setHoveredFreq('4 kHz (Choral Diction Intelligibility)');
              else setHoveredFreq('12 kHz (High Air & Shimmer)');
            }}
            onMouseLeave={() => setHoveredFreq(null)}
          />

          {/* Overlay Status Bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-[11px] font-mono text-white/90 font-bold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                {isPlaying ? `NOW STREAMING: ${currentTrack.title.toUpperCase()}` : 'AUDIO READY • TAP PLAY TO STREAM'}
              </span>
            </div>
            {hoveredFreq && (
              <span className="hidden sm:inline-block text-[11px] font-mono text-sky-200 bg-blue-900/80 px-2.5 py-0.5 rounded backdrop-blur-sm border border-sky-400/30">
                Inspection: {hoveredFreq}
              </span>
            )}
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-[#0A188F] transition-all duration-200"
              style={{ width: `${trackProgress}%` }}
            />
          </div>
        </div>

        {/* Playback Controls & Volume Bar */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-95 ${
                isPlaying
                  ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-900/20'
                  : 'bg-[#0A188F] hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-blue-900/20'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pause Track</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Song (Audiomack)</span>
                </>
              )}
            </button>

            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium hidden sm:inline">
              {isPlaying ? 'Live Web Audio EQ processing is active.' : 'Tap play to audition real audio response.'}
            </span>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2.5 ml-auto sm:ml-0">
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-600 dark:text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#0A188F] dark:text-sky-400" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(e.target.value)}
              className="w-20 sm:w-28 accent-[#0A188F] dark:accent-sky-400 cursor-pointer"
              aria-label="Audio Volume"
            />
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 w-9 text-right">
              {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
            </span>
          </div>
        </div>

        {/* 5-Band Interactive EQ Faders (Mobile Optimized) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                Acoustic Frequency Faders (±12 dB)
              </span>
              <span className="text-[10px] font-mono text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                Real-Time Biquad DSP
              </span>
            </div>
            <button
              onClick={resetBands}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-[#0A188F] dark:hover:text-sky-400 flex items-center gap-1 font-mono transition-colors"
              title="Reset all bands to 0 dB"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset 0dB</span>
            </button>
          </div>

          {/* Fader Grid: Horizontal rows on mobile for easy touch, vertical on tablet/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {eqBands.map((band, idx) => (
              <div
                key={band.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:border-blue-300 dark:hover:border-sky-500 transition-colors"
              >
                {/* Header */}
                <div className="flex items-center justify-between sm:flex-col sm:items-start gap-1">
                  <div>
                    <span className="font-mono font-bold text-xs text-[#0A188F] dark:text-sky-400 block">
                      {band.freq}
                    </span>
                    <span className="text-[11px] font-medium text-slate-800 dark:text-slate-200 block">
                      {band.label}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      band.gain > 0
                        ? 'bg-blue-100 dark:bg-blue-950 text-[#0A188F] dark:text-sky-300'
                        : band.gain < 0
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {band.gain > 0 ? `+${band.gain}` : band.gain} dB
                  </span>
                </div>

                {/* Range Slider */}
                <div className="py-2 sm:py-3">
                  <input
                    type="range"
                    min="-12"
                    max="12"
                    step="1"
                    value={band.gain}
                    onChange={(e) => handleBandChange(idx, e.target.value)}
                    className="w-full accent-[#0A188F] dark:accent-sky-400 cursor-pointer"
                    aria-label={`${band.label} gain`}
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-400 dark:text-slate-500 mt-1">
                    <span>-12dB</span>
                    <span>0</span>
                    <span>+12dB</span>
                  </div>
                </div>

                {/* Acoustic Role */}
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono border-t border-slate-200 dark:border-slate-700 pt-1.5 line-clamp-1">
                  {band.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acoustic Preset Selector Buttons */}
        <div className="space-y-2 pt-2">
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold block">
            Acoustic Preset Configurations:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.entries(presets).map(([key, p]) => (
              <button
                key={key}
                onClick={() => applyPreset(key)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activePreset === key
                    ? 'bg-[#0A188F] dark:bg-blue-600 text-white border-[#0A188F] dark:border-blue-500 shadow-md shadow-blue-900/20'
                    : 'bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs truncate">
                  {activePreset === key && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                  <span className="truncate">{p.name.split(' (')[0]}</span>
                </div>
                <div
                  className={`text-[10px] truncate mt-1 ${
                    activePreset === key ? 'text-blue-100 dark:text-sky-200' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {p.name.includes('(') ? `(${p.name.split('(')[1]}` : ''}
                </div>
              </button>
            ))}
          </div>

          {/* Active Preset Explanation Note */}
          {presets[activePreset] && (
            <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2.5 mt-2">
              <Info className="w-4 h-4 text-[#0A188F] dark:text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0A188F] dark:text-sky-300 font-semibold">
                  Acoustic Purpose ({presets[activePreset].name}):
                </strong>{' '}
                {presets[activePreset].explanation}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
