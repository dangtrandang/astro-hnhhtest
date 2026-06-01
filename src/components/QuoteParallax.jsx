import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function QuoteParallax() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax translation for margin decorative elements
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yDecor = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-brand-light text-brand-dark py-24"
    >
      {/* 1. Cozy warm glowing aura in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-muted/20 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* 2. Floating Detailed Celestial Moon-Phase Line in the RIGHT margin (Utilizing white space, out of center flow) */}
      <motion.div 
        style={{ y: yDecor, opacity }}
        className="absolute right-6 lg:right-16 xl:right-24 top-1/4 z-10 pointer-events-none select-none opacity-40 hidden sm:block"
      >
        <svg viewBox="0 0 40 160" className="w-12 h-48 md:w-16 md:h-64 text-[#AA801E]">
          {/* Vertical alignment line */}
          <line x1="20" y1="10" x2="20" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          
          {/* Crescent Moon phases along the line */}
          <path d="M 20 20 A 8 8 0 1 1 20 36 A 10 10 0 1 0 20 20 Z" fill="currentColor" />
          <circle cx="20" cy="55" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 20 70 A 9 9 0 1 1 20 88 M 20 70 A 7 7 0 1 1 20 88" fill="none" stroke="currentColor" strokeWidth="1" />
          
          {/* Detailed Star at the bottom */}
          <polygon points="20,110 22,118 30,120 22,122 20,130 18,122 10,120 18,118" fill="currentColor" />
          <circle cx="20" cy="120" r="1.5" fill="#850E35" />
        </svg>
      </motion.div>

      {/* 3. Floating Sparkling Stars in the LEFT margin */}
      <motion.div 
        style={{ y: yDecor, opacity }}
        className="absolute left-6 lg:left-16 xl:left-24 bottom-1/4 z-10 pointer-events-none select-none opacity-45 hidden sm:block"
      >
        <svg viewBox="0 0 40 100" className="w-10 h-32 text-brand-primary">
          <polygon points="20,15 22,23 30,25 22,27 20,35 18,27 10,25 18,23" fill="currentColor" />
          <polygon points="15,65 16,70 21,71 16,72 15,77 14,72 9,71 14,70" fill="currentColor" opacity="0.6" />
          <circle cx="25" cy="45" r="1" fill="currentColor" />
          <circle cx="10" cy="85" r="1.5" fill="currentColor" />
        </svg>
      </motion.div>

      {/* 4. Main Centered Quote Column Flow - 100% CLEAN of any quote marks or spotlight conflicts! */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
      >
        {/* The Poetic Philosophy Statement - Holds 100% of the Spotlight! */}
        <p className="font-serif text-xl md:text-2xl lg:text-[2.25rem] leading-[1.7] md:leading-[1.8] font-light text-brand-dark max-w-3xl mx-auto tracking-wide">
          Cùng một sự việc xảy ra, có người thấy đó là ngõ cụt, có người thấy đó là bài học. Huyền học không giúp bạn trốn tránh nỗi đau, nó mang lại một góc nhìn bao quát để bạn hiểu rõ:
          
          {/* Highlighted core philosophy question in deep ruby Lora serif */}
          <span className="block mt-8 text-2xl md:text-4xl lg:text-5xl font-serif font-bold italic tracking-wide text-brand-primary drop-shadow-sm">
            Vì sao chuyện này lại đến với mình?
          </span>
        </p>

        {/* Small Signature line */}
        <div className="mt-12 flex items-center justify-center gap-3 opacity-60">
          <div className="h-[1px] w-6 bg-brand-primary/30" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-brand-primary font-sans">
            Triết lý của Hồng Ngọc Huyền Học
          </span>
          <div className="h-[1px] w-6 bg-brand-primary/30" />
        </div>
      </motion.div>

      {/* Shape Divider flowing to the next section (which has a cream background) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-[#F6DFDF]">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
