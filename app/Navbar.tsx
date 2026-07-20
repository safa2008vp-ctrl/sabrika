"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "الرئيسية", href: "#" },
    { name: "الخدمات", href: "#services" },
    { name: "الأعمال", href: "#portfolio" },
    { name: "الأسعار", href: "#pricing" },
    { name: "تواصل", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled
            ? "border border-white/10 bg-black/75 shadow-2xl shadow-black/40 backdrop-blur-2xl"
            : "border border-white/5 bg-white/5 backdrop-blur-xl"
        }`}
      >
        <div
          className={`flex items-center justify-between px-8 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo2.png"
              alt="SABRIKA"
              width={60}
              height={60}
              priority
              className="transition-transform duration-300 hover:rotate-6 hover:scale-110"
            />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-2xl font-black tracking-wide text-transparent">
              SABRIKA
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-gray-300 transition-all duration-300 hover:text-white"
              >
                <span>{link.name}</span>

                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="hidden items-center rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-xl shadow-violet-600/40 transition-all duration-300 hover:shadow-cyan-500/30 lg:flex"
          >
            ابدأ مشروعك
          </motion.a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.25 }}
              className="rounded-b-2xl border-t border-white/10 bg-black/90 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-6 p-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-white transition hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                ))}

                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 py-3 text-center font-semibold text-white"
                >
                  ابدأ مشروعك
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}