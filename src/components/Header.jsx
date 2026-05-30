import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll behavior to dynamically adjust background glassmorphism
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
            ? "py-4 bg-brand-light/80 backdrop-blur-xl shadow-[0_2px_15px_rgba(0,0,0,0.02)] border-none" // Completely borderless sticky mode
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo (Far Left) */}
          <a href="/" className={`flex items-center z-50 hover:scale-105 transition-transform duration-300 shrink-0 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <img 
              src="https://cms.hongngochuyenhoc.com/assets/f83bff63-26ed-4c0d-be8d-6f0b7faba779" 
              alt="Hồng Ngọc Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Pill-shaped Navigation Bar (Middle - Desktop only - Completely Borderless) */}
          <nav className="hidden lg:flex items-center justify-center">
            <div className="bg-white/85 backdrop-blur-md px-6 py-2 rounded-full border-none shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-8 pl-8 pr-2">
              <a href="/" className="text-xs md:text-sm font-sans font-semibold text-brand-dark/90 hover:text-brand-primary transition-colors duration-300">
                Trang chủ
              </a>
              <a href="#about" className="text-xs md:text-sm font-sans font-semibold text-brand-dark/90 hover:text-brand-primary transition-colors duration-300">
                Giới thiệu
              </a>
              <a href="#blog" className="text-xs md:text-sm font-sans font-semibold text-brand-dark/90 hover:text-brand-primary transition-colors duration-300">
                Blog
              </a>
              <a href="#contact" className="text-xs md:text-sm font-sans font-semibold text-brand-dark/90 hover:text-brand-primary transition-colors duration-300 mr-2">
                Liên hệ
              </a>
              
              {/* Pill button inside nav bar */}
              <a 
                href="#live" 
                className="bg-[#1C2C1C] hover:bg-[#2A3F2A] text-brand-light text-xs font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(28,44,28,0.2)] flex items-center justify-center shrink-0"
              >
                Try it Live
              </a>
            </div>
          </nav>

          {/* Actions Link (Far Right) */}
          <div className="flex items-center gap-6 z-50">
            {/* Đăng nhập Link */}
            <a 
              href="#login" 
              className={`text-xs md:text-sm font-semibold text-brand-dark/90 hover:text-brand-primary transition-colors duration-300 flex items-center gap-2 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <svg className="w-4.5 h-4.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l4-4m0 0l-4-4m4 4H3m6 4h7a3 3 0 003-3V7a3 3 0 00-3-3H9" />
              </svg>
              <span>Đăng nhập</span>
            </a>

            {/* Mobile Menu Toggle button - Borderless */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border-none shadow-md flex items-center justify-center hover:scale-105 hover:bg-white transition-all text-brand-dark cursor-pointer"
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
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div 
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-45 w-[90%] sm:w-[400px] bg-[#FCF5EE] shadow-2xl flex flex-col justify-start pt-28 px-8 pb-12 overflow-y-auto"
            >
              <nav className="flex flex-col gap-0 text-left mt-8">
                <a 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-sans text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Trang chủ
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-sans text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Giới thiệu
                </a>
                <a 
                  href="#blog" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-sans text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Blog
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-sans text-brand-dark py-5 border-b border-brand-dark/10 hover:text-brand-primary transition-colors block"
                >
                  Liên hệ
                </a>
                
                <div className="mt-8 flex flex-col items-start gap-6">
                  {/* Đăng nhập Link */}
                  <a 
                    href="#login" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-semibold text-brand-dark/80 hover:text-brand-primary transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l4-4m0 0l-4-4m4 4H3m6 4h7a3 3 0 003-3V7a3 3 0 00-3-3H9" />
                    </svg>
                    <span>Đăng nhập</span>
                  </a>

                  {/* Try it Live Button */}
                  <a 
                    href="#live" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-[#1C2C1C] hover:bg-[#2A3F2A] text-brand-light text-base font-semibold py-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-[1.02] text-center"
                  >
                    Try it Live
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
