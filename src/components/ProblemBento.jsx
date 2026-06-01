import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.0, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export default function ProblemBento() {
  return (
    <section className="py-32 px-6 bg-brand-light relative z-20 overflow-hidden">
      {/* Soft glowing ambient circle in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5D5C5]/10 rounded-full filter blur-[150px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header - Editorial Minimalist Style */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-left mb-24 max-w-2xl"
        >
          <span className="text-brand-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 block">
            ✦ Những Tiếng Thở Dài Lặng Lẽ
          </span>
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-3xl md:text-5xl text-brand-dark leading-[1.25] font-light"
          >
            Có Phải Bạn Đang Xoay Vòng Trong <span className="italic font-bold text-brand-primary">Sự Mơ Hồ?</span>
          </motion.h2>
        </motion.div>

        {/* 3 Columns Text Flow - Editorial Minimalist Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24"
        >
          {/* Column 1: Tình cảm */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col text-left relative"
          >
            {/* Delicate Thin-Line Gold Icon */}
            <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 flex items-center justify-center mb-8 bg-transparent text-[#C5A880] relative">
              <div className="absolute inset-[-4px] border border-[#C5A880]/10 rounded-full pointer-events-none"></div>
              <svg viewBox="0 0 100 100" class="w-5 h-5">
                <path d="M50 30 C50 30 38 18 24 25 C10 32 12 55 50 82 C88 55 90 32 76 25 C62 18 50 30 50 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            
            <h3 className="text-brand-dark font-serif font-semibold text-2xl mb-3 flex flex-col gap-1.5">
              <span>Tình cảm</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A880] font-bold">
                (Mối quan hệ độc hại)
              </span>
            </h3>
            <p className="text-brand-dark/70 leading-relaxed text-sm md:text-[15px] font-light">
              Lặp đi lặp lại một kiểu tổn thương cũ. Mắc kẹt trong mối quan hệ độc hại mà chưa tìm thấy lối ra thấu suốt.
            </p>
          </motion.div>

          {/* Column 2: Bản thân */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col text-left relative"
          >
            {/* Delicate Thin-Line Gold Icon */}
            <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 flex items-center justify-center mb-8 bg-transparent text-[#C5A880] relative">
              <div className="absolute inset-[-4px] border border-[#C5A880]/10 rounded-full pointer-events-none"></div>
              <svg viewBox="0 0 100 100" class="w-5 h-5">
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M15 50 C25 25, 75 25, 85 50 C75 75, 25 75, 15 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            
            <h3 className="text-brand-dark font-serif font-semibold text-2xl mb-3 flex flex-col gap-1.5">
              <span>Bản thân</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A880] font-bold">
                (Đánh mất tiếng nói)
              </span>
            </h3>
            <p className="text-brand-dark/70 leading-relaxed text-sm md:text-[15px] font-light">
              Đánh mất tiếng nói bên trong. Cảm thấy chênh vênh, mất phương hướng và không hiểu mình thực sự khao khát điều gì.
            </p>
          </motion.div>

          {/* Column 3: Ngã rẽ Cuộc sống */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col text-left relative"
          >
            {/* Delicate Thin-Line Gold Icon */}
            <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 flex items-center justify-center mb-8 bg-transparent text-[#C5A880] relative">
              <div className="absolute inset-[-4px] border border-[#C5A880]/10 rounded-full pointer-events-none"></div>
              <svg viewBox="0 0 100 100" class="w-5 h-5">
                <circle cx="50" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50 42 L50 78 M38 65 L62 65" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            
            <h3 className="text-brand-dark font-serif font-semibold text-2xl mb-3 flex flex-col gap-1.5">
              <span>Ngã rẽ Cuộc sống</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A880] font-bold">
                (Lựa chọn lớn)
              </span>
            </h3>
            <p className="text-brand-dark/70 leading-relaxed text-sm md:text-[15px] font-light">
              Áp lực trước những lựa chọn lớn về công việc hay gia đình mà thiếu một lăng kính khách quan, tin cậy để soi tỏ.
            </p>
          </motion.div>
        </motion.div>

        {/* Philosophy statement - simple and elegant */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-left border-l-2 border-[#C5A880]/40 pl-8 py-2 max-w-3xl"
        >
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-dark/85 italic font-serif leading-relaxed font-light">
            "Bế tắc không phải là ngõ cụt. Đôi khi, đó chỉ là lời mời gọi của cuộc sống để bạn dừng chân và thay đổi góc nhìn."
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
