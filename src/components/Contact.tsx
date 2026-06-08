import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'; // Simulating Zomato/Google with MessageCircle

export default function Contact() {
  return (
    <section id="contact" className="w-full h-full bg-white rounded-[40px] p-8 md:p-12 border border-[#E8871A]/20 shadow-sm text-[#2A1A0E] flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 h-full">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#E8871A] mb-8">Visit Us</h2>
          
          <div className="space-y-6 font-sans text-lg mb-8">
            <div>
              <h4 className="font-bold mb-1">Address</h4>
              <p className="text-gray-600 text-sm">Near Main Market, Baripada,<br/>Mayurbhanj District, Odisha 757001</p>
            </div>
            <div>
              <h4 className="font-bold mb-1">Phone</h4>
              <a href="tel:+919876500000" className="text-gray-600 text-sm hover:text-[#E8871A]">-91-98765-00000</a>
            </div>
            <div>
              <h4 className="font-bold mb-1">Hours</h4>
              <p className="text-gray-600 text-sm">Mon–Sun, 8:00 AM – 11:00 PM</p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-100 flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#FDF6EC] text-[#C1440E] flex items-center justify-center hover:bg-[#E8871A] hover:text-white transition-colors">
              F
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#FDF6EC] text-[#C1440E] flex items-center justify-center hover:bg-[#E8871A] hover:text-white transition-colors">
              I
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="h-64 lg:h-auto min-h-[300px] w-full rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative bg-gray-100 flex items-center justify-center">
          <p className="font-sans text-sm text-gray-400">Interactive Map View</p>
        </div>
      </div>
    </section>
  );
}
