"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "ما هي الخدمات التي تقدمها SABRIKA؟",
    answer:
      "نقدم خدمات الهوية البصرية، التصميم الجرافيكي، إدارة السوشيال ميديا، تطوير المواقع الإلكترونية، الإعلانات الممولة، وصناعة المحتوى الاحترافي.",
  },
  {
    question: "كم يستغرق تنفيذ المشروع؟",
    answer:
      "تختلف المدة حسب نوع المشروع، لكن معظم المشاريع يتم إنجازها خلال عدة أيام بعد اعتماد جميع التفاصيل.",
  },
  {
    question: "هل تقدمون دعماً بعد التسليم؟",
    answer:
      "نعم، نقدم دعماً فنياً ومتابعة مستمرة حسب نوع الخدمة والباقات المتفق عليها.",
  },
  {
    question: "كيف أبدأ العمل معكم؟",
    answer:
      "يمكنك التواصل معنا عبر نموذج التواصل أو واتساب، وسيتواصل معك أحد أعضاء فريقنا لتحديد احتياجات مشروعك.",
  },
  {
    question: "هل يمكن تصميم هوية بصرية كاملة؟",
    answer:
      "بالتأكيد، نقوم بتصميم شعار وهوية بصرية متكاملة تشمل الألوان والخطوط والمطبوعات ودليل استخدام الهوية.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.12),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-500 font-bold">
            الأسئلة الشائعة
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            لديك استفسار؟
          </h2>

          <p className="text-gray-400 mt-6">
            إليك أكثر الأسئلة التي يطرحها عملاؤنا قبل بدء التعاون معنا.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-purple-500 transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-7 py-6 text-right"
                >
                  <h3 className="text-white text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <ChevronDown className="text-purple-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-7 pb-7 text-gray-400 leading-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}