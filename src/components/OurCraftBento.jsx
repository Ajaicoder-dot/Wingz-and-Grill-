import React, { useState } from 'react';

export default function OurCraftBento() {
  const [activeSauceIndex, setActiveSauceIndex] = useState(0);
  const [activeHeatZone, setActiveHeatZone] = useState('sear');

  const sauces = [
    {
      name: 'Wild Ghost Honey',
      color: '#eab308',
      shu: '75,000 SHU',
      level: 'Tier 4 / Scorching Heat',
      heatPercent: 85,
      image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=300&q=80',
      pepperName: 'Bhut Jolokia (Ghost Pepper)',
      notes: 'Raw mountain wildflower honey, fire-charred ghost pepper relish, citrus oils.',
      badge: 'SWEET SCORCH',
    },
    {
      name: 'Kentucky Bourbon Mop',
      color: '#d97706',
      shu: '1,500 SHU',
      level: 'Tier 1 / Mild Smoke',
      heatPercent: 20,
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=300&q=80',
      pepperName: 'Charred White Oak & Molasses',
      notes: 'Small-batch Kentucky bourbon, black molasses, apple cider reduction.',
      badge: 'BARREL AGED',
    },
    {
      name: '24-Mo Garlic Parm',
      color: '#84cc16',
      shu: '0 SHU',
      level: 'Tier 0 / Zero Scoville',
      heatPercent: 5,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80',
      pepperName: 'Confit Garlic & Parmigiano',
      notes: 'Brown butter confit garlic cloves whipped with aged Parmigiano-Reggiano.',
      badge: 'HERB & CHEESE',
    },
  ];

  return (
    <section id="craft" className="bg-[#0a0a0a] py-24 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 text-white border-t border-[#1f1f1f] relative overflow-hidden">
      {/* Subtle ambient lime aura */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#a3e635]/5 blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#65a30d]/5 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
              <span className="uppercase text-xs font-mono font-bold tracking-widest text-[#a3e635]">
                OUR CRAFT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Behind the <span className="font-editorial font-normal italic text-[#a3e635]">smoke.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#a3a3a3] max-w-lg leading-relaxed">
            A look into the exacting standards, thermal science, and unyielding discipline that define every meal we serve.
          </p>
        </div>

        {/* 6-Card Realistic Culinary Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          
          {/* CARD 1: THE FIRE MATRIX */}
          <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#a3e635]/60 transition-all duration-500 group shadow-2xl flex flex-col justify-between min-h-[460px] bg-[#111111]">
            {/* Real Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85"
                alt="Roaring live charcoal fire and embers"
                className="w-full h-full object-cover filter brightness-[0.60] contrast-[1.15] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-black/40" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  TEMPERATURE SCIENCE
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE EMBERS
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#a3e635] transition-colors">
                The Fire Matrix
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Three distinct heat zones calibrated to preserve connective collagen while crisping skin to glass-like shatter.
              </p>
            </div>

            {/* Bottom Real-Life Thermal Telemetry Readout */}
            <div className="relative z-10 p-6 sm:p-7 pt-0">
              <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl space-y-3">
                {/* Zone Switcher */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveHeatZone('sear')}
                    className={`flex-1 text-[11px] font-mono py-1.5 px-2 rounded-xl transition-all cursor-pointer font-bold ${
                      activeHeatZone === 'sear'
                        ? 'bg-[#ef4444] text-white shadow-md'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    650°F CHAR SEAR
                  </button>
                  <button
                    onClick={() => setActiveHeatZone('smoke')}
                    className={`flex-1 text-[11px] font-mono py-1.5 px-2 rounded-xl transition-all cursor-pointer font-bold ${
                      activeHeatZone === 'smoke'
                        ? 'bg-[#f97316] text-white shadow-md'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    225°F SLOW SMOKER
                  </button>
                </div>

                {/* Thermal Specs */}
                {activeHeatZone === 'sear' ? (
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-neutral-200">
                      <span>Live White-Hot Coals</span>
                      <span className="font-mono text-[#ef4444] font-bold">650°F Direct</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 h-full w-[94%]" />
                    </div>
                    <span className="text-[10px] text-neutral-400 block pt-0.5">
                      Target: Instant Maillard browning &bull; 90-sec blistered finish
                    </span>
                  </div>
                ) : (
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-neutral-200">
                      <span>Indirect Hickory Draft</span>
                      <span className="font-mono text-[#f97316] font-bold">225°F Low & Slow</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 h-full w-[48%]" />
                    </div>
                    <span className="text-[10px] text-neutral-400 block pt-0.5">
                      Target: 14-Hour smoke ring penetration &bull; Fall-apart tender
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CARD 2: THE 14-SAUCE LAB */}
          <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#a3e635]/60 transition-all duration-500 group shadow-2xl flex flex-col justify-between min-h-[460px] bg-[#111111]">
            {/* Real Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=85"
                alt="Artisanal barbecue glazes and copper pots"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.15] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-black/40" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  ZERO CORN SYRUP
                </span>
                <span className="text-[10px] font-mono text-neutral-300 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                  14 RECIPES
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#a3e635] transition-colors">
                The 14-Sauce Lab
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Every glaze starts with pure local honey, Dutch cider vinegar, or crushed black garlic fermented in-house.
              </p>
            </div>

            {/* Bottom Real Glaze Selector */}
            <div className="relative z-10 p-6 sm:p-7 pt-0">
              <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl space-y-2.5">
                <div className="grid grid-cols-3 gap-1.5">
                  {sauces.map((s, idx) => (
                    <button
                      key={s.name}
                      onClick={() => setActiveSauceIndex(idx)}
                      className={`p-2 rounded-xl text-left transition-all cursor-pointer border ${
                        activeSauceIndex === idx
                          ? 'bg-white/15 border-[#a3e635] shadow-lg'
                          : 'bg-white/5 border-transparent hover:bg-white/10'
                      }`}
                    >
                      <span className="text-[9px] font-mono text-[#a3e635] block font-bold truncate">
                        {s.badge}
                      </span>
                      <span className="text-xs font-bold text-white block truncate">
                        {s.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Realistic Scoville & Botanical Ingredient Spotlight */}
                <div className="pt-2.5 border-t border-white/10">
                  <div className="flex items-center gap-3 bg-black/65 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                    {/* Realistic Chili / Botanical Ingredient Image */}
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-white/20 shadow-md">
                      <img
                        src={sauces[activeSauceIndex].image}
                        alt={sauces[activeSauceIndex].pepperName}
                        className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.15]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>

                    {/* Realistic Scoville Scale Metrics */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-mono font-black text-[#ef4444] tracking-tight">
                          {sauces[activeSauceIndex].shu}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400 truncate">
                          {sauces[activeSauceIndex].level}
                        </span>
                      </div>

                      {/* Thermal Scoville Gradient Bar */}
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-1">
                        <div
                          className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600"
                          style={{ width: `${sauces[activeSauceIndex].heatPercent}%` }}
                        />
                      </div>

                      <span className="text-[10px] font-medium text-neutral-300 block truncate">
                        {sauces[activeSauceIndex].pepperName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: ZERO-FREEZER PLEDGE */}
          <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#a3e635]/60 transition-all duration-500 group shadow-2xl flex flex-col justify-between min-h-[460px] bg-[#111111]">
            {/* Real Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=85"
                alt="Fresh prime cuts on butcher block with fresh herbs"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-black/40" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  DAILY INTAKE ONLY
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-emerald-500/20">
                  90-MILE RADIUS
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#a3e635] transition-colors">
                Zero-Freezer Pledge
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Our walk-in has no freezer units. Chickens arrive chilled on ice at 4:30 AM from partner farms within 90 miles.
              </p>
            </div>

            {/* Bottom Real-Life Intake Verification Stamp */}
            <div className="relative z-10 p-6 sm:p-7 pt-0">
              <div className="bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      Morning Intake Verified
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#a3e635] bg-[#a3e635]/10 px-2 py-0.5 rounded-md border border-[#a3e635]/30">
                    BATCH #882
                  </span>
                </div>

                <div className="mt-2.5 grid grid-cols-2 gap-2 text-[11px] font-mono text-neutral-300">
                  <div>
                    <span className="text-neutral-500 block text-[9px] uppercase">Arrival Log</span>
                    <span className="text-white font-semibold">04:30 AM Chilled</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-[9px] uppercase">Walk-in Temp</span>
                    <span className="text-emerald-400 font-semibold">34°F (Zero Frost)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: AGED HARDWOOD ARSENAL */}
          <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#a3e635]/60 transition-all duration-500 group shadow-2xl flex flex-col justify-between min-h-[460px] bg-[#111111]">
            {/* Real Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1000&q=85"
                alt="Seasoned hardwood timber logs stacked with natural bark"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-black/40" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  SUSTAINABLE TIMBER
                </span>
                <span className="text-[10px] font-mono text-neutral-300 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                  &lt;12% MOISTURE
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#a3e635] transition-colors">
                Aged Hardwood Arsenal
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                We burn only naturally fallen kiln-dried oak, cherry, and hickory logs with zero chemical accelerants.
              </p>
            </div>

            {/* Bottom Real Hardwood Breakdown */}
            <div className="relative z-10 p-6 sm:p-7 pt-0">
              <div className="bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl space-y-2.5">
                <div className="text-[11px] font-mono text-neutral-300 flex justify-between">
                  <span>Hardwood Blend Ratio</span>
                  <span className="text-[#a3e635] font-bold">Kiln Cured 180 Days</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 block">Hickory</span>
                    <span className="text-xs font-bold text-white">50%</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 block">Red Oak</span>
                    <span className="text-xs font-bold text-white">35%</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <span className="text-[10px] font-mono text-neutral-400 block">Apple</span>
                    <span className="text-xs font-bold text-white">15%</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-neutral-400 block text-center pt-1">
                  Produces pristine thin blue smoke &bull; Zero bitter creosote soot
                </span>
              </div>
            </div>
          </div>

          {/* CARD 5: CRAFT BEER & BOURBON PAIRINGS */}
          <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#a3e635]/60 transition-all duration-500 group shadow-2xl flex flex-col justify-between min-h-[460px] bg-[#111111]">
            {/* Real Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85"
                alt="Cold craft beer and amber Kentucky bourbon"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-black/40" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  16 ROTATING TAPS
                </span>
                <span className="text-[10px] font-mono text-neutral-300 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                  SINGLE BARREL
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#a3e635] transition-colors">
                Craft Beer &amp; Bourbon Pairings
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Curated hazy IPAs, crisp pilsners, and single-barrel Kentucky bourbons selected specifically to cut through smoke.
              </p>
            </div>

            {/* Bottom Real Sommelier Pairing Note */}
            <div className="relative z-10 p-6 sm:p-7 pt-0">
              <div className="bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#a3e635]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
                      <path d="M5 6h12v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6Z" />
                      <path d="M9 2v4" />
                      <path d="M13 2v4" />
                    </svg>
                    <span>Piney IPA &bull; Hot Wings</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#a3e635] bg-[#a3e635]/15 px-2 py-0.5 rounded-full border border-[#a3e635]/30">
                    PERFECT MATCH
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-tight">
                  Citra &amp; Mosaic hops deliver sharp citrus bitterness that cuts through rich tallow and resets the palate.
                </p>
                <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] font-mono text-neutral-400">
                  <span>Bourbon Alt: Woodford Reserve</span>
                  <span>Draft Temp: 36°F</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 6: MASTER PITMASTER GUILD */}
          <div className="relative rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#a3e635]/60 transition-all duration-500 group shadow-2xl flex flex-col justify-between min-h-[460px] bg-[#111111]">
            {/* Real Photographic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
                alt="Head Pitmaster tending the live smokehouse fire"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-black/40" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold text-[#a3e635] tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  PASSION &amp; DEDICATION
                </span>
                <span className="text-[10px] font-mono text-neutral-300 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                  180-HR GUILD
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white group-hover:text-[#a3e635] transition-colors">
                Master Pitmaster Guild
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Our grill captains undergo 180 hours of wood-fire apprenticeship before commanding the primary smokehouse pit.
              </p>
            </div>

            {/* Bottom Real Pitmaster Bio & Guild Badge */}
            <div className="relative z-10 p-6 sm:p-7 pt-0">
              <div className="bg-black/85 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#a3e635] overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80"
                      alt="Chef Marcus Vance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Chef Marcus Vance
                    </span>
                    <span className="text-[11px] font-mono text-[#a3e635] block">
                      15-Year Live-Fire Pitmaster
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>Guild Seal #04 Verified</span>
                  <span className="text-white">Smokehouse Heritage</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
