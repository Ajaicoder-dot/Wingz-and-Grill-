import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { openReservation } = useApp();
  const [activeFeed, setActiveFeed] = useState('wings');
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const feeds = {
    wings: {
      name: 'Flame-Grilled Wings',
      badge: 'LIVE PIT CAM 01',
      temp: '650°F LIVE CHAR',
      wood: 'Oak & Applewood',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-grilled-chicken-wings-cooking-over-hot-coals-41619-large.mp4',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=1400&q=85',
      featuredDish: {
        id: 'hero-wings-real',
        name: 'Nashville Hot Honey Jumbo Wings',
        price: 17.95,
        heat: '75,000 SHU • Ghost Pepper Infused',
        tag: 'FRESH BATCH SIZZLING NOW',
        desc: 'Double-fried in beef tallow, spun in wildflower habanero honey.',
      },
    },
    smoker: {
      name: '14-Hr Hickory Smoker',
      badge: 'LIVE PIT CAM 02',
      temp: '228°F LOW & SLOW',
      wood: 'Appalachian Hickory',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-flames-in-a-barbecue-grill-41620-large.mp4',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85',
      featuredDish: {
        id: 'hero-ribs-real',
        name: 'St. Louis Hickory Smoked Ribs',
        price: 28.00,
        heat: 'Appalachian Hickory Smoke (0 SHU)',
        tag: 'PULLING IN 6 MINUTES',
        desc: 'Rubbed with brown sugar espresso bark, fall-apart tender.',
      },
    },
    chef: {
      name: 'Chef’s Open Hearth',
      badge: 'LIVE PIT CAM 03',
      temp: '600°F STEEL SEAR',
      wood: 'Kiln-Dried Cherrywood',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-chicken-wings-cooking-on-a-grill-41618-large.mp4',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
      featuredDish: {
        id: 'hero-burger-real',
        name: 'The Wagyu Truffle Smash Burger',
        price: 17.50,
        heat: 'Black Truffle Umami (0 SHU)',
        tag: 'LIMITED 20 PATTIES TONIGHT',
        desc: 'Double 4oz American Wagyu with black truffle aioli & crispy shallots.',
      },
    },
  };

  const current = feeds[activeFeed];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative bg-[#0a0a0a] pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-16 sm:pb-20 overflow-hidden">
      {/* Green Ambient Aurora Glow positioned precisely behind the browser mockup */}
      <div
        className="absolute bottom-24 sm:bottom-36 md:bottom-48 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[140px] sm:h-[200px] md:h-[240px] bg-gradient-to-t from-[#a3e635]/20 via-[#65a30d]/15 to-transparent blur-[60px] sm:blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#a3e635]/8 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Centered Headline Section */}
        <div className="text-center max-w-5xl xl:max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.35rem] font-bold tracking-tight text-white leading-[1.06]">
            <span>Chronically craveable fire-grilled wings</span>
            <br className="hidden sm:inline" />
            <span className="sm:mt-1 inline-block">
              for an{' '}
              <span className="font-editorial font-normal italic text-[#a3e635]">
                obsessed
              </span>{' '}
              foodie like you
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#999999] max-w-xl mx-auto font-normal">
            A smokehouse kitchen that delivers more than promised.
          </p>

          {/* Action Buttons Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8">
            <button
              onClick={openReservation}
              className="bg-white text-black font-semibold text-xs sm:text-sm rounded-full px-5 sm:px-6 py-3 sm:py-3.5 shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:bg-[#eaeaea] hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)] transition-all cursor-pointer inline-flex items-center gap-2 group"
            >
              <span>Book a 20-min call</span>
              <span className="text-sm transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </button>

            <a
              href="#curated"
              className="bg-[#121212] text-white border border-[#2c2c2c] text-xs sm:text-sm font-medium rounded-full px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-[#1c1c1c] hover:border-[#404040] transition-all cursor-pointer inline-flex items-center gap-2 group"
            >
              <span>See what we ship</span>
              <span className="text-xs text-[#a3e635] transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Real-Life Cinematic Safari Showcase Mockup */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#121212] rounded-2xl md:rounded-3xl border border-[#2b2b2b] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_50px_rgba(163,230,53,0.15)] overflow-hidden">

            {/* Safari Light Grey Top Navigation Bar */}
            <div className="bg-[#f5f5f7] px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#e5e5ea] flex items-center justify-between text-[#333333]">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/40 inline-block" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#febc2e] border border-[#d89e24]/40 inline-block" />
                  <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#28c840] border border-[#1aab29]/40 inline-block" />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-[#8e8e93]">
                  <span>&lsaquo;</span>
                  <span>&rsaquo;</span>
                </div>
              </div>

              {/* Centered URL Address Pill with Official Logo */}
              <div className="bg-[#e3e3e8] hover:bg-[#dadadd] transition-colors rounded-lg px-4 sm:px-6 py-1 sm:py-1.5 text-[11px] sm:text-xs text-[#1c1c1e] font-mono flex items-center justify-center gap-2 w-full max-w-[280px] sm:max-w-md mx-2 truncate">
                <img src="/logo.png" alt="Wingz & Grill" className="w-4 h-4 rounded-full object-cover shrink-0" />
                <span className="font-sans font-medium text-[#1c1c1e]">Wings & Grill.studio/live-stream</span>
                <span className="text-[#8e8e93] text-[10px] ml-1">&#8635;</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#636366]">
                <span className="hidden sm:inline text-xs cursor-pointer">&#8682;</span>
                <span className="hidden sm:inline text-xs cursor-pointer">+</span>
                <span className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
              </div>
            </div>

            {/* REAL-LIFE VIDEO & CULINARY SHOWCASE VIEWPORT */}
            <div className="relative min-h-[480px] sm:min-h-[540px] md:min-h-[580px] bg-[#000000] overflow-hidden flex flex-col justify-between">

              {/* Real-Life Video Stream Background */}
              <div className="absolute inset-0 z-0">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    key={current.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={current.image}
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.1] scale-[1.02]"
                  >
                    <source src={current.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.1]"
                  />
                )}

                {/* Subtle cinematic gradient vignettes */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/35 to-black/60 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80 pointer-events-none" />
              </div>

              {/* TOP HUD BAR: Camera Switcher */}
              <div className="relative z-10 p-4 sm:p-6 flex items-start sm:items-center justify-end gap-4">

                {/* Live Camera Feed Switcher Buttons */}
                <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-2xl border border-white/15 shadow-xl">
                  {Object.entries(feeds).map(([key, f]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveFeed(key);
                        setVideoError(false);
                      }}
                      className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${activeFeed === key
                        ? 'bg-[#a3e635] text-black shadow-md'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      <span>{f.name}</span>
                    </button>
                  ))}

                  {/* Pause/Play Toggle Button */}
                  <button
                    onClick={togglePlay}
                    title={isPlaying ? 'Pause Video' : 'Play Video'}
                    className="w-7 h-7 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-[10px] ml-1 cursor-pointer transition-colors"
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Featured in / Press Logos Ticker */}
        <div className="mt-14 sm:mt-16 md:mt-20 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-[11px] uppercase tracking-widest text-[#555555] font-semibold mb-6">
            RECOGNIZED &amp; CELEBRATED BY CULINARY VOICES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="text-sm md:text-base font-bold tracking-tight text-[#d4d4d4]">
              EATER
            </span>
            <span className="text-sm md:text-base font-serif italic text-[#d4d4d4]">
              FOOD &amp; WINE
            </span>
            <span className="text-sm md:text-base font-bold tracking-wider text-[#d4d4d4]">
              BON APPÉTIT
            </span>
            <span className="text-sm md:text-base font-mono uppercase text-[#d4d4d4]">
              MICHELIN DISCOVERY
            </span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-[#d4d4d4]">
              THE INFATUATION
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}