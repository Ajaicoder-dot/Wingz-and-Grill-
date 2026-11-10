import React from 'react';
import CountUp from './CountUp';

export default function PhilosophyAndMetrics() {
  return (
    <div className="bg-white w-full">
      <section className="relative bg-[#f4f0ea] rounded-t-[2.5rem] md:rounded-t-[3.5rem] py-24 md:py-32 px-4 md:px-6 text-[#111111] overflow-hidden z-10 border-t border-[#e5e0d5]">
        {/* Decorative Lime Green Pixel Matrix Accents (Exact match to limegreen.studio) */}
        <div className="absolute top-12 left-6 md:left-12 grid grid-cols-4 gap-1.5 opacity-40 pointer-events-none" aria-hidden="true">
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#84cc16] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#65a30d] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
        </div>

        <div className="absolute top-16 right-6 md:right-12 grid grid-cols-4 gap-1.5 opacity-40 pointer-events-none" aria-hidden="true">
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-[#65a30d] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-[#84cc16] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-transparent" />
          <div className="w-2.5 h-2.5 bg-[#a3e635] rounded-sm" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          {/* Category Pill with Green Dot */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span className="uppercase text-xs font-bold tracking-widest text-[#737373]">
              OUR KITCHEN MANIFESTO
            </span>
          </div>

          {/* Big Bold Quote Headline with Editorial Serif Italic */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.18] max-w-4xl mx-auto">
            &laquo; <span className="font-editorial font-normal">Everything</span> we prepare is scratch-made, slow-brined, and{' '}
            <span className="font-editorial font-normal text-[#65a30d]">flame-kissed.</span> &raquo;
          </h2>

          <p className="mt-8 text-base md:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
            We rejected frozen shortcuts, commercial bag glazes, and electric ovens. Instead, we burn seasoned red oak logs, churn butter daily, and grind our own spice dust every sunrise.
          </p>

          {/* 3 Large Stat Numbers with Animated Count-Up Effect */}
          <div className="mt-16 md:mt-20 pt-12 border-t border-[#dfd9cd] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Stat 1: 15 min */}
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black text-[#111111] tracking-tight flex items-baseline justify-center gap-1">
                <span>
                  <CountUp end={15} duration={1800} decimals={0} />
                </span>
                <span className="text-2xl font-bold font-editorial text-[#65a30d]">min</span>
              </div>
              <p className="text-sm font-semibold text-[#111111]">Sizzle-to-Table Time</p>
              <p className="text-xs text-[#737373] max-w-xs mx-auto">
                Cooked fresh to your exact order temperature, never sitting under hot lamps.
              </p>
            </div>

            {/* Stat 2: 4.9 /5 */}
            <div className="space-y-2 md:border-x md:border-[#dfd9cd] md:px-6">
              <div className="text-5xl md:text-6xl font-black text-[#111111] tracking-tight flex items-baseline justify-center gap-1">
                <span>
                  <CountUp end={4.9} duration={2000} decimals={1} />
                </span>
                <span className="text-2xl font-bold font-editorial text-[#65a30d]">/5</span>
              </div>
              <p className="text-sm font-semibold text-[#111111]">3,200+ Verified Guests</p>
              <p className="text-xs text-[#737373] max-w-xs mx-auto">
                Consistently rated the #1 wing &amp; barbecue destination in the metro region.
              </p>
            </div>

            {/* Stat 3: 100% */}
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black text-[#111111] tracking-tight flex items-baseline justify-center gap-1">
                <span>
                  <CountUp end={100} duration={2200} decimals={0} />
                </span>
                <span className="text-2xl font-bold font-editorial text-[#65a30d]">%</span>
              </div>
              <p className="text-sm font-semibold text-[#111111]">Zero-Frozen Policy</p>
              <p className="text-xs text-[#737373] max-w-xs mx-auto">
                Hormone-free local pastured chicken and prime cuts hand-trimmed in-house daily.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
