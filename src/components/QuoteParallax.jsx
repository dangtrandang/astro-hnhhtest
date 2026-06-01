import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function QuoteParallax() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax translation for decoration
  const yText = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const yDecor = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#EADCD0] text-brand-dark py-28"
    >
      {/* 1. Celestial Line-Art Moon Phases in the RIGHT margin */}
      <motion.div 
        style={{ y: yDecor, opacity }}
        className="absolute right-6 lg:right-16 xl:right-24 top-1/4 z-10 pointer-events-none select-none opacity-30 hidden sm:block text-[#C5A880]"
      >
        <svg viewBox="0 0 40 160" className="w-12 h-48 md:w-16 md:h-64">
          <line x1="20" y1="10" x2="20" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <path d="M 20 20 A 8 8 0 1 1 20 36 A 10 10 0 1 0 20 20 Z" fill="currentColor" />
          <circle cx="20" cy="55" r="7" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 20 70 A 9 9 0 1 1 20 88 M 20 70 A 7 7 0 1 1 20 88" fill="none" stroke="currentColor" strokeWidth="1" />
          <polygon points="20,110 22,118 30,120 22,122 20,130 18,122 10,120 18,118" fill="currentColor" />
        </svg>
      </motion.div>

      {/* 2. Celestial line arts in the LEFT margin */}
      <motion.div 
        style={{ y: yDecor, opacity }}
        className="absolute left-6 lg:left-16 xl:left-24 bottom-1/4 z-10 pointer-events-none select-none opacity-35 hidden sm:block text-[#C5A880]"
      >
        <svg viewBox="0 0 40 100" className="w-10 h-32">
          <polygon points="20,15 22,23 30,25 22,27 20,35 18,27 10,25 18,23" fill="currentColor" />
          <polygon points="15,65 16,70 21,71 16,72 15,77 14,72 9,71 14,70" fill="currentColor" opacity="0.6" />
          <circle cx="25" cy="45" r="1" fill="currentColor" />
        </svg>
      </motion.div>

      {/* 3. Main Centered Quote Column Flow */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
      >
        {/* The Poetic Philosophy Statement */}
        <p className="font-serif text-xl md:text-2xl lg:text-[1.85rem] leading-[1.75] md:leading-[1.85] font-light text-brand-dark max-w-3xl mx-auto tracking-wide">
          Cùng một sự việc xảy ra, có người thấy đó là ngõ cụt, có người thấy đó là bài học. Huyền học không giúp bạn trốn tránh nỗi đau, nó mang lại một góc nhìn bao quát để bạn hiểu rõ:
          
          {/* Highlighted core philosophy question in deep ruby Lora serif */}
          <span className="block mt-8 text-2xl md:text-4xl lg:text-[2.75rem] font-serif font-bold italic tracking-wide text-brand-primary drop-shadow-sm">
            "Vì sao chuyện này lại đến với mình?"
          </span>
        </p>

        {/* Small Signature line - aligned bottom right */}
        <div className="mt-12 flex items-center justify-end gap-3 opacity-60 max-w-2xl mx-auto">
          <div className="h-[1px] w-6 bg-brand-primary/30" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-primary font-sans">
            Triết lý của Hồng Ngọc Huyền Học
          </span>
        </div>
      </motion.div>
    </section>
  );
}
