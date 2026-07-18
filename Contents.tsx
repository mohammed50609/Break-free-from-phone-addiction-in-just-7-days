import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronDown, ChevronUp, Clock, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

interface DayContent {
  dayNum: number;
  dayTitle: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  duration: string;
}

const DAYS_DATA: DayContent[] = [
  {
    dayNum: 1,
    dayTitle: "تتبع وحش الشاشة وفضح الفخاخ النفسية",
    shortDesc: "التعرف الصادق على حجم المشكلة، حساب الخسائر الحقيقية، وفضح الحيل النفسية للتطبيقات.",
    longDesc: "في اليوم الأول، سنقوم برسم خريطة دقيقة لاستخدامك الحالي بدون خجل أو لوم. ستتعلم كيف تستخدم شركات التكنولوجيا الكبرى علم النفس السلوكي لإبقائك مقيداً، وستكتشف 'الوقت الضائع الصامت' الذي يتسلل من بين أصابعك.",
    deliverables: [
      "تطبيق أداة رصد استخدام شاشة الهاتف الذكية ومقارنتها بالواقع",
      "كشف 'خوارزميات الصيد' وفهم كيف يتلاعب التطبيق بفضولك",
      "حساب مؤشر خسارة التركيز الفردي (Focal Loss Indicator)"
    ],
    duration: "45 دقيقة تطبيق عملي"
  },
  {
    dayNum: 2,
    dayTitle: "إعادة ضبط ناقلات الدوبامين في دماغك",
    shortDesc: "فهم كيمياء عقلك وإيقاف دورات الإشباع اللحظي الزائف للبدء بالتحكم الذاتي.",
    longDesc: "لماذا تفتح هاتفك لا شعورياً كل دقيقتين؟ الدوبامين هو الإجابة. اليوم، سنقوم بعمل 'ديتوكس مصغر' لإعادة ضبط عتبة الدوبامين في دماغك، مما يجعل القراءة أو إنجاز المهام الهادئة يبدو ممتعاً وسهلاً مرة أخرى.",
    deliverables: [
      "تمارين عملية لتأخير الاستجابة للاشعارات (Micro-delay method)",
      "تعريف 'المحفز العاطفي' البديل عند الرغبة في الإمساك بالهاتف",
      "تطبيق قاعدة 'التنفس الثلاثي' لاستعادة الوعي الفوري"
    ],
    duration: "30 دقيقة تمارين نفسية"
  },
  {
    dayNum: 3,
    dayTitle: "تصفية التطبيقات السامة وإعادة هيكلة واجهتك",
    shortDesc: "تحويل هاتفك من مصيدة انتباه إلى مجرد أداة إنتاجية صامتة تخدم أهدافك.",
    longDesc: "سنمر بعملية تطهير جذرية لشاشة هاتفك. ستتعلم استراتيجية 'الواجهة البسيطة والمملة' التي تقضي على جاذبية الهاتف البصرية، وتصنيف تطبيقاتك إلى أدوات مفيدة، ومشتتات سامة تجب إزالتها أو دفنها.",
    deliverables: [
      "تفعيل نمط الرمادي الشامل (Grayscale) لإطفاء بريق الهاتف",
      "إخفاء وتجميع تطبيقات السوشيال ميديا في مجلدات 'صعبة الوصول'",
      "حظر الإشعارات غير الضرورية بنسبة 95%"
    ],
    duration: "60 دقيقة تعديل إعدادات الهاتف"
  },
  {
    dayNum: 4,
    dayTitle: "بناء الحواجز الذكية وفرض 'الاحتكاك الإيجابي'",
    shortDesc: "جعل الوصول للتطبيقات المشتتة يتطلب جهداً واعياً يوقظ عقلك النائم.",
    longDesc: "قوة الإرادة تفشل دائماً أمام خوارزميات بمليارات الدولارات. لذلك، سنقوم بفرض عقبات فيزيائية ورقمية بينك وبين عادات السكرول التلقائية. ستجعل الهاتف يتطلب عملاً واعياً قبل أن يفتح.",
    deliverables: [
      "برمجة كلمات مرور معقدة وطويلة تمنع الفتح التلقائي",
      "استخدام تطبيقات الحظر الذكي لتقييد فترات الاستخدام الحرجة",
      "تطبيق استراتيجية 'الهاتف خارج الغرفة' أثناء العمل والتركيز"
    ],
    duration: "40 دقيقة تهيئة حواجز"
  },
  {
    dayNum: 5,
    dayTitle: "تصميم البيئة البديلة وزرع العادات المغذية",
    shortDesc: "ملء الفراغ النفسي والزمني بأنشطة ممتعة وبدائل تحميك من الانتكاس السريع.",
    longDesc: "السبب الرئيسي للانتكاس هو الفراغ والملل. اليوم، سنكتشف بدائل حقيقية ومحفزة تتناسب مع شغفك. ستتعلم كيف تبني بيئة فيزيائية تشجع على القراءة، الإبداع، أو الحركة بدون تشتت الجوال.",
    deliverables: [
      "تصميم قائمة 'بدائل الملل السريعة' (أنشطة بديلة تستغرق أقل من 5 دقائق)",
      "إعادة تجهيز مساحة نوم خالية تماماً من الشاشات",
      "استبدال سكرول الصباح بعادة محفزة تمنحك طاقة فورية"
    ],
    duration: "50 دقيقة تخطيط عادات"
  },
  {
    dayNum: 6,
    dayTitle: "تدريب العقل على التركيز العميق (Deep Work)",
    shortDesc: "استرجاع قدرتك على قراءة كتاب كامل أو العمل المتواصل لساعات بتركيز حديدي.",
    longDesc: "إدمان السكرول دمر قدرتك على الانتباه المستمر. اليوم هو يوم استعادة عضلات التركيز. ستطبق تقنيات تدريجية لتوجيه انتباهك بالكامل لشيء واحد، وكيف تقاوم رغبة تصفح الهاتف العارمة أثناء العمل المجهد.",
    deliverables: [
      "جلسة تدريبية على أسلوب 'الإنتاجية العميقة المتواصلة'",
      "كيفية قراءة 15 صفحة دفعة واحدة بتركيز كامل ودون تشتت",
      "بناء روتين 'عزل الضوضاء الرقمية' أثناء العمل"
    ],
    duration: "45 دقيقة تدريب تركيز"
  },
  {
    dayNum: 7,
    dayTitle: "خطة الاستدامة وحماية الحرية المستعادة",
    shortDesc: "تأمين نجاحك، التعامل مع الانتكاسات بذكاء، وجعل هاتفك في خدمتك مدى الحياة.",
    longDesc: "تهانينا! لقد استعدت وقتك. في اليوم الأخير، سنضع خطة لضمان ألا تقع في الفخ مجدداً. ستتعلم كيف تتعامل مع فترات الضغط والملل دون اللجوء لهاتفك، وتصيغ 'ميثاق علاقتك مع التكنولوجيا' الجديد والمستدام.",
    deliverables: [
      "كتابة 'ميثاقك الشخصي للاستخدام الرقمي الذكي'",
      "إعداد روتين المراجعة الأسبوعية لوقت الشاشة المتاح",
      "خطة الطوارئ السريعة عند الشعور ببداية الانتكاس لعادات السكرول"
    ],
    duration: "30 دقيقة صياغة ميثاق"
  }
];

export default function Contents() {
  const [activeDay, setActiveDay] = useState<number | null>(1);

  const toggleDay = (dayNum: number) => {
    if (activeDay === dayNum) {
      setActiveDay(null);
    } else {
      setActiveDay(dayNum);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="book-contents">
      {/* Decorative gradients */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-green-500/5 rounded-full filter blur-[100px] -z-10" />
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-lime-500/5 rounded-full filter blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-green-400 font-mono text-xs uppercase tracking-wider bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            خريطة الطريق العملية
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-display">
            محتويات الدليل <span className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">يوماً بعد يوم</span>
          </h2>
          <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
            هذا ليس مجرد كتاب للقراءة، بل هو برنامج تدريبي عملي مصمم لتطبقه خطوة بخطوة وتلمس التغيير بنفسك من اليوم الأول.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="contents-accordion-list">
          {DAYS_DATA.map((day) => {
            const isOpen = activeDay === day.dayNum;
            return (
              <div 
                key={day.dayNum}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-zinc-900/90 border-green-500/30 shadow-[0_4px_30px_rgba(74,222,128,0.05)] border' 
                    : 'bg-zinc-950/40 hover:bg-zinc-900/30 border border-zinc-800/60'
                }`}
                id={`accordion-item-day-${day.dayNum}`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleDay(day.dayNum)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Day circle */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg transition-colors ${
                      isOpen 
                        ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(74,222,128,0.4)]' 
                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                    }`}>
                      {day.dayNum}
                    </div>
                    
                    <div className="text-right">
                      <span className="text-xs text-green-400/80 font-mono block">اليوم {day.dayNum}</span>
                      <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                        {day.dayTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="text-zinc-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-green-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-zinc-800/60 text-zinc-300 text-sm md:text-base space-y-4">
                        <p className="leading-relaxed text-zinc-400">
                          {day.longDesc}
                        </p>

                        {/* Deliverables / Exercises */}
                        <div className="bg-zinc-950/60 rounded-xl p-4 border border-zinc-800/80 space-y-3">
                          <h4 className="text-xs font-semibold text-green-400 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-green-400" />
                            التمارين والتطبيقات العملية لهذا اليوم:
                          </h4>
                          <ul className="space-y-2 text-xs md:text-sm text-zinc-300">
                            {day.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Duration and Type */}
                        <div className="flex justify-between items-center text-xs text-zinc-500 font-mono pt-2">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {day.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5" />
                            دليل تطبيقي ومصور
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
