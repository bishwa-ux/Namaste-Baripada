export default function HighlightsStrip() {
  return (
    <footer className="w-full pt-4 border-t border-[#C1440E]/20 flex flex-col lg:flex-row justify-between items-center text-[10px] md:text-[11px] font-bold text-[#2A1A0E]/60 uppercase tracking-[0.2em] gap-6 text-center lg:text-left">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <span>📍 Baripada, Mayurbhanj District, Odisha</span>
        <span>📞 +91 98765 00000</span>
        <span>⏰ 8:00 AM — 11:00 PM</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <span className="bg-[#3A6B35]/10 text-[#3A6B35] px-3 py-1 rounded-md">Parking Available</span>
        <span>© 2026 Namaste Baripada</span>
      </div>
    </footer>
  );
}
