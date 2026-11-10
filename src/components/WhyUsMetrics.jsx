import React from 'react';
import CountUp from './CountUp';

export default function WhyUsMetrics() {
  return (
    <section className="bg-[#f4f0ea] py-20 px-4 md:px-6 text-[#111111] border-t border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span className="uppercase text-xs font-bold tracking-widest text-[#737373]">
              BY THE NUMBERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Why food lovers choose <span className="font-editorial font-normal text-[#65a30d]">us.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 bg-[#ffffff] rounded-3xl p-8 md:p-12 border border-[#dedad0] shadow-sm">
          {/* Stat 1 */}
          <div className="space-y-3">
            <div className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight flex items-baseline">
              <CountUp end={2.5} duration={1800} decimals={1} />
              <span>M+</span>
            </div>
            <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
              Wings Served
            </h4>
            <p className="text-xs text-[#737373] leading-relaxed max-w-[200px]">
              Crisped over hickory logs since 2019.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-3 lg:border-l lg:border-[#e5e0d5] lg:pl-8">
            <div className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight flex items-baseline">
              <CountUp end={99.2} duration={2000} decimals={1} />
              <span>%</span>
            </div>
            <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
              Satisfaction Rate
            </h4>
            <p className="text-xs text-[#737373] leading-relaxed max-w-[200px]">
              Based on 4,500+ guest feedback surveys.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-3 lg:border-l lg:border-[#e5e0d5] lg:pl-8">
            <div className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight flex items-baseline">
              <span>#</span>
              <CountUp end={1} duration={1200} decimals={0} />
            </div>
            <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
              Best Grill &amp; Wings
            </h4>
            <p className="text-xs text-[#737373] leading-relaxed max-w-[200px]">
              Reader’s Choice Award winner 3 years straight.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="space-y-3 lg:border-l lg:border-[#e5e0d5] lg:pl-8">
            <div className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight">
              0
            </div>
            <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider">
              Frozen Shortcuts
            </h4>
            <p className="text-xs text-[#737373] leading-relaxed max-w-[200px]">
              No microwaves, no bagged sauces, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
