import React from 'react';
import { motion } from 'framer-motion';

const valuesData = [
  {
    id: 1,
    title: "Trung thực",
    description: "Bài lên thế nào nói thế đó, không tô hồng hay vẽ vời thêm bớt.",
    icon: (
      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Trung lập",
    description: "Cung cấp góc nhìn khách quan, không phán xét và tôn trọng quyết định của bạn.",
    icon: (
      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Toàn diện",
    description: "Kết hợp linh hoạt nhiều phương pháp để gỡ nút thắt triệt để nhất.",
    icon: (
      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v8a4 4 0 01-8 0V4a2 2 0 114 0v8a1 1 0 002 0V4z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Dễ gần",
    description: "Master-level 9 năm kinh nghiệm nhưng chi phí hợp lý, ấm áp như chị gái tâm giao.",
    icon: (
      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Chiều sâu",
    description: "Mọi đúc kết đều dựa trên sự thấu cảm sâu sắc và trải nghiệm tham vấn thực tế.",
    icon: (
      <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <section className="py-32 px-6 bg-brand-light relative overflow-hidden">
      {/* Mystical backgrounds */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-accent/20 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">
            Cam Kết Vàng Dành Cho Bạn
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight max-w-3xl mx-auto">
            Giá Trị Khai Thị & Định Vị Cốt Lõi
          </h2>
          <div className="w-12 h-[2px] bg-brand-primary/40 mx-auto"></div>
        </motion.div>

        {/* 2 Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 5 Brand Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {valuesData.map((val) => (
              <motion.div
                key={val.id}
                variants={itemVariants}
                className="group bg-white/40 backdrop-blur-xl p-6 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(133,14,53,0.05)] hover:border-brand-primary/20 hover:bg-white/70 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-brand-primary/5">
                  {val.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed group-hover:text-brand-dark transition-colors duration-500">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: LÀ vs KHÔNG LÀ Glassmorphic Board */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-white/60 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-[0_30px_60px_rgba(0,0,0,0.03)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full filter blur-xl pointer-events-none"></div>

            <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-dark mb-2 relative z-10">
              Định Vị Minh Bạch
            </h3>
            <p className="text-brand-primary text-xs uppercase tracking-widest font-bold mb-8 relative z-10">
              Tâm Linh Chân Thực — Lựa Chọn An Tâm
            </p>

            <div className="space-y-8 relative z-10">
              {/* KHÔNG PHẢI LÀ */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-red-600 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Hồng Ngọc chắc chắn KHÔNG:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-brand-dark/75 text-sm md:text-[15px] leading-relaxed">
                    <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Không phán xét đúng sai</strong> hay áp đặt góc nhìn cá nhân lên lựa chọn của khách hàng.</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-dark/75 text-sm md:text-[15px] leading-relaxed">
                    <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Tuyệt đối không hù dọa</strong> gieo rắc nỗi sợ để chào mời cúng bái giải hạn hay bán vật phẩm phong thủy.</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-dark/75 text-sm md:text-[15px] leading-relaxed">
                    <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><strong>Không xây dựng hình ảnh luxury xa hoa</strong> tạo rào cản tiếp cận với những người thực sự cần gỡ rối.</span>
                  </li>
                </ul>
              </div>

              <div className="h-px bg-brand-primary/10" />

              {/* LÀ */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Hồng Ngọc Cam Kết LÀ:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-brand-dark/85 text-sm md:text-[15px] leading-relaxed">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Chị gái tâm giao ấm áp</strong>, biết lắng nghe chân thành và tạo không gian chia sẻ tuyệt đối bảo mật, an toàn.</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-dark/85 text-sm md:text-[15px] leading-relaxed">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Chuyên gia đa phương pháp</strong>, kết hợp nhuần nhuyễn khoa học năng lượng để khai thị rõ và sâu bản chất thực tế.</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-dark/85 text-sm md:text-[15px] leading-relaxed">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Người khai thị trung lập</strong> đưa giải pháp rõ ràng, nhưng tôn trọng và trao lại toàn bộ quyền tự quyết cho bạn.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Curved Wave shape divider to flow into next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-brand-light animate-pulse">
        {/* We keep this divider simple and matching index's background (brand-light) so it has no hard edges! */}
      </div>
    </section>
  );
}
