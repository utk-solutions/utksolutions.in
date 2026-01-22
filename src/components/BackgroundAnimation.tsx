"use client";

import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Two-Tone Animated Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 animate-gradient-shift opacity-80" />
      
      {/* Secondary Soft Glow Layers */}
      <div className="absolute top-0 right-0 w-full h-[50vh] bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-blue-50/50 to-transparent" />

      {/* Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.03)_100%)] pointer-events-none" />

      {/* 3D Grid Container */}
      <div 
        className="absolute inset-0 perspective-[1000px] pointer-events-none"
        style={{
          perspective: '1000px',
        }}
      >
        {/* Moving Grid Floor - Optimized for Two-Tone */}
        <div 
          className="absolute inset-[-100%] origin-bottom animate-grid-flow"
          style={{
            transform: 'rotateX(60deg) translateZ(-200px)',
            backgroundSize: '80px 80px',
            backgroundImage: `
              linear-gradient(to right, rgba(29, 78, 216, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(29, 78, 216, 0.15) 1px, transparent 1px)
            `,
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)'
          }}
        />

        {/* Vertical Light Beams (Contrast Adjusted) */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Primary Beams - Bold Blue */}
           <div className="absolute top-0 left-[15%] w-[2px] h-full bg-gradient-to-b from-transparent via-blue-600 to-transparent opacity-60 animate-beam-drop" style={{ animationDelay: '0s', animationDuration: '3s' }} />
           <div className="absolute top-0 left-[85%] w-[2px] h-full bg-gradient-to-b from-transparent via-blue-600 to-transparent opacity-60 animate-beam-drop" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
           
           {/* Accent Beams - Cyan/Teal */}
           <div className="absolute top-0 left-[35%] w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50 animate-beam-drop" style={{ animationDelay: '0.8s', animationDuration: '4s' }} />
           <div className="absolute top-0 left-[65%] w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50 animate-beam-drop" style={{ animationDelay: '2.5s', animationDuration: '4.5s' }} />
           
           {/* Center Beam - Highlight */}
           <div className="absolute top-0 left-[50%] w-[3px] h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-70 animate-beam-drop" style={{ animationDelay: '0.2s', animationDuration: '2.5s' }} />
        </div>
      </div>

      {/* Atmospheric Glows - Two-Tone Colors */}
      <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-400/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[10%] w-[50vw] h-[50vw] bg-indigo-300/10 rounded-full blur-[80px] mix-blend-multiply pointer-events-none" />

      {/* Grain Overlay - Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
           <filter id="noiseFilter">
             <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
           </filter>
           <rect width="100%" height="100%" filter="url(#noiseFilter)" />
         </svg>
      </div>
    </div>
  );
}
