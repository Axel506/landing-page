"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Disc3, Music, Sparkles, Globe } from "lucide-react";

const stats = [
  { number: "5+", label: "Years Experience", icon: Disc3 },
  { number: "200+", label: "Performances", icon: Music },
  { number: "50K+", label: "Monthly Listeners", icon: Sparkles },
  { number: "15+", label: "Countries Reached", icon: Globe },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0a0a15] to-black overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1571266028243-3716f02d4c11?w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#ff2d95] text-sm uppercase tracking-[0.3em] mb-4">
            The Artist
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="text-[#00f0ff]">AXTORR</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff2d95] to-[#00f0ff] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff2d95] via-[#8b5cf6] to-[#00f0ff] rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571266028243-3716f02d4c11?w=800&q=80"
                  alt="AXTORR performing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 glass rounded-xl p-4 backdrop-blur-xl"
              >
                <div className="text-4xl font-bold text-[#ff2d95]">5+</div>
                <div className="text-sm text-gray-400">Years of Beats</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Born in the heart of <span className="text-[#ff2d95] font-semibold">Costa Rica</span>, 
              AXTORR has been crafting sonic journeys that transcend borders and unite dance floors 
              across the globe.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Specializing in the infectious rhythms of <span className="text-[#00f0ff]">Afro House</span>, 
              the driving force of <span className="text-[#8b5cf6]">Tech House</span>, and the soulful 
              depths of Deep House, every set is a carefully curated experience designed to move both 
              body and spirit.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From intimate underground venues to massive festival stages, the mission remains the same: 
              create moments of pure musical connection that people carry with them long after the 
              last beat drops.
            </p>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Afro House", "Tech House", "Deep House", "Melodic Techno", "Progressive"].map(
                (genre, index) => (
                  <motion.span
                    key={genre}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 text-sm border border-white/10 rounded-full text-gray-300 hover:border-[#ff2d95] hover:text-[#ff2d95] transition-colors cursor-default"
                  >
                    {genre}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#ff2d95]/20 to-[#00f0ff]/20 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-[#ff2d95] group-hover:text-[#00f0ff] transition-colors" size={28} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
