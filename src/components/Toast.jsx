import React from 'react';
import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="bg-[#121212] border border-[#a3e635]/40 text-white rounded-2xl px-5 py-3.5 shadow-2xl flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] animate-pulse" />
        <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
      </div>
    </div>
  );
}

