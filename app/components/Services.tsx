"use client";

import { motion } from "framer-motion";
import {
  Palette,
  MonitorSmartphone,
  Globe,
  Clapperboard,
  Camera,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "الهوية البصرية",
    description:
      "تصميم الشعارات والهوية الكاملة ودليل استخدام العلامة التجارية.",
  },
  {
    icon: MonitorSmartphone,
    title: "إدارة السوشيال ميديا",
    description:
      "إدارة الحسابات وصناعة المحتوى والحملات الإعلانية باحترافية.",
  },
  {
    icon: Globe,
    title: "تصميم المواقع",
    description:
      "مواقع حديثة وسريعة ومتوافقة مع جميع الأجهزة.",
  },
  {
    icon: Clapperboard,
    title: "الإنتاج الإعلاني",
    description:
      "تصوير وإنتاج الفيديوهات الإعلانية والموشن جرافيك.",
  },
  {
    icon: Camera,
    title: "التصوير الاحترافي",
    description:
      "تصوير المنتجات والشركات والمطاعم بجودة عالية.",
  },
  {
    icon: Megaphone,
    title: "التسويق الرقمي",
    description:
      "إعلانات Meta وGoogle للوصول إلى العملاء المستهدفين.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#070707] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300">
            خدماتنا
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            حلول إبداعية لتنمية أعمالك
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            نقدم خدمات متكاملة في التصميم والإعلان والتسويق الرقمي
            وصناعة المحتوى لبناء علامة تجارية قوية تحقق نتائج حقيقية.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500"
              >
                {/* Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl transition duration-500 group-hover:scale-150" />

                {/* Header */}
                <div className="relative flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/30">
                    <Icon size={30} className="text-white" />
                  </div>

                  <motion.div
                    whileHover={{ x: 4, y: -4 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                  >
                    <ArrowUpRight className="text-violet-400" size={18} />
                  </motion.div>

                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-gray-400">
                  {service.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}