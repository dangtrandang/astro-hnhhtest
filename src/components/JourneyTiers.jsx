import React from 'react';
import { motion } from 'framer-motion';

const tiersData = [
  {
    id: 1,
    number: "01",
    label: "TẦNG 01",
    title: "Gỡ Rối & Kết Nối Hiện Tại",
    primaryTool: "Tarot",
    description: "Dành cho ai đang đứng trước các ngã rẽ cuộc sống, cần câu trả lời nhanh, rõ ràng và trung thực cho những nút thắt cấp bách hiện tại.",
    audience: "Đang có những câu hỏi cụ thể, cấp bách trong ngắn hạn về tình cảm, công việc hoặc tài chính.",
    methodology: "Buổi trò chuyện tương tác 1-1 (Online/Offline) kéo dài 30 - 60 phút. Bài lên gì nói đó, giải mã bản chất.",
    commitment: "Khai thị thực tế, không phán xét đúng sai, tôn trọng tuyệt đối tự do ý chí và quyền quyết định.",
    icon: (
      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 2,
    number: "02",
    label: "TẦNG 02",
    title: "Thấu Hiểu & Định Vị Bản Mệnh",
    primaryTool: "Thần số học & Chiêm tinh",
    description: "Giải mã sâu sắc bản đồ gốc thiên bẩm của bạn, chỉ ra tiềm năng, điểm mù cá nhân, bài học nghiệp quả và các chu kỳ biến động lớn.",
    audience: "Muốn hiểu rõ la bàn cuộc đời mình, định vị bản thân và lập kế hoạch chiến lược dài hạn cho sự nghiệp và tâm hồn.",
    methodology: "Nhận tập tài liệu phân tích chi tiết viết tay + 1 buổi tham vấn chuyên sâu dài 90 phút giải thích chi tiết cùng Hồng Ngọc.",
    commitment: "Định hướng thực tế, khoa học và cá nhân hóa sâu sắc, giúp bạn tự tin nắm giữ tay lái cuộc đời.",
    icon: (
      <svg className="w-5 h-5 text-[#C5A880]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    id: 3,
    number: "03",
    label: "TẦNG 03",
    title: "Khai Thị Toàn Diện & Chữa Lành",
    primaryTool: "Mối quan hệ & Phong thủy",
    description: "Phương pháp kết hợp nhằm chữa lành sâu sắc các tổn thương mối quan hệ cũ hoặc điều chỉnh, tối ưu hóa dòng chảy năng lượng trong không gian sống.",
    audience: "Đang gặp bế tắc lớn kéo dài trong các mối quan hệ (gia đình, cặp đôi), cảm thấy năng lượng gia đạo hoặc nơi làm việc bị nghẽn.",
    methodology: "Lộ trình đồng hành dài hạn 1-1 thiết kế riêng biệt dựa trên từng trường hợp cụ thể để chuyển hóa bền vững.",
    commitment: "Lắng nghe chân thành, đồng hành ấm áp như một người chị gái tâm giao, gỡ rối triệt để từ gốc rễ năng lượng.",
    icon: (
      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function JourneyTiers() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-36 px-6 bg-brand-light relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#E5D5C5]/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-24"
        >
          <span className="text-brand-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 block">
            ✦ Hành Trình Khai Thị
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight font-light">
            Phân Tầng Theo Chiều Sâu Nhu Cầu
          </h2>
          <p className="text-brand-dark/70 max-w-2xl text-sm md:text-base leading-relaxed font-light">
            Huyền học không nên là sự chắp vá mơ hồ. Hồng Ngọc sắp xếp các buổi tham vấn theo 3 tầng chiều sâu để phù hợp nhất với trạng thái hiện tại của tâm hồn bạn.
          </p>
        </motion.div>

        {/* 3 Columns Vertical Arched Cards - Side by Side */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-20"
        >
          {tiersData.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              className="rounded-t-[10rem] rounded-b-[2rem] border border-[#C5A880]/30 bg-white/40 backdrop-blur-sm p-8 md:p-10 flex flex-col items-center text-center shadow-[0_15px_45px_rgba(43,30,30,0.02)] transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {/* Circular Number Badge */}
              <div className="w-14 h-14 rounded-full border border-[#C5A880]/30 flex items-center justify-center text-[11px] tracking-[0.15em] font-bold text-brand-primary bg-white/50 mb-6 font-serif relative">
                <div className="absolute inset-[-3px] border border-[#C5A880]/10 rounded-full pointer-events-none"></div>
                {tier.number}
              </div>

              {/* Title & Tool */}
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2 leading-tight min-h-[56px] flex items-center justify-center">
                {tier.title}
              </h3>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A880] font-bold mb-6 block">
                ✦ {tier.primaryTool}
              </span>

              {/* Delicate line divider */}
              <div className="w-8 h-[1px] bg-[#C5A880]/30 mb-6"></div>

              {/* Description quote */}
              <p className="font-serif text-sm text-brand-dark/80 italic leading-relaxed mb-8 flex-grow font-light">
                "{tier.description}"
              </p>

              {/* Details List */}
              <div className="w-full text-left space-y-5 border-t border-brand-primary/5 pt-6 text-xs text-brand-dark/70">
                <div>
                  <span className="font-bold text-[9px] uppercase tracking-[0.2em] text-brand-primary block mb-1">✦ Phù hợp nhất:</span>
                  <p className="leading-relaxed font-light">{tier.audience}</p>
                </div>
                <div>
                  <span className="font-bold text-[9px] uppercase tracking-[0.2em] text-[#C5A880] block mb-1">✦ Cách thức:</span>
                  <p className="leading-relaxed font-light">{tier.methodology}</p>
                </div>
                <div>
                  <span className="font-bold text-[9px] uppercase tracking-[0.2em] text-brand-primary block mb-1">✦ Cam kết:</span>
                  <p className="leading-relaxed italic font-light">{tier.commitment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Unified bottom booking button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-brand-primary hover:bg-[#6c0b2b] text-white text-xs tracking-widest uppercase font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_25px_rgba(133,14,53,0.1)] hover:shadow-[0_12px_35px_rgba(133,14,53,0.2)] cursor-pointer"
          >
            Nhận tư vấn ngay
          </a>
        </motion.div>
      </div>
    </section>
  );
}
