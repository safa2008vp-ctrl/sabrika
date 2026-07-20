"use client";

import { motion } from "framer-motion";

interface Props {
  categories: string[];
  active: string;
  setActive: (value: string) => void;
}

export default function PortfolioFilter({
  categories,
  active,
  setActive,
}: Props) {
  return (
    <div className="mb-16 flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
          onClick={() => setActive(category)}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
            active === category
              ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
              : "border border-white/10 bg-white/5 text-gray-300 hover:border-violet-500 hover:text-white"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}