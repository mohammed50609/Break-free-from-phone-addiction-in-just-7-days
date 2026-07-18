import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Plus, Minus, CheckCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "هل أحتاج إلى حذف تطبيقات السوشيال ميديا تماماً؟",
    answer: "بالتأكيد لا! الدليل يعلمك كيف تضع حواجز ذكية وتفرض 'احتكاكاً إيجابياً' لتتحكم في التطبيقات وتمنعها من سحب انتباهك تلقائياً، وتعدل واجهة هاتفك لتجعله أداة صامتة ومفيدة، دون الحاجة لحظر أو حذف حساباتك أو الانعزال التام عن أصدقائك."
  },
  {
    id: 2,
    question: "كيف ومتى أحصل على الكتاب بعد إتمام الشراء؟",
    answer: "التحميل فوري وآلي بالكامل! بمجرد إتمام الدفع الآمن بنجاح عبر منصة Gumroad، ستظهر لك صفحة التحميل فوراً لتحميل ملف الكتاب الإلكتروني بصيغة PDF عالية الجودة. كما ستصلك فوراً رسالة بريد إلكتروني تحتوي على الفاتورة ورابط تحميل الكتاب للاحتفاظ به وقراءته في أي وقت ومن أي جهاز."
  },
  {
    id: 3,
    question: "كيف يعمل ضمان استرجاع الأموال لمدة 7 أيام؟",
    answer: "نحن واثقون بنسبة 100% من نجاح هذا النظام العملي. إذا اشتريت الكتاب وقرأته وطبقت تمارينه ولم تشعر بتغيير حقيقي ملحوظ في وقت شاشتك واسترجاع 3 ساعات على الأقل يومياً، تواصل معنا عبر البريد الإلكتروني المذكور داخل الفاتورة خلال 7 أيام من تاريخ الشراء، وسنعيد لك كامل المبلغ فوراً وبدون طرح أي أسئلة."
  },
  {
    id: 4,
    question: "هل الخطوات مشروحة لجميع أنواع الهواتف (آيفون وأندرويد)؟",
    answer: "نعم، الدليل مصمم ليكون عاماً وعملياً ومناسباً لجميع الهواتف الذكية. الخطوات والإعدادات مشروحة بالتفصيل لتغطي نظام iOS (آيفون) ونظام Android بكافة واجهاته، مع ترشيح أفضل التطبيقات والأدوات المساعدة المجانية لكل نظام."
  },
  {
    id: 5,
    question: "كم يبلغ طول الكتاب وهل هو نظري أم عملي؟",
    answer: "الكتاب مركز جداً ومصمم خصيصاً ليناسب أصحاب الانتباه المشتت! لا يحتوي على حشو إنشائي أو نظريات مملة. هو عبارة عن دليل مصور وتطبيقي مقسم لـ 7 أيام بمهام محددة جداً تأخذ منك 15-20 دقيقة قراءة يومياً وتطبيقاً عملياً فورياً يغير علاقتك بالهاتف بشكل تصاعدي."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden border-t border-zinc-900" id="faq-section">
      {/* Decorative gradient glowing spots */}
      <div className="absolute right-10 bottom-10 w-60 h-60 bg-green-500/5 rounded-full filter blur-[80px]" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-400 font-mono text-xs uppercase tracking-wider bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            أجبنا على استفساراتك
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-display">
            الأسئلة <span className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">الشائعة والمخاوف</span>
          </h2>
          <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
            هل ما زال لديك تردد؟ هنا ستجد الإجابة الشافية والدقيقة على كل التساؤلات التي قد تدور في ذهنك قبل خوض تجربة استعادة حياتك الرقمية.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-zinc-900/60 border border-zinc-800' 
                    : 'bg-zinc-950/20 border border-zinc-900/80 hover:bg-zinc-900/20'
                }`}
                id={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-green-400' : 'text-zinc-500'}`} />
                    <h3 className="text-sm md:text-base font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-zinc-400 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-green-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Guarantees callout below FAQ */}
        <div className="mt-16 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6" id="faq-guarantees-callout">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold text-white">لا توجد أي مخاطرة من طرفك!</h4>
              <p className="text-xs text-zinc-400 mt-1">أنت محمي بضمان ذهبي لاسترجاع 100% من أموالك في أي وقت خلال 7 أيام.</p>
            </div>
          </div>
          <a
            href="https://farghal1.gumroad.com/l/qiyzrt?wanted=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-400 active:bg-green-600 text-black font-extrabold text-xs md:text-sm rounded-xl transition-all duration-200 text-center shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:scale-[1.02] active:scale-[0.98] select-none"
            id="faq-cta-btn"
          >
            احصل على نسختك الآن
          </a>
        </div>
      </div>
    </section>
  );
}
