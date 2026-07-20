"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
        <a href="#contact">
          <Button
            size="lg"
            className="group h-14 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-8 text-base font-semibold text-white shadow-[0_10px_40px_rgba(139,92,246,.45)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,.65)]"
          >
            ابدأ مشروعك
            <ArrowRight className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
        <a
          href="https://wa.me/9647763753457"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="lg"
            className="h-14 rounded-2xl border-white/15 bg-white/5 px-8 text-base text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
          >
            <MessageCircle className="ml-2 h-5 w-5 text-green-400" />
            تواصل عبر واتساب
          </Button>
        </a>
      </motion.div>
    </div>
  );
}