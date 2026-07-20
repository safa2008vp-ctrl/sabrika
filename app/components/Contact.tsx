"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.12),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-500 font-bold">
            تواصل معنا
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            ابدأ مشروعك الآن
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            يسعد فريق SABRIKA بالإجابة عن جميع استفساراتك ومساعدتك في تنفيذ مشروعك بأعلى جودة.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <div className="space-y-5">

              <input
                type="text"
                placeholder="الاسم الكامل"
                className="w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 text-white outline-none focus:border-purple-500 transition"
              />

              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 text-white outline-none focus:border-purple-500 transition"
              />

              <input
                type="text"
                placeholder="رقم الهاتف"
                className="w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 text-white outline-none focus:border-purple-500 transition"
              />

              <textarea
                rows={6}
                placeholder="اكتب رسالتك..."
                className="w-full rounded-2xl bg-black/40 border border-white/10 px-5 py-4 text-white outline-none resize-none focus:border-purple-500 transition"
              />

<a
  href="https://wa.me/9647763753457"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full rounded-2xl bg-purple-600 hover:bg-purple-700 py-4 font-bold flex items-center justify-center gap-3 transition-all"
>
                <Send size={20} />
                إرسال الرسالة
                </a>

            </div>

          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >

            <h3 className="text-3xl font-bold text-white mb-10">
              معلومات التواصل
            </h3>

            <div className="space-y-8">

            <div className="flex items-center gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/5">                <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-gray-400">العنوان</p>
                  <p className="text-white">
                    العراق - أربيل
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/5">                <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-gray-400">الهاتف</p>
                  <a
  href="tel:+9647763753457"
  className="text-white hover:text-purple-400 transition"
>
  +964 776 375 3457
</a>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/5">                <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-gray-400">البريد الإلكتروني</p>
                  <a
  href="mailto:safa2008vp@gmail.com"
  className="text-white hover:text-purple-400 transition"
>
  safa2008vp@gmail.com
</a>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/5">                <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center">
                  <Globe size={24} />
                </div>

                <div>
                  <p className="text-gray-400">الموقع الإلكتروني</p>
                  <a
  href="https://www.sabrika.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-purple-400 transition"
>
  www.sabrika.com
</a>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}