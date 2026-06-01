import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      {/* Quiet background soft glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-accent/15 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Header & Accordions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header - Editorial Left-Aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-left mb-16"
            >
              <span className="text-brand-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 block">
                ✦ Gỡ Bỏ Hoài Nghi
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-[1.25] font-light">
                Giải Đáp <span className="italic font-bold text-brand-primary">Thắc Mắc Nghi Ngại</span>
              </h2>
            </motion.div>

            {/* Accordions */}
            <div className="space-y-0">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className="border-b border-brand-primary/10 py-5 transition-all duration-300"
                  >
                    {/* Header button */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left py-4 flex items-center justify-between gap-4 font-serif font-semibold text-lg md:text-xl text-brand-dark cursor-pointer transition-colors duration-300 hover:text-brand-primary"
                    >
                      <span>{item.question}</span>
                      <span className="shrink-0 text-brand-primary/65 transition-transform duration-500 font-sans text-xl font-light">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Body */}
                    <div className="overflow-hidden">
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          height: isOpen ? "auto" : 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-brand-dark/75 text-sm md:text-[15px] leading-relaxed pt-2 pb-5 font-light">
                          {item.answer}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Quiet Minimalist Editorial Image Slot (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden border border-brand-primary/10 p-2 bg-white/20"
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src="/mystical_faq.png"
                  alt="Cuốn sách huyền học bí ẩn và tinh thể thạch anh"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Subtle soft gradient reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/2 via-transparent to-white/5 pointer-events-none mix-blend-overlay" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
