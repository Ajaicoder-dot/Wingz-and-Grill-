import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function LetUsFeastAndBanner() {
  const { showToast } = useApp();
  const [partySize, setPartySize] = useState('2');
  const [date, setDate] = useState('Today');
  const [time, setTime] = useState('7:00 PM');
  const [seating, setSeating] = useState('Dining Room');
  const [reserved, setReserved] = useState(false);

  const handleQuickBook = (e) => {
    e.preventDefault();
    setReserved(true);
    showToast(`Table confirmed for ${partySize} guests (${seating}) on ${date} at ${time}!`);
  };

  return (
    <section className="relative overflow-hidden rounded-t-[3rem] -mt-6 z-10 pt-24 pb-32 sm:pb-40 md:pb-48 px-4 md:px-6 text-white border-t border-[#dedad0]">
      {/* 
        The Cinematic Celestial Moon & Landscape Artwork Background (4.jpg)
      */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: "url('/4.jpg')" }}
      />
      {/* Atmospheric slate-teal gradient overlay for high contrast and editorial readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0b1f2d]/75 via-[#0b1f2d]/35 to-[#0b1f2d]/85 z-0 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Header: RESERVATIONS & PRIVATE EVENTS / Let's feast. Experience wood-fire mastery. */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 bg-black/45 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#93df01] animate-pulse" />
            <span className="uppercase text-xs font-bold tracking-widest text-[#93df01]">
              RESERVATIONS &amp; PRIVATE EVENTS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-lg">
            Let&apos;s <span className="font-editorial font-normal italic text-[#93df01]">feast.</span>
            <br />
            <span>Experience wood-fire <span className="font-editorial font-normal italic text-white">mastery.</span></span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Whether it&apos;s a quick post-work wing craving, game day with the squad, or a private celebratory dinner, your table is ready.
          </p>
        </div>

        {/* The Open-Air Rooftop & Heated Patio Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/25 bg-black/45 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 text-white">
          <div className="relative z-10 max-w-lg">
            <span className="bg-[#93df01] text-black text-[11px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3 shadow-md">
              OPEN-AIR ROOFTOP &bull; HEATED PATIO
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-md">
              Dine Under the <span className="font-editorial font-normal italic">Open Sky.</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed drop-shadow-sm">
              Enjoy wood-fired sizzle under strings of fairy lights on our panoramic terrace with views of the twilight skyline and rocket launch views.
            </p>
          </div>

          <div className="relative z-10 mt-6 md:mt-0">
            <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/20 text-center shadow-lg">
              <span className="text-xs text-slate-300 block font-mono">Terrace Fireplaces</span>
              <span className="text-base sm:text-lg font-bold text-white">Always Cozy &amp; Warm</span>
            </div>
          </div>
        </div>

        {/* Reservation Form Card (Luminous pavilion card with frosted white backdrop) */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl relative overflow-hidden text-[#111111]">

          {reserved ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#93df01]/20 text-[#65a30d] text-3xl flex items-center justify-center mx-auto mb-4 border border-[#93df01]/40">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#111111]">
                Your Feast Table is Locked In!
              </h3>
              <p className="text-sm text-[#555555] mt-2 max-w-md mx-auto">
                We sent an instant SMS confirmation. Our pitmaster has your table reserved for {partySize} guests on {date} at {time}.
              </p>
              <button
                onClick={() => setReserved(false)}
                className="mt-6 text-xs font-bold text-[#65a30d] hover:underline cursor-pointer"
              >
                Change Reservation Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickBook} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Party Size */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#555555] mb-2 font-mono">
                    Party Size
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full bg-[#f4f0ea] border border-[#dedad0] rounded-xl px-4 py-3 text-sm font-semibold text-[#111111] focus:outline-none focus:border-[#93df01]"
                  >
                    <option value="1">1 Guest (Bar Seat)</option>
                    <option value="2">2 Guests (Cozy Booth)</option>
                    <option value="4">4 Guests (Center Stage)</option>
                    <option value="6">6 Guests (Pitmaster Table)</option>
                    <option value="8+">8+ Guests (Celebration Hall)</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#555555] mb-2 font-mono">
                    Date
                  </label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#f4f0ea] border border-[#dedad0] rounded-xl px-4 py-3 text-sm font-semibold text-[#111111] focus:outline-none focus:border-[#93df01]"
                  >
                    <option value="Today">Today (Tonight)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Friday">This Friday (Game Day)</option>
                    <option value="This Saturday">This Saturday (Feast Night)</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                {/* Seating Time */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#555555] mb-2 font-mono">
                    Seating Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#f4f0ea] border border-[#dedad0] rounded-xl px-4 py-3 text-sm font-semibold text-[#111111] focus:outline-none focus:border-[#93df01]"
                  >
                    <option value="5:30 PM">5:30 PM (Early Bird Smoke)</option>
                    <option value="7:00 PM">7:00 PM (Prime Feast)</option>
                    <option value="8:30 PM">8:30 PM (Late Night Wings)</option>
                    <option value="10:00 PM">10:00 PM (Bar &amp; Bites)</option>
                  </select>
                </div>

                {/* Seating Area */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#555555] mb-2 font-mono">
                    Seating Preference
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full bg-[#f4f0ea] border border-[#dedad0] rounded-xl px-4 py-3 text-sm font-semibold text-[#111111] focus:outline-none focus:border-[#93df01]"
                  >
                    <option value="Dining Room">Main Dining Room</option>
                    <option value="Rooftop Patio">Rooftop Sky Patio</option>
                    <option value="Chef Hearth">Chef&apos;s Fire Counter</option>
                    <option value="Sports Lounge">Sports Screen Lounge</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#666666]">
                  No deposit required &bull; Free cancellation up to 1 hour before
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0a0a0a] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#93df01] hover:text-[#0a0a0a] transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Confirm Table Booking</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
