import { motion } from 'motion/react';

export default function Atmosphere() {
  const experiences = [
    { icon: "🕯️", title: "Romantic", desc: "Perfect for date nights" },
    { icon: "👨‍👩‍👧", title: "Family-Friendly", desc: "Kids' menu & celebrations" },
    { icon: "🎓", title: "Student Vibe", desc: "Affordable bites" },
    { icon: "✈️", title: "Tourist-Friendly", desc: "Warm welcome" },
    { icon: "🧑‍💼", title: "Upscale Casual", desc: "Refined experience" },
    { icon: "🎵", title: "Live Music", desc: "Soulful performances" },
  ];

  return (
    <section className="w-full h-full bg-[#E8871A]/10 text-[#2A1A0E] rounded-[40px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center border border-[#E8871A]/20">
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between h-full">
        <div className="lg:w-1/3 text-center lg:text-left h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#C1440E]">
            An Atmosphere<br/>for Every Occasion
          </h2>
          <p className="font-sans text-lg text-gray-700/80 mb-6">
            Whether you are celebrating a special moment or just dropping by for a quick bite, we curate the perfect vibe for you.
          </p>
        </div>

        <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 h-full">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8871A]/20 p-4 rounded-3xl hover:bg-[#FDF6EC] hover:border-[#E8871A]/50 transition-all duration-300 flex flex-col items-start shadow-sm"
            >
              <div className="text-3xl mb-3 shrink-0">{exp.icon}</div>
              <h3 className="font-serif font-bold text-lg text-[#2A1A0E] mb-1">{exp.title}</h3>
              <p className="font-sans text-gray-600 text-xs leading-relaxed mt-auto">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
