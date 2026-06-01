import { motion } from 'framer-motion';

export default function About() {
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
    <section id="about" className="py-36 bg-[#F6DFDF] relative overflow-hidden">
      
      {/* Background chòm sao chìm rất nhẹ */}
      <div className="absolute -right-64 top-0 w-[800px] h-[800px] opacity-[0.02] pointer-events-none text-brand-primary">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="40" />
          <polygon points="50,10 85,75 15,75" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Column (7 cols): Editorial Text & Stats */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
              className="flex flex-col"
            >
              {/* Editorial Title */}
              <span className="text-brand-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 block">
                ✦ Người Bạn Đồng Hành
              </span>
              <motion.h2 variants={item} className="text-3xl md:text-5xl font-serif text-brand-dark mb-6 leading-[1.25] font-light">
                Chào bạn, tôi là <span className="italic font-bold text-brand-primary">Hồng Ngọc</span>
              </motion.h2>

              {/* Slogan Statement */}
              <motion.p variants={item} className="text-brand-primary text-xs font-bold uppercase tracking-widest leading-relaxed mb-6 border-b border-brand-primary/10 pb-6">
                "Huyền học không phải để dự đoán tương lai một cách thụ động, mà là để bạn biết mình có những tài nguyên nào để làm chủ nó."
              </motion.p>

              {/* Body narrative */}
              <motion.div variants={item} className="space-y-6 text-brand-dark/80 text-sm md:text-base leading-relaxed font-light">
                <p>
                  Với Ngọc, mỗi con số trong Thần số học hay mỗi chòm sao trên Bản đồ sao không phải là những nhãn dán định mệnh. Chúng là tấm bản đồ năng lượng gốc, chỉ ra những bài học bạn cần tốt nghiệp và những tiềm năng chưa được đánh thức.
                </p>
                <p>
                  Tôi không đóng vai một người thầy phán xét hay một người phán xử tương lai. Tôi ở đây như một người đồng hành ấm áp, mang đến cho bạn một không gian an toàn tuyệt đối để lắng lòng và chia sẻ.
                </p>
                <p>
                  Trải bài Tarot, giải mã các con số hay bản đồ sao chỉ là công cụ chỉ đường. Người nắm giữ la bàn quyết định chọn lối rẽ nào, <strong className="text-brand-primary font-semibold">luôn luôn là chính bạn</strong>.
                </p>

                {/* Chữ Ký Nghệ Thuật */}
                <div className="pt-6 pb-2">
                  <span
                    style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive" }}
                    className="text-5xl md:text-6xl text-brand-primary opacity-95 inline-block -rotate-2 drop-shadow-sm"
                  >
                    Hồng Ngọc
                  </span>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-brand-dark/45 mt-2 ml-4">✦ Người Dẫn Đường Tận Tâm</p>
                </div>
              </motion.div>

              {/* Stats Grid: Clean floating borderless stats exactly like mockup */}
              <div className="mt-12 pt-8 border-t border-brand-primary/10">
                <div className="grid grid-cols-3 gap-4">
                  {/* Stat 1 */}
                  <motion.div variants={item} className="flex flex-col text-left">
                    <span className="text-3xl md:text-4xl font-serif text-brand-primary font-bold mb-1">5+</span>
                    <span className="text-[9px] text-brand-dark/65 uppercase tracking-widest font-bold">Năm Thực Chứng</span>
                  </motion.div>
                  
                  {/* Stat 2 */}
                  <motion.div variants={item} className="flex flex-col text-left border-l border-brand-primary/10 pl-6">
                    <span className="text-3xl md:text-4xl font-serif text-brand-primary font-bold mb-1">1000+</span>
                    <span className="text-[9px] text-brand-dark/65 uppercase tracking-widest font-bold">Khách Hàng</span>
                  </motion.div>

                  {/* Stat 3 */}
                  <motion.div variants={item} className="flex flex-col text-left border-l border-brand-primary/10 pl-6">
                    <span className="text-3xl md:text-4xl font-serif text-brand-primary font-bold mb-1">3</span>
                    <span className="text-[9px] text-brand-dark/65 uppercase tracking-widest font-bold">Chuyên Môn Cốt Lõi</span>
                  </motion.div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column (5 cols): Open Arched Door Frame Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative py-8"
          >
            {/* Background orbit gold line */}
            <div className="absolute w-[110%] h-[90%] border border-[#C5A880]/20 rounded-full pointer-events-none z-0 rotate-[12deg]"></div>

            {/* Arched Door Frame */}
            <div className="w-[250px] h-[480px] rounded-t-full border-t-2 border-x-2 border-[#C5A880]/40 p-3 bg-white/20 shadow-[0_20px_50px_rgba(43,30,30,0.03)] z-10 relative overflow-hidden">
              <div className="w-full h-full rounded-t-full overflow-hidden relative bg-brand-light">
                <img 
                  src="https://cms.hongngochuyenhoc.com/assets/316e3051-0142-4976-ae62-9b15d65ff64a" 
                  alt="Hồng Ngọc Bước Qua Cánh Cửa Khai Thị" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
              </div>
            </div>

            {/* Sparkle star */}
            <div className="absolute -top-4 right-4 z-20 text-[#C5A880] animate-pulse pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <polygon points="50,15 58,42 85,50 58,58 50,85 42,58 15,50 42,42" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
