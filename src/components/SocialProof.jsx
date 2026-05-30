import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    id: 1,
    title: "Hàn Gắn & Buông Bỏ",
    subtitle: "Trị liệu Mối quan hệ",
    content: "Sau buổi nói chuyện với Ngọc, mình không còn oán trách mối quan hệ cũ nữa. Mình hiểu được bài học mình cần tốt nghiệp là gì. Cảm giác rất nhẹ nhõm.",
    author: "H.A - 26 tuổi",
    image: "https://cms.hongngochuyenhoc.com/assets/9e12b97e-c2a3-4820-88a8-8aa4e1b23540",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Thấu Hiểu Bản Thân",
    subtitle: "Chiêm tinh & Bản đồ sao",
    content: "Lúc đầu mình chỉ định xem thử, nhưng cách Ngọc phân tích bản đồ sao làm mình nhận ra nhiều góc khuất của bản thân. Mình bắt đầu học cách yêu thương bản thân hơn.",
    author: "M.T - Nhân viên văn phòng",
    image: "https://cms.hongngochuyenhoc.com/assets/1f6b7c73-c345-4c1a-9513-ff97ce538005",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Tự Tin Lựa Chọn",
    subtitle: "Trải bài Tarot",
    content: "Không phán xét, không áp đặt. Ngọc chỉ đưa ra những góc nhìn và để mình tự quyết định. Lần đầu tiên mình thấy tự tin vào lựa chọn của mình đến thế.",
    author: "K.L - Freelancer",
    image: "https://cms.hongngochuyenhoc.com/assets/dd48e6d3-2e51-4663-ae3e-1bf76470af2a",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Khai Sáng Tiềm Năng",
    subtitle: "Thần số học & Bản mệnh",
    content: "Những con số mở ra một bản đồ hoàn toàn mới về chặng đường sắp tới. Ngọc phân tích cực kỳ sâu sắc, thực tế, giúp mình tìm lại la bàn cuộc đời.",
    author: "N.Q - 30 tuổi",
    image: "https://cms.hongngochuyenhoc.com/assets/0797f356-ce06-41b4-92e8-a290cee8fd0a",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  }
];

export default function SocialProof() {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Set the second column (index 1) to be open by default!
  const [selectedImage, setSelectedImage] = useState(null); // Lightbox image state

  // Handle Card Clicks
  const handleCardClick = (index, image) => {
    if (hoveredIndex === index) {
      // If already expanded, clicking anywhere on the card will trigger the lightbox popup!
      setSelectedImage(image);
    } else {
      // If not active, clicking it will expand the card
      setHoveredIndex(index);
    }
  };

  return (
    <section className="py-32 px-0 bg-brand-light overflow-hidden relative">
      {/* Background Decorative Mystical Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-muted/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>

      {/* Header Container (Kept in standard width for elegant reading alignment) */}
      <div className="max-w-6xl mx-auto px-6 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-brand-primary font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">
            Những Câu Chuyện Chuyển Hóa
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6 leading-tight max-w-3xl mx-auto">
            Khi góc nhìn thay đổi, câu chuyện cũng khác đi
          </h2>
          <div className="w-12 h-[2px] bg-brand-primary/40 mx-auto"></div>
        </motion.div>
      </div>

      {/* Full Wide Accordion Container with elegant edge padding */}
      <div className="w-full px-4 md:px-10 lg:px-16 relative z-30">
        <div
          className="flex flex-col lg:flex-row gap-2 w-full h-[850px] lg:h-[550px] transition-all duration-500 ease-out"
          onMouseLeave={() => setHoveredIndex(1)} // Resets back to column 1 being open by default
        >
          {stories.map((story, index) => {
            const isHovered = hoveredIndex === index;
            const flexClass = isHovered ? "flex-[3.5] lg:flex-[3.5]" : "flex-[0.6] lg:flex-[0.6]";

            return (
              <div
                key={story.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => handleCardClick(index, story.image)}
                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-[0.22,1,0.36,1] group border min-w-0 ${isHovered
                    ? "border-brand-primary/30 shadow-[0_20px_50px_rgba(133,14,53,0.15)]"
                    : "border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                  } ${flexClass}`}
              >
                {/* Background Image with Zoom & Color */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className={`w-full h-full object-cover transition-[transform,filter] duration-700 ease-[0.22,1,0.36,1] ${isHovered ? "scale-105 saturate-[1.1] brightness-[1.05]" : "scale-100 saturate-100 brightness-[0.8]"
                      }`}
                  />
                  {/* Glowing warm overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-brand-primary/10 mix-blend-color-burn transition-opacity duration-700 ${isHovered ? "opacity-30" : "opacity-0"
                      }`}
                  />
                  {/* Rich Dark Gradient to guarantee text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 z-10" />
                </div>

                {/* Floating Zoom Button - Only displays on the active hovered card */}
                {isHovered && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Avoid double triggers
                      setSelectedImage(story.image);
                    }}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-primary hover:text-white text-brand-light flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 z-30 shadow-lg cursor-pointer"
                    title="Xem ảnh phóng to"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </button>
                )}

                {/* Sparkling Astrological Accents inside active card */}
                {isHovered && (
                  <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                    <svg className="absolute top-6 left-20 w-8 h-8 text-brand-muted/40 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
                    </svg>
                    <svg className="absolute bottom-1/3 left-6 w-4 h-4 text-white/30 animate-ping" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
                    </svg>
                  </div>
                )}

                {/* Top: Absolutely Positioned Icon */}
                <div className="absolute top-8 left-8 md:top-10 md:left-10 z-20">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-700 ${isHovered
                      ? "bg-brand-primary text-brand-light border-brand-primary/30 rotate-[360deg] shadow-[0_0_20px_rgba(133,14,53,0.4)]"
                      : "bg-white/10 backdrop-blur-md text-brand-muted border-white/10"
                    }`}>
                    {story.icon}
                  </div>
                </div>

                {/* Bottom: Absolutely Positioned Title & Testimonial (Firmly Anchored at Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 lg:right-auto p-8 md:p-10 z-20 text-brand-light select-none w-full lg:w-[550px] min-w-0">
                  <span className={`text-[10px] md:text-xs uppercase tracking-widest text-brand-muted/90 font-semibold mb-1 block transition-all duration-500 whitespace-nowrap`}>
                    {story.subtitle}
                  </span>
                  <h3 className={`font-serif text-xl md:text-2xl font-semibold mb-2 text-white transition-all duration-500 whitespace-nowrap ${isHovered ? "text-brand-light" : "text-white/90"
                    }`}>
                    {story.title}
                  </h3>

                  {/* Expandable testimonial section */}
                  <div className="overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? "auto" : 0,
                        marginTop: isHovered ? 16 : 0
                      }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.22, 1, 0.36, 1],
                        delay: isHovered ? 0.25 : 0
                      }}
                      className="overflow-hidden"
                    >
                      <svg className="w-8 h-8 text-brand-muted/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="font-serif text-sm md:text-[15px] lg:text-base text-brand-light/90 italic leading-relaxed mb-6 pl-4 border-l-2 border-brand-primary/40">
                        "{story.content}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-px w-6 bg-brand-primary/60" />
                        <span className="text-[11px] uppercase tracking-wider text-brand-muted font-medium">
                          {story.author}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)} // Click outside to close
          >
            {/* Close Button X */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 z-[110] cursor-pointer"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative max-w-[95vw] max-h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image container itself
            >
              <img
                src={selectedImage}
                alt="Phóng to"
                className="max-w-full max-h-[80vh] object-contain rounded-[2rem] p-2"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wave Shape Divider pointing to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none transform translate-y-px text-[#F2D1D1]/40">
        <svg className="w-full h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,90 C480,120 960,30 1440,90 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
