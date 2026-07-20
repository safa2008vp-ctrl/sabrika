"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#050505] text-white">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          وكالة سابركا للإبداع والتسويق الرقمي
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          نصنع
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            علامات تجارية
          </span>
          لا تُنسى
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          نحول أفكارك إلى هوية احترافية، نصمم مواقع إلكترونية حديثة،
          ونبني حملات تسويقية تحقق نتائج حقيقية.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-bold text-white transition hover:scale-105">
            ابدأ مشروعك
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:border-violet-500">
            أعمالنا
          </button>
        </div>

        <div className="mt-20">
          <img
            src="/logo2.png"
            alt="SABRIKA"
            className="mx-auto w-56"
          />
        </div>
      </motion.div>
    </section>
  );
}