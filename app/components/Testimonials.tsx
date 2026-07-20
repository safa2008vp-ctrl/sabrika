"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "محمد أحمد",
    company: "شركة الهرم",
    text: "تعامل احترافي جداً، التصميم فاق توقعاتنا وكانت النتائج ممتازة. ننصح بالتعامل مع SABRIKA بكل ثقة.",
  },
  {
    name: "علي حسن",
    company: "ضيانا للطاقة الشمسية",
    text: "أفضل شركة تعاملنا معها في إدارة السوشيال ميديا وتصميم الإعلانات. سرعة في التنفيذ وجودة عالية.",
  },
  {
    name: "سارة خالد",
    company: "شركة دروب السفر",
    text: "فريق مبدع ومتعاون، ساعدنا في بناء هوية احترافية وزيادة وصول حملاتنا الإعلانية.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.12),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-500 font-bold">
            آراء العملاء
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            ماذا يقول عملاؤنا؟
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            نفخر بثقة عملائنا، وهذه بعض تجاربهم مع خدمات SABRIKA.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.35)] transition-all duration-500"
            >

              <Quote
                size={36}
                className="text-purple-500 mb-6"
              />

              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-8 mb-8">
                "{item.text}"
              </p>

              <div className="border-t border-white/10 pt-6">

                <h3 className="text-white text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-purple-400 mt-1">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}