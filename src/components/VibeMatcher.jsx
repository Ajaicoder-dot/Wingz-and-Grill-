import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function VibeMatcher() {
  const { openReservation } = useApp();
  const [selectedVibe, setSelectedVibe] = useState('gameday');

  const vibes = {
    gameday: {
      name: 'Game Day & Crew Gathering',
      tagline: 'High-energy, multi-screen live broadcast with massive wing platters.',
      thumbnail: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=85',
      desc: 'High-energy dining room, multi-angle 4K screens, crisp craft pitchers, and mammoth 50-wing feast platters served piping hot from the fryer.',
      tableType: 'Center Stage Sports Booth',
      acoustics: '74 dB • Lively & Electric',
      lighting: 'Stadium Ambient Bright',
      features: [
        'Reserved dual 4K screen sightline',
        'Endless ranch & crisp celery refills',
        'Express game-time craft beer service',
        'Custom 4-sauce flight tasting boards',
      ],
      recommendation: 'The Gridiron Feast: 40 Jumbo Wings + Loaded Nacho Mountain + Truffle Fries.',
      pairingBeer: 'Two Hearted Hazy IPA Pitcher',
    },
    date: {
      name: 'Intimate Date & Evening Drinks',
      tagline: 'Dim amber lighting, cozy velvet booths, and craft bourbon pairings.',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      desc: 'Dim ambient amber lighting, cozy velvet booths tucked away from the main floor, and wood-fired small plates paired with single-barrel Kentucky bourbons.',
      tableType: 'Cozy Corner Booth (Low Ambient Light)',
      acoustics: '52 dB • Intimate & Velvet Mellow',
      lighting: 'Candlelight & Hearth Embers',
      features: [
        'Curated acoustic indie soundtrack',
        'Single-barrel Kentucky bourbon flights',
        'Cast-iron skillet wings for two',
        'Warm skillet molten chocolate cake',
      ],
      recommendation: 'Skillet Wings & St. Louis Half Rack + 2 Smoked Cherry Old Fashioneds.',
      pairingBeer: 'Bourbon Barrel Stout or Dry Cider',
    },
    family: {
      name: 'Family Feast & Celebrations',
      tagline: 'Spacious hearth tables, relaxed pace, and mild crowd-pleasing glazes.',
      thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
      desc: 'Spacious banquet tables, relaxed atmosphere, zero-rush service, and crowd-pleasing mild honey glazes alongside our 5-cheese smoked gouda mac.',
      tableType: 'Large Central Hearth Table',
      acoustics: '66 dB • Warm & Jovial',
      lighting: 'Warm Sunlight / Lantern Glow',
      features: [
        'Kids mild honey & garlic parm glazes',
        'High chairs & wood coloring boards',
        'Shareable mega feast platters',
        'Complimentary warm skillet cornbread',
      ],
      recommendation: 'The Sunday Pitmaster Platter (Feeds 4-6 guests generously).',
      pairingBeer: 'Crisp Pilsner & Craft Sodas',
    },
    catering: {
      name: 'Catering & Office Drop-Off',
      tagline: 'Hot delivery in insulated chafers with tongs, eco-plates, and glazes.',
      thumbnail: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=400&q=80',
      heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85',
      desc: 'Hot delivery in insulated Cambro chafers with tongs, biodegradable plates, wet wipes, and individual squeeze bottles directly to your venue.',
      tableType: 'Direct Venue / Office Delivery',
      acoustics: 'Guaranteed ±10 Min Window',
      lighting: 'Insulated 160°F Hot-Hold',
      features: [
        'Dispatched on-time guaranteed',
        'Individual boxes or buffet setup',
        'Complete allergen-labeled items',
        'Chafing stands & fuel canisters included',
      ],
      recommendation: 'Corporate Pitmaster Buffet (Priced per guest with full setup).',
      pairingBeer: 'Canned Local Craft Assortment',
    },
  };

  const current = vibes[selectedVibe];

  return (
    <section id="vibe-matcher" className="bg-[#f4f0ea] py-24 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 text-[#111111] border-t border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#65a30d] animate-pulse" />
              <span className="uppercase text-xs font-mono font-bold tracking-widest text-[#65a30d]">
                THE EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08]">
              Does it fit your <span className="font-editorial font-normal italic text-[#65a30d]">vibe?</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-[#666666] max-w-md leading-relaxed">
            Select your occasion to preview tailored seating, acoustic atmosphere, and our pitmaster&apos;s paired menu recommendations.
          </p>
        </div>

        {/* 2-Column Realistic Experience Matcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Realistic Vibe Cards with Real Thumbnails */}
          <div className="lg:col-span-5 space-y-3.5">
            {Object.entries(vibes).map(([key, item]) => {
              const isActive = selectedVibe === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedVibe(key)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between gap-4 group ${
                    isActive
                      ? 'bg-[#ffffff] border-[#65a30d] shadow-xl ring-2 ring-[#65a30d]/20 -translate-y-0.5'
                      : 'bg-[#eae6de] border-[#dedad0] hover:bg-[#ffffff] hover:border-[#cfc9be]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Real-Life Photographic Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-black/10 shadow-sm">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isActive ? 'scale-110 filter brightness-[1.02]' : 'filter grayscale-[25%] group-hover:scale-105'
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    </div>

                    <div className="min-w-0">
                      <h3 className={`font-bold text-sm sm:text-base leading-snug truncate ${
                        isActive ? 'text-[#111111]' : 'text-[#2a2a2a]'
                      }`}>
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#737373] mt-1 line-clamp-1">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator Seal */}
                  <div className="shrink-0">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#65a30d] text-white shadow-md'
                          : 'border border-[#bdb6a8] bg-transparent text-transparent'
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Matched Experience Card with Real High-Res Photography */}
          <div className="lg:col-span-7 bg-[#ffffff] rounded-3xl border border-[#dedad0] shadow-2xl overflow-hidden flex flex-col justify-between">
            
            {/* Top Real-Life Atmosphere Banner */}
            <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
              <img
                src={current.heroImage}
                alt={current.name}
                className="w-full h-full object-cover filter brightness-[0.80] contrast-[1.08] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Badges Overlaid on Real Atmosphere Photo */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                <span className="bg-black/70 backdrop-blur-md text-[#a3e635] text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-ping" />
                  MATCHED EXPERIENCE
                </span>
                <span className="bg-white/90 backdrop-blur-md text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {current.tableType}
                </span>
              </div>

              {/* Title on Photo */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-md">
                  {current.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/90 mt-1.5">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                    {current.acoustics}
                  </span>
                  <span className="text-white/40">•</span>
                  <span>{current.lighting}</span>
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {current.desc}
                </p>

                {/* Amenity Checkpoints with Clean Custom SVG Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                  {current.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs font-medium text-[#222222] bg-[#f8f6f2] p-2.5 rounded-xl border border-[#ebe7df]"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#65a30d]/15 text-[#65a30d] flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Pitmaster Recommended Order Box */}
                <div className="mt-5 p-4 rounded-2xl bg-[#0a0a0a] text-white border border-[#222222]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-[#a3e635] font-bold uppercase tracking-wider">
                      PITMASTER RECOMMENDED ORDER
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Pairing: {current.pairingBeer}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {current.recommendation}
                  </p>
                </div>
              </div>

              {/* Booking CTA Footer */}
              <div className="mt-6 pt-5 border-t border-[#f0ece4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#737373]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Instant table hold for up to 15 minutes.</span>
                </div>
                <button
                  onClick={openReservation}
                  className="w-full sm:w-auto bg-[#0a0a0a] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full hover:bg-[#65a30d] hover:text-[#0a0a0a] transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Book This Vibe Table</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
