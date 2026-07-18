import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  Calendar, 
  Brain, 
  Battery, 
  AlertCircle, 
  CheckCircle, 
  DownloadCloud, 
  Lock, 
  FileText, 
  Award, 
  Hourglass, 
  Menu, 
  X, 
  ShoppingCart, 
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Bookmark
} from 'lucide-react';

// Custom components
import BookMockup from './components/BookMockup';
import Contents from './components/Contents';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to add background blur to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const purchaseUrl = "https://farghal1.gumroad.com/l/qiyzrt?wanted=true";

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black antialiased relative overflow-x-hidden">
      
      {/* ==================== 1. TOP ANNOUNCEMENT BANNER ==================== */}
      <div className="w-full bg-[#050505] border-b border-green-500/20 text-center py-2.5 px-4 text-xs md:text-sm font-semibold text-green-400 flex items-center justify-center gap-2 select-none relative z-50">
        <span className="inline-block animate-pulse">🔥</span>
        <span>كتاب إلكتروني عملي يساعدك تسترجع وقتك وتركيزك من إدمان الجوال</span>
      </div>

      {/* ==================== 2. HEADER / NAVBAR ==================== */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/85 backdrop-blur-md border-b border-zinc-900/80 shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Action CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-green-500 hover:bg-green-400 active:bg-green-600 text-black font-extrabold text-sm rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(74,222,128,0.35)] select-none hover:scale-[1.03] active:scale-[0.97]"
              id="nav-cta-btn"
            >
              اطلب الآن
            </a>
          </div>

          {/* Navigation Menu Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
            <button 
              onClick={() => handleScrollTo('book-contents')} 
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              محتويات الكتاب
            </button>
            <button 
              onClick={() => handleScrollTo('customer-reviews')} 
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              آراء العملاء
            </button>
            <button 
              onClick={() => handleScrollTo('faq-section')} 
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              الأسئلة الشائعة
            </button>
          </nav>

          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <span className="text-lg md:text-xl font-black text-white tracking-tight flex items-center gap-1.5 font-display select-none">
              وقف السكرول
              <span className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.2)] animate-pulse-slow">
                <Hourglass className="w-4.5 h-4.5 text-green-400" />
              </span>
            </span>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="absolute top-full left-0 right-0 bg-black border-b border-zinc-900 shadow-2xl z-50 md:hidden flex flex-col p-6 gap-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <button 
                onClick={() => handleScrollTo('book-contents')} 
                className="text-right text-base font-bold text-zinc-300 hover:text-green-400 py-2 border-b border-zinc-900"
              >
                محتويات الكتاب
              </button>
              <button 
                onClick={() => handleScrollTo('customer-reviews')} 
                className="text-right text-base font-bold text-zinc-300 hover:text-green-400 py-2 border-b border-zinc-900"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => handleScrollTo('faq-section')} 
                className="text-right text-base font-bold text-zinc-300 hover:text-green-400 py-2 border-b border-zinc-900"
              >
                الأسئلة الشائعة
              </button>
              <a 
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-green-500 hover:bg-green-400 active:bg-green-600 text-black font-extrabold rounded-xl transition-all shadow-[0_0_15px_rgba(74,222,128,0.3)] mt-2"
              >
                احصل على الكتاب الآن بـ 6.99$ فقط
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==================== 3. HERO SECTION ==================== */}
      <section className="relative pt-8 pb-20 md:py-24 overflow-hidden" id="hero-section">
        
        {/* Background glow animations */}
        <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-green-500/5 rounded-full filter blur-[120px] -z-10 animate-pulse-slow" />
        <div className="absolute left-10 top-1/3 w-[300px] h-[300px] bg-lime-500/5 rounded-full filter blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col text-right order-2 lg:order-1">
            
            {/* Guide capsule badge */}
            <div className="mb-6 self-start">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs md:text-sm font-semibold border border-green-500/20 shadow-[0_0_15px_rgba(74,222,128,0.05)] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                دليل عملي خلال 7 أيام
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] md:leading-[1.12] tracking-tight font-display">
              كم ساعة من عمرك راحت
              <span className="block text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)] mt-2">
                وأنت تسكرول؟
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 font-medium mt-6 leading-relaxed">
              استرجع من <span className="text-green-400 font-bold border-b-2 border-green-500/30">3 إلى 5 ساعات يومياً</span> من شاشة الهاتف خلال 7 أيام فقط.
            </p>

            {/* Feature Pills (Outline & Bullet) */}
            <div className="flex flex-wrap justify-start gap-3 mt-8" id="hero-features-pills">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs md:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                بدون حذف التطبيقات
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs md:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                بدون إرادة خارقة
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs md:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                بدون حرمان
              </span>
            </div>

            {/* Description Text */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-6 max-w-2xl font-sans">
              دليل عملي مصوّر، يأخذك خطوة بخطوة بطريقة علمية وبسيطة لتستعيد التحكم الكامل في وقتك وتركيزك الذهني المفقود، وتنجز كل المشاريع المؤجلة التي تهمك فعلاً.
            </p>

            {/* Call To Action Buttons */}
            <div className="mt-10 flex flex-col sm:items-start gap-4">
              <a 
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 bg-green-500 hover:bg-green-400 active:bg-green-600 text-black font-extrabold text-base md:text-lg rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:scale-[1.03] active:scale-[0.97] select-none"
                id="hero-buy-btn"
              >
                <ShoppingCart className="w-5.5 h-5.5 shrink-0 text-black" />
                احصل على الكتاب الآن بـ $6.99 فقط
              </a>
              
              <div className="flex items-center justify-center sm:justify-start gap-2 text-zinc-400 text-xs font-medium mr-1.5" id="hero-guarantee-badge">
                <ShieldCheck className="w-4.5 h-4.5 text-green-400" />
                <span>ضمان استرجاع كامل للأموال خلال 7 أيام بدون أسئلة</span>
              </div>
            </div>
          </div>

          {/* Hero Right Device Mockup Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center py-6 md:py-0">
            <BookMockup />
          </div>

        </div>
      </section>

      {/* ==================== 4. TRUST BADGES ROW ==================== */}
      <section className="py-10 border-y border-zinc-900 bg-[#020202] relative z-25" id="trust-badges-row">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Badge 1: Money Back */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-3 p-4 rounded-xl hover:bg-zinc-950/40 transition-colors" id="badge-guarantee">
              <div className="w-11 h-11 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">ضمان 7 أيام</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">استرجاع بدون أي أسئلة</p>
              </div>
            </div>

            {/* Badge 2: Secure Payment */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-3 p-4 rounded-xl hover:bg-zinc-950/40 transition-colors" id="badge-security">
              <div className="w-11 h-11 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">دفع آمن 100%</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">خصوصيتك وبياناتك مشفرة ومحمية</p>
              </div>
            </div>

            {/* Badge 3: Instant Download */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-3 p-4 rounded-xl hover:bg-zinc-950/40 transition-colors" id="badge-download">
              <div className="w-11 h-11 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <DownloadCloud className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">تحميل فوري</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">مباشرة بعد إتمام عملية الشراء</p>
              </div>
            </div>

            {/* Badge 4: PDF Format */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right gap-3 p-4 rounded-xl hover:bg-zinc-950/40 transition-colors" id="badge-format">
              <div className="w-11 h-11 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-white">صيغة PDF</h3>
                <p className="text-[11px] text-zinc-500 mt-0.5">ملف عالي الدقة جاهز على هاتفك</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 5. THE PAINFUL TRUTH SECTION ==================== */}
      <section className="py-20 relative overflow-hidden" id="painful-truth">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-red-500 font-display tracking-tight drop-shadow-[0_0_12px_rgba(239,68,68,0.1)]">
              الحقيقة المؤلمة...
            </h2>
            <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
              الأرقام لا تكذب، فالعمر الذي نضيعه أمام شاشات الهاتف ونحن نقلب بلا هدف يسلب منا طموحاتنا يوماً بعد يوم.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="painful-cards-grid">
            
            {/* Card 1: Hours/Day */}
            <div className="bg-[#050101] rounded-2xl p-6 border border-red-500/10 hover:border-red-500/20 shadow-lg text-right transition-all duration-300 hover:y-[-4px]" id="pain-card-hours">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">4 ساعات يومياً</h3>
              <p className="text-red-400 font-semibold text-xs md:text-sm mt-1.5">تضيع على الجوال</p>
              <p className="text-zinc-500 text-xs mt-3 leading-relaxed">أي ما يعادل 28 ساعة كاملة من التصفح الضائع كل أسبوع.</p>
            </div>

            {/* Card 2: 60 Days */}
            <div className="bg-[#050101] rounded-2xl p-6 border border-red-500/10 hover:border-red-500/20 shadow-lg text-right transition-all duration-300 hover:y-[-4px]" id="pain-card-days">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">60 يوم كامل</h3>
              <p className="text-red-400 font-semibold text-xs md:text-sm mt-1.5">تضيع كل سنة</p>
              <p className="text-zinc-500 text-xs mt-3 leading-relaxed">تخيل خسارة شهرين كاملين من حياتك سنوياً دون أن تشعر.</p>
            </div>

            {/* Card 3: Attention span */}
            <div className="bg-[#050101] rounded-2xl p-6 border border-red-500/10 hover:border-red-500/20 shadow-lg text-right transition-all duration-300 hover:y-[-4px]" id="pain-card-brain">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">تركيز أقل</h3>
              <p className="text-red-400 font-semibold text-xs md:text-sm mt-1.5">وإنجاز أقل</p>
              <p className="text-zinc-500 text-xs mt-3 leading-relaxed">مع شعور مستمر بالتشتت الذهني وضياع القدرة على القراءة أو التركيز.</p>
            </div>

            {/* Card 4: Energy drain */}
            <div className="bg-[#050101] rounded-2xl p-6 border border-red-500/10 hover:border-red-500/20 shadow-lg text-right transition-all duration-300 hover:y-[-4px]" id="pain-card-battery">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
                <Battery className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">إرهاق ذهني</h3>
              <p className="text-red-400 font-semibold text-xs md:text-sm mt-1.5">وتعب مستمر</p>
              <p className="text-zinc-500 text-xs mt-3 leading-relaxed">تستيقظ متعباً وتنام متأخراً بشعور مستنزف دون بذل أي مجهود بدني.</p>
            </div>

          </div>

          {/* Alert / Critical block */}
          <div className="mt-12 bg-red-500/5 rounded-2xl border border-red-500/20 p-5 md:p-6 flex items-start gap-4" id="pain-warning-box">
            <AlertCircle className="w-6.5 h-6.5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm md:text-base leading-relaxed text-zinc-300 text-right">
              <span className="text-red-400 font-bold block mb-1">المشكلة ليست فيك أنت...</span>
              المشكلة الحقيقية تكمن في الطريقة الخبيثة التي صُممت بها هذه التطبيقات. لقد تم بناؤها بأيدي أكبر علماء النفس السلوكيين بهدف استهلاك انتباهك وبيع بياناتك بأي ثمن.
            </p>
          </div>

        </div>
      </section>

      {/* ==================== 6. THE SOLUTION SECTION ==================== */}
      <section className="py-20 bg-[#020202] relative border-t border-zinc-900" id="the-solution">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-panel-neon rounded-3xl p-8 md:p-12 border border-green-500/20 shadow-2xl relative overflow-hidden" id="solution-container">
            
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-green-500/5 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Solution Right Image/Mockup (on Desktop) */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative">
                <div className="relative w-full max-w-[320px] aspect-[3/4] flex items-center justify-center">
                  <div className="absolute inset-0 bg-green-500/10 rounded-full filter blur-3xl" />
                  
                  {/* Miniature 3D book cover layout purely in CSS */}
                  <div className="relative w-full h-full bg-[#010101] border-2 border-green-500/30 rounded-xl p-5 shadow-2xl flex flex-col justify-between text-right overflow-hidden border-r-8 border-r-zinc-800">
                    <div>
                      <span className="text-[8px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-mono border border-green-500/20">الحل الذكي والعملي</span>
                      <h4 className="text-xl font-black mt-2 leading-tight">
                        <span className="text-green-400 block text-2xl font-black">7 أيام</span>
                        <span className="text-[10px] text-zinc-400 font-normal">لاستعادة وقتك المسروق</span>
                      </h4>
                    </div>
                    
                    {/* Hourglass Icon */}
                    <div className="flex justify-center my-4">
                      <Hourglass className="w-16 h-16 text-green-400 filter drop-shadow-[0_0_8px_rgba(74,222,128,0.4)] animate-pulse" />
                    </div>

                    <div className="text-center">
                      <p className="text-[7px] text-zinc-400">طريقك لاسترداد تركيزك وحماية وقتك المفقود</p>
                      <div className="h-1.5 w-12 bg-green-400/40 rounded mx-auto mt-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Left Copy Column */}
              <div className="lg:col-span-7 flex flex-col text-right order-1 lg:order-2">
                <span className="text-green-400 font-semibold text-xs md:text-sm font-mono tracking-widest">
                  الحل موجود... وهذا الكتاب دليلك
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 font-display leading-tight">
                  <span className="text-green-400 drop-shadow-[0_0_12px_rgba(74,222,128,0.25)]">7 أيام فقط</span> لتوليد التغيير
                </h2>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mt-6 font-sans">
                  نظام عملي مجرّب، تم وضعه وصياغته بعناية فائقة لمساعدتك في استعادة من 3 إلى 5 ساعات يومياً من شاشة الهاتف، وإعادة استغلالها بوعي وحرية، بدون الحاجة لحذف تطبيقاتك المفضلة وبدون حرمان.
                </p>

                {/* Checklist Bullet Points */}
                <ul className="space-y-4 mt-8" id="solution-checklist">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5.5 h-5.5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm md:text-base font-extrabold text-white">خطوات بسيطة وواضحة</h4>
                      <p className="text-xs text-zinc-400 mt-1">لا حشو نظري، بل دليل عملي مصور يركز على التطبيق المباشر يومياً.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5.5 h-5.5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm md:text-base font-extrabold text-white">تطبيق عملي خلال 7 أيام</h4>
                      <p className="text-xs text-zinc-400 mt-1">برنامج مدروس يتدرج معك يومياً حتى تحصل على التحرر الرقمي الذاتي.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5.5 h-5.5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm md:text-base font-extrabold text-white">نتائج حقيقية تبدأ من اليوم الأول</h4>
                      <p className="text-xs text-zinc-400 mt-1">ستلاحظ هبوط استهلاك وقت شاشتك من الـ 24 ساعة الأولى لتطبيق التمارين.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. DAY-BY-DAY ROADMAP (Contents) ==================== */}
      <Contents />

      {/* ==================== 8. CUSTOMER REVIEWS (Testimonials) ==================== */}
      <Reviews />

      {/* ==================== 9. FREQUENTLY ASKED QUESTIONS ==================== */}
      <FAQ />

      {/* ==================== 10. PRICING & LAST CONVERSION CALLOUT ==================== */}
      <section className="py-20 relative overflow-hidden" id="pricing-conversion-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl border border-zinc-800 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden" id="pricing-card">
            
            {/* Glowing background highlights */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full filter blur-[100px] pointer-events-none -z-10" />

            <span className="inline-block px-3 py-1 bg-green-500/15 text-green-400 text-xs font-bold rounded-full border border-green-500/20 mb-6 font-mono select-none">
              العرض لفترة محدودة جداً ⏰
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display">
              ابدأ الآن وغير حياتك بوعي بـ 6.99$ فقط
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-3 max-w-lg mx-auto">
              سعر هذا الدليل يعادل قيمة فنجان قهوة واحد، ولكنه سيمنحك مئات الساعات الثمينة المفقودة لتعيد توجيهها لمستقبلك.
            </p>

            {/* Price Grid */}
            <div className="flex items-center justify-center gap-10 my-8 py-4 border-y border-zinc-800 max-w-sm mx-auto" id="pricing-details-grid">
              {/* Original Price */}
              <div className="text-center">
                <span className="text-zinc-500 text-xs font-medium block">السعر الأصلي</span>
                <span className="text-zinc-500 text-xl md:text-2xl font-bold line-through mt-1 block">14.99$</span>
              </div>
              
              {/* Divider */}
              <div className="h-10 w-px bg-zinc-800" />
              
              {/* Today's Price */}
              <div className="text-center">
                <span className="text-green-400 text-xs font-bold block flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-green-400" />
                  السعر اليوم
                </span>
                <span className="text-green-400 text-3xl md:text-4xl font-black mt-1 block drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">6.99$</span>
              </div>
            </div>

            {/* Huge CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <a 
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-green-500 hover:bg-green-400 active:bg-green-600 text-black font-black text-lg md:text-xl rounded-2xl transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(74,222,128,0.4)] hover:scale-[1.03] active:scale-[0.97] select-none"
                id="footer-buy-btn"
              >
                <ShoppingCart className="w-5.5 h-5.5 text-black shrink-0" />
                احصل على الكتاب الآن بـ 6.99$ فقط
              </a>
              
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-semibold" id="footer-guarantee-tag">
                <ShieldCheck className="w-4.5 h-4.5 text-green-400" />
                <span>ضمان استرجاع كامل للأموال خلال 7 أيام بدون أسئلة</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 11. FOOTER ==================== */}
      <footer className="bg-black py-12 border-t border-zinc-900 text-zinc-500 text-center text-xs relative z-30" id="landing-footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
          
          {/* Logo brand again */}
          <div className="flex items-center gap-2 text-white font-black text-lg select-none">
            <span>وقف السكرول</span>
            <Hourglass className="w-4 h-4 text-green-400 animate-pulse-slow" />
          </div>

          <p className="leading-relaxed max-w-md font-sans">
            دليل عملي مصمم لتأهيل علاقتك مع العالم الرقمي وزيادة التركيز. جميع الحقوق محفوظة لـ كاتب الكتاب والناشر محمد فرغال © {new Date().getFullYear()}.
          </p>

          {/* Legal and Gumroad disclosures */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-zinc-600" id="footer-legal-links">
            <a href={purchaseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">الدعم الفني وشكاوى الشراء</a>
            <span>•</span>
            <a href={purchaseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">اتفاقية استخدام Gumroad المعتمدة</a>
            <span>•</span>
            <a href={purchaseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">سياسة الخصوصية واسترداد المبالغ</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
