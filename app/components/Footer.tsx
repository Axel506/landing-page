"use client";

import { motion } from "framer-motion";
import { Heart, Music } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Music", href: "#music" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-3xl font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white">AX</span>
            <span className="text-[#ff2d95]">TORR</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-[#ff2d95] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social proof */}
          <div className="flex items-center gap-2 text-gray-500">
            <Music size={16} className="text-[#ff2d95]" />
            <span className="text-sm">Making beats since 2021</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2026 AXTORR. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-[#ff2d95]" /> in Costa Rica
          </p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff2d95] via-[#8b5cf6] to-[#00f0ff]" />
    </footer>
  );
}
