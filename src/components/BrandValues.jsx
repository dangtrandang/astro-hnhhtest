import React from 'react';
import { motion } from 'framer-motion';

const valuesData = [
  {
    id: 1,
    title: "Trung thực",
    description: "Bài lên thế nào nói thế đó, không tô hồng hay vẽ vời thêm bớt.",
    icon: (
      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Trung lập",
    description: "Cung cấp góc nhìn khách quan, không phán xét và tôn trọng quyết định của bạn.",
    icon: (
      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Toàn diện",
    description: "Kết hợp linh hoạt nhiều phương pháp để gỡ nút thắt triệt để nhất.",
    icon: (
      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v8a4 4 0 01-8 0V4a2 2 0 114 0v8a1 1 0 002 0V4z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Dễ gần",
    description: "Ấm áp như chị gái tâm giao, gạt bỏ khoảng cách lý thuyết.",
    icon: (
      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Chiều sâu",
    description: "Mọi đúc kết đều dựa trên sự thấu cảm và trải nghiệm thực tế.",
    icon: (
      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default function BrandValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-36 px-6 bg-brand-light relative overflow-hidden">
      {/* Background chìm rất nhẹ */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E5D5C5]/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-24 max-w-2xl"
        >
          <span className="text-brand-primary font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 block">
            ✦ Cam Kết Vàng Dành Cho Bạn
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight font-light">
            Giá Trị Khai Thị & <span className="italic font-bold text-brand-primary">Định Vị Cốt Lõi</span>
          </h2>
        </motion.div>

        {/* 5 Column Brand Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10 border-b border-brand-primary/5 pb-16"
        >
          {valuesData.map((val) => (
            <motion.div
              key={val.id}
              variants={itemVariants}
              className="flex flex-col text-left group"
            >
              <div className="w-10 h-10 rounded-full border border-[#C5A880]/30 flex items-center justify-center mb-5 bg-white/40 text-brand-primary relative">
                <div className="absolute inset-[-3px] border border-[#C5A880]/10 rounded-full pointer-events-none"></div>
                {val.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">
                {val.title}
              </h3>
              <p className="text-brand-dark/70 text-xs leading-relaxed font-light">
                {val.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Transparency Commitment Table - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
              Định Vị Minh Bạch
            </h3>
            <p className="text-[#C5A880] text-[10px] uppercase tracking-widest font-bold">
              ✦ Tâm Linh Chân Thực — Lựa Chọn An Tâm
            </p>
          </div>

          <div className="w-full border border-[#C5A880]/30 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm shadow-[0_15px_45px_rgba(43,30,30,0.015)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-primary/5 border-b border-[#C5A880]/20">
                  <th className="px-6 py-4 font-serif font-bold text-sm text-red-600 w-1/2">
                    Hồng Ngọc KHÔNG Bao Giờ:
                  </th>
                  <th className="px-6 py-4 font-serif font-bold text-sm text-emerald-600 w-1/2 border-l border-[#C5A880]/20">
                    Hồng Ngọc Cam Kết LÀ:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-primary/5 text-xs md:text-sm text-brand-dark/80 font-light">
                <tr className="hover:bg-white/20 transition-colors">
                  <td className="px-6 py-5 leading-relaxed">
                    <strong>Không phán xét đúng sai</strong> hay áp đặt góc nhìn cá nhân lên lựa chọn của bạn.
                  </td>
                  <td className="px-6 py-5 leading-relaxed border-l border-[#C5A880]/20">
                    <strong>Chị gái tâm giao ấm áp</strong>, biết lắng nghe chân thành và tạo không gian chia sẻ tuyệt đối bảo mật, an toàn.
                  </td>
                </tr>
                <tr className="hover:bg-white/20 transition-colors">
                  <td className="px-6 py-5 leading-relaxed">
                    <strong>Tuyệt đối không hù dọa</strong> gieo rắc nỗi sợ để chào mời cúng bái giải hạn hay bán vật phẩm phong thủy.
                  </td>
                  <td className="px-6 py-5 leading-relaxed border-l border-[#C5A880]/20">
                    <strong>Người khai thị trung lập</strong> đưa giải pháp rõ ràng, nhưng tôn trọng và trao lại toàn bộ quyền tự quyết cho bạn.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
