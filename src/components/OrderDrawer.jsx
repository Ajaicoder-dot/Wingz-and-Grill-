import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function OrderDrawer() {
  const { isOrderOpen, closeOrder, cartItems, updateQuantity, clearCart, showToast } = useApp();
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isOrderOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setOrderSubmitted(true);
    showToast('Your feast order was sent directly to the kitchen!');
    setTimeout(() => {
      clearCart();
      setOrderSubmitted(false);
      closeOrder();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#121212] h-full border-l border-[#262626] p-6 text-white flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-250">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#242424]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#a3e635]/15 border border-[#a3e635]/30 flex items-center justify-center text-[#a3e635]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Your Feast Order</h3>
            </div>
            <button
              onClick={closeOrder}
              className="w-8 h-8 rounded-full bg-[#1f1f1f] text-[#a3a3a3] hover:text-white flex items-center justify-center text-sm cursor-pointer"
            >
              ✕
            </button>
          </div>

          {orderSubmitted ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#a3e635]/20 text-[#a3e635] text-3xl flex items-center justify-center mx-auto">
                ✓
              </div>
              <h4 className="text-xl font-bold text-white">Order Sent to Smoker!</h4>
              <p className="text-xs text-[#a3a3a3]">
                Estimated ready time: 18-22 minutes.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4 max-h-[55vh] overflow-y-auto pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-[#737373] space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#a3a3a3]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
                    </svg>
                  </div>
                  <p className="text-sm text-neutral-300 font-semibold">Your feast is currently empty.</p>
                  <p className="text-xs">Browse our signature items and add your favorites!</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#181818] p-4 rounded-2xl border border-[#262626] flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {item.name}
                      </h4>
                      <span className="text-xs font-mono text-[#a3e635]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#202020] rounded-xl px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-xs text-[#a3a3a3] hover:text-white px-1.5 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-xs text-[#a3a3a3] hover:text-white px-1.5 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer Subtotal & Action */}
        {!orderSubmitted && cartItems.length > 0 && (
          <div className="pt-4 border-t border-[#242424] space-y-3">
            <div className="space-y-1.5 text-xs text-[#888888]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8.5%)</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#222]">
                <span>Total Feast</span>
                <span className="text-[#a3e635] text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#a3e635] text-[#0a0a0a] font-bold text-sm py-3.5 rounded-full hover:bg-[#bef264] transition-all cursor-pointer shadow-[0_0_20px_rgba(163,230,53,0.3)]"
            >
              Fire My Order in Kitchen &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

