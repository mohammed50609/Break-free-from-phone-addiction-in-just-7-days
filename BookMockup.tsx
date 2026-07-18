import React from 'react';
import { motion } from 'motion/react';

export default function BookMockup() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-[4/3] flex items-center justify-center select-none" id="book-mockup-container">
      {/* Glow Background Effect */}
      <div className="absolute inset-0 bg-green-500/10 rounded-full filter blur-[80px] -z-10 animate-pulse-slow" />

      {/* Group wrapper with hover animation */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* ==================== 1. THE TABLET (Left Back) ==================== */}
        <motion.div 
          className="absolute left-[5%] w-[48%] aspect-[3/4] bg-zinc-950 rounded-2xl border-[6px] border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-10"
          style={{ transform: "perspective(1000px) rotateY(15deg) rotateX(2deg)" }}
          whileHover={{ y: -5, rotateY: 10, transition: { duration: 0.3 } }}
        >
          {/* Glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" />
          
          {/* Tablet Screen Content */}
          <div className="relative w-full h-full bg-[#030303] p-4 flex flex-col justify-between overflow-hidden text-right border border-zinc-900">
            {/* Tablet Header / Status Bar */}
            <div className="flex justify-between items-center text-[8px] text-zinc-500 font-mono mb-2">
              <span>94%</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              <span>12:00 PM</span>
            </div>

            {/* Book Cover Design in Tablet */}
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="text-center">
                <span className="inline-block px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[8px] font-mono border border-green-500/30">
                  دليل عملي
                </span>
                <h3 className="text-xl font-black text-white mt-1 leading-tight tracking-wide">
                  <span className="text-green-400 block drop-shadow-[0_0_10px_rgba(74,222,128,0.4)]">7 أيام</span>
                  <span className="text-[10px] text-zinc-300 block font-normal mt-0.5">لاستعادة وقتك المسروق</span>
                </h3>
              </div>

              {/* Hourglass SVG graphic (Smaller) */}
              <div className="my-2 flex justify-center">
                <svg className="w-20 h-20 text-green-400 filter drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 15H75M25 85H75" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M30 15C30 40 45 50 45 50C45 50 30 60 30 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M70 15C70 40 55 50 55 50C55 50 70 60 70 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  {/* Digital sand */}
                  <line x1="50" y1="52" x2="50" y2="80" stroke="currentColor" strokeWidth="2" strokeDasharray="2 3" className="animate-pulse" />
                  <circle cx="50" cy="28" r="4" fill="currentColor" className="opacity-80" />
                  <path d="M38 25C42 35 58 35 62 25" fill="currentColor" className="opacity-20" />
                  <path d="M36 78C42 70 58 70 64 78" fill="currentColor" className="opacity-80 animate-pulse" />
                </svg>
              </div>

              <div className="text-center">
                <p className="text-[6px] text-zinc-400 leading-relaxed font-sans max-w-[120px] mx-auto">
                  طريقة عملية تستعيد بها 3-5 ساعات يومياً بدون حذف التطبيقات وبدون حرمان
                </p>
                <div className="mt-2 text-[5px] text-zinc-600 font-mono">تأليف محمد فرغال</div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ==================== 2. THE 3D BOOK (Right Main) ==================== */}
        <motion.div 
          className="absolute right-[8%] w-[50%] aspect-[3/4] z-20 group cursor-pointer"
          style={{ transform: "perspective(1200px) rotateY(-20deg) rotateX(3deg)" }}
          whileHover={{ y: -8, rotateY: -15, scale: 1.02, transition: { duration: 0.3 } }}
        >
          {/* Main Book wrapper for 3D layout */}
          <div className="relative w-full h-full rounded-l-md overflow-hidden shadow-[15px_25px_55px_rgba(0,0,0,0.9)] flex">
            {/* Ebook Pages Spine Detail (Gives 3D depth on the right edge) */}
            <div className="absolute right-0 top-0 bottom-0 w-[12px] bg-gradient-to-r from-zinc-800 via-zinc-200 to-zinc-700 border-y border-r border-zinc-600 z-10" 
                 style={{ transform: "skewY(0deg) rotateY(45deg)", transformOrigin: "right" }} />
            
            {/* Book Front Cover Screen */}
            <div className="flex-1 bg-[#020202] border-y border-l border-zinc-800 p-6 flex flex-col justify-between overflow-hidden text-right select-none relative">
              {/* Cover glowing subtle matrix background */}
              <div className="absolute inset-0 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-black/60 z-10 pointer-events-none" />

              {/* Cover Header */}
              <div className="text-center z-10">
                <span className="inline-block px-2.5 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-semibold tracking-wider border border-green-500/30">
                  دليل عملي خلال 7 أيام
                </span>
                <h2 className="text-3xl font-black text-white mt-3 leading-tight tracking-wide drop-shadow-md">
                  <span className="text-green-400 block text-4xl mt-1 font-extrabold tracking-normal drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">7 أيام</span>
                  <span className="text-xs text-zinc-300 block font-normal tracking-wide mt-1">لاستعادة وقتك المسروق</span>
                </h2>
              </div>

              {/* Central Glowing Hourglass Graphic */}
              <div className="my-3 flex justify-center z-10 relative">
                <div className="absolute inset-0 bg-green-500/5 rounded-full filter blur-xl animate-pulse" />
                <svg className="w-28 h-28 text-green-400 filter drop-shadow-[0_0_12px_rgba(74,222,128,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Hourglass Frame */}
                  <path d="M20 12H80" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M20 88H80" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M25 12C25 42 45 50 45 50C45 50 25 58 25 88" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M75 12C75 42 55 50 55 50C55 50 75 58 75 88" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
                  
                  {/* Glowing sand dripping */}
                  <g className="opacity-80">
                    <line x1="50" y1="50" x2="50" y2="85" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 4" className="animate-pulse" />
                  </g>
                  
                  {/* Upper sand level (decreasing) */}
                  <path d="M31 22C40 34 60 34 69 22" fill="currentColor" fillOpacity="0.15" />
                  <path d="M35 32C41 40 59 40 65 32" fill="currentColor" fillOpacity="0.4" />
                  
                  {/* Lower sand level (increasing) */}
                  <path d="M28 82C36 70 64 70 72 82" fill="currentColor" fillOpacity="0.8" className="animate-pulse" />
                  <path d="M34 82C40 76 60 76 66 82" fill="currentColor" fillOpacity="1" />
                  
                  {/* Matrix Falling Bits representing "Stolen Time" returning */}
                  <text x="40" y="30" fill="#22c55e" fontSize="5" fontFamily="monospace" className="opacity-40 select-none">1</text>
                  <text x="56" y="26" fill="#22c55e" fontSize="6" fontFamily="monospace" className="opacity-30 select-none">0</text>
                  <text x="44" y="44" fill="#22c55e" fontSize="5" fontFamily="monospace" className="opacity-60 select-none">1</text>
                  <text x="52" y="40" fill="#22c55e" fontSize="6" fontFamily="monospace" className="opacity-50 select-none">0</text>
                  <text x="47" y="65" fill="#22c55e" fontSize="6" fontFamily="monospace" className="opacity-70 select-none">1</text>
                  <text x="35" y="70" fill="#22c55e" fontSize="5" fontFamily="monospace" className="opacity-30 select-none">0</text>
                  <text x="61" y="73" fill="#22c55e" fontSize="6" fontFamily="monospace" className="opacity-40 select-none">1</text>
                </svg>
              </div>

              {/* Cover Footer text */}
              <div className="text-center z-10 mt-1">
                <p className="text-[9px] text-zinc-300 leading-relaxed font-sans max-w-[180px] mx-auto">
                  طريقة عملية تستعيد بها <span className="text-green-400 font-semibold">3-5 ساعات يومياً</span> من الجوال بدون حذف تطبيقاتك المفضلة.
                </p>
                <div className="mt-3 flex items-center justify-center gap-1 text-[8px] text-zinc-500 font-mono">
                  <span>تأليف: محمد فرغال</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span>دليل مصور</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ==================== 3. THE SMARTPHONE (Center Front) ==================== */}
        <motion.div 
          className="absolute bottom-[-5%] left-[28%] w-[28%] aspect-[9/19] bg-black rounded-[24px] border-[4px] border-zinc-800 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden z-30"
          style={{ transform: "perspective(1000px) rotateY(10deg) rotateX(1deg)" }}
          whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
        >
          {/* Speaker, camera notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-3 bg-zinc-900 rounded-full z-30 flex items-center justify-center gap-1">
            <div className="w-1 h-1 rounded-full bg-zinc-700" />
            <div className="w-6 h-0.5 bg-zinc-800 rounded-full" />
          </div>

          {/* Screen Glass Shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-20" />

          {/* Screen Content */}
          <div className="relative w-full h-full bg-[#040404] p-3 flex flex-col justify-between overflow-hidden text-right border border-zinc-950">
            {/* Mobile Header Icons */}
            <div className="flex justify-between items-center text-[6px] text-zinc-500 font-mono mt-1 mb-1">
              <span>98% 🔋</span>
              <div className="w-1 h-1 rounded-full bg-zinc-600" />
              <span>12:00</span>
            </div>

            {/* Content Display */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div className="text-center mt-1">
                <span className="inline-block px-1 py-0.2 bg-green-500/20 text-green-400 text-[6px] font-mono rounded">
                  دليل عملي
                </span>
                <h4 className="text-xs font-black text-white mt-0.5 leading-tight">
                  <span className="text-green-400">7 أيام</span>
                  <span className="text-[6px] text-zinc-400 block font-normal">لاستعادة وقتك المسروق</span>
                </h4>
              </div>

              {/* Minimalist Hourglass SVG */}
              <div className="flex justify-center my-1">
                <svg className="w-12 h-12 text-green-400 filter drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 20H70M30 80H70" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M35 20C35 45 48 50 48 50C48 50 35 55 35 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M65 20C65 45 52 50 52 50C52 50 65 55 65 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                  <line x1="50" y1="50" x2="50" y2="78" stroke="currentColor" strokeWidth="3" strokeDasharray="2 3" />
                </svg>
              </div>

              <div className="text-center mb-1">
                <p className="text-[5px] text-zinc-400 leading-tight">
                  استرجع من 3 إلى 5 ساعات يومياً
                </p>
                <div className="w-4 h-0.5 bg-green-500/40 mx-auto mt-1 rounded" />
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
