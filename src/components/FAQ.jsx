import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "Tarot và Huyền học có phải là bói toán mê tín dị đoan không?",
    answer: "Hoàn toàn không. Với Ngọc, huyền học là một bộ môn khoa học năng lượng cổ xưa giải mã các chu kỳ. Ngọc không phán truyền tương lai cố định nhằm gieo rắc nỗi sợ hãi, mà dùng các công cụ này như chiếc la bàn giúp bạn khai thị bản thân, nhìn rõ các xu hướng để tự tin làm chủ vận mệnh của mình."
  },
  {
    id: 2,
    question: "Ngọc có bán vật phẩm phong thủy hay bắt cúng bái giải hạn không?",
    answer: "Ngọc cam kết tuyệt đối không. Ngọc tin rằng năng lượng nội tại và hành động thực tế của bạn mới là chiếc chìa khóa tối thượng giải quyết vấn đề. Ngọc không bao giờ hù dọa khách hàng và tuyệt đối không bán hoặc bắt bạn mua bất kỳ vật phẩm phong thủy giải hạn nào. Quyền quyết định cuộc sống luôn thuộc về bạn."
  },
  {
    id: 3,
    question: "Mình đang gặp bế tắc, nên chọn xem Tarot ngắn hạn hay làm Bản đồ sao toàn diện?",
    answer: "Nếu bạn đang có những câu hỏi cụ thể, cấp bách trong ngắn hạn (Ví dụ: 'Có nhảy việc lúc này?', 'Mối quan hệ hiện tại gặp nút thắt gì?'), Tarot là lựa chọn phù hợp nhất. Nếu bạn muốn hiểu sâu sắc về bản thân, định hướng sự nghiệp trọn đời hay các chu kỳ phát triển dài hạn, Thần số học & Chiêm tinh sẽ là sự đầu tư tốt nhất."
  },
  {
    id: 4,
    question: "Thông tin cá nhân và câu chuyện của mình có được bảo mật không?",
    answer: "Mỗi buổi trò chuyện là một không gian kết nối thiêng liêng, tin cậy và riêng tư. Ngọc cam kết bảo mật tuyệt đối 100% tất cả thông tin cá nhân cũng như toàn bộ nội dung chia sẻ của bạn. Không có bất kỳ câu chuyện nào được tiết lộ ra ngoài trừ khi có sự đồng ý rõ ràng của bạn."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 bg-[#F6DFDF] relative overflow-hidden">
      {/* Mystical backgrounds */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-accent/25 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Header & Accordions */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-left mb-12"
            >
              <span className="text-brand-primary font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">
                Gỡ Bỏ Hoài Nghi
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight font-bold">
                Giải Đáp Nghi Ngại
              </h2>
              <div className="w-12 h-[2px] bg-brand-primary/40"></div>
            </motion.div>

            {/* Accordions */}
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className={`bg-white/40 backdrop-blur-xl border rounded-3xl transition-[border-color,box-shadow] duration-500 ${isOpen
                        ? "border-brand-primary/20 shadow-[0_15px_30px_rgba(133,14,53,0.05)]"
                        : "border-white/60 shadow-sm"
                      }`}
                  >
                    {/* Header button */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 font-serif font-bold text-base md:text-lg text-brand-dark cursor-pointer transition-colors duration-300 hover:text-brand-primary"
                    >
                      <span>{item.question}</span>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen
                          ? "bg-brand-primary text-white border-brand-primary rotate-180"
                          : "bg-white/50 text-brand-primary border-brand-primary/10"
                        }`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Body (Optimized CSS Height and Framer Motion Opacity transitions) */}
                    <div className="overflow-hidden">
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          y: isOpen ? 0 : 15,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                          delay: isOpen ? 0.15 : 0
                        }}
                        className={`overflow-hidden transition-[max-height,margin-top] ease-[0.22,1,0.36,1] px-6 md:px-8 ${isOpen
                            ? "max-h-[300px] pb-6 md:pb-8 duration-500"
                            : "max-h-0 duration-300 pointer-events-none"
                          }`}
                      >
                        <div className="h-px bg-brand-primary/10 mb-5" />
                        <p className="text-brand-dark/75 text-sm md:text-[15px] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Thinking Outside The Box (Archway Portal with Overflowing Astrolabes) */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[340px] h-[480px] sm:w-[380px] sm:h-[530px] flex items-center justify-center"
            >
              {/* Glowing Background Radial Aura - larger than the box */}
              <div className="absolute inset-[-40px] rounded-full bg-radial from-brand-primary/15 via-transparent to-transparent blur-3xl z-0 pointer-events-none" />

              {/* Giant Overlapping/Overflowing Astro Wheel - Spills WAY outside the archway container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
                className="absolute w-[125%] h-[90%] z-10 pointer-events-none opacity-40 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-primary">
                  <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <ellipse cx="50" cy="50" rx="48" ry="16" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(35 50 50)" />
                  <ellipse cx="50" cy="50" rx="48" ry="16" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(-35 50 50)" />
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="1"
                      x2="50"
                      y2="5"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      transform={`rotate(${i * 15} 50 50)`}
                    />
                  ))}
                </svg>
              </motion.div>

              {/* Counter-rotating Inner Astro Star Wheel */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="absolute w-[105%] h-[80%] z-10 pointer-events-none opacity-30 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#AA801E]">
                  <polygon points="50,2 62,38 98,50 62,62 50,98 38,62 2,50 38,38" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </motion.div>

              {/* The Mystical Archway Portal (Cổng Vòm Khai Thị) - Organic Shape, NO border box card! */}
              <div className="w-full h-full rounded-t-[15rem] rounded-b-[2.5rem] overflow-hidden shadow-[0_35px_70px_rgba(133,14,53,0.18)] z-20 relative bg-brand-light">
                <img
                  src="/mystical_faq.png"
                  alt="Cuốn sách huyền học bí ẩn và tinh thể thạch anh"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* Intense light reflection inside the portal */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-white/15 mix-blend-overlay pointer-events-none" />
                {/* Dark vignette inside the arch to give spiritual depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Overlapping Gold Emblem on Top-Left Arch Boundary - breaking the container physically */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 z-30 select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(212,175,55,0.4)]"
              >
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#D4AF37]">
                  <path d="M 68 32 A 20 20 0 1 1 68 68 A 24 24 0 1 0 68 32 Z" fill="currentColor" />
                  <path d="M 50 15 L 52 22 L 57 24 L 52 26 L 50 33 L 48 26 L 43 24 L 48 22 Z" fill="#FFF" />
                </svg>
              </motion.div>

              {/* Overlapping Golden Astrological Star on Bottom-Right Boundary - breaks the container at the bottom */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 z-30 select-none pointer-events-none drop-shadow-[0_4px_10px_rgba(212,175,55,0.3)]"
              >
                <svg viewBox="0 0 100 100" className="w-14 h-14 text-[#D4AF37]">
                  <polygon points="50,15 58,42 85,50 58,58 50,85 42,58 15,50 42,42" fill="currentColor" />
                  <circle cx="50" cy="50" r="10" fill="#F6DFDF" />
                  <circle cx="50" cy="50" r="6" fill="#850E35" />
                </svg>
              </motion.div>

              {/* Floating sparkling star completely outside, drifting in the page space */}
              <motion.div
                animate={{ y: [0, -12, 0], opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-12 right-6 w-5 h-5 text-brand-primary/45 z-30 pointer-events-none"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Elegant Curved Wave shape divider to flow into next section (PreFooter background is #E8B4B8) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-[#E8B4B8]">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
