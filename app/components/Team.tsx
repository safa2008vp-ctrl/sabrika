"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "ضيانا للطاقة الشمسية",
    image: "/portfolio/deyana.png",
  },
  {
    name: "الهرم للخدمات الجامعية",
    image: "/portfolio/alharam.png",
  },
  {
    name: "التونسا",
    image: "/portfolio/tunisa.png",
  },
  {
    name: "الوطنية",
    image: "/portfolio/watania.png",
  },
  {
    name: "Mahmood Rice",
    image: "/portfolio/mahmood.png",
  },
  {
    name: "Confy",
    image: "/portfolio/confy.png",
  },
];

export default function Team() {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-purple-500 font-bold">
            عملاؤنا
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            نفخر بثقة عملائنا
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            هذه مجموعة من أبرز المشاريع التي نفذتها وكالة سابركا في مجالات
            التصميم والإعلانات والتسويق الرقمي.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition-all duration-300"
            >
              <Image
                src={client.image}
                alt={client.name}
                width={600}
                height={600}
                className="w-full aspect-square object-cover"
              />

              <div className="p-6">
                <h3 className="text-white text-xl font-bold text-center">
                  {client.name}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}