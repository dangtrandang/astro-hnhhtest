import { motion } from 'framer-motion';

const toolsData = [
  {
    id: 1,
    title: "Tarot",
    tagline: "Chụp X-Quang Cảm Xúc",
    description: "Phản chiếu sâu sắc năng lượng hiện tại của bạn và đối phương, gỡ rối những nút thắt trong tình cảm và các quyết định ngắn hạn.",
    image: "/mystical_tarot.png",
    glowColor: "group-hover:shadow-[0_20px_50px_rgba(133,14,53,0.25)] group-hover:border-brand-primary/30"
  },
  {
    id: 2,
    title: "Thần Số Học",
    tagline: "Giải Mã Khuôn Mẫu Cuộc Đời",
    description: "Nhận diện những con số cốt lõi để thấu suốt bản thân, thấu cảm người thương và biết vì sao bạn hay vấp ngã ở một bài học cụ thể.",
    image: "/mystical_numerology.png",
    glowColor: "group-hover:shadow-[0_20px_50px_rgba(170,128,30,0.25)] group-hover:border-[#AA801E]/30"
  },
  {
    id: 3,
    title: "Chiêm Tinh Học",
    tagline: "Bản Đồ Năng Lượng Gốc",
    description: "Giải mã vị trí các thiên thể tại thời điểm bạn chào đời, mở ra lăng kính toàn diện để thấu hiểu và chấp nhận trọn vẹn chính mình.",
    image: "/mystical_astrology.png",
    glowColor: "group-hover:shadow-[0_20px_50px_rgba(198,220,228,0.4)] group-hover:border-brand-accent/40"
  }
];

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
      {/* Background stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#850e35_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]"></div>

      <div className="max-w-6xl mx-auto relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">
            Phương Pháp Kết Hợp
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight max-w-3xl mx-auto">
            Các Công Cụ Giúp Bạn Nhìn Thấu Bức Tranh Toàn Cảnh
          </h2>
          <div className="w-12 h-[2px] bg-brand-primary/40 mx-auto"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {toolsData.map((tool) => (
            <motion.div 
              key={tool.id}
              variants={item} 
              className={`group bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/80 hover:bg-white/70 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 flex flex-col cursor-default relative overflow-hidden ${tool.glowColor}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
              
              {/* Large Premium Visual illustration instead of minimal icon */}
              <div className="w-full h-52 sm:h-56 rounded-3xl overflow-hidden border border-white/60 mb-6 shadow-sm relative z-10 bg-brand-light">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Floating soft gold reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-white/10 pointer-events-none mix-blend-overlay" />
              </div>

              {/* Title & Tagline */}
              <h3 className="text-brand-dark font-serif font-bold text-2xl mb-1.5 relative z-10">
                {tool.title}
              </h3>
              <h4 className="text-brand-primary text-xs uppercase tracking-widest font-bold mb-4 relative z-10">
                {tool.tagline}
              </h4>
              
              {/* Condensed Text description */}
              <p className="text-brand-dark/75 leading-relaxed text-sm md:text-[15px] group-hover:text-brand-dark transition-colors duration-500 relative z-10">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Shape Divider pointing to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-brand-light">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
