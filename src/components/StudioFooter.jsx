import React from 'react';
import { useApp } from '../context/AppContext';

export default function StudioFooter() {
  const { showToast } = useApp();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText?.('wingzandgrill@gmail.com');
    showToast('Copied wingzandgrill@gmail.com to clipboard!');
  };

  return (
    <footer id="contact" className="relative selection:bg-[#000000] selection:text-[#93df01]">
      {/* 
        1. UPPER WHITE SKY BAND
        Pure white background matching the sky in footerimg.png.
        The top 67.9% of the illustration extends into this band seamlessly.
      */}
      <div
        className="w-full bg-[#ffffff] border-t border-[#dedad0] h-52 sm:h-64 md:h-80 lg:h-96"
        aria-hidden="true"
      />

      {/* 
        2. LOWER ELECTRIC LIME GREEN BAND
        - LEFT SIDE: London workshop illustration perched on the exact horizon line
                     (Top 67.9% sky reaches up into white, bottom 32.1% ground sits in green)
        - RIGHT SIDE: Brand Emblem + ◆ Ready when you are + Headline + Pill Email Button
        - EXPERIENCE & CONNECT sections removed per user request
      */}
      <div className="w-full bg-[#93df01] text-black relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">

          {/* 2-Column Horizon Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: The London Workshop Illustration */}
            <div className="lg:col-span-7">
              {/* 
                Mathematical Horizon Alignment:
                footerimg.png is 1024x595. Sky height is 404px (404/1024 = 39.45% of width).
                CSS percentage marginTop is always relative to container width.
                marginTop: -39.45% pulls the image up by PRECISELY its sky height,
                locking its horizon line to y = 0 of the green band across all viewports!
              */}
              <div style={{ marginTop: '-39.45%' }}>
                <img
                  src="/footerimg.png"
                  alt="Wingz & Grill London Smokehouse Workshop"
                  className="w-full h-auto block select-none pointer-events-none"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Ready When You Are + Headline + Email Pill Button */}
            <div className="lg:col-span-5 pt-4 sm:pt-6 lg:pt-10 pb-8 sm:pb-12">
              {/* Brand Logo & Diamond mark & status tag */}
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <img
                  src="/logo.png"
                  alt="Wingz & Grill"
                  className="w-10 h-10 rounded-full object-cover shadow-md border border-black/20"
                />
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-black">◆</span>
                  <span className="font-mono text-xs text-black/85 font-bold tracking-wider uppercase">
                    Ready when you are
                  </span>
                </div>
              </div>

              {/* Headline with editorial italic on 'details.' */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-black leading-[1.12]">
                Flame-crafted perfection for food lovers who care about the{' '}
                <span className="font-editorial font-normal italic">details.</span>
              </h2>

              {/* White Pill Button with arrow */}
              <div className="mt-6 sm:mt-8">
                <a
                  href="mailto:wingzandgrill@gmail.com"
                  onClick={handleCopyEmail}
                  className="bg-white text-black text-xs sm:text-sm font-semibold rounded-full px-7 py-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-3 cursor-pointer group"
                >
                  <span>wingzandgrill@gmail.com</span>
                  <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>

          </div>

          {/* 
            3. MASSIVE LOWERCASE MARQUEE SIGNATURE & COPYRIGHT
          */}
          <div className="border-t border-black/15 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8">
            {/* Massive Lowercase Brand Typography */}
            <div className="pt-2 sm:pt-4 pb-6 select-none overflow-hidden text-center sm:text-left">
              <h1 className="text-[13vw] sm:text-[13.5vw] font-black tracking-[-0.05em] text-[#000000] lowercase leading-[0.88] whitespace-nowrap inline-flex items-baseline">
                <span>Wingz & Grill</span>

              </h1>
            </div>

            {/* Bottom Bar: Copyright & Made with intent and love */}
            <div className="pt-6 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/75 font-mono">
              <div>
                &copy; 2026-27 Wingz &amp; Grill Studio. All rights reserved.
              </div>
              <div className="font-medium text-black">
                People who love to eat are always the best people.
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
