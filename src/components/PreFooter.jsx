import { motion } from 'framer-motion';

export default function PreFooter() {
  return (
    <section className="py-32 px-6 bg-[#E8B4B8] text-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto relative z-20"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-8 leading-tight">
          Bạn đã sẵn sàng để tự cầm lái cuộc đời mình?
        </h2>
        <p className="text-brand-dark/80 text-lg md:text-xl leading-relaxed mb-12 font-light">
          Một cuộc trò chuyện 60 phút có thể không xóa sạch mọi vấn đề, nhưng nó chắc chắn sẽ mang lại cho bạn một tâm trí đủ sáng tỏ để biết bước tiếp theo mình cần làm gì.
        </p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a href="#" className="bg-brand-primary text-white px-10 py-5 rounded-full font-medium shadow-[0_8px_30px_rgba(133,14,53,0.2)] hover:bg-brand-primary/90 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(133,14,53,0.4)] transition-all duration-300">
            Đặt lịch trò chuyện cùng Ngọc
          </a>
          <a href="#" className="text-brand-dark/70 hover:text-brand-dark underline underline-offset-8 transition-colors duration-300">
            Tìm hiểu thêm qua các bài viết
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
