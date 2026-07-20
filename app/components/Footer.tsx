"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company */}
          <div>
            <h2 className="mb-4 text-3xl font-black text-white">
              SABRIKA
            </h2>

            <p className="leading-8 text-gray-400">
              وكالة إبداعية متخصصة في التصميم الجرافيكي، الهوية البصرية،
              إدارة وسائل التواصل الاجتماعي، تطوير المواقع الإلكترونية،
              صناعة المحتوى والإعلانات الرقمية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              روابط سريعة
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="transition hover:text-purple-400">
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="transition hover:text-purple-400"
                >
                  خدماتنا
                </Link>
              </li>

              <li>
                <Link
                  href="#portfolio"
                  className="transition hover:text-purple-400"
                >
                  أعمالنا
                </Link>
              </li>

              <li>
                <Link
                  href="#pricing"
                  className="transition hover:text-purple-400"
                >
                  الباقات
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="transition hover:text-purple-400"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              معلومات التواصل
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-purple-500" />

                <a
                  href="mailto:safa2008vp@gmail.com"
                  className="text-gray-400 transition hover:text-purple-400"
                >
                  safa2008vp@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-purple-500" />

                <a
                  href="tel:+9647763753457"
                  className="text-gray-400 transition hover:text-purple-400"
                >
                  +964 776 375 3457
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-purple-500" />

                <span className="text-gray-400">
                  أربيل - العراق
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://facebook.com/Sabrika2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-purple-600"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://www.instagram.com/_rc70"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-pink-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/9647763753457"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-green-600"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © {year} SABRIKA. جميع الحقوق محفوظة.
          </p>

          <p className="text-sm text-gray-500">
            Designed & Developed by{" "}
            <span className="font-semibold text-purple-400">
              SABRIKA
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}