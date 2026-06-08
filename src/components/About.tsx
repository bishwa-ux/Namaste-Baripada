import { motion } from 'motion/react';
import { Leaf, Music, Coffee, CakeSlice, Accessibility } from 'lucide-react';

export default function About() {
  const badges = [
    { icon: "🌿", label: "Vegan Options" },
    { icon: "🎵", label: "Live Music" },
    { icon: "☕", label: "Extensive Tea Menu" },
    { icon: "🍰", label: "Great Desserts" },
    { icon: "♿", label: "Fully Accessible" },
  ];

  return (
    <section id="about" className="w-full h-full bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-black/5 overflow-hidden flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
          <h2 className="text-[#2A1A0E] text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            A Taste of Baripada,<br/>Crafted with Love
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
            Welcome to Namaste Baripada, where family values and diverse culinary traditions come together. We pride ourselves on creating a space where vibrant spices and fresh, local ingredients shine in every dish.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 font-sans">
            Whether you are a local family celebrating a milestone, a tourist discovering Odisha's warmth, or a university student grabbing a quick bite, our doors and hearts are always open.
          </p>
          <div className="flex flex-wrap gap-3 mt-auto">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#FDF6EC] text-[#2A1A0E] px-4 py-2 rounded-xl border border-[#E8871A]/20">
                <span>{badge.icon}</span>
                <span className="font-medium text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center items-center relative h-full">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] border-[1px] border-[#E8871A]/30 flex items-center justify-center relative rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-2 rounded-[2rem] bg-[#FDF6EC] border border-[#2A1A0E]/5 -rotate-6"></div>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-[#E8871A] to-[#D4AF37] flex items-center justify-center z-10 shadow-lg shadow-[#E8871A]/20">
              <span className="font-serif text-5xl text-white font-bold tracking-tighter">NB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
