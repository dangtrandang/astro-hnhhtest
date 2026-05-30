import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function QuoteParallax() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Chữ sẽ cuộn chậm hơn so với background
  const y = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-muted/50 text-brand-dark py-24"
    >
      {/* Vòng tròn sáng mờ ảo ở giữa */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.6] md:leading-[1.7]">
          "Cùng một sự việc xảy ra, có người thấy đó là ngõ cụt, có người thấy đó là bài học. Huyền học không giúp bạn trốn tránh nỗi đau, nó cung cấp một góc nhìn rộng hơn để bạn hiểu:
          <span className="block mt-8 text-brand-primary italic font-light">
            Vì sao chuyện này lại đến với mình?
          </span>"
        </p>
      </motion.div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-brand-muted">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
