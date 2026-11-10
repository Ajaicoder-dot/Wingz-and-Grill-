import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function CuratedMenuCarousel() {
  const { addToCart, openReservation, showToast } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [addedId, setAddedId] = useState(null);
  const carouselRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'wings', label: 'Jumbo Wings' },
    { id: 'ribs', label: 'Pitmaster Ribs' },
    { id: 'burgers', label: 'Smash Burgers' },
    { id: 'sides', label: 'Loaded Sides' },
    { id: 'drinks', label: 'Craft Taps & Shakes' },
  ];

  const menuItems = [
    {
      id: 'm-buffalo',
      name: 'Classic Buffalo Reserve Wings',
      category: 'wings',
      price: 16.50,
      spice: '35,000 SHU (Cayenne Mash)',
      spiceLevel: 'Med-Hot',
      heatPercent: 55,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
      desc: 'Cayenne pepper mash aged 6 months, emulsified with cultured butter and organic apple cider vinegar.',
      tags: ['Bestseller', 'Gluten-Free'],
      prep: 'Double-Fried Duck Fat',
    },
    {
      id: 'm-garlic-parm',
      name: 'Roasted Garlic & 24-Mo Parmesan',
      category: 'wings',
      price: 16.95,
      spice: '0 SHU (Confit Garlic & Herbs)',
      spiceLevel: 'Zero Scoville',
      heatPercent: 5,
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80',
      desc: 'Confited whole garlic cloves crushed into brown butter with freshly grated aged Parmigiano Reggiano.',
      tags: ['No Spice', 'Crowd Favorite'],
      prep: 'Whipped Brown Butter',
    },
    {
      id: 'm-mango-hab',
      name: 'Smoked Mango & Habanero Fire',
      category: 'wings',
      price: 17.50,
      spice: '75,000 SHU (Charred Habanero)',
      spiceLevel: 'Scorching',
      heatPercent: 90,
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80',
      desc: 'Alphonso mango reduction simmered with charred red habaneros and Jamaican allspice berries.',
      tags: ['Sweet & Spicy', 'High Heat'],
      prep: 'Wood-Fired Glaze',
    },
    {
      id: 'm-dry-rub',
      name: 'Memphis Dry Dust Smoked Wings',
      category: 'wings',
      price: 16.50,
      spice: '14-Spice Savory Bark (1,000 SHU)',
      spiceLevel: 'Mild Smoke',
      heatPercent: 20,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      desc: 'No wet sauce. Crisp dry bark featuring 14 toasted spices, raw turbinado sugar, and smoked sea salt.',
      tags: ['Signature', 'Gluten-Free'],
      prep: '14-Spice Dry Rub',
    },
    {
      id: 'm-st-louis-full',
      name: 'St. Louis Cut Hickory Ribs',
      category: 'ribs',
      price: 29.50,
      spice: 'Kentucky Bourbon Glaze (500 SHU)',
      spiceLevel: 'Sweet Bourbon',
      heatPercent: 15,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      desc: 'Full rack glazed with dark molasses and Kentucky bourbon mop sauce during the final 45m of the 14-hour smoke.',
      tags: ['Feeds 2', 'Pit Special'],
      prep: '14-Hour Applewood',
    },
    {
      id: 'm-beef-rib',
      name: 'Dino Cut Smoked Beef Short Rib',
      category: 'ribs',
      price: 36.00,
      spice: 'Coarse Tellicherry Bark (0 SHU)',
      spiceLevel: 'Pure Pepper Bark',
      heatPercent: 10,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
      desc: 'Texas style 1.5 lb single bone beef rib. Tender as velvet with massive peppery mahogany wood-fire bark.',
      tags: ['Limited Daily', 'Prime Angus'],
      prep: '16-Hour Oak Smoke',
    },
    {
      id: 'm-double-smash',
      name: 'The Classic Double Smash Burger',
      category: 'burgers',
      price: 14.95,
      spice: 'Charred Scallion Mayo (0 SHU)',
      spiceLevel: 'Savory Shack',
      heatPercent: 5,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
      desc: 'Two 4oz smashed chuck/brisket patties, American cheddar, grilled sweet onions, pickles, and secret shack sauce.',
      tags: ['Potato Bun', 'Classic'],
      prep: '650°F Cast Iron Sear',
    },
    {
      id: 'm-bacon-jam',
      name: 'Smoked Bacon Jam & Bleu Burger',
      category: 'burgers',
      price: 16.95,
      spice: 'Bourbon Bacon Reduction',
      spiceLevel: 'Rich & Tangy',
      heatPercent: 8,
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
      desc: 'Double wagyu patties crowned with 8-hour bacon-bourbon jam and cave-aged melted gorgonzola.',
      tags: ['Gourmet', 'Chef Special'],
      prep: 'Double Wagyu Beef',
    },
    {
      id: 'm-truffle-fries',
      name: 'Hand-Cut White Truffle Fries',
      category: 'sides',
      price: 8.95,
      spice: 'White Truffle Oil & Herb (0 SHU)',
      spiceLevel: 'Aromatic Earthy',
      heatPercent: 0,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
      desc: 'Double-cooked russet potatoes tossed with pure Italian white truffle oil, shaved parmesan, and rosemary salt.',
      tags: ['Vegetarian', 'Shareable'],
      prep: 'Double Duck-Fat Blanch',
    },
    {
      id: 'm-cornbread',
      name: 'Cast-Iron Honey Butter Cornbread',
      category: 'sides',
      price: 7.50,
      spice: 'Wildflower Honey Butter (0 SHU)',
      spiceLevel: 'Warm & Sweet',
      heatPercent: 0,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      desc: 'Baked to order in hot cast iron with whole sweet corn kernels, served with smoked honey sea-salt butter.',
      tags: ['Baked to Order', 'Vegetarian'],
      prep: 'Fresh From The Hearth',
    },
    {
      id: 'm-bourbon-cocktail',
      name: 'Smoked Cherrywood Old Fashioned',
      category: 'drinks',
      price: 13.50,
      spice: '100-Proof Small Batch (Aromatic)',
      spiceLevel: 'Cherry Smoke Sip',
      heatPercent: 0,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
      desc: 'Small batch bourbon infused with charred orange peel and served in a crystal rocks glass smoked over cherrywood.',
      tags: ['21+ Only', 'Craft Cocktail'],
      prep: 'Smoked Table-Side',
    },
    {
      id: 'm-malted-shake',
      name: 'Toasted Marshmallow Malt Shake',
      category: 'drinks',
      price: 8.50,
      spice: 'Tahitian Vanilla Bean (Sweet)',
      spiceLevel: 'Velvet Sweet',
      heatPercent: 0,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
      desc: 'Hand-spun Madagascar vanilla bean ice cream with malt powder, topped with campfire torched marshmallow.',
      tags: ['Dessert Shake', 'Vegetarian'],
      prep: 'Hand-Spun Cream',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

  // Smooth Scroll Handlers
  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollOffset = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const updateScrollProgress = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollProgress, { passive: true });
      updateScrollProgress();
      return () => el.removeEventListener('scroll', updateScrollProgress);
    }
  }, [filteredItems]);

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
    });
    setAddedId(item.id);
    showToast(`Added ${item.name} to your order!`);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="curated" className="bg-[#f4f0ea] py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 text-[#111111] border-t border-[#e8e4dc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Title & Interactive Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 bg-[#e8e3d7] px-3.5 py-1.5 rounded-full border border-[#dedad0]">
              <span className="w-2 h-2 rounded-full bg-[#65a30d] animate-pulse" />
              <span className="uppercase text-xs font-bold tracking-widest text-[#555555] font-mono">
                LIVE MENU
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Our menu, <span className="font-editorial font-normal italic text-[#65a30d]">curated.</span>
            </h2>
            <p className="mt-2 text-sm text-[#737373] max-w-lg">
              Scroll through today&apos;s flame-grilled specialties. Every cut is seasoned from scratch and pulled hot from the pit.
            </p>
          </div>

          {/* Carousel Arrow Navigation Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#888888] hidden sm:inline-block mr-2">
              {filteredItems.length} Dishes
            </span>
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll menu left"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#111111] text-[#111111] hover:text-white border border-[#dedad0] shadow-sm flex items-center justify-center text-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              &larr;
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll menu right"
              className="w-11 h-11 rounded-full bg-[#111111] hover:bg-[#65a30d] text-white hover:text-black shadow-md flex items-center justify-center text-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              &rarr;
            </button>
            <button
              onClick={openReservation}
              className="ml-2 bg-[#65a30d] text-black text-xs md:text-sm font-bold px-5 py-3 rounded-full hover:bg-[#4d7c0f] hover:text-white transition-all shadow-sm cursor-pointer"
            >
              Reserve Table
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                if (carouselRef.current) {
                  carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              className={`text-xs md:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full whitespace-nowrap transition-all cursor-pointer font-mono ${
                activeCategory === cat.id
                  ? 'bg-[#111111] text-white shadow-md scale-102'
                  : 'bg-white text-[#555555] hover:text-[#111111] hover:bg-[#faf7f2] border border-[#dedad0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Animated Horizontal Scrolling Carousel */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1 scrollbar-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="snap-start min-w-[300px] sm:min-w-[340px] md:min-w-[360px] max-w-[360px] bg-white rounded-3xl border border-[#dedad0] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              {/* Dish Photo with Interactive Badges & Hover Zoom */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-[#e8e3d8]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out select-none pointer-events-none"
                  loading="lazy"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge: Spice Telemetry */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/75 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow-sm">
                    <span className="text-[#65a30d]">●</span>
                    {item.spiceLevel}
                  </span>
                  
                  {/* Floating Price Pill */}
                  <span className="bg-[#111111] text-[#a3e635] text-xs font-black px-3 py-1 rounded-full shadow-md font-mono border border-black/40">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                {/* Bottom Chip: Prep Discipline */}
                <div className="absolute bottom-3 left-3.5 pointer-events-none">
                  <span className="bg-white/90 backdrop-blur-md text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono shadow-sm">
                    {item.prep}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#65a30d] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <div className="text-[11px] font-mono text-[#8c8577] mt-1.5 mb-2.5">
                    {item.spice}
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {item.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f4f0ea] text-[#555] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#e5e0d5] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-5 pt-4 border-t border-[#f0ece4] flex items-center justify-between">
                  <span className="text-[11px] text-[#888] font-mono">Scratch-made</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`text-xs font-bold px-4 sm:px-5 py-2.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shadow-sm active:scale-95 ${
                      addedId === item.id
                        ? 'bg-[#65a30d] text-black scale-105'
                        : 'bg-[#111111] text-white hover:bg-[#65a30d] hover:text-[#0a0a0a]'
                    }`}
                  >
                    <span>{addedId === item.id ? '✓ Added' : '+ Add to Order'}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Visual Progress Bar & Drag Tip */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888888] font-mono">
          <div className="flex items-center gap-2 w-full sm:w-64">
            <div className="h-1.5 w-full bg-[#dedad0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#65a30d] rounded-full transition-all duration-150"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>
            <span className="text-[10px] text-[#737373] shrink-0">
              {Math.round(scrollProgress)}%
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>⇄ Drag or swipe horizontally to view all dishes</span>
          </div>
        </div>

      </div>
    </section>
  );
}
