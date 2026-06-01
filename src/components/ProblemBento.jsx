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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export default function ProblemBento() {
  return (
    <section className="py-32 px-6 bg-[#F6DFDF] relative z-20 overflow-hidden">
      {/* Background soft glowing blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-muted/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">
            Những Tiếng Thở Dài Lặng Lẽ
          </span>
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight"
          >
            Có Phải Bạn Đang Xoay Vòng Trong Sự Mơ Hồ?
          </motion.h2>
          <div className="w-12 h-[2px] bg-brand-primary/40 mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {/* Card 1: Tình cảm */}
          <motion.div 
            variants={itemVariants} 
            className="group bg-white/40 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/60 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(133,14,53,0.05)] hover:border-brand-primary/10 hover:bg-white/60 transition-all duration-500 flex flex-col relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            
            {/* Rich Detailed Non-Minimal Icon with background glow */}
            <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-8 relative z-10 shadow-sm border border-brand-primary/5 group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm">
                <defs>
                  <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#850E35" />
                    <stop offset="100%" stopColor="#4A081D" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#heartGrad)" opacity="0.1" />
                <path d="M50 30 C50 30 38 18 24 25 C10 32 12 55 50 82 C88 55 90 32 76 25 C62 18 50 30 50 30 Z" fill="none" stroke="url(#heartGrad)" strokeWidth="3" />
                <circle cx="50" cy="42" r="5" fill="#D4AF37" />
                <path d="M50 20 L52 26 L58 28 L52 30 L50 36 L48 30 L42 28 L48 26 Z" fill="#D4AF37" />
              </svg>
            </div>
            
            <h3 className="text-brand-dark font-serif font-bold text-xl mb-3 group-hover:text-brand-primary transition-colors duration-300">Tình cảm</h3>
            <p className="text-brand-dark/75 leading-relaxed text-sm md:text-[15px]">
              Lặp đi lặp lại một kiểu tổn thương cũ. Mắc kẹt trong mối quan hệ độc hại mà chưa tìm thấy lối ra thấu suốt.
            </p>
          </motion.div>

          {/* Card 2: Bản thân */}
          <motion.div 
            variants={itemVariants} 
            className="group bg-white/40 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/60 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(133,14,53,0.05)] hover:border-brand-primary/10 hover:bg-white/60 transition-all duration-500 flex flex-col md:-translate-y-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50 pointer-events-none"></div>
            
            {/* Rich Detailed Non-Minimal Icon */}
            <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-8 relative z-10 shadow-sm border border-brand-primary/5 group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm">
                <defs>
                  <linearGradient id="eyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#AA801E" />
                    <stop offset="100%" stopColor="#850E35" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#eyeGrad)" opacity="0.1" />
                <path d="M15 50 C25 25, 75 25, 85 50 C75 75, 25 75, 15 50 Z" fill="none" stroke="url(#eyeGrad)" strokeWidth="3" />
                <circle cx="50" cy="50" r="14" fill="none" stroke="url(#eyeGrad)" strokeWidth="2" />
                <circle cx="50" cy="50" r="6" fill="#850E35" />
                <path d="M50 12 L50 20 M20 30 L26 34 M80 30 L74 34" stroke="#AA801E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            
            <h3 className="text-brand-dark font-serif font-bold text-xl mb-3 group-hover:text-brand-primary transition-colors duration-300">Bản thân</h3>
            <p className="text-brand-dark/75 leading-relaxed text-sm md:text-[15px]">
              Đánh mất tiếng nói bên trong. Cảm thấy chênh vênh, mất phương hướng và không hiểu mình thực sự khao khát điều gì.
            </p>
          </motion.div>

          {/* Card 3: Ngã rẽ Cuộc sống */}
          <motion.div 
            variants={itemVariants} 
            className="group bg-white/40 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/60 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(133,14,53,0.05)] hover:border-brand-primary/10 hover:bg-white/60 transition-all duration-500 flex flex-col relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            
            {/* Rich Detailed Non-Minimal Icon */}
            <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-8 relative z-10 shadow-sm border border-brand-primary/5 group-hover:scale-110 transition-transform duration-500">
              <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm">
                <defs>
                  <linearGradient id="keyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C6DCE4" />
                    <stop offset="100%" stopColor="#850E35" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#keyGrad)" opacity="0.1" />
                <circle cx="50" cy="30" r="14" fill="none" stroke="url(#keyGrad)" strokeWidth="3" />
                <path d="M50 44 L50 78 L62 78 M50 64 L58 64" fill="none" stroke="url(#keyGrad)" strokeWidth="3" strokeLinecap="round" />
                <path d="M50 30 L52 26 L56 30 L50 34 Z" fill="#D4AF37" />
              </svg>
            </div>
            
            <h3 className="text-brand-dark font-serif font-bold text-xl mb-3 group-hover:text-brand-primary transition-colors duration-300">Ngã rẽ Cuộc sống</h3>
            <p className="text-brand-dark/75 leading-relaxed text-sm md:text-[15px]">
              Áp lực trước những lựa chọn lớn về công việc hay gia đình mà thiếu một lăng kính khách quan, tin cậy để soi tỏ.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-dark/95 italic font-serif max-w-3xl mx-auto leading-relaxed border-l-2 border-brand-primary/30 pl-6 inline-block text-left">
            "Bế tắc không phải là ngõ cụt. Đôi khi, đó chỉ là lời mời gọi của cuộc sống để bạn dừng chân và thay đổi góc nhìn."
          </motion.p>
        </motion.div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-brand-light">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
