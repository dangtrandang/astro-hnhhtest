import { motion } from 'framer-motion';

const toolsData = [
  {
    id: 1,
    title: "Tarot",
    tagline: "✦ Chụp X-Quang Cảm Xúc",
    description: "Phản chiếu sâu sắc năng lượng hiện tại của bạn và đối phương, gỡ rối những nút thắt trong tình cảm và các quyết định ngắn hạn.",
    image: "/mystical_tarot.png"
  },
  {
    id: 2,
    title: "Thần Số Học",
    tagline: "✦ Giải Mã Khuôn Mẫu Cuộc Đời",
    description: "Nhận diện những con số cốt lõi để thấu suốt bản thân, thấu cảm người thương và biết vì sao bạn hay vấp ngã ở một bài học cụ thể.",
    image: "/mystical_numerology.png"
  },
  {
    id: 3,
    title: "Chiêm Tinh Học",
    tagline: "✦ Bản Đồ Năng Lượng Gốc",
    description: "Giải mã vị trí các thiên thể tại thời điểm bạn chào đời, mở ra lăng kính toàn diện để thấu hiểu và chấp nhận trọn vẹn chính mình.",
    image: "/mystical_astrology.png"
  }
];

export default function Tools() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-36 px-6 bg-[#F6DFDF] overflow-hidden relative">
      {/* Background chìm rất nhẹ */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-primary/2 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto relative z-30">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-20 max-w-2xl"
        >
          <span className="text-brand-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 block">
            ✦ Phương Pháp Kết Hợp
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight font-light">
            Các Công Cụ Giúp Bạn Nhìn Thấu <span className="italic font-bold text-brand-primary">Bức Tranh Toàn Cảnh</span>
          </h2>
        </motion.div>

        {/* Overlapping Central Oval Cluster - True Editorial Triptych Art */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 h-[340px] md:h-[400px] relative max-w-2xl mx-auto mb-20 px-4"
        >
          {/* Orbital path chìm sau ovals */}
          <div className="absolute w-[110%] h-[90%] border border-[#C5A880]/15 rounded-full pointer-events-none z-0 rotate-[10deg]"></div>

          {/* Oval 1: Tarot (Left, shifted down, tilted slightly left) */}
          <div className="w-[120px] h-[200px] sm:w-[150px] sm:h-[250px] md:w-[170px] md:h-[280px] rounded-full overflow-hidden border border-[#C5A880]/30 p-2 bg-white/20 shadow-[0_15px_30px_rgba(43,30,30,0.02)] transform -translate-y-4 -rotate-6 shrink-0 relative z-10">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img 
                src="/mystical_tarot.png" 
                alt="Tarot" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>

          {/* Oval 2: Thần Số Học (Center, standing tall, in front) */}
          <div className="w-[140px] h-[230px] sm:w-[175px] sm:h-[285px] md:w-[200px] md:h-[325px] rounded-full overflow-hidden border-2 border-[#C5A880]/40 p-2 bg-white/30 shadow-[0_20px_45px_rgba(43,30,30,0.04)] transform z-20 shrink-0 relative">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img 
                src="/mystical_numerology.png" 
                alt="Thần Số Học" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>

          {/* Oval 3: Chiêm Tinh Học (Right, shifted down, tilted slightly right) */}
          <div className="w-[120px] h-[200px] sm:w-[150px] sm:h-[250px] md:w-[170px] md:h-[280px] rounded-full overflow-hidden border border-[#C5A880]/30 p-2 bg-white/20 shadow-[0_15px_30px_rgba(43,30,30,0.02)] transform -translate-y-4 rotate-6 shrink-0 relative z-10">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img 
                src="/mystical_astrology.png" 
                alt="Chiêm Tinh Học" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Descriptions in 3 clean columns below the ovals */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left"
        >
          {toolsData.map((tool) => (
            <motion.div key={tool.id} variants={item} className="flex flex-col">
              <h3 className="font-serif font-bold text-xl text-brand-dark mb-1">
                {tool.title}
              </h3>
              <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#C5A880] font-bold block mb-4">
                {tool.tagline}
              </span>
              <p className="text-brand-dark/70 text-sm leading-relaxed font-light">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
