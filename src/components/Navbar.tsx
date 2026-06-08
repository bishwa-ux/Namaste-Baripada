import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Menu', href: '#menu', active: false },
    { name: 'Facilities', href: '#facilities', active: false },
    { name: 'Contact', href: '#contact', active: false },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 left-0 ${
        isScrolled ? 'bg-[#FDF6EC]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E8871A] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white text-xl">🪔</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-[#C1440E] tracking-tight">Namaste Baripada</h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
             <nav className="flex gap-8 text-sm font-medium uppercase tracking-wider">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`transition-colors py-1 ${
                      link.active 
                        ? 'text-[#E8871A] border-b-2 border-[#E8871A]' 
                        : 'text-[#2A1A0E]/70 hover:text-[#E8871A]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
             </nav>
             <a href="#reserve" className="bg-[#E8871A] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#E8871A]/20 hover:scale-105 transition-transform">
               BOOK A TABLE
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="text-[#2A1A0E] hover:text-[#E8871A] transition-colors"
             >
               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#FDF6EC] shadow-xl border-t border-[#E8871A]/10"
          >
            <div className="px-6 pt-4 pb-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-lg py-3 border-b border-[#2A1A0E]/5 font-medium uppercase tracking-widest ${
                    link.active ? 'text-[#E8871A]' : 'text-[#2A1A0E]/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reserve" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#E8871A] text-center text-white px-6 py-4 rounded-xl mt-4 font-bold tracking-widest uppercase text-sm shadow-md shadow-[#E8871A]/20"
              >
                BOOK A TABLE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
