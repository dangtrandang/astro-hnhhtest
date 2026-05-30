import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-32 bg-[#F6DFDF] relative overflow-hidden">
      {/* 2. Họa Tiết Chìm Lơ Lửng (Sacred Background Watermark) */}
      <motion.div style={{ rotate: rotate1 }} className="absolute -right-64 top-0 w-[800px] h-[800px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#850E35" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="40" />
          <polygon points="50,10 85,75 15,75" />
          <polygon points="50,90 15,25 85,25" />
          <circle cx="50" cy="50" r="20" strokeDasharray="1 2" />
          {/* Zodiac markers pseudo */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="50" y1="2" x2="50" y2="10" transform={`rotate(${i * 30} 50 50)`} />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Cột 1: Khung Ảnh Huyền Bí */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Astrolabe Frame */}
            <div className="absolute inset-0 -m-12 sm:-m-16 pointer-events-none">
              <motion.svg style={{ rotate: rotate1 }} viewBox="0 0 200 200" className="w-full h-full text-brand-primary opacity-20">
                <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" />
                {/* Orbital nodes */}
                <circle cx="100" cy="15" r="3" fill="currentColor" />
                <circle cx="100" cy="185" r="3" fill="currentColor" />
                <circle cx="15" cy="100" r="3" fill="currentColor" />
                <circle cx="185" cy="100" r="3" fill="currentColor" />
              </motion.svg>
              <motion.svg style={{ rotate: rotate2 }} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-brand-primary opacity-30">
                <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 100 100)" />
                <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-45 100 100)" />
                {/* Floating stars */}
                <path d="M 50 40 L 52 45 L 57 47 L 52 49 L 50 54 L 48 49 L 43 47 L 48 45 Z" fill="#D4AF37" />
                <path d="M 150 160 L 152 165 L 157 167 L 152 169 L 150 174 L 148 169 L 143 167 L 148 165 Z" fill="#D4AF37" />
              </motion.svg>
            </div>

            <img 
              src="https://cms.hongngochuyenhoc.com/assets/316e3051-0142-4976-ae62-9b15d65ff64a" 
              alt="Chân dung Hồng Ngọc" 
              className="w-[85%] h-auto rounded-[3rem] relative z-10 mx-auto block"
              loading="lazy"
            />
            
            {/* 3. Dấu ấn cá nhân nổi trên ảnh (Wax Seal - Bumpy path removed and replaced with a perfect circle base) */}
            <motion.div 
              style={{ y: yParallax }}
              className="absolute -bottom-8 -right-8 z-20 w-32 h-32"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl filter hover:scale-105 transition-transform duration-500">
                <defs>
                  <radialGradient id="waxGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#A81242" />
                    <stop offset="80%" stopColor="#850E35" />
                    <stop offset="100%" stopColor="#4A081D" />
                  </radialGradient>
                </defs>
                {/* Perfect circle base replacing the bumpy path */}
                <circle cx="50" cy="50" r="45" fill="url(#waxGrad)" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#600A25" strokeWidth="2" opacity="0.5" />
                {/* Icon bên trong sáp */}
                <path d="M40 35 L60 35 L50 65 Z" fill="#D4AF37" opacity="0.8" />
                <circle cx="50" cy="50" r="10" fill="url(#waxGrad)" />
                <circle cx="50" cy="50" r="5" fill="#D4AF37" />
                <path d="M 40 40 L 60 60 M 60 40 L 40 60" stroke="#D4AF37" strokeWidth="1" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Cột 2: Nội dung & Stats */}
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
            >
              <motion.h2 variants={item} className="text-3xl md:text-5xl font-serif text-brand-dark mb-8 relative">
                Hồng Ngọc – Vị khách mời trong câu chuyện của bạn
              </motion.h2>

              <motion.div variants={item} className="space-y-6 text-brand-dark/80 text-lg leading-relaxed relative">
                {/* Oversized Quote Mark */}
                <span className="absolute -top-10 -left-6 text-8xl font-serif text-brand-primary opacity-10 pointer-events-none leading-none">"</span>

                <p>
                  Trong mỗi phiên trò chuyện, tôi không đóng vai một người thầy hay một người phán xử. Tôi ở đây như một người đồng hành, tạo ra một vùng an toàn tuyệt đối – nơi bạn được lắng nghe mà không sợ bị phán xét.
                </p>
                <p>
                  Nhiệm vụ của tôi là trải bài, phân tích các dữ kiện từ các con số và chỉ ra những ngã rẽ. Nhưng người nắm quyền quyết định cuối cùng, chọn đi con đường nào, <strong className="text-brand-primary font-semibold">luôn luôn là bạn</strong>.
                </p>

                {/* Chữ Ký */}
                <div className="pt-6 pb-2">
                  <span
                    style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive" }}
                    className="text-5xl md:text-6xl text-brand-primary opacity-90 inline-block -rotate-2 drop-shadow-sm"
                  >
                    Hồng Ngọc
                  </span>
                  <p className="text-sm font-medium tracking-widest uppercase text-brand-dark/50 mt-2 ml-4">Người Dẫn Đường Tận Tâm</p>
                </div>
              </motion.div>

              {/* Stats Grid: 3 columns below text */}
              <div className="mt-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Card 1: Năm Kinh Nghiệm */}
                  <motion.div variants={item} className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:bg-white/60 transition-all duration-300 flex flex-col justify-center items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-3xl font-serif text-brand-dark mb-1 font-semibold">5+</span>
                    <span className="text-xs text-brand-dark/70 uppercase tracking-wider font-medium">Năm Kinh Nghiệm</span>
                  </motion.div>

                  {/* Card 2: Khách Hàng */}
                  <motion.div variants={item} className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:bg-white/60 transition-all duration-300 flex flex-col justify-center items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-3xl font-serif text-brand-dark mb-1 font-semibold">1000+</span>
                    <span className="text-xs text-brand-dark/70 uppercase tracking-wider font-medium">Khách Hàng Đồng Hành</span>
                  </motion.div>

                  {/* Card 3: Chuyên Môn */}
                  <motion.div variants={item} className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:bg-white/60 transition-all duration-300 flex flex-col justify-center items-center text-center group">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <span className="text-3xl font-serif text-brand-dark mb-1 font-semibold">3</span>
                    <span className="text-xs text-brand-dark/70 uppercase tracking-wider font-medium">Chuyên Môn Cốt Lõi</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
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
