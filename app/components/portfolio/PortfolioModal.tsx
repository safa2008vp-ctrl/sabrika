"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Project } from "./portfolioData";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function PortfolioModal({
  project,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 40 }}
            transition={{ duration: 0.35 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 text-white transition hover:bg-red-500"
            >
              <X size={22} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-[320px] lg:h-[650px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10">
                <span className="inline-flex w-fit rounded-full bg-violet-600/20 px-4 py-2 text-sm font-medium text-violet-300">
                  {project.category}
                </span>

                <h2 className="mt-6 text-4xl font-black text-white">
                  {project.title}
                </h2>

                <p className="mt-4 text-lg text-violet-300">
                  {project.type}
                </p>

                <p className="mt-8 leading-8 text-gray-300">
                  {project.description}
                </p>

                <div
                  className={`mt-10 h-1 w-28 rounded-full bg-gradient-to-r ${project.color}`}
                />

                <motion.button
                  whileHover={{ x: 6 }}
                  className="mt-10 flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white"
                >
                  عرض المشروع
                  <ArrowUpRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}