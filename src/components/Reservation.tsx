import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Reservation() {
  return (
    <section id="reserve" className="w-full h-full bg-[#2A1A0E] rounded-[40px] p-6 flex flex-col justify-center border border-white/10 shadow-sm text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <span className="text-[10px] text-[#E8871A] font-bold uppercase tracking-widest mb-1">Instant Booking</span>
          <span className="font-serif text-2xl font-bold">Reserve a Table</span>
        </div>
        <div className="text-3xl text-[#E8871A]">📅</div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white/60 flex items-center justify-center">
          Time: 7:30 PM
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white/60 flex items-center justify-center">
          Guests: 4
        </div>
      </div>
      <button className="w-full bg-[#E8871A] text-white py-3 md:py-4 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-[#E8871A]/90 transition-colors">
        Check Availability
      </button>
    </section>
  );
}
