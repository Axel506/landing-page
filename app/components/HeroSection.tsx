"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play, Headphones } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-animate"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff2d95]/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00f0ff]/20 rounded-full blur-[100px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#8b5cf6]/20 rounded-full blur-[80px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#00f0ff] border border-[#00f0ff]/30 rounded-full backdrop-blur-sm">
            DJ • Producer • Costa Rica
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter"
        >
          <span className="block text-white">AX</span>
          <span className="block glow-text text-[#ff2d95]">TORR</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Pushing boundaries in <span className="text-[#ff2d95]">Afro House</span>,{" "}
          <span className="text-[#00f0ff]">Tech House</span>, and{" "}
          <span className="text-[#8b5cf6]">Deep Grooves</span> for over 5 years
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://soundcloud.com/axtorr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#ff2d95] text-white font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff2d95] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity" />
            <Play className="relative z-10" size={20} />
            <span className="relative z-10">Listen Now</span>
          </motion.a>

          <motion.a
            href="#music"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full backdrop-blur-sm hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Headphones size={20} />
            <span>Explore Mixes</span>
          </motion.a>
        </motion.div>

        {/* Audio visualizer animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-end justify-center gap-1 mt-16 h-12"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-[#ff2d95] to-[#00f0ff] rounded-full"
              animate={{
                height: [10, Math.random() * 40 + 10, 10],
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#ff2d95] transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
