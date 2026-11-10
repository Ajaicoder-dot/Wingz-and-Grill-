import React from 'react';
import { useApp } from '../context/AppContext';

export default function SignatureShowcase() {
  const { addToCart, openReservation } = useApp();

  const dishes = [
    {
      id: 'sig-ghost-honey',
      name: 'Wild Honey & Smoked Ghost Pepper Wings',
      badge: 'AWARD WINNING',
      category: 'Signature Wings',
      price: 18.50,
      heat: '75,000 SHU • Ghost Pepper Relish',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: 'Slow-smoked over cherrywood then flash-fried for crunch. Tossed in raw wildflower honey reduction with charred ghost pepper relish and fresh cilantro.',
      details: ['12 Jumbo Wings', 'Buttermilk Ranch Dip', 'Pickled Celery Ribbons'],
      bgGradient: 'from-[#2e1810] via-[#1a0e0a] to-[#0f0907]',
    },
    {
      id: 'sig-ribs',
      name: '14-Hour Hickory Smoked St. Louis Ribs',
      badge: 'PITMASTER RESERVE',
      category: 'Smokehouse Grills',
      price: 28.00,
      heat: 'Appalachian Hickory Smoke (0 SHU)',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: 'Hand-rubbed with dark brown sugar, espresso dust, and smoked paprika. Smoked at 225°F for 14 hours until pulling clean from bone with deep mahogany bark.',
      details: ['Full Rack (12 Bones)', 'House Bourbon Glaze', 'Cured Dill Pickles'],
      bgGradient: 'from-[#241a12] via-[#17110c] to-[#0d0a07]',
    },
    {
      id: 'sig-truffle-burger',
      name: 'The Wagyu Truffle Smash Burger',
      badge: 'CHEF FAVORITE',
      category: 'Wood-Fired Burgers',
      price: 17.50,
      heat: 'Black Truffle Umami (0 SHU)',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      description: 'Double 4oz American Wagyu blend smashed on 600°F steel, layered with melted black-rind aged cheddar, black truffle aioli, and crispy shallots on toasted brioche.',
      details: ['Double Wagyu Patties', 'Truffle Parmesan Fries', 'House Garlic Aioli'],
      bgGradient: 'from-[#1e2016] via-[#14160e] to-[#0b0c08]',
    },
    {
      id: 'sig-cast-iron-wings',
      name: 'Cast-Iron Flame-Roasted Skillet Wings',
      badge: 'ZERO FRY OIL',
      category: 'Signature Wings',
      price: 17.95,
      heat: 'Herb & Confit Garlic Char (0 SHU)',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
      description: 'Never touched by fryer oil. Sizzled in smoking cast iron skillets with rosemary butter, roasted sweet garlic cloves, and fresh cracked Tellicherry pepper.',
      details: ['12 Wood-Roasted Wings', 'Warm Garlic Butter Dip', 'Charred Lemon'],
      bgGradient: 'from-[#192415] via-[#11180e] to-[#0a0f08]',
    },
    {
      id: 'sig-nashville-sando',
      name: 'Nashville Hot Maple Chicken Sandwich',
      badge: 'TOP SELLER',
      category: 'Handcrafted Sandos',
      price: 15.95,
      heat: '35,000 SHU • Sizzling Cayenne',
      image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
      description: 'Whole chicken breast brined in sweet tea, double dipped in spiced buttermilk batter, dunked in sizzling cayenne-infused lard, and crowned with pimento slaw.',
      details: ['Jumbo Chicken Breast', 'Sweet Pimento Slaw', 'Butter-Griddled Bun'],
      bgGradient: 'from-[#2a1715] via-[#1c0f0d] to-[#0f0807]',
    },
    {
      id: 'sig-smoked-mac',
      name: 'Cast-Iron Smoked Gouda & Chorizo Mac',
      badge: 'CROWD PLEASER',
      category: 'Artisan Sides',
      price: 12.95,
      heat: 'Smoked Gouda Mornay (0 SHU)',
      image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
      description: 'Cavatappi pasta folded in five-cheese mornay featuring 2-year aged white cheddar and smoked gouda, folded with crumbled Spanish chorizo and garlic panko crumb.',
      details: ['Serves 2-3 Guests', 'Broiled Golden Crust', 'Chive Garnish'],
      bgGradient: 'from-[#262012] via-[#18140b] to-[#0d0b06]',
    },
  ];

  return (
    <section id="signature" className="bg-[#f4f0ea] py-20 px-4 md:px-6 text-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
              <span className="uppercase text-xs font-bold tracking-widest text-[#737373]">
                SIGNATURE CREATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
              Our <span className="font-editorial font-normal">craft</span> on the plate.
            </h2>
          </div>

          <a
            href="#curated"
            className="self-start md:self-auto text-xs md:text-sm font-semibold text-[#111111] hover:text-[#65a30d] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Explore All 24 Menu Items</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* 2-Column High-Contrast Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#0f0f0f] rounded-3xl overflow-hidden border border-[#262626] shadow-xl hover:border-[#a3e635]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Area with Gradient Ambiance */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#161616]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-black/60 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="bg-[#000000]/70 backdrop-blur-md text-[#ffffff] text-[10px] font-bold px-3 py-1 rounded-full border border-[#ffffff]/15 uppercase tracking-wider">
                    {dish.badge}
                  </span>
                  <span className="bg-[#000000]/70 backdrop-blur-md text-xs font-mono font-bold text-[#a3e635] px-3 py-1 rounded-full border border-[#ffffff]/15">
                    {dish.heat}
                  </span>
                </div>

                {/* Title over image bottom */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-xs text-[#a3e635] uppercase tracking-wider font-semibold block mb-1">
                    {dish.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md group-hover:text-[#a3e635] transition-colors">
                    {dish.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                  {dish.description}
                </p>

                {/* Micro details pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {dish.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1a1a1a] text-[#d4d4d4] text-[11px] px-3 py-1 rounded-full border border-[#2a2a2a]"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Card Footer with Price & Actions */}
                <div className="mt-8 pt-6 border-t border-[#222222] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#737373] block">Price</span>
                    <span className="text-2xl font-black text-white">
                      ${dish.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={openReservation}
                      className="bg-[#1f1f1f] text-[#ffffff] text-xs font-medium px-4 py-2.5 rounded-full hover:bg-[#2c2c2c] transition-colors cursor-pointer"
                    >
                      Dine In
                    </button>
                    <button
                      onClick={() =>
                        addToCart({
                          id: dish.id,
                          name: dish.name,
                          price: dish.price,
                          category: dish.category,
                        })
                      }
                      className="bg-[#a3e635] text-[#0a0a0a] text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#bef264] transition-colors cursor-pointer"
                    >
                      + Add to Feast
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
