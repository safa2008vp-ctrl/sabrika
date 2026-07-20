"use client";

import { motion } from "framer-motion";

import AuroraBackground from "./AuroraBackground";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
<section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-32 md:pt-36 text-white">      <AuroraBackground />

      {/* تأثيرات ضوئية */}
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
      <div className="grid items-center gap-10 lg:gap-20 lg:grid-cols-2">
          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
              🚀 وكالة سابركا للإبداع والتسويق الرقمي
            </span>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight">              نحوّل أفكارك إلى
              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                علامة تجارية
              </span>
              تترك أثرًا لا يُنسى
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-300 md:text-xl">
              نصمم الهويات البصرية، المواقع الإلكترونية، المتاجر
              الإلكترونية، ونبني حملات تسويقية تحقق نتائج حقيقية
              وتساعد علامتك التجارية على النمو.
            </p>

            <HeroButtons />

            <div className="mt-12">
              <HeroStats />
            </div>
          </motion.div>

          {/* اللوجو */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
<div className="
relative
flex
h-[320px]
w-[320px]
sm:h-[420px]
sm:w-[420px]
lg:h-[560px]
lg:w-[560px]
items-center
justify-center
rounded-[45px]
border
border-white/10
bg-white/5
backdrop-blur-3xl
shadow-[0_0_80px_rgba(139,92,246,0.25)]
">
              {/* دوائر متحركة */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[430px] w-[430px] rounded-full border border-violet-500/20"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[350px] w-[350px] rounded-full border border-cyan-500/20"
              />

              <img
                src="/logo2.png"
                alt="SABRIKA"
                className="relative z-10 w-40 sm:w-56 lg:w-72 drop-shadow-[0_0_60px_rgba(139,92,246,.8)]"              />

              <FloatingCards />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}