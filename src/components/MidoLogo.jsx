import React from 'react';

export default function MidoLogo({ className = "h-10", variant = "combined", theme = "light" }) {
  // If variant === "image", show the authentic official badge image
  if (variant === "image") {
    return (
      <img
        src="/mido-logo-badge.jpg"
        alt="MIDO Productions Ltd Official Logo"
        className={`object-contain rounded-lg ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  // Pure SVG vector version matching the exact geometry of the MIDO logo
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Emblem Avatar */}
      <div className="relative overflow-hidden rounded-xl border border-blue-400/30 bg-[#001080] shadow-md flex-shrink-0 p-1">
        <svg
          viewBox="0 0 240 100"
          className="h-9 w-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background acoustic wedge/horn polygon in Royal Blue */}
          <path
            d="M5 80 L90 60 L235 20 L235 80 Z"
            fill="#0A188F"
          />
          
          {/* Diagonal cut mask and typography */}
          <g fontFamily="Playfair Display, Georgia, serif" fontWeight="900" fontSize="72">
            {/* White bottom-left base */}
            <text x="10" y="76" fill="#FFFFFF" letterSpacing="2">
              M
            </text>
            <text x="75" y="76" fill="#FFFFFF" letterSpacing="2">
              I
            </text>
            <text x="102" y="76" fill="#FFFFFF" letterSpacing="2">
              D
            </text>
            <text x="162" y="76" fill="#FFFFFF" letterSpacing="2">
              O
            </text>

            {/* Royal Blue upper diagonal overlay */}
            <clipPath id="diagonal-slice">
              <path d="M0 65 L240 10 L240 0 L0 0 Z" />
            </clipPath>
            
            <g clipPath="url(#diagonal-slice)">
              <text x="10" y="76" fill="#0A188F" letterSpacing="2">
                M
              </text>
              <text x="75" y="76" fill="#0A188F" letterSpacing="2">
                I
              </text>
              <text x="102" y="76" fill="#0A188F" letterSpacing="2">
                D
              </text>
              <text x="162" y="76" fill="#0A188F" letterSpacing="2">
                O
              </text>
            </g>
          </g>

          {/* Dividing acoustic slice line in white */}
          <line
            x1="0"
            y1="66"
            x2="240"
            y2="11"
            stroke="#FFFFFF"
            strokeWidth="3.5"
          />
        </svg>
      </div>

      {/* Brand Text - Clear & High Contrast on White */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif font-black text-xl sm:text-2xl tracking-wider leading-none ${
            isDark ? 'text-white' : 'text-[#0A188F]'
          }`}>
            MIDO
          </span>
          <span className={`text-[10px] uppercase font-mono tracking-widest px-1.5 py-0.5 rounded font-bold border ${
            isDark ? 'bg-blue-600/30 text-sky-200 border-blue-400/40' : 'bg-blue-50 text-[#0A188F] border-blue-200'
          }`}>
            LTD
          </span>
        </div>
        <span className={`text-[9px] uppercase font-mono tracking-widest font-bold mt-0.5 ${
          isDark ? 'text-sky-300' : 'text-slate-600'
        }`}>
          PRODUCTIONS
        </span>
      </div>
    </div>
  );
}
