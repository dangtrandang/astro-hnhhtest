import React from 'react';
import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 z-20 relative pt-28">
      
      {/* Floating Intricate Sun & Moon Emblem in the open top-right space (Out of center flow, utilizing white space) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute -top-16 right-6 lg:right-12 xl:right-16 w-20 h-20 md:w-28 md:h-28 z-20 pointer-events-none select-none drop-shadow-[0_8px_20px_rgba(212,175,55,0.25)]"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37] filter animate-pulse">
          <defs>
            <linearGradient id="goldSunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#AA801E" />
            </linearGradient>
          </defs>
          
          {/* Detailed Sun Rays */}
          {Array.from({ length: 16 }).map((_, i) => (
            <path
              key={i}
              d="M 50 15 L 53 28 L 47 28 Z"
              fill="url(#goldSunGrad)"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}
          
          {/* Concentric rings */}
          <circle cx="50" cy="50" r="30" fill="none" stroke="url(#goldSunGrad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          
          {/* Sleeping Sun Face */}
          <circle cx="50" cy="50" r="24" fill="url(#goldSunGrad)" />
          {/* Eyes closed */}
          <path d="M 41 48 Q 45 52 49 48" fill="none" stroke="#4A081D" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 51 48 Q 55 52 59 48" fill="none" stroke="#4A081D" strokeWidth="1.5" strokeLinecap="round" />
          {/* Cheeks */}
          <circle cx="43" cy="52" r="2.5" fill="#850E35" opacity="0.3" />
          <circle cx="57" cy="52" r="2.5" fill="#850E35" opacity="0.3" />
          {/* Serene smile */}
          <path d="M 47 56 Q 50 60 53 56" fill="none" stroke="#4A081D" strokeWidth="1.5" strokeLinecap="round" />
          {/* Third eye star on forehead */}
          <path d="M 50 34 L 51 38 L 54 39 L 51 40 L 50 44 L 49 40 L 46 39 L 49 38 Z" fill="#FCF5EE" />

          {/* Intricate Moon Wrapper */}
          <path d="M 68 32 A 20 20 0 1 1 68 68 A 24 24 0 1 0 68 32 Z" fill="#FCF5EE" opacity="0.9" />
          
          {/* Tiny sparkle stars */}
          <circle cx="24" cy="24" r="1" fill="#FFF" />
          <circle cx="76" cy="76" r="1" fill="#FFF" />
          <circle cx="78" cy="28" r="1.5" fill="#FFF" />
        </svg>
      </motion.div>

      {/* Main Centered Column Flow - Clear of any distracting icons! */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Poetic Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-brand-light/75 uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold mb-6 block drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
        >
          ✦ Trạm dừng chân bình yên cho tâm hồn
        </motion.span>

        {/* Slogan Headline - Holds 100% of the Spotlight! */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl text-brand-light leading-[1.2] mb-8 font-bold max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
        >
          Thay đổi góc nhìn để thay đổi vấn đề.
        </motion.h1>

        {/* Short, elegant subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="text-brand-light/90 text-base md:text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)]"
        >
          Khi bạn sẵn sàng soi chiếu lại câu chuyện dưới một lăng kính thấu suốt và trung lập, mọi bế tắc đều tự khắc tìm thấy lối ra.
        </motion.p>

        {/* Cozy Breathing CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <a 
            href="#booking"
            className="inline-flex items-center justify-center bg-brand-primary text-brand-light px-10 py-5 rounded-full text-xs tracking-widest uppercase font-bold hover:bg-[#6c0b2b] transition-all duration-300 shadow-[0_8px_30px_rgba(133,14,53,0.35)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(133,14,53,0.5)] cursor-pointer"
          >
            Trò chuyện cùng Hồng Ngọc
          </a>
        </motion.div>
      </div>
      
    </div>
  );
}
