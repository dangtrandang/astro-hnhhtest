import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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
    <section className="py-32 px-6 bg-brand-light relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-3xl md:text-4xl text-brand-dark mb-6"
          >
            Có phải bạn đang xoay vòng trong một câu hỏi chưa có lời đáp?
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {/* Box 1: Tình cảm */}
          <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-xl p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:bg-white/60 transition-all duration-500 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            <div className="w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center mb-6 relative z-10">
              <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-brand-dark font-semibold text-xl mb-3">Tình cảm</h3>
            <p className="text-brand-dark/80 leading-relaxed text-sm md:text-base">
              Lặp lại những tổn thương. Cảm thấy bế tắc trong một mối quan hệ, không biết nên bước tiếp hay dừng lại?
            </p>
          </motion.div>

          {/* Box 2: Bản thân */}
          <motion.div variants={itemVariants} className="bg-brand-muted/40 backdrop-blur-xl p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60 flex flex-col md:-translate-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-50 pointer-events-none"></div>
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center mb-6 relative z-10">
              <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-brand-dark font-semibold text-xl mb-3 relative z-10">Bản thân</h3>
            <p className="text-brand-dark/80 leading-relaxed text-sm md:text-base relative z-10">
              Đánh mất tiếng nói bên trong. Cảm thấy chênh vênh, không hiểu rõ mình thực sự cần gì và muốn gì lúc này?
            </p>
          </motion.div>

          {/* Box 3: Công việc & Gia đình */}
          <motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-xl p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
            <div className="w-10 h-10 rounded-full bg-brand-muted flex items-center justify-center mb-6 relative z-10">
              <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-brand-dark font-semibold text-xl mb-3">Công việc & Gia đình</h3>
            <p className="text-brand-dark/80 leading-relaxed text-sm md:text-base">
              Đứng giữa những ngã rẽ. Áp lực trước những lựa chọn quan trọng mà không ai có thể cho bạn một lời khuyên khách quan?
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-brand-dark italic font-serif max-w-3xl mx-auto leading-relaxed">
            "Vấn đề không nằm ở chỗ bạn sai, mà đôi khi, bạn chỉ đang nhìn nó từ một góc độ đã cũ."
          </motion.p>
        </motion.div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-brand-muted/50">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
