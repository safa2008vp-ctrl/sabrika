"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PortfolioProject } from "./portfolioData";

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

export default function PortfolioCard({
  project,
  index,
}: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Image */}
      <div className="relative h-[360px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Glow */}
        <div className="absolute inset-0 bg-violet-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content inside image */}
        <div className="absolute inset-x-0 bottom-0 p-7">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="translate-y-6 transition-transform duration-500 group-hover:translate-y-0"
          >
            <span className="text-sm font-semibold text-violet-300">
              {project.category}
            </span>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {project.title}
            </h3>

            <div className="mt-5 flex items-center gap-3 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </div>

              <span className="font-medium">عرض المشروع</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}