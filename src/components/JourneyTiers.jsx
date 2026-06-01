import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tiersData = [
  {
    id: 1,
    number: "TẦNG 01",
    title: "Gỡ Rối & Kết Nối Hiện Tại",
    primaryTool: "Ứng dụng chính: Tarot",
    description: "Dành cho ai đang đứng trước các ngã rẽ cuộc sống, cần câu trả lời nhanh, rõ ràng và trung thực cho những nút thắt cấp bách hiện tại.",
    audience: "Đang có những câu hỏi cụ thể, cấp bách trong ngắn hạn về tình cảm, công việc hoặc tài chính.",
    methodology: "Buổi trò chuyện tương tác 1-1 (Online/Offline) kéo dài 30 - 60 phút. Bài lên gì nói đó, giải mã bản chất.",
    commitment: "Khai thị thực tế, không phán xét đúng sai, tôn trọng tuyệt đối tự do ý chí và quyền quyết định của bạn.",
    accentColor: "from-brand-primary/20 to-brand-primary/5",
    icon: (
      <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 2,
    number: "TẦNG 02",
    title: "Thấu Hiểu Bản Thân & Định Vị Bản Mệnh",
    primaryTool: "Ứng dụng chính: Thần số học & Chiêm tinh",
    description: "Giải mã sâu sắc bản đồ gốc thiên bẩm của bạn, chỉ ra tiềm năng, điểm mù cá nhân, bài học nghiệp quả và các chu kỳ biến động lớn.",
    audience: "Muốn hiểu rõ la bàn cuộc đời mình, định vị bản thân và lập kế hoạch chiến lược dài hạn cho sự nghiệp và tâm hồn.",
    methodology: "Nhận tập tài liệu phân tích chi tiết viết tay + 1 buổi tham vấn chuyên sâu dài 90 phút giải thích chi tiết cùng Hồng Ngọc.",
    commitment: "Định hướng thực tế, khoa học và cá nhân hóa sâu sắc, giúp bạn tự tin nắm giữ tay lái cuộc đời.",
    accentColor: "from-[#AA801E]/20 to-[#AA801E]/5",
    icon: (
      <svg className="w-8 h-8 text-[#AA801E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    id: 3,
    number: "TẦNG 03",
    title: "Khai Thị Toàn Diện & Chữa Lành",
    primaryTool: "Ứng dụng: Trị liệu Mối quan hệ & Phong thủy dòng chảy",
    description: "Phương pháp kết hợp nhằm chữa lành sâu sắc các tổn thương mối quan hệ cũ hoặc điều chỉnh, tối ưu hóa dòng chảy năng lượng trong không gian sống.",
    audience: "Đang gặp bế tắc lớn kéo dài trong các mối quan hệ (gia đình, cặp đôi), cảm thấy năng lượng gia đạo hoặc nơi làm việc bị nghẽn.",
    methodology: "Lộ trình đồng hành dài hạn 1-1 thiết kế riêng biệt dựa trên từng trường hợp cụ thể để chuyển hóa bền vững.",
    commitment: "Lắng nghe chân thành, đồng hành ấm áp như một người chị gái tâm giao, gỡ rối triệt để từ gốc rễ năng lượng.",
    accentColor: "from-brand-accent/35 to-brand-accent/10",
    icon: (
      <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function JourneyTiers() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 bg-brand-light relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-accent/20 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">
            Hành Trình Khai Thị
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight">
            Phân Tầng Theo Chiều Sâu Nhu Cầu
          </h2>
          <div className="w-12 h-[2px] bg-brand-primary/40 mx-auto mb-6"></div>
          <p className="text-brand-dark/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Huyền học không nên là sự chắp vá mơ hồ. Hồng Ngọc sắp xếp các buổi tham vấn theo 3 tầng chiều sâu để phù hợp nhất với trạng thái hiện tại của tâm hồn bạn.
          </p>
        </motion.div>

        {/* Dynamic Tabs Navigation */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mb-12 p-1.5 bg-brand-muted/20 backdrop-blur-md rounded-2xl md:rounded-full max-w-3xl mx-auto border border-brand-primary/5">
          {tiersData.map((tier, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl md:rounded-full text-sm font-semibold tracking-wider transition-all duration-300 w-full md:w-1/3 cursor-pointer ${
                  isActive 
                    ? "text-white" 
                    : "text-brand-dark/70 hover:text-brand-primary hover:bg-brand-primary/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-brand-primary rounded-xl md:rounded-full shadow-lg shadow-brand-primary/20 z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-serif text-[10px] md:text-xs opacity-80">{tier.number}</span>
                <span className="relative z-10 whitespace-nowrap">{tier.id === 1 ? "Tarot" : tier.id === 2 ? "Bản Mệnh" : "Trị Liệu"}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="relative min-h-[480px] lg:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/50 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Dynamic decorative backdrop gradient for the card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tiersData[activeTab].accentColor} opacity-50 z-0 pointer-events-none`} />

              {/* Left Details */}
              <div className="lg:col-span-7 relative z-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-brand-primary/10 shadow-sm flex items-center justify-center">
                    {tiersData[activeTab].icon}
                  </div>
                  <div>
                    <span className="text-brand-primary font-bold text-xs tracking-widest uppercase block mb-1">
                      {tiersData[activeTab].number}
                    </span>
                    <h3 className="font-serif text-xl md:text-3xl font-bold text-brand-dark leading-tight">
                      {tiersData[activeTab].title}
                    </h3>
                  </div>
                </div>

                <p className="text-brand-primary text-xs uppercase tracking-widest font-bold mb-4">
                  {tiersData[activeTab].primaryTool}
                </p>

                <p className="font-serif text-base md:text-lg text-brand-dark/95 leading-relaxed italic mb-8 border-l-2 border-brand-primary/30 pl-4">
                  "{tiersData[activeTab].description}"
                </p>

                <div className="flex gap-4">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-primary hover:bg-[#6c0b2b] text-white text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:scale-105 shadow-md shadow-brand-primary/10 cursor-pointer"
                  >
                    Nhận tư vấn ngay
                  </a>
                </div>
              </div>

              {/* Right Checklist Details */}
              <div className="lg:col-span-5 relative z-10 flex flex-col gap-6 bg-white/70 p-6 md:p-8 rounded-[2rem] border border-white">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-2">
                    Đối tượng phù hợp nhất:
                  </h4>
                  <p className="text-brand-dark/80 text-sm md:text-[15px] leading-relaxed">
                    {tiersData[activeTab].audience}
                  </p>
                </div>

                <div className="h-px bg-brand-primary/10" />

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#AA801E] mb-2">
                    Phương thức đồng hành:
                  </h4>
                  <p className="text-brand-dark/80 text-sm md:text-[15px] leading-relaxed">
                    {tiersData[activeTab].methodology}
                  </p>
                </div>

                <div className="h-px bg-brand-primary/10" />

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-primary mb-2">
                    Cam kết từ Hồng Ngọc:
                  </h4>
                  <p className="text-brand-dark/85 font-medium text-sm md:text-[15px] leading-relaxed italic">
                    {tiersData[activeTab].commitment}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Elegant Curved Wave shape divider to flow into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-[#F6DFDF]">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
