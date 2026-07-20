"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ضيانا للطاقة الشمسية",
    category: "Branding & Social Media",
    description:
      "تصميم هوية بصرية متكاملة، إدارة صفحات التواصل الاجتماعي، وتنفيذ حملات إعلانية احترافية.",
    image: "/portfolio/deyana.png",
  },
  {
    title: "الهرم للخدمات الجامعية",
    category: "Marketing",
    description:
      "إدارة الحملات التسويقية وتصميم المحتوى الإبداعي للقبولات الجامعية والخدمات التعليمية.",
    image: "/portfolio/alharam.png",
  },
  {
    title: "CONFY",
    category: "Product Design",
    description:
      "تصميم هوية ومنشورات تسويقية لعلامة تجارية متخصصة بالمنتجات الغذائية.",
    image: "/portfolio/confy.png",
  },
  {
    title: "التونسا",
    category: "Food Branding",
    description:
      "تصميم حملات إعلانية وهوية بصرية احترافية لمنتجات غذائية مميزة.",
    image: "/portfolio/tunisa.png",
  },
  {
    title: "Pinar",
    category: "Food Campaign",
    description:
      "تنفيذ حملة تسويقية متكاملة مع تصاميم إبداعية تعزز حضور العلامة التجارية.",
    image: "/portfolio/pinar.png",
  },
  {
    title: "الوطنية",
    category: "Advertising",
    description:
      "تصميم إعلانات احترافية وإدارة الهوية البصرية لزيادة انتشار العلامة التجارية.",
    image: "/portfolio/watania.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300">
            معرض أعمالنا
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            مشاريع نفتخر بتنفيذها
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            مجموعة مختارة من المشاريع التي نفذتها وكالة SABRIKA في مجالات
            الهوية البصرية، التسويق الرقمي، تصميم المنتجات وإدارة الحملات
            الإعلانية.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Link href="#" key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex h-[220px] flex-col justify-between p-7">
                  <div>
                    <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                      {project.category}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-medium text-violet-300">
                      عرض المشروع
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-transform duration-300 group-hover:translate-x-2">
                      <ArrowUpRight
                        size={20}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}