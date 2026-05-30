import { motion } from 'framer-motion';

export default function Tools() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-32 px-6 bg-brand-muted overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
            Những công cụ giúp bạn nhìn thấu bức tranh toàn cảnh
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Tarot */}
          <motion.div variants={item} className="group bg-white/40 backdrop-blur-xl p-10 rounded-[2rem] border border-white/60 hover:bg-white/60 hover:border-brand-primary/30 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col cursor-default relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            
            <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mb-6 drop-shadow-xl filter relative z-10 transition-transform duration-700 group-hover:scale-110">
              <defs>
                <linearGradient id="tarotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#850E35" />
                  <stop offset="100%" stopColor="#4A081D" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA801E" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#tarotGrad)" opacity="0.1" />
              <rect x="25" y="20" width="30" height="45" rx="2" transform="rotate(-20 40 42)" fill="#FCF5EE" stroke="url(#goldGrad)" strokeWidth="2"/>
              <path d="M 30 30 L 40 40 L 30 50 Z" fill="#C6DCE4" transform="rotate(-20 40 42)"/>
              <rect x="45" y="25" width="30" height="45" rx="2" transform="rotate(20 60 47)" fill="#FCF5EE" stroke="url(#goldGrad)" strokeWidth="2"/>
              <circle cx="60" cy="47" r="8" fill="#F2D1D1" transform="rotate(20 60 47)"/>
              <rect x="33" y="28" width="34" height="50" rx="3" fill="url(#tarotGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
              <path d="M 38 53 Q 50 40 62 53 Q 50 66 38 53" fill="#FCF5EE" />
              <circle cx="50" cy="53" r="5" fill="url(#goldGrad)" />
              <circle cx="50" cy="53" r="2" fill="#850E35" />
              <path d="M 50 32 L 52 38 L 58 40 L 52 42 L 50 48 L 48 42 L 42 40 L 48 38 Z" fill="url(#goldGrad)" />
              <path d="M 20 20 L 22 15 L 24 20 L 29 22 L 24 24 L 22 29 L 20 24 L 15 22 Z" fill="url(#goldGrad)" />
              <path d="M 80 75 L 81 72 L 84 71 L 81 70 L 80 67 L 79 70 L 76 71 L 79 72 Z" fill="url(#goldGrad)" />
            </svg>

            <h3 className="text-brand-dark font-medium text-2xl mb-2 relative z-10">Tarot</h3>
            <h4 className="text-brand-primary text-sm uppercase tracking-widest font-semibold mb-6 relative z-10">Chụp X-Quang cảm xúc</h4>
            <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base group-hover:text-brand-dark transition-colors duration-500 relative z-10">
              Không phải để xem bói ngày mai ra sao. Tarot phản chiếu chính xác năng lượng hiện tại của bạn và đối phương, từ đó mở ra những hướng đi mà lúc rối trí bạn đã bỏ lỡ.
            </p>
          </motion.div>

          {/* Thần Số Học */}
          <motion.div variants={item} className="group bg-white/40 backdrop-blur-xl p-10 rounded-[2rem] border border-white/60 hover:bg-white/60 hover:border-brand-primary/30 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col cursor-default relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            
            <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mb-6 drop-shadow-xl filter relative z-10 transition-transform duration-700 group-hover:scale-110">
              <defs>
                <linearGradient id="numGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#850E35" />
                  <stop offset="100%" stopColor="#4A081D" />
                </linearGradient>
                <linearGradient id="goldGradNum" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA801E" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#numGrad)" opacity="0.1" />
              <polygon points="50,15 85,75 15,75" fill="url(#numGrad)" opacity="0.1" stroke="url(#goldGradNum)" strokeWidth="2" />
              <polygon points="50,85 15,25 85,25" fill="#C6DCE4" opacity="0.3" stroke="url(#goldGradNum)" strokeWidth="2" />
              <circle cx="50" cy="50" r="28" fill="none" stroke="url(#tarotGrad)" strokeWidth="3" strokeDasharray="6 4" />
              <rect x="35" y="35" width="30" height="30" fill="none" stroke="url(#goldGradNum)" strokeWidth="1.5" transform="rotate(45 50 50)" />
              <text x="45" y="46" fontFamily="serif" fontSize="20" fill="url(#numGrad)" fontWeight="900">3</text>
              <text x="32" y="65" fontFamily="serif" fontSize="16" fill="url(#goldGradNum)" fontWeight="bold">7</text>
              <text x="62" y="62" fontFamily="serif" fontSize="24" fill="url(#numGrad)" fontWeight="900">9</text>
              <text x="50" y="24" fontFamily="serif" fontSize="14" fill="url(#numGrad)" fontWeight="bold">1</text>
              <text x="50" y="82" fontFamily="serif" fontSize="14" fill="url(#numGrad)" fontWeight="bold">8</text>
            </svg>

            <h3 className="text-brand-dark font-medium text-2xl mb-2 relative z-10">Thần Số Học</h3>
            <h4 className="text-brand-primary text-sm uppercase tracking-widest font-semibold mb-6 relative z-10">Giải mã khuôn mẫu</h4>
            <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base group-hover:text-brand-dark transition-colors duration-500 relative z-10">
              Hiểu được những con số cốt lõi để biết tại sao bạn lại hay thu hút một kiểu người nhất định, hoặc luôn vấp ngã ở một bài học cụ thể.
            </p>
          </motion.div>

          {/* Chiêm Tinh Học */}
          <motion.div variants={item} className="group bg-white/40 backdrop-blur-xl p-10 rounded-[2rem] border border-white/60 hover:bg-white/60 hover:border-brand-primary/30 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col cursor-default relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            
            <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 mb-6 drop-shadow-xl filter relative z-10 transition-transform duration-700 group-hover:scale-110">
              <defs>
                <linearGradient id="astroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#850E35" />
                  <stop offset="100%" stopColor="#4A081D" />
                </linearGradient>
                <linearGradient id="goldGradAstro" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA801E" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="url(#astroGrad)" opacity="0.1" />
              <circle cx="50" cy="50" r="16" fill="url(#goldGradAstro)" />
              <path d="M50 20 L50 28 M50 72 L50 80 M20 50 L28 50 M72 50 L80 50 M28 28 L34 34 M66 66 L72 72 M28 72 L34 66 M66 34 L72 28" stroke="url(#goldGradAstro)" strokeWidth="2.5" strokeLinecap="round"/>
              <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="url(#astroGrad)" strokeWidth="1.5" transform="rotate(30 50 50)" opacity="0.6" />
              <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="url(#astroGrad)" strokeWidth="1.5" transform="rotate(-30 50 50)" opacity="0.6" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="url(#goldGradAstro)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              <path d="M68 32 A 20 20 0 1 1 68 68 A 24 24 0 1 0 68 32 Z" fill="#C6DCE4" />
              <circle cx="16" cy="30" r="5" fill="url(#astroGrad)" />
              <circle cx="16" cy="30" r="2" fill="#FCF5EE" />
              <circle cx="84" cy="70" r="4" fill="#F2D1D1" stroke="url(#goldGradAstro)" strokeWidth="1.5"/>
              <polyline points="20,75 30,85 45,78" fill="none" stroke="url(#goldGradAstro)" strokeWidth="1.5"/>
              <circle cx="20" cy="75" r="2" fill="url(#astroGrad)" />
              <circle cx="30" cy="85" r="2" fill="url(#astroGrad)" />
              <circle cx="45" cy="78" r="2" fill="url(#astroGrad)" />
            </svg>

            <h3 className="text-brand-dark font-medium text-2xl mb-2 relative z-10">Chiêm Tinh Học</h3>
            <h4 className="text-brand-primary text-sm uppercase tracking-widest font-semibold mb-6 relative z-10">Bản đồ nguyên bản</h4>
            <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base group-hover:text-brand-dark transition-colors duration-500 relative z-10">
              Thấu hiểu tính cách sâu thẳm nhất của bản thân để học cách chấp nhận và yêu thương chính mình trước khi yêu thương người khác.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-[#F6DFDF]">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
