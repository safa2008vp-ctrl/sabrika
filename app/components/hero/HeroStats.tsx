"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    number: 120,
    suffix: "+",
    title: "مشروع ناجح",
  },
  {
    number: 80,
    suffix: "+",
    title: "عميل سعيد",
  },
  {
    number: 5,
    suffix: "+",
    title: "سنوات خبرة",
  },
  {
    number: 98,
    suffix: "%",
    title: "رضا العملاء",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
        >
          <h3 className="text-3xl font-bold text-violet-400">
            <CountUp end={item.number} duration={2.5} />
            {item.suffix}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}