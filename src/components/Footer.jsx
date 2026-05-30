import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-light pt-16 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Col 1: Logo & Desc & Socials */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:1}} className="space-y-6">
          <h3 className="font-serif text-4xl font-bold text-white">Hồng Ngọc</h3>
          <p className="text-brand-light/70 text-sm leading-relaxed">
            Nơi bạn được lắng nghe, thấu hiểu và tìm lại sự bình yên trong tâm trí thông qua Tarot, Thần số học và Chiêm tinh.
          </p>
          <div className="flex gap-4">
            {/* Facebook Icon */}
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            {/* Instagram Icon */}
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </motion.div>

        {/* Col 2: Menu 1 */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:1, delay: 0.1}} className="space-y-6">
          <h4 className="font-medium text-lg tracking-wider uppercase text-white/90">Dịch vụ</h4>
          <ul className="space-y-3 text-brand-light/70 text-sm">
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Đọc bài Tarot</a></li>
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Giải mã Thần Số Học</a></li>
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Lập Bản Đồ Sao</a></li>
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Tư vấn tâm lý</a></li>
          </ul>
        </motion.div>

        {/* Col 3: Menu 2 */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:1, delay: 0.2}} className="space-y-6">
          <h4 className="font-medium text-lg tracking-wider uppercase text-white/90">Liên kết</h4>
          <ul className="space-y-3 text-brand-light/70 text-sm">
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Góc chia sẻ (Blog)</a></li>
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Câu hỏi thường gặp</a></li>
            <li><a href="#" className="hover:text-white hover:pl-1 transition-all duration-300 inline-block">Chính sách bảo mật</a></li>
          </ul>
        </motion.div>

        {/* Col 4: Newsletter */}
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:1, delay: 0.3}} className="space-y-6">
          <h4 className="font-medium text-lg tracking-wider uppercase text-white/90">Bản tin chữa lành</h4>
          <p className="text-brand-light/70 text-sm leading-relaxed">
            Nhận những bài viết mới nhất về chữa lành và thấu hiểu bản thân mỗi tuần.
          </p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email của bạn..." 
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-white/40 focus:bg-white/10 text-white placeholder:text-white/40 transition-colors"
            />
            <button 
              type="button"
              className="px-4 py-3 rounded-xl bg-white text-brand-primary font-semibold shadow-lg hover:bg-brand-light hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-300"
            >
              Đăng ký ngay
            </button>
          </form>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-light/40 relative z-10">
        <p>&copy; {new Date().getFullYear()} Hồng Ngọc. All rights reserved.</p>
        <p>Thiết kế bởi sự thấu cảm.</p>
      </div>
    </footer>
  );
}
