"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaUsers,
  FaBriefcase,
  FaAward,
  FaSmile,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-4xl text-purple-500" />,
    number: 250,
    suffix: "+",
    title: "عميل سعيد",
  },
  {
    icon: <FaBriefcase className="text-4xl text-purple-500" />,
    number: 480,
    suffix: "+",
    title: "مشروع منجز",
  },
  {
    icon: <FaAward className="text-4xl text-purple-500" />,
    number: 8,
    suffix: "+",
    title: "سنوات خبرة",
  },
  {
    icon: <FaSmile className="text-4xl text-purple-500" />,
    number: 98,
    suffix: "%",
    title: "رضا العملاء",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.15),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-500 font-bold text-lg">
            إنجازاتنا
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            أرقام تتحدث عن نجاحنا
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            نفتخر بما حققناه مع عملائنا خلال السنوات الماضية.
          </p>
        </motion.div>

        {/* البطاقات */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.35)] transition-all duration-500"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition">
                {item.icon}
              </div>

              <h2 className="text-5xl font-black text-purple-500">
                <CountUp end={item.number} duration={2.5} />
                {item.suffix}
              </h2>

              <p className="text-gray-400 mt-5 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}