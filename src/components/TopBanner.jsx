import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function TopBanner() {
  const { openReservation, showToast } = useApp();
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (dismissed) return null;

  const handleCopyCode = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText?.('WINGZ26');
    setCopied(true);
    showToast('Promo code WINGZ26 copied! 20% OFF applied at checkout.');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleClaimOffer = (e) => {
    e.stopPropagation();
    openReservation();
    showToast('Special Offer Activated: 20% OFF your Feast Platter tonight!');
  };

  return (
    <aside 
      aria-label="Current Smokehouse Flight Offer"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#06142a] via-[#0b244d] to-[#06142a] border-b border-[#1f3760] shadow-md z-50 select-none py-2 sm:py-2.5"
    >
      {/* Subtle Sky Atmosphere: Cloud Wisps & Distant Stars */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1 left-1/4 w-32 h-6 bg-white/20 rounded-full blur-md" />
        <div className="absolute bottom-1 right-1/3 w-48 h-5 bg-white/15 rounded-full blur-lg" />
        <div className="absolute top-2 right-1/6 w-24 h-4 bg-white/20 rounded-full blur-sm" />
      </div>

      {/* Flight Track Container with Continuous Marquee Animation */}
      <div className="relative w-full flex items-center group cursor-pointer" onClick={handleClaimOffer}>
        <div className="animate-sky-flight flex items-center shrink-0 space-x-12 pl-4">
          
          {/* Plane + Banner Unit 1 */}
          <div className="flex items-center shrink-0">
            {/* The Yellow Propeller Plane */}
            <div className="relative shrink-0 flex items-center animate-plane-bob">
              <img
                src="/plane.png"
                alt="Wingz & Grill Sky Messenger Plane"
                className="w-24 sm:w-28 md:w-32 h-auto block select-none pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Tow Cable Lines */}
            <div className="shrink-0 -ml-1 mr-0.5 flex flex-col justify-center h-8" aria-hidden="true">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" className="opacity-75">
                <line x1="0" y1="6" x2="22" y2="2" stroke="#d4d4d8" strokeWidth="1.2" strokeDasharray="3 2" />
                <line x1="0" y1="18" x2="22" y2="22" stroke="#d4d4d8" strokeWidth="1.2" strokeDasharray="3 2" />
              </svg>
            </div>

            {/* The Yellow Trailing Offer Ribbon Banner */}
            <div className="relative shrink-0 bg-[#ffd000] text-black font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center gap-3 border-y-2 border-[#e6b800] animate-banner-wave">
              
              {/* Flame Badge */}
              <span className="bg-black text-[#ffd000] text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#93df01] animate-ping" />
                FLASH OFFER
              </span>

              {/* Offer Headline */}
              <span className="tracking-tight text-black whitespace-nowrap">
                🔥 20% OFF ALL JUMBO WING PLATTERS &bull; FREE DUCK-FAT FRIES OVER $40
              </span>

              {/* Coupon Code Pill */}
              <button
                type="button"
                onClick={handleCopyCode}
                title="Click to copy promo code"
                className="bg-black/90 hover:bg-black text-[#ffd000] text-[11px] font-mono px-3 py-1 rounded-md border border-black transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 inline-flex items-center gap-1.5"
              >
                <span>{copied ? '✓ COPIED!' : 'CODE: WINGZ26'}</span>
                <span className="text-[10px] text-white/70">📋</span>
              </button>

              {/* Action Link */}
              <span className="text-black text-xs font-black underline underline-offset-2 hover:text-black/80 transition-colors shrink-0 inline-flex items-center gap-1">
                Claim Feast <span aria-hidden="true">&rarr;</span>
              </span>

              {/* Ribbon Fishtail Notch (Right edge) */}
              <div 
                className="absolute -right-3 top-0 bottom-0 w-3 bg-[#ffd000] border-y-2 border-[#e6b800]"
                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                aria-hidden="true" 
              />
            </div>
          </div>

          {/* Plane + Banner Unit 2 (Seamless loop repeater) */}
          <div className="flex items-center shrink-0">
            {/* The Yellow Propeller Plane */}
            <div className="relative shrink-0 flex items-center animate-plane-bob">
              <img
                src="/plane.png"
                alt="Wingz & Grill Sky Messenger Plane"
                className="w-24 sm:w-28 md:w-32 h-auto block select-none pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Tow Cable Lines */}
            <div className="shrink-0 -ml-1 mr-0.5 flex flex-col justify-center h-8" aria-hidden="true">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" className="opacity-75">
                <line x1="0" y1="6" x2="22" y2="2" stroke="#d4d4d8" strokeWidth="1.2" strokeDasharray="3 2" />
                <line x1="0" y1="18" x2="22" y2="22" stroke="#d4d4d8" strokeWidth="1.2" strokeDasharray="3 2" />
              </svg>
            </div>

            {/* The Yellow Trailing Offer Ribbon Banner */}
            <div className="relative shrink-0 bg-[#ffd000] text-black font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center gap-3 border-y-2 border-[#e6b800] animate-banner-wave">
              <span className="bg-black text-[#ffd000] text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#93df01] animate-ping" />
                SMOKEHOUSE NEWS
              </span>

              <span className="tracking-tight text-black whitespace-nowrap">
                🍗 TODAY&apos;S FRESH PULL: 14-HOUR APPLEWOOD ST. LOUIS RIBS &bull; WALK-INS READY
              </span>

              <button
                type="button"
                onClick={handleCopyCode}
                title="Click to copy promo code"
                className="bg-black/90 hover:bg-black text-[#ffd000] text-[11px] font-mono px-3 py-1 rounded-md border border-black transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 inline-flex items-center gap-1.5"
              >
                <span>{copied ? '✓ COPIED!' : 'CODE: WINGZ26'}</span>
                <span className="text-[10px] text-white/70">📋</span>
              </button>

              <span className="text-black text-xs font-black underline underline-offset-2 hover:text-black/80 transition-colors shrink-0 inline-flex items-center gap-1">
                Reserve Table <span aria-hidden="true">&rarr;</span>
              </span>

              <div 
                className="absolute -right-3 top-0 bottom-0 w-3 bg-[#ffd000] border-y-2 border-[#e6b800]"
                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                aria-hidden="true" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* Dismiss button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setDismissed(true);
        }}
        aria-label="Dismiss banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-black/50 hover:bg-black text-white/70 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer border border-white/20"
      >
        &times;
      </button>
    </aside>
  );
}
