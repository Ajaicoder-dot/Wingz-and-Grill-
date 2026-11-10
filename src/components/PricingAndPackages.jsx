import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function PricingAndPackages() {
  const { openReservation } = useApp();
  const [tier, setTier] = useState('grand'); // 'tasting' | 'grand' | 'catering'

  const packages = {
    tasting: {
      name: 'Chef’s Table Flight',
      tag: 'INDIVIDUAL / DATE NIGHT',
      tagBadge: 'COUPLES & TASTING',
      price: '$45',
      unit: 'per guest',
      valueNote: '5-Course Guided Wood-Fire Journey',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=85',
      alt: 'Artisanal crispy wood-fired wings plated with signature sauces',
      servings: '1-2 Guests',
      smokeTime: 'Course-by-Course Tasting',
      weight: '~1.8 lbs Plated Bites',
      desc: 'An intimate culinary journey curated course-by-course by our executive pitmaster at the open wood-fire hearth.',
      items: [
        { name: 'Welcome Craft Sip', note: 'Smoked cherry old fashioned or peach mocktail' },
        { name: 'Flight of 6 Jumbo Wings', note: 'Paired with 6 rare house-fermented sauces' },
        { name: 'Prime Brisket & Rib Bite', note: 'Applewood smoked with black pepper bark' },
        { name: 'Smoked Gouda Mac & Truffle Fries', note: 'Single-skillet side with shaved parmesan' },
        { name: 'Cast-Iron Molten Brownie', note: 'Warm Madagascar vanilla bean ice cream' },
        { name: 'Hearth-Side Reserved Seating', note: 'Front-row view of our 650°F live ember grill' },
      ],
      cta: 'Book Chef’s Table ($45/person)',
    },
    grand: {
      name: 'The Pitmaster’s Grand Feast',
      tag: 'MOST POPULAR • FEEDS 4-6',
      tagBadge: 'BEST VALUE FEAST',
      price: '$120',
      unit: 'complete feast platter',
      valueNote: 'Only ~$24 per person for a group of 5',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
      alt: 'Heaped pitmaster barbecue feast platter with smoked ribs, glazed wings, and sides',
      servings: 'Feeds 4 to 6 Guests Generously',
      smokeTime: '14-Hour Applewood Low & Slow',
      weight: '~5.6 lbs of Hot Smoked Feast',
      desc: 'The definitive Wingz & Grill showcase. Designed for hungry crews and food lovers who want to taste every signature craft on our pit.',
      items: [
        { name: '30 Jumbo Crispy Wings', note: 'Double-fried in duck fat, tossed in up to 3 glazes' },
        { name: 'Full 14-Hour St. Louis Rib Rack', note: 'Fall-off-the-bone tender with Kentucky bourbon mop' },
        { name: '2 Wood-Fired Smash Burgers', note: 'Dry-aged beef, charred scallion mayo, halved to share' },
        { name: 'Bubbling Skillet Chorizo Mac', note: '5-cheese smoked blend with artisanal Spanish chorizo' },
        { name: 'Duck-Fat Russet Fries Basket', note: 'Hand-cut potatoes tossed with garlic & fresh rosemary' },
        { name: 'Honey Butter Cornbread Skillet', note: 'Warm skillet with whipped wildflower butter + 4 dips' },
      ],
      cta: 'Reserve The Grand Feast ($120)',
    },
    catering: {
      name: 'Full Smokehouse Catering Buffet',
      tag: 'OFFICE / CELEBRATION • FEEDS 25+',
      tagBadge: 'EVENT BUFFET SETUP',
      price: '$480',
      unit: 'complete event spread',
      valueNote: 'Turnkey buffet setup with stainless chafers',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=85',
      alt: 'Large smokehouse event catering spread with ribs, wings, and buffet chafers',
      servings: 'Feeds 25 to 35 Guests',
      smokeTime: 'Continuous Live Pit Preparation',
      weight: '~32 lbs of Complete Smokehouse Feast',
      desc: 'Turn any venue into a legendary smokehouse feast. Delivered steaming hot with complete stainless chafing equipment and sauce bar.',
      items: [
        { name: '120 Jumbo Crispy Wings', note: 'Arrives in 4 warming trays with 5 sauce dispensers' },
        { name: '4 Full Racks of St. Louis Ribs', note: 'Pre-carved into individual bones for easy self-serve' },
        { name: 'Chafing Trays of Mac & Fries', note: 'Kept hot with gel-fuel chafers for up to 3 hours' },
        { name: 'Cornbread Skillet Trays (30 Slices)', note: 'With individual whipped honey butter pots' },
        { name: 'Stainless Wire Chafing Racks & Fuel', note: 'All stands, water pans, fuel cans & serving tongs included' },
        { name: 'Heavy Compostable Plates & Cutlery', note: 'Eco-friendly bamboo napkins, wet wipes & trash bags' },
      ],
      cta: 'Order Event Catering ($480)',
    },
  };

  const current = packages[tier];

  return (
    <section id="pricing" className="bg-[#0a0a0a] py-24 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 text-white border-t border-[#1f1f1f] relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#93df01]/5 blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#93df01] animate-pulse" />
              <span className="uppercase text-xs font-bold tracking-widest text-[#93df01] font-mono">
                TRANSPARENT FEASTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Transparent <span className="font-editorial font-normal italic text-[#93df01]">pricing.</span>
            </h2>
            <p className="mt-3 text-sm text-[#888888] max-w-xl">
              No hidden service charges, no surprise fees. Every feast is carved, glazed, and served hot directly off the pit.
            </p>
          </div>

          {/* Realistic Package Switcher Pills */}
          <div className="bg-[#141414] p-1.5 rounded-full border border-[#272727] flex items-center gap-1 self-start md:self-auto shadow-inner">
            <button
              onClick={() => setTier('tasting')}
              className={`text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all cursor-pointer font-mono ${
                tier === 'tasting'
                  ? 'bg-[#93df01] text-black font-bold shadow-[0_0_15px_rgba(147,223,1,0.35)]'
                  : 'text-[#888] hover:text-white'
              }`}
            >
              Flight ($45)
            </button>
            <button
              onClick={() => setTier('grand')}
              className={`text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all cursor-pointer font-mono ${
                tier === 'grand'
                  ? 'bg-[#93df01] text-black font-bold shadow-[0_0_15px_rgba(147,223,1,0.35)]'
                  : 'text-[#888] hover:text-white'
              }`}
            >
              Grand Feast ($120)
            </button>
            <button
              onClick={() => setTier('catering')}
              className={`text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all cursor-pointer font-mono ${
                tier === 'catering'
                  ? 'bg-[#93df01] text-black font-bold shadow-[0_0_15px_rgba(147,223,1,0.35)]'
                  : 'text-[#888] hover:text-white'
              }`}
            >
              Catering ($480)
            </button>
          </div>
        </div>

        {/* Master Realistic Feast Showcase Card */}
        <div className="relative rounded-3xl border border-[#262626] bg-[#111111] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT: Realistic Food Photography Display */}
            <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full overflow-hidden bg-[#0d0d0d] flex flex-col justify-between p-6 sm:p-8">
              {/* Photo Background */}
              <img
                src={current.image}
                alt={current.alt}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />
              
              {/* Dark subtle vignette for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none" />

              {/* Top Photo Overlay Badges */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <span className="bg-black/60 backdrop-blur-md text-[#93df01] border border-[#93df01]/40 text-[11px] font-bold px-3 py-1.5 rounded-full font-mono uppercase tracking-wider">
                  {current.tagBadge}
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white/90 border border-white/20 text-[11px] font-medium px-3 py-1.5 rounded-full font-mono">
                  {current.servings}
                </span>
              </div>

              {/* Bottom Photo Live Telemetry Specs */}
              <div className="relative z-10 space-y-3">
                <div className="bg-black/75 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-lg">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#888888] block text-[10px] uppercase font-mono tracking-wider">Smoke Discipline</span>
                      <span className="text-white font-bold">{current.smokeTime}</span>
                    </div>
                    <div>
                      <span className="text-[#888888] block text-[10px] uppercase font-mono tracking-wider">Estimated Weight</span>
                      <span className="text-[#93df01] font-bold font-mono">{current.weight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Package Breakdown & Inclusions */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
              <div>
                {/* Tag & Title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] text-[#93df01]">◆</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#93df01] font-bold">
                    {current.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  {current.name}
                </h3>

                {/* Price Display */}
                <div className="mt-4 pt-2 flex items-baseline gap-3 border-b border-[#222222] pb-5">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                    {current.price}
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm text-[#888888] font-mono block">
                      / {current.unit}
                    </span>
                    <span className="text-xs text-[#93df01] font-semibold">
                      {current.valueNote}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                  {current.desc}
                </p>

                {/* Package Inclusions List */}
                <div className="mt-6">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#888888] mb-3.5">
                    PACKAGE INCLUSIONS &amp; DETAILS
                  </h4>
                  <div className="space-y-3">
                    {current.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <span className="w-5 h-5 rounded-full bg-[#93df01]/20 text-[#93df01] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#93df01]/30">
                          ✓
                        </span>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-white block">
                            {item.name}
                          </span>
                          <span className="text-[11px] sm:text-xs text-[#888888] leading-tight block">
                            {item.note}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA & Trust Guarantee */}
              <div className="mt-8 pt-6 border-t border-[#222222]">
                <button
                  onClick={openReservation}
                  className="w-full bg-[#93df01] text-black font-bold text-sm sm:text-base py-4 rounded-full hover:bg-[#bef264] hover:shadow-[0_0_25px_rgba(147,223,1,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2 group shadow-md"
                >
                  <span>{current.cta}</span>
                  <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
                </button>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#737373] font-mono">
                  <span>✓ No hidden service fees</span>
                  <span>✓ 100% Fresh-off-the-pit guarantee</span>
                  <span>✓ Free cancellation</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
