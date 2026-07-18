import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck, CheckCircle } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  timeReclaimed: string;
  reviewText: string;
  date: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "م. أحمد الشمري",
    role: "مهندس برمجيات",
    avatar: "أ",
    rating: 5,
    timeReclaimed: "استعاد 4 ساعات يومياً",
    reviewText: "كنت أقضي ما يقرب من 6 ساعات يومياً على تويتر وإنستغرام بلا أدنى فائدة. هذا الكتاب فتح عيني على الفخاخ النفسية التي كنت أقع فيها. التمارين في اليوم الثالث والرابع غيرت طريقة تعاملي مع الهاتف تماماً. الآن وقت شاشتي لا يتعدى ساعة ونصف، واستعدت شغفي بالقراءة والرياضة.",
    date: "منذ أسبوعين"
  },
  {
    id: 2,
    name: "سارة الغامدي",
    role: "طالبة ماجستير",
    avatar: "س",
    rating: 5,
    timeReclaimed: "استعادت 3.5 ساعات يومياً",
    reviewText: "أنصح بشدة بهذا الكتاب لكل من يعاني من تشتت الانتباه أثناء الدراسة. كنت أفتح الهاتف تلقائياً بمجرد الشعور بالملل أو صعوبة الفهم. فكرة 'الاحتكاك الإيجابي' والبدائل الذكية جعلتني أركز لساعتين متواصلتين دون تشتت واحد. إنجازي تضاعف بفضل الله ثم هذا الدليل العملي.",
    date: "منذ 10 أيام"
  },
  {
    id: 3,
    name: "عبد الرحمن باوزير",
    role: "صانع محتوى وكاتب",
    avatar: "ع",
    rating: 5,
    timeReclaimed: "استعاد 5 ساعات يومياً",
    reviewText: "الجميل في الكتاب أنه واقعي للغاية ولا يطلب منك حذف تطبيقاتك أو العيش في كهف! إنه يركز على إعادة هيكلة علاقتك بالهاتف لتجعله مجرد أداة تخدمك بدل أن يستعبدك. الضمان الذهبي شجعني على الشراء، ولكن بعد قراءة اليوم الأول فقط علمت أن قيمة الكتاب تفوق سعره بكثير.",
    date: "منذ 3 أسابيع"
  },
  {
    id: 4,
    name: "د. هدى التميمي",
    role: "أخصائية تربوية وأم",
    avatar: "ه",
    rating: 5,
    timeReclaimed: "استعادت 3 ساعات يومياً",
    reviewText: "كأم ومربية، كنت قلقة من تأثير الهاتف على جودة وقتي مع أطفالي. هذا الكتاب قدم لي نظاماً ملموساً وليس مجرد نصائح إنشائية مكررة. طبقت خطة الـ 7 أيام، والآن أصبحت بيتنا خالية من الشاشات في الأوقات الحرجة، وأشعر براحة بال غير مسبوقة.",
    date: "منذ شهر"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 relative overflow-hidden" id="customer-reviews">
      {/* Decorative backdrop glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full filter blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-400 font-mono text-xs uppercase tracking-wider bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            قصص النجاح الحقيقية
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 font-display">
            ماذا يقول <span className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">قرّاؤنا المتميزون؟</span>
          </h2>
          <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
            تجارب حية من أشخاص استعادوا السيطرة على انتباههم وأوقاتهم وطوروا جودة حياتهم اليومية بعد تطبيق خطة الـ 7 أيام.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="reviews-grid-list">
          {REVIEWS_DATA.map((review, idx) => (
            <motion.div
              key={review.id}
              className="bg-zinc-950/60 rounded-2xl p-6 border border-zinc-800/80 hover:border-green-500/30 transition-all duration-300 relative group flex flex-col justify-between shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              id={`review-card-${review.id}`}
            >
              <div className="absolute top-6 left-6 text-zinc-800 pointer-events-none">
                <Quote className="w-10 h-10 transform rotate-180 opacity-20" />
              </div>

              <div>
                {/* Stars and reclaimed time badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-green-400 text-green-400 filter drop-shadow-[0_0_4px_rgba(74,222,128,0.4)]" />
                    ))}
                  </div>
                  <span className="text-xs bg-green-500/10 text-green-400 px-2.5 py-1 rounded-md border border-green-500/20 font-medium">
                    {review.timeReclaimed}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  {review.reviewText}
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-900 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-white text-base">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-1.5">
                      {review.name}
                      <span className="inline-flex items-center text-[10px] text-green-400 font-normal bg-green-500/5 px-1.5 py-0.2 rounded border border-green-500/10 gap-0.5">
                        <CheckCircle className="w-3 h-3 text-green-400 shrink-0" />
                        مشتري مؤكد
                      </span>
                    </h4>
                    <p className="text-xs text-zinc-500">{review.role}</p>
                  </div>
                </div>
                <span className="text-xs text-zinc-600 font-mono">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
