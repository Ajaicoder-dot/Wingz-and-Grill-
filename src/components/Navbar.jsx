import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { openReservation, openOrder, cartItems } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full bg-[#0a0a0a]">
      {/* Outer wrapper with the limegreen studio inverted corner tab shape */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 md:px-6 pt-2 sm:pt-3">
        <div className="relative bg-[#f4f0ea] rounded-t-2xl sm:rounded-t-3xl md:rounded-t-[2rem] rounded-b-2xl px-4 sm:px-6 md:px-8 py-3 md:py-3.5 flex items-center justify-between shadow-xl border border-[#dedad0]">

          {/* Logo with official circular emblem */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Wingz & Grill"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-md border border-[#222222]/15 group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex items-baseline">
              <span className="text-[#111111] text-base md:text-lg font-extrabold tracking-tight">Wingz & Grill</span>
              {/* <span className="text-[#65a30d] font-semibold text-sm">.studio</span> */}
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Menu with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMenuDropdownOpen(true)}
              onMouseLeave={() => setMenuDropdownOpen(false)}
            >
              <button
                onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
                className="text-[#1f1f1f] text-sm font-medium hover:text-[#65a30d] transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
              >
                <span>Services &amp; Menu</span>
                <span className={`text-[10px] transition-transform duration-200 ${menuDropdownOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>

              {menuDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#ffffff] rounded-2xl shadow-2xl border border-[#ebe7df] py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <a href="#signature" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#111] hover:bg-[#f4f0ea] hover:text-[#65a30d] transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#65a30d] mr-2 align-middle" />
                    Signature Jumbo Wings
                    <span className="block text-[11px] font-normal text-[#737373] ml-3.5">14 scratch-made sauces</span>
                  </a>
                  <a href="#signature" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#111] hover:bg-[#f4f0ea] hover:text-[#65a30d] transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ef4444] mr-2 align-middle" />
                    14-Hour Smoked St. Louis Ribs
                    <span className="block text-[11px] font-normal text-[#737373] ml-3.5">Red oak &amp; hickory bark</span>
                  </a>
                  <a href="#signature" className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#111] hover:bg-[#f4f0ea] hover:text-[#65a30d] transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#eab308] mr-2 align-middle" />
                    Wood-Fired Smash Burgers
                    <span className="block text-[11px] font-normal text-[#737373] ml-3.5">Double wagyu beef &amp; potato brioche</span>
                  </a>
                  <div className="my-1 border-t border-[#f0ede6]" />
                  <a href="#curated" className="block px-3 py-1.5 text-xs font-semibold text-[#65a30d] hover:underline">
                    View Full Interactive Menu &rarr;
                  </a>
                </div>
              )}
            </div>

            <a href="#process" className="text-[#1f1f1f] text-sm font-medium hover:text-[#65a30d] transition-colors">
              The Craft
            </a>
            <a href="#framework" className="text-[#1f1f1f] text-sm font-medium hover:text-[#65a30d] transition-colors">
              Flavors
            </a>
            <a href="#vibe-matcher" className="text-[#1f1f1f] text-sm font-medium hover:text-[#65a30d] transition-colors">
              Vibe Matcher
            </a>
            <a href="#curated" className="text-[#1f1f1f] text-sm font-medium hover:text-[#65a30d] transition-colors">
              Curated
            </a>
            <a href="#pricing" className="text-[#1f1f1f] text-sm font-medium hover:text-[#65a30d] transition-colors">
              Pricing
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Feast Cart Pill */}
            {totalCartCount > 0 && (
              <button
                onClick={openOrder}
                className="hidden sm:flex items-center gap-2 bg-[#ffffff] border border-[#d6d0c4] text-[#111111] text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-[#eae6dc] transition-all cursor-pointer shadow-sm"
              >
                <svg className="w-3.5 h-3.5 text-[#65a30d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Feast Order</span>
                <span className="bg-[#a3e635] text-[#111111] text-[11px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalCartCount}
                </span>
              </button>
            )}

            {/* Black Pill Button matching Image 1: "Book a 20-min call" */}
            <button
              onClick={openReservation}
              className="bg-[#0a0a0a] text-[#ffffff] text-xs md:text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-[#222222] transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Book a 20-min call</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] group-hover:scale-125 transition-transform" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#111111] hover:text-[#65a30d] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#f4f0ea] rounded-2xl p-4 shadow-xl border border-[#dedad0] space-y-3">
            <a
              href="#signature"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#111111] font-semibold text-sm py-1.5 border-b border-[#e2ddd3]"
            >
              Menu Highlights
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#111111] font-semibold text-sm py-1.5 border-b border-[#e2ddd3]"
            >
              The Craft (Process)
            </a>
            <a
              href="#framework"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#111111] font-semibold text-sm py-1.5 border-b border-[#e2ddd3]"
            >
              Flavors Framework
            </a>
            <a
              href="#vibe-matcher"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#111111] font-semibold text-sm py-1.5 border-b border-[#e2ddd3]"
            >
              Vibe Matcher
            </a>
            <a
              href="#curated"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#111111] font-semibold text-sm py-1.5 border-b border-[#e2ddd3]"
            >
              Curated Menu &amp; Order
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#111111] font-semibold text-sm py-1.5"
            >
              Feast Pricing &amp; Catering
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openReservation();
                }}
                className="w-full bg-[#0a0a0a] text-white py-2.5 rounded-full font-medium text-sm flex items-center justify-center gap-2"
              >
                <span>Reserve a Table</span>
                <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
