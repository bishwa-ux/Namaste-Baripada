import { motion } from 'motion/react';
import { UtensilsCrossed, CarFront, Bike, TreePine, ShoppingBag, Accessibility, Music, Users, Beer } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { icon: "🚗", title: "Drive-Through" },
    { icon: "🛵", title: "Home Delivery" },
    { icon: "♿", title: "Fully Accessible" },
    { icon: "🎵", title: "Live Music" },
    { icon: "🌿", title: "Outdoor Dining" },
    { icon: "☕", title: "Extensive Cafe" }
  ];

  return (
    <section id="facilities" className="w-full h-full bg-[#E8871A] rounded-[40px] p-8 text-white flex flex-col justify-center shadow-sm">
      <h3 className="font-serif text-2xl font-bold mb-6 text-white text-left">Facilities & Services</h3>
      <div className="grid grid-cols-2 gap-4">
        {facilities.map((fac, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-xl cursor-default">
            <span className="text-xl shrink-0">{fac.icon}</span>
            <span className="text-sm font-medium">{fac.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
