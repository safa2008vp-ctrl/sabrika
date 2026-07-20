"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/portfolio/deyana.png",
    title: "ضيانا للطاقة الشمسية",
  },
  {
    image: "/portfolio/alharam.png",
    title: "الهرم للخدمات الجامعية",
  },
  {
    image: "/portfolio/tunisa.png",
    title: "التونسا",
  },
  {
    image: "/portfolio/watania.png",
    title: "الوطنية",
  },
  {
    image: "/portfolio/mahmood.png",
    title: "محمود",
  },
  {
    image: "/portfolio/confy.png",
    title: "CONFY",
  },
];

export default function HeroCards() {
  return (
    <div className="relative w-full h-[520px] flex justify-center items-center">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 50,
            rotate: (index - 2) * 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: (index - 2) * 5,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.15,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 20,
          }}
          className="absolute w-56 h-80 rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl bg-zinc-900"
          style={{
            left: `${index * 60}px`,
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="text-white text-lg font-bold">
              {project.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}