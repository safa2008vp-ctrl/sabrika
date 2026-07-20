"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "./portfolioData";

interface Props {
  project: Project;
  onClick: () => void;
}

export default function PortfolioCard({
  project,
  onClick,
}: Props) {
  return (
    <motion.div
      layout
      whileHover={{
        y: -10,
        rotateX: 3,
        rotateY: -3,
      }}
      transition={{
        duration: 0.35,
      }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Image */}
      <div className="relative h-[340px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 transition duration-500 group-hover:opacity-25`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">

        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-violet-300 backdrop-blur-md">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-gray-300">
          {project.description}
        </p>

        <motion.div
          whileHover={{ x: 6 }}
          className="mt-6 flex items-center gap-2 font-medium text-violet-400"
        >
          <span>عرض المشروع</span>

          <ArrowUpRight size={20} />
        </motion.div>

      </div>

      {/* Glow */}
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl transition duration-500 group-hover:scale-150" />

      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-fuchsia-600/20 blur-3xl transition duration-500 group-hover:scale-150" />
    </motion.div>
  );
}