"use client";

import { motion } from "framer-motion";
import { Palette, Globe, Megaphone } from "lucide-react";

const cards = [
  {
    icon: Palette,
    title: "تصميم احترافي",
    color: "text-violet-400",
    position: "top-8 -left-8",
  },
  {
    icon: Globe,
    title: "مواقع إلكترونية",
    color: "text-cyan-400",
    position: "bottom-12 -right-10",
  },
  {
    icon: Megaphone,
    title: "تسويق رقمي",
    color: "text-pink-400",
    position: "top-1/2 -right-16",
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute hidden lg:flex ${card.position}
              items-center gap-3
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5 py-4
              shadow-2xl`}
          >
            <Icon className={card.color} size={24} />

            <span className="text-sm font-medium text-white">
              {card.title}
            </span>
          </motion.div>
        );
      })}
    </>
  );
}