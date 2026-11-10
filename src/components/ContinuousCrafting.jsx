import React from 'react';

export default function ContinuousCrafting() {
  const cards = [
    {
      title: 'Farm-Direct Traceability',
      badge: 'FARM #04 • SHENANDOAH, VA',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=85',
      alt: 'Pasture-raised free-range poultry on green regenerative farmland',
      metrics: [
        { label: 'Feed Standard', value: '100% Non-GMO' },
        { label: 'Transport', value: '< 90 Miles' },
        { label: 'Hormones', value: '0% Guaranteed' },
      ],
      desc: 'We know the name and hand of every poultry farmer and dairy maker we partner with. Chickens arrive chilled on clean shaved ice at 4:30 AM from pasture-raised family partners.',
      linkText: 'Learn about our farms',
    },
    {
      title: 'Hardwood Stewardship',
      badge: 'APPALACHIAN RIDGE • TIMBER SALVAGE #12',
      image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=85',
      alt: 'Stacked seasoned kiln-dried red oak and hickory hardwood logs',
      metrics: [
        { label: 'Sourcing', value: '100% Storm Salvage' },
        { label: 'Curing Time', value: '9 Months Dry' },
        { label: 'Moisture', value: '< 12% Optimal' },
      ],
      desc: 'We never fell live standing old-growth timber. Our red oak, cherry, and hickory logs come solely from sustainable forestry thinning and storm salvage, seasoned for clean blue smoke.',
      linkText: 'Our wood sourcing craft',
    },
    {
      title: 'Zero Waste Smokehouse',
      badge: 'CIRCULAR KITCHEN • 98.4% DIVERSION',
      image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=85',
      alt: 'Simmering rich 24-hour smokehouse bone broth in heavy iron stockpot',
      metrics: [
        { label: 'Bone Broth', value: '24h Extraction' },
        { label: 'Ash Diversion', value: 'Compost Bio-Char' },
        { label: 'Oil Recycling', value: '100% Biofuel' },
      ],
      desc: 'Nothing of value leaves as trash. Smoked bones simmer for 24 hours into collagen-rich broths, clean wood embers enrich local community compost soil, and spent oil powers regional transit.',
      linkText: 'Kitchen ecology report',
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 text-white border-t border-[#1f1f1f] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#93df01]/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#93df01] animate-pulse" />
            <span className="uppercase text-xs font-bold tracking-widest text-[#93df01] font-mono">
              OUR SUSTAINABILITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Continuous <span className="font-editorial font-normal italic text-[#93df01]">crafting.</span>
          </h2>
          <p className="mt-3 text-sm text-[#888888] max-w-xl">
            Responsibility isn’t an afterthought. It is woven into every flame we kindle and every farm supplier we shake hands with.
          </p>
        </div>

        {/* 3 Realistic Photographic Craft Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#111111] rounded-3xl border border-[#242424] hover:border-[#93df01]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Top Photographic Cover */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-[#181818]">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/50 pointer-events-none" />

                {/* Location / Batch Chip */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-black/70 backdrop-blur-md text-[#93df01] text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-[#93df01]/30">
                    {c.badge}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#93df01]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#93df01] transition-colors">
                    {c.title}
                  </h3>

                  {/* Micro Telemetry Pills */}
                  <div className="grid grid-cols-3 gap-2 my-4 pt-1">
                    {c.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#181818] border border-white/5 rounded-xl p-2 text-center">
                        <span className="text-[9px] text-[#737373] block font-mono uppercase tracking-wider truncate">
                          {m.label}
                        </span>
                        <span className="text-xs font-bold text-white font-mono block mt-0.5 truncate">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-bold text-[#93df01] hover:text-[#bef264] transition-colors inline-flex items-center gap-1.5 group/link"
                  >
                    <span>{c.linkText}</span>
                    <span className="transition-transform group-hover/link:translate-x-1">&rarr;</span>
                  </a>
                  <span className="text-[10px] text-[#555555] font-mono">Verified 2026-27</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
