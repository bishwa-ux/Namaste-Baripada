import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonial = {
    quote: "The most authentic mutton mudhi I've had in years. The warmth of the staff makes it feel like home.",
    name: "Rajesh Mohanty",
    tag: "Family Dinner • ★★★★★"
  };

  return (
    <section className="w-full h-full bg-[#C1440E] rounded-[40px] p-8 text-white relative flex flex-col justify-center shadow-sm">
       <div className="absolute top-4 left-6 text-6xl opacity-20 font-serif leading-none">"</div>
       <p className="text-lg md:text-xl font-serif italic mb-6 leading-tight relative z-10 font-bold">
         {testimonial.quote}
       </p>
       <div className="flex items-center gap-3 relative z-10">
         <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg border border-white/30">
            R
         </div>
         <div>
           <p className="font-bold text-sm tracking-wide">{testimonial.name}</p>
           <p className="text-xs text-white/80">{testimonial.tag}</p>
         </div>
       </div>
    </section>
  );
}
