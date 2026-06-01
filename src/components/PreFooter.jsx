import { motion } from 'framer-motion';

export default function PreFooter() {
  return (
    <section className="py-36 px-6 bg-[#EADCD0] text-center relative overflow-hidden">
      {/* Background warm aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-muted/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto relative z-20"
      >
        <span className="text-brand-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 block">
          ✦ Khởi Đầu Hành Trình
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight font-light">
          Bạn đã sẵn sàng để tự <span className="italic font-bold text-brand-primary">cầm lái cuộc đời?</span>
        </h2>
        <p className="text-brand-dark/80 text-sm md:text-base leading-relaxed mb-12 font-light max-w-2xl mx-auto">
          Một cuộc trò chuyện 60 phút có thể không xóa sạch mọi vấn đề, nhưng nó chắc chắn sẽ mang lại cho bạn một tâm trí đủ sáng tỏ để biết bước tiếp theo mình cần làm gì.
        </p>

        {/* Horizontal Form Layout exactly like mockup Card 10 */}
        <motion.form 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto"
        >
          <input 
            type="text" 
            placeholder="Họ tên của bạn..." 
            className="w-full sm:w-1/3 px-6 py-4 rounded-full bg-white/30 border border-brand-primary/10 focus:outline-none focus:border-brand-primary/30 text-brand-dark placeholder:text-brand-dark/40 text-xs tracking-widest uppercase font-bold transition-all bg-white/40"
            required
          />
          <input 
            type="email" 
            placeholder="Email liên hệ..." 
            className="w-full sm:w-1/3 px-6 py-4 rounded-full bg-white/30 border border-brand-primary/10 focus:outline-none focus:border-brand-primary/30 text-brand-dark placeholder:text-brand-dark/40 text-xs tracking-widest uppercase font-bold transition-all bg-white/40"
            required
          />
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-brand-primary hover:bg-[#6c0b2b] text-white px-8 py-4 rounded-full text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_25px_rgba(133,14,53,0.1)] hover:shadow-[0_12px_35px_rgba(133,14,53,0.2)] cursor-pointer text-center"
          >
            Đăng ký tham vấn
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
