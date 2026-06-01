import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-brand-light/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(43,30,30,0.02)] border-b border-brand-primary/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo (Far Left) */}
          <a href="/" className={`flex items-center z-50 hover:scale-[1.02] transition-transform duration-300 shrink-0 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 100 100" className="w-7 h-7 text-brand-primary">
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
              </svg>
              <span className="font-serif font-bold text-lg text-brand-dark tracking-wide uppercase">Hồng Ngọc</span>
            </div>
          </a>

          {/* Pill-shaped Navigation Bar (Middle - Desktop only) */}
          <nav className="hidden lg:flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md px-8 py-2 rounded-full border border-[#C5A880]/20 shadow-[0_8px_30px_rgba(43,30,30,0.03)] flex items-center gap-8 pl-8 pr-2">
              <a href="/" className="text-xs font-sans font-bold uppercase tracking-widest text-brand-dark/95 hover:text-brand-primary transition-colors duration-300">
                Trang chủ
              </a>
              <a href="#about" className="text-xs font-sans font-bold uppercase tracking-widest text-brand-dark/95 hover:text-brand-primary transition-colors duration-300">
                Giới thiệu
              </a>
              <a href="#booking" className="text-xs font-sans font-bold uppercase tracking-widest text-brand-dark/95 hover:text-brand-primary transition-colors duration-300">
                Hành trình
              </a>
              <a href="#contact" className="text-xs font-sans font-bold uppercase tracking-widest text-brand-dark/95 hover:text-brand-primary transition-colors duration-300 mr-4">
                Liên hệ
              </a>
              
              {/* Premium Booking Pill Button */}
              <a 
                href="#booking" 
                className="bg-brand-primary hover:bg-[#6c0b2b] text-brand-light text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_12px_rgba(133,14,53,0.15)] flex items-center justify-center shrink-0"
              >
                Đặt lịch tham vấn
              </a>
            </div>
          </nav>

          {/* Mobile Menu Actions (Far Right) */}
          <div className="flex items-center gap-6 z-50 lg:hidden">
            {/* Mobile Menu Toggle button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-[#C5A880]/30 shadow-sm flex items-center justify-center hover:scale-105 hover:bg-white transition-all text-brand-dark cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div 
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-45 w-[90%] sm:w-[400px] bg-[#FCF5EE] shadow-2xl flex flex-col justify-start pt-28 px-8 pb-12 overflow-y-auto lg:hidden"
            >
              <nav className="flex flex-col gap-0 text-left mt-8">
                <a 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-bold text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Trang chủ
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-bold text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Giới thiệu
                </a>
                <a 
                  href="#booking" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-bold text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Hành trình
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif font-bold text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Liên hệ
                </a>
                
                <div className="mt-12 flex flex-col items-start gap-6">
                  {/* Premium Mobile Booking Button */}
                  <a 
                    href="#booking" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-brand-primary hover:bg-[#6c0b2b] text-brand-light text-xs font-bold uppercase tracking-widest py-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 text-center"
                  >
                    Đặt lịch tham vấn
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
