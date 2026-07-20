"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaPaintBrush,
  FaLaptopCode,
  FaBullhorn,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPaintBrush className="text-4xl text-purple-500" />,
    title: "تصميم إبداعي",
    desc: "نبتكر هويات بصرية عصرية تعكس قوة علامتك التجارية وتترك انطباعًا لا يُنسى.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-purple-500" />,
    title: "تطوير احترافي",
    desc: "نطور مواقع إلكترونية حديثة وسريعة ومتوافقة مع جميع الأجهزة.",
  },
  {
    icon: <FaBullhorn className="text-4xl text-purple-500" />,
    title: "تسويق رقمي",
    desc: "نساعدك للوصول إلى جمهورك المستهدف وتحقيق أفضل النتائج من حملاتك.",
  },
  {
    icon: <FaRocket className="text-4xl text-purple-500" />,
    title: "نمو أعمالك",
    desc: "استراتيجيات تسويقية متكاملة تساعدك على زيادة المبيعات وبناء علامتك.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative bg-[#09090B] py-28 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.15),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-500 font-bold text-lg">
            لماذا SABRIKA؟
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            لماذا يختارنا عملاؤنا؟
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            نصنع تجارب رقمية متكاملة تجمع بين الإبداع والتقنية والتسويق
            لنساعد الشركات على النمو وتحقيق نتائج حقيقية.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
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
              <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-20"
        >
          <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-bold shadow-lg shadow-purple-600/30">
            ابدأ مشروعك معنا
          </button>
        </motion.div>

      </div>
    </section>
  );
}