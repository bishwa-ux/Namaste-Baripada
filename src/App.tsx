import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Menu from './components/Menu';
import Atmosphere from './components/Atmosphere';
import Reservation from './components/Reservation';
import HighlightsStrip from './components/HighlightsStrip';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#FDF6EC] min-h-screen text-[#2A1A0E] font-sans selection:bg-[#E8871A]/30 flex flex-col p-4 md:p-8">
      <Navbar />
      
      <main className="max-w-[1240px] mx-auto w-full flex-grow grid grid-cols-1 lg:grid-cols-12 auto-rows-auto gap-6 mt-20 md:mt-24 mb-12">
        <div className="lg:col-span-8 lg:row-span-2 flex">
          <Hero />
        </div>
        <div className="lg:col-span-4 lg:row-span-4 flex">
          <Menu />
        </div>
        <div className="lg:col-span-12 lg:row-span-2 flex">
          <About />
        </div>
        <div className="lg:col-span-5 lg:row-span-2 flex">
          <Facilities />
        </div>
        <div className="lg:col-span-3 lg:row-span-2 flex">
          <Testimonials />
        </div>
        <div className="lg:col-span-4 lg:row-span-2 flex">
          <Reservation />
        </div>
        <div className="lg:col-span-12 lg:row-span-2 flex">
          <Atmosphere />
        </div>
        <div className="lg:col-span-12 flex">
          <Contact />
        </div>
        <div className="lg:col-span-12 flex mt-6">
          <HighlightsStrip />
        </div>
      </main>
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-40 bg-gradient-to-t from-[#FDF6EC]/90 to-transparent pointer-events-none">
        <a 
          href="#reserve" 
          className="block w-full bg-[#E8871A] text-center text-white py-3 rounded-full font-bold shadow-lg pointer-events-auto border border-[#E8871A]/50 active:scale-95 transition-transform"
        >
          Book a Table
        </a>
      </div>
    </div>
  );
}
