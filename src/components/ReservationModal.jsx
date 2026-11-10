import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ReservationModal() {
  const { isReservationOpen, closeReservation, showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: 'Today',
    time: '7:00 PM',
    seating: 'Dining Room',
    notes: '',
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isReservationOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    showToast(`Table confirmed for ${formData.guests} guests under ${formData.name}!`);
    setTimeout(() => {
      setConfirmed(false);
      closeReservation();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141414] rounded-3xl border border-[#2b2b2b] p-6 sm:p-8 text-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={closeReservation}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#202020] text-[#a3a3a3] hover:text-white flex items-center justify-center text-sm cursor-pointer"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#a3e635]">
              TABLE RESERVATIONS
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white">
            Book Your Smokehouse Experience
          </h3>
          <p className="text-xs text-[#888888] mt-1">
            Immediate confirmation &bull; No deposit needed
          </p>
        </div>

        {confirmed ? (
          <div className="text-center py-10 space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#a3e635]/20 text-[#a3e635] text-3xl flex items-center justify-center mx-auto mb-3">
              ✓
            </div>
            <h4 className="text-xl font-bold text-white">
              Reservation Confirmed!
            </h4>
            <p className="text-xs text-[#a3a3a3]">
              We look forward to hosting you, {formData.name}. A confirmation text has been dispatched.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#a3e635]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1">
                  Phone (For SMS)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#a3e635]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1">
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#a3e635]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="4">4 People</option>
                  <option value="6">6 People</option>
                  <option value="8+">8+ People</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1">
                  Date
                </label>
                <select
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#a3e635]"
                >
                  <option value="Today">Tonight</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1">
                  Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#a3e635]"
                >
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:30 PM">8:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1">
                Seating Atmosphere
              </label>
              <select
                value={formData.seating}
                onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                className="w-full bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#a3e635]"
              >
                <option value="Dining Room">Main Dining Room (Atmospheric)</option>
                <option value="Rooftop Patio">Rooftop Sky Terrace (Open-Air Fireplace)</option>
                <option value="Chef Hearth">Chef’s Fire Counter (Front Row)</option>
                <option value="Sports Booth">Sports Lounge (Game Day 4K Screens)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] mb-1">
                Special Requests or Dietary Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Birthday celebration, extra sauce, high chair"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#1c1c1c] border border-[#2c2c2c] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#a3e635]"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#a3e635] text-[#0a0a0a] font-bold text-sm py-3.5 rounded-full hover:bg-[#bef264] transition-all cursor-pointer shadow-[0_0_20px_rgba(163,230,53,0.3)]"
              >
                Confirm Table Reservation &rarr;
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

