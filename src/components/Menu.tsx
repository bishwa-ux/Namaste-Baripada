import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'House Favorites', 'Desserts', 'Drinks'];

  const allItems = [
    { title: "Mutton Mudhi", desc: "Baripada's iconic puffed rice delicacy", price: "₹380", icon: "🥘", bg: "bg-[#C1440E]/10", category: ["All", "House Favorites"] },
    { title: "Chenna Poda", desc: "Signature smoked cheese dessert", price: "₹120", icon: "🍲", bg: "bg-[#3A6B35]/10", category: ["All", "Desserts", "House Favorites"] },
    { title: "Veg Thali", desc: "Pure vegetarian feast with 12 items", price: "₹250", icon: "🥗", bg: "bg-[#E8871A]/10", category: ["All", "House Favorites"] },
    { title: "Rasmalai Delight", desc: "Spongy cottage cheese discs in sweetened milk.", price: "₹150", icon: "🍨", bg: "bg-[#D4AF37]/10", category: ["Desserts"] },
    { title: "Masala Chai", desc: "Strong Assam tea brewed with fresh spices.", price: "₹60", icon: "☕", bg: "bg-[#2A1A0E]/10", category: ["Drinks"] },
    { title: "Mango Lassi", desc: "Cooling yogurt drink blended with sweet mango.", price: "₹110", icon: "🥭", bg: "bg-[#E8871A]/10", category: ["Drinks"] },
  ];

  const filteredItems = activeTab === 'All' 
    ? allItems.slice(0, 3) 
    : allItems.filter(item => item.category.includes(activeTab)).slice(0, 3);

  return (
    <section id="menu" className="w-full h-full flex flex-col bg-white rounded-[40px] p-8 border border-[#E8871A]/20 shadow-sm relative text-[#2A1A0E] overflow-hidden">
      
      <div className="flex justify-between items-end mb-6 shrink-0 relative z-10">
        <h3 className="font-serif text-2xl font-bold">House Favorites</h3>
        <select 
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="text-xs text-[#E8871A] font-bold uppercase tracking-widest bg-transparent border-none outline-none cursor-pointer appearance-none text-right pr-4"
        >
          {tabs.map(tab => (
            <option key={tab} value={tab}>{tab}</option>
          ))}
        </select>
      </div>

      {/* Menu List */}
      <motion.div layout className="flex flex-col space-y-4 flex-grow relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#FDF6EC] transition-colors"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center text-2xl shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between font-bold text-[#2A1A0E]">
                  <span>{item.title}</span>
                  <span>{item.price}</span>
                </div>
                <p className="text-xs text-gray-500 font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-auto shrink-0 relative z-10 pt-4">
        <div className="p-4 bg-[#FDF6EC] rounded-2xl border border-dashed border-[#E8871A]/40">
          <p className="text-[10px] uppercase tracking-widest text-center text-[#E8871A] font-bold mb-1">Weekend Special</p>
          <p className="text-center font-serif text-sm">Live Folk Music & Traditional Buffet from 7 PM</p>
        </div>
      </div>
    </section>
  );
}
