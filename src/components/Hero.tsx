import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full flex-grow bg-[#2A1A0E] rounded-[40px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden text-white shadow-sm border border-black/5">
      {/* Background Graphic replacing full gradient to look like the specified design */}
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
        <div className="w-64 h-64 border-[1px] border-white rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border-[1px] border-white rounded-full rotate-45 flex items-center justify-center">
            <div className="w-32 h-32 border-[1px] border-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="z-10 relative max-w-2xl text-left">
        <span className="text-[#E8871A] font-serif italic text-xl md:text-2xl mb-4 block">Where Every Meal Feels Like Home</span>
        <motion.h1 
          className="text-4xl md:text-6xl font-serif leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Taste of Baripada,<br/>Crafted with Love
        </motion.h1>
        
        <motion.p 
          className="text-white/70 text-lg max-w-md mb-8 leading-relaxed font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience traditional Odia hospitality mixed with global flavors in the heart of Mayurbhanj.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#reserve" className="bg-white hover:bg-gray-100 text-[#2A1A0E] px-8 py-3 rounded-full text-base font-bold transition-all text-center">
            Reserve Now
          </a>
          <a href="#menu" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full text-base font-bold transition-all text-center">
            Explore Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
