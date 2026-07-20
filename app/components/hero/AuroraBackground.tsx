"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 120, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-[-120px] h-[550px] w-[550px] rounded-full bg-violet-600/25 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 90, -70, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-[-150px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-[-120px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
    </div>
  );
}