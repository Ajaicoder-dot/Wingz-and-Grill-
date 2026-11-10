import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function FrameworkGrid() {
  const { addToCart } = useApp();
  const [selectedSauce, setSelectedSauce] = useState('ghost-honey');

  const sauces = {
    'ghost-honey': {
      name: 'Wild Ghost Honey',
      shu: '75,000 SHU',
      heatLevel: 'Scorching (Tier 4)',
      heatPercent: 88,
      image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=300&q=80',
      notes: 'Wildflower raw honey infused with charred ghost pepper relish and fresh cilantro.',
      pairing: 'Pairs with: Hazy IPA or Cold Milkshake',
    },
    'garlic-parm': {
      name: '24-Mo Aged Garlic Parm',
      shu: '0 SHU',
      heatLevel: 'Zero Scoville (Rich Umami)',
      heatPercent: 5,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80',
      notes: 'Slow-confited whole garlic cloves whipped into brown butter and dusted with Parmigiano-Reggiano.',
      pairing: 'Pairs with: Crisp Pilsner or Dry Cider',
    },
    'bourbon-bbq': {
      name: 'Kentucky Bourbon Mop',
      shu: '1,500 SHU',
      heatLevel: 'Mild Smoke & Sweet Molasses',
      heatPercent: 20,
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=300&q=80',
      notes: 'Small-batch Kentucky bourbon simmered with dark molasses, apple cider vinegar, and smoked sea salt.',
      pairing: 'Pairs with: Smoked Old Fashioned or Stout',
    },
    'mango-hab': {
      name: 'Smoked Mango Habanero',
      shu: '45,000 SHU',
      heatLevel: 'Medium-Hot (Tier 3)',
      heatPercent: 65,
      image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=300&q=80',
      notes: 'Sun-ripened Alphonso mangoes caramelized over live embers with charred habaneros and Jamaican allspice.',
      pairing: 'Pairs with: Mexican Lager with Lime',
    },
  };

  const activeSauce = sauces[selectedSauce];

  return (
    <section id="framework" className="bg-[#f4f0ea] py-20 px-4 md:px-6 text-[#111111] border-t border-[#e8e4dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
              <span className="uppercase text-xs font-bold tracking-widest text-[#737373]">
                THE CULINARY PILLARS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              A <span className="font-editorial font-normal">framework</span> for bold cravings.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#737373] max-w-md">
            Four specialized culinary disciplines under one roof. Each pillar is engineered with uncompromising culinary standards.
          </p>
        </div>

        {/* Asymmetrical Bento Grid (Breaks the repetitive 4-card look!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1 (Span 7 Columns): Hero Feature - Artisan Jumbo Wings with Interactive Sauce Board */}
          <div className="lg:col-span-7 bg-[#0f0f0f] rounded-3xl p-7 sm:p-9 text-white border border-[#262626] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient subtle green glow inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#a3e635] opacity-[0.07] blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-[#a3e635] uppercase tracking-widest">
                  PILLAR 01 &bull; WINGS LAB
                </span>
                <span className="bg-[#1f1f1f] text-white text-[10px] font-bold px-3 py-1 rounded-full border border-[#333333]">
                  14 HOUSE SAUCES
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Artisan Jumbo Wings
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] mt-2 leading-relaxed max-w-lg">
                Fresh pasture-raised poultry, 18-hour buttermilk brined, double flash-fried for glass-like shatter crunch, and hand-spun in small-batch glazes.
              </p>

              {/* Interactive Sauce Tasting Board */}
              <div className="mt-6 bg-[#161616] rounded-2xl p-4 sm:p-5 border border-[#282828]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#a3a3a3]">
                    Explore Sauce Flavor Profiles
                  </span>
                  <span className="text-[10px] font-bold text-[#a3e635]">Interactive</span>
                </div>

                {/* Sauce selector buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {Object.entries(sauces).map(([key, s]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedSauce(key)}
                      className={`text-xs font-medium px-3 py-2 rounded-xl transition-all cursor-pointer truncate ${
                        selectedSauce === key
                          ? 'bg-[#a3e635] text-[#0a0a0a] font-bold shadow-md'
                          : 'bg-[#202020] text-[#a3a3a3] hover:text-white'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>

                {/* Selected Sauce Detail Card with Realistic Image & Scoville Scale */}
                <div className="bg-[#0a0a0a] rounded-2xl p-3 border border-[#262626] flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/15 shadow-md">
                    <img
                      src={activeSauce.image}
                      alt={activeSauce.name}
                      className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.15]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white truncate">
                        {activeSauce.name}
                      </span>
                      <span className="text-xs font-mono font-black text-[#ef4444] shrink-0">
                        {activeSauce.shu}
                      </span>
                    </div>
                    <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full overflow-hidden mb-1">
                      <div
                        className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600"
                        style={{ width: `${activeSauce.heatPercent}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-[#888888] line-clamp-1">
                      {activeSauce.notes}
                    </p>
                    <p className="text-[10px] text-[#65a30d] font-medium pt-0.5 truncate">
                      {activeSauce.pairing}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Price & CTA */}
            <div className="mt-8 pt-6 border-t border-[#222222] flex items-center justify-between relative z-10">
              <div>
                <span className="text-[11px] text-[#737373] block uppercase tracking-wider">Per Order</span>
                <span className="text-2xl font-black text-white">$16.95</span>
                <span className="text-xs text-[#888888] ml-2">/ 12 Jumbo Wings</span>
              </div>
              <button
                onClick={() =>
                  addToCart({
                    id: 'bento-wings',
                    name: `Artisan Jumbo Wings (${activeSauce.name})`,
                    price: 16.95,
                    category: 'Wings',
                  })
                }
                className="bg-[#a3e635] text-[#0a0a0a] text-xs font-bold px-5 py-3 rounded-full hover:bg-[#bef264] transition-all cursor-pointer shadow-[0_0_20px_rgba(163,230,53,0.3)] inline-flex items-center gap-1.5"
              >
                <span>+ Add to Feast</span>
                <span className="text-sm">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column (Span 5): 3-Card Stack (1 Wide Horizontal Banner + 2 Compact Square Cards) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Card 2: St. Louis Pit Ribs (Horizontal Banner Card) */}
            <div className="bg-[#ffffff] rounded-3xl p-6 sm:p-7 border border-[#dedad0] shadow-sm hover:shadow-md transition-shadow flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#65a30d] uppercase tracking-widest">
                    PILLAR 02 &bull; HARDWOOD SMOKE
                  </span>
                  <span className="bg-[#f4f0ea] text-[#111111] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#dedad0]">
                    14-HR SMOKE
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  St. Louis Pit Ribs
                </h3>

                <p className="text-xs text-[#737373] mt-2 leading-relaxed">
                  Pork spare ribs dry-rubbed in brown sugar espresso dust, smoked low &amp; slow over aged hickory coals until gently pulling from the bone with deep mahogany bark.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-[#404040]">
                  <span className="bg-[#f8f6f2] px-2.5 py-1 rounded-lg border border-[#e5e0d5] inline-flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-[#65a30d]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Bourbon Mop Glaze</span>
                  </span>
                  <span className="bg-[#f8f6f2] px-2.5 py-1 rounded-lg border border-[#e5e0d5] inline-flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-[#65a30d]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Cured Dill Pickles</span>
                  </span>
                  <span className="bg-[#f8f6f2] px-2.5 py-1 rounded-lg border border-[#e5e0d5] inline-flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-[#65a30d]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Texas Toast</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ece4] flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-[#111111]">$26.50</span>
                  <span className="text-xs text-[#737373] ml-1.5">Full Rack</span>
                </div>
                <button
                  onClick={() =>
                    addToCart({
                      id: 'bento-ribs',
                      name: 'St. Louis Pit Ribs (Full Rack)',
                      price: 26.50,
                      category: 'Ribs',
                    })
                  }
                  className="bg-[#0a0a0a] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#65a30d] hover:text-[#0a0a0a] transition-all cursor-pointer"
                >
                  + Add to Order
                </button>
              </div>
            </div>

            {/* Split Bottom Cards: Smash Burgers & Truffle Sides */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 3: Wood-Fired Smash Burgers */}
              <div className="bg-[#ffffff] rounded-3xl p-5 sm:p-6 border border-[#dedad0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#65a30d] uppercase tracking-widest block mb-1">
                    PILLAR 03 &bull; LIVE GRILL
                  </span>
                  <h4 className="text-lg font-bold text-[#111111]">
                    Wagyu Smash Burger
                  </h4>
                  <p className="text-xs text-[#737373] mt-1.5 leading-relaxed">
                    Double 4oz American Wagyu patties, lacey crispy edges, charred sweet onions &amp; secret sauce.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f0ece4] flex items-center justify-between">
                  <span className="text-base font-bold text-[#111111]">$15.50</span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: 'bento-burger',
                        name: 'Wagyu Double Smash Burger',
                        price: 15.50,
                        category: 'Burgers',
                      })
                    }
                    className="bg-[#0a0a0a] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#65a30d] hover:text-[#0a0a0a] transition-all cursor-pointer"
                  >
                    + Add
                  </button>
                </div>
              </div>

              {/* Card 4: Loaded Truffle Sides */}
              <div className="bg-[#ffffff] rounded-3xl p-5 sm:p-6 border border-[#dedad0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#65a30d] uppercase tracking-widest block mb-1">
                    PILLAR 04 &bull; SIDES
                  </span>
                  <h4 className="text-lg font-bold text-[#111111]">
                    Truffle Fries &amp; Mac
                  </h4>
                  <p className="text-xs text-[#737373] mt-1.5 leading-relaxed">
                    Hand-cut Idaho russets with pure white truffle oil, shaved 24-mo parmesan &amp; 5-cheese smoked mac.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f0ece4] flex items-center justify-between">
                  <span className="text-base font-bold text-[#111111]">$9.95</span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: 'bento-sides',
                        name: 'Truffle Fries & Cast-Iron Mac',
                        price: 9.95,
                        category: 'Sides',
                      })
                    }
                    className="bg-[#0a0a0a] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#65a30d] hover:text-[#0a0a0a] transition-all cursor-pointer"
                  >
                    + Add
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
