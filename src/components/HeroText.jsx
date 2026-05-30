import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto z-10 relative pt-20">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="text-brand-primary uppercase tracking-[0.2em] text-xs font-semibold mb-6"
      >
        Trạm dừng chân của tâm trí & cảm xúc
      </motion.span>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-8"
      >
        Mọi bế tắc đều có lối ra,<br className="hidden md:block" />khi bạn sẵn sàng thay đổi góc nhìn.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        className="text-brand-dark/90 text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
      >
        Hồng Ngọc Huyền Học đồng hành cùng bạn gỡ rối những mắc kẹt trong tình cảm, công việc và các mối quan hệ. Không phán quyết tương lai, chúng tôi cung cấp một lăng kính mới để bạn tự tin đưa ra quyết định của riêng mình.
      </motion.p>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="bg-brand-primary text-brand-light px-8 py-4 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 shadow-[0_4px_14px_0_rgba(133,14,53,0.39)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(133,14,53,0.5)]"
      >
        Trò chuyện cùng Hồng Ngọc
      </motion.button>
    </div>
  );
}
