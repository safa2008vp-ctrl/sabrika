"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "$199",
    description: "مناسبة للأعمال الصغيرة والبدايات.",
    features: [
      "تصميم 10 منشورات",
      "إدارة صفحة لمدة شهر",
      "كتابة المحتوى",
      "دعم فني",
    ],
  },
  {
    title: "Business",
    price: "$399",
    popular: true,
    description: "الخيار الأكثر طلبًا للشركات.",
    features: [
      "تصميم 20 منشور",
      "10 فيديوهات Reels",
      "إدارة صفحة لمدة شهر",
      "حملات Meta Ads",
      "تقارير شهرية",
    ],
  },
  {
    title: "Premium",
    price: "$699",
    description: "حلول متكاملة للعلامات التجارية.",
    features: [
      "هوية بصرية كاملة",
      "موقع إلكتروني احترافي",
      "إدارة السوشيال ميديا",
      "تصوير احترافي",
      "إعلانات Meta & Google",
      "دعم مستمر",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#09090B] py-28 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.12),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-500 font-bold">
            الباقات
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            اختر الباقة المناسبة
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            حلول مرنة تناسب جميع الشركات من المشاريع الصغيرة إلى العلامات التجارية الكبيرة.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              whileHover={{
                y: -10,
              }}
              className={`relative rounded-3xl backdrop-blur-xl border p-10 transition-all duration-500 ${
                plan.popular
                  ? "bg-purple-600/10 border-purple-500 shadow-[0_0_45px_rgba(168,85,247,.35)] scale-105"
                  : "bg-white/5 border-white/10 hover:border-purple-500"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-purple-600 px-5 py-2 rounded-full text-sm font-semibold">
                    <Star size={16} />
                    الأكثر طلباً
                  </div>
                </div>
              )}

              <h3 className="text-3xl font-bold text-white mt-4">
                {plan.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {plan.description}
              </p>

              <div className="text-6xl font-black text-purple-500 my-10">
                {plan.price}
              </div>

              <div className="space-y-5">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={20}
                      className="text-purple-500"
                    />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <button className="mt-10 w-full rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all py-4 font-bold text-white">
                ابدأ الآن
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}