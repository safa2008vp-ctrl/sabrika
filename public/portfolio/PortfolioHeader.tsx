"use client";

import { motion } from "framer-motion";

export default function PortfolioHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-20 text-center"
    >
      <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300">
        معرض أعمالنا
      </span>

      <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
        مشاريع نفتخر بتنفيذها
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        نؤمن أن أفضل وسيلة لإقناع العميل هي عرض أعمال حقيقية حققت نتائج
        ملموسة. هنا تجد مجموعة من أبرز المشاريع التي نفذتها SABRIKA في
        التصميم، التسويق، والإنتاج الإبداعي.
      </p>
    </motion.div>
  );
}