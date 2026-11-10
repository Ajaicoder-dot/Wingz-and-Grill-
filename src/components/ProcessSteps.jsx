import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ProcessSteps() {
  const { openReservation } = useApp();
  const [activeStep, setActiveStep] = useState(2); // 0, 1, 2, 3 (default to Step 03 - Live Fire)

  const steps = [
    {
      num: '01',
      phase: 'PREP & INFUSE',
      time: '18 Hours',
      icon: (
        <svg className="w-5 h-5 text-[#65a30d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9" />
          <path d="M12 12c-2.5 0-4-1.5-4-4s1.5-4 4-4 4 1.5 4 4-1.5 4-4 4z" />
          <path d="M12 12v9" />
        </svg>
      ),
      title: 'The 18-Hour',
      highlight: 'Brine',
      desc: 'Submerged in cultured buttermilk, sea salt, crushed bay leaves, and roasted garlic. This breaks down muscle fibers for unmatched tenderness.',
      sub: 'Step 01 / Cold Soak',
    },
    {
      num: '02',
      phase: 'TOAST & DUST',
      time: '14 Spices',
      icon: (
        <svg className="w-5 h-5 text-[#65a30d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="m19 5-3.5 3.5" />
          <path d="m5 19 3.5-3.5" />
          <path d="m5 5 3.5 3.5" />
          <path d="m19 19-3.5-3.5" />
          <circle cx="12" cy="3" r="1" fill="currentColor" />
          <circle cx="12" cy="21" r="1" fill="currentColor" />
          <circle cx="3" cy="12" r="1" fill="currentColor" />
          <circle cx="21" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
      title: 'The 14-Spice',
      highlight: 'Dust',
      desc: 'Hand-crushed toasted cumin, smoked Spanish paprika, cayenne, and brown sugar. Generously massaged to form a caramelized protective crust.',
      sub: 'Step 02 / Dry Rub',
    },
    {
      num: '03',
      phase: 'SMOKE & CHAR',
      time: '650°F Embers',
      icon: (
        <svg className="w-5 h-5 text-[#a3e635]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      ),
      title: 'Hardwood Ember',
      highlight: 'Sear',
      desc: 'Hickory and cherrywood charcoal raging at 650°F. The fierce radiant heat creates our signature crisp snap while sealing moisture inside.',
      sub: 'Step 03 / Wood Smoke',
      isHero: true,
    },
    {
      num: '04',
      phase: 'GLAZE & FINISH',
      time: '60 Seconds',
      icon: (
        <svg className="w-5 h-5 text-[#65a30d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11h16a8 8 0 0 1-16 0z" />
          <path d="M12 3v8" />
          <path d="m8 6 4-3 4 3" />
        </svg>
      ),
      title: 'The Copper Bowl',
      highlight: 'Toss',
      desc: 'Immediately spun in heated copper bowls with your choice of 14 proprietary sauces. Served hot within 60 seconds of leaving the flames.',
      sub: 'Step 04 / Plate & Sizzle',
    },
  ];

  return (
    <section id="process" className="bg-[#f4f0ea] py-20 px-4 md:px-6 text-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
              <span className="uppercase text-xs font-bold tracking-widest text-[#737373]">
                HOW IT&apos;S MADE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Detailed <span className="font-editorial font-normal">craftsmanship</span> from scratch.
            </h2>
          </div>

          <button
            onClick={openReservation}
            className="self-start md:self-auto bg-[#0a0a0a] text-white text-xs md:text-sm font-semibold rounded-full px-5 py-3 hover:bg-[#262626] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book Kitchen Table</span>
            <span className="text-[#a3e635]">&rarr;</span>
          </button>
        </div>

        {/* Connected Process Timeline Bar */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-8 bg-white/70 p-3 rounded-2xl border border-[#dedad0]">
          {steps.map((st, i) => (
            <button
              key={st.num}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer text-left ${
                activeStep === i
                  ? 'bg-[#0a0a0a] text-white shadow-sm'
                  : 'hover:bg-[#f4f0ea] text-[#666]'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                activeStep === i ? 'bg-[#a3e635] text-black' : 'bg-[#e5e0d5] text-[#555]'
              }`}>
                {st.num}
              </span>
              <div className="truncate">
                <span className={`text-[10px] font-mono block uppercase tracking-wider ${activeStep === i ? 'text-[#a3e635]' : 'text-[#888]'}`}>
                  {st.phase}
                </span>
                <span className="text-xs font-bold block truncate">
                  {st.time}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => {
            if (st.isHero) {
              return (
                /* Card 03 - SIGNATURE GLOWING LIME GREEN CARD (Exact match to limegreen.studio) */
                <div
                  key={st.num}
                  onClick={() => setActiveStep(i)}
                  className={`relative rounded-3xl p-7 shadow-xl overflow-hidden flex flex-col justify-between min-h-[380px] bg-gradient-to-br from-[#1b3d16] via-[#142e10] to-[#0b1c09] text-white border transition-all cursor-pointer group ${
                    activeStep === i ? 'border-[#a3e635] scale-[1.02]' : 'border-[#a3e635]/40'
                  }`}
                >
                  {/* Ambient luminous glow overlay */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#a3e635] opacity-25 rounded-full blur-2xl pointer-events-none group-hover:opacity-40 transition-opacity" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#84cc16] opacity-20 rounded-full blur-xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-editorial font-normal text-[#a3e635] tracking-tight block">
                        {st.num}
                      </span>
                      <span className="bg-[#a3e635] text-[#0a0a0a] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Live Fire
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#a3e635]/20 border border-[#a3e635]/30 flex items-center justify-center text-xl mt-6">
                      {st.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mt-4">
                      {st.title} <span className="font-editorial font-normal text-[#a3e635]">{st.highlight}</span>
                    </h3>

                    <p className="text-xs md:text-sm text-[#d1f299] mt-2.5 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-[#a3e635]/20 text-[11px] font-bold text-[#a3e635] uppercase tracking-wider flex items-center justify-between">
                    <span>{st.sub}</span>
                    <span>650&deg;F &bull; 8 mins</span>
                  </div>
                </div>
              );
            }

            return (
              /* Regular Cards */
              <div
                key={st.num}
                onClick={() => setActiveStep(i)}
                className={`bg-[#ffffff] rounded-3xl p-7 border shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[380px] cursor-pointer ${
                  activeStep === i ? 'border-[#65a30d] ring-2 ring-[#65a30d]/20' : 'border-[#e3dfd7]'
                }`}
              >
                <div>
                  <span className="text-4xl font-editorial font-normal text-[#d0cbc1] tracking-tight block">
                    {st.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#f4f0ea] flex items-center justify-center text-xl mt-6">
                    {st.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mt-4">
                    {st.title} <span className="font-editorial font-normal">{st.highlight}</span>
                  </h3>
                  <p className="text-xs md:text-sm text-[#737373] mt-2.5 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#f0ece4] text-[11px] font-semibold text-[#8c8577] uppercase tracking-wider">
                  {st.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
