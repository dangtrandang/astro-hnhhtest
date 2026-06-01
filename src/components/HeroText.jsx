import React from 'react';
import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <div className="w-full relative z-20 text-left">
      
      {/* Poetic Subtitle */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="text-brand-primary uppercase tracking-[0.25em] text-[10px] md:text-xs font-bold mb-6 block"
      >
        ✦ Trạm dừng chân bình yên cho tâm hồn
      </motion.span>

      {/* Slogan Headline - Editorial Split Typography exactly like the images! */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-brand-dark leading-[1.25] mb-8 font-light"
      >
        <span className="block font-serif font-bold text-brand-primary tracking-wide italic">
          Hồng Ngọc
        </span>
        <span className="block font-serif text-brand-dark uppercase tracking-widest text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold border-b border-brand-primary/10 pb-5">
          Huyền Học
        </span>
        <span className="block font-serif text-2xl md:text-3xl italic text-brand-dark/95 mt-5 leading-normal font-light max-w-2xl">
          "Thay đổi góc nhìn để thay đổi vấn đề."
        </span>
      </motion.h1>

      {/* Short, elegant paragraph body */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="text-brand-dark/75 text-sm md:text-base lg:text-lg max-w-2xl mb-12 leading-relaxed font-light"
      >
        Khi bạn sẵn sàng soi chiếu lại câu chuyện dưới một lăng kính thấu suốt và trung lập, mọi bế tắc đều tự khắc tìm thấy lối ra.
      </motion.p>

      {/* Cozy CTA Buttons & Floating Star Sparkles in the margin space */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
      >
        <a 
          href="#booking"
          className="inline-flex items-center justify-center bg-brand-primary text-brand-light px-8 py-4 rounded-full text-xs tracking-widest uppercase font-bold hover:bg-[#6c0b2b] transition-all duration-300 shadow-[0_8px_30px_rgba(133,14,53,0.15)] hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(133,14,53,0.25)] cursor-pointer text-center"
        >
          Trò chuyện cùng Hồng Ngọc
        </a>
        <a 
          href="#about"
          className="inline-flex items-center justify-center text-brand-dark/75 hover:text-brand-primary transition-all duration-300 font-serif italic text-sm underline underline-offset-8 decoration-brand-primary/30 hover:decoration-brand-primary"
        >
          Tìm hiểu về Hồng Ngọc →
        </a>
      </motion.div>
      
    </div>
  );
}
