"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, ExternalLink, Clock, Calendar } from "lucide-react";

const mixes = [
  {
    title: "Sunset Ritual Vol. 3",
    genre: "Afro House",
    duration: "1:24:30",
    date: "Mar 2026",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    soundcloudUrl: "https://soundcloud.com/axtorr",
    color: "#ff2d95",
  },
  {
    title: "Deep State Sessions",
    genre: "Tech House",
    duration: "2:01:15",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    soundcloudUrl: "https://soundcloud.com/axtorr",
    color: "#00f0ff",
  },
  {
    title: "Midnight Circuit",
    genre: "Melodic Techno",
    duration: "1:45:00",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80",
    soundcloudUrl: "https://soundcloud.com/axtorr",
    color: "#8b5cf6",
  },
  {
    title: "Tribal Frequencies",
    genre: "Afro Tech",
    duration: "1:30:45",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    soundcloudUrl: "https://soundcloud.com/axtorr",
    color: "#ff2d95",
  },
];

const tracks = [
  { title: "Costa Rica Nights", plays: "12.4K", genre: "Afro House" },
  { title: "Pacific Sunrise", plays: "8.9K", genre: "Deep House" },
  { title: "Volcanic Energy", plays: "15.2K", genre: "Tech House" },
  { title: "Jungle Pulse", plays: "6.7K", genre: "Melodic Techno" },
];

export default function MusicSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredMix, setHoveredMix] = useState<number | null>(null);

  return (
    <section
      id="music"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0a0515] to-black overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#00f0ff] text-sm uppercase tracking-[0.3em] mb-4">
            Listen
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Latest <span className="text-[#ff2d95]">Mixes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff2d95] mx-auto" />
        </motion.div>

        {/* Featured Mixes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mixes.map((mix, index) => (
            <motion.div
              key={mix.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
              onMouseEnter={() => setHoveredMix(index)}
              onMouseLeave={() => setHoveredMix(null)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: mix.color }}
                />
                
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={mix.image}
                    alt={mix.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Play button overlay */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={hoveredMix === index ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <a
                      href={mix.soundcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Play size={32} className="text-white ml-1" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ backgroundColor: mix.color + "30", color: mix.color }}
                    >
                      {mix.genre}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff2d95] transition-colors">
                    {mix.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {mix.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {mix.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popular Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#ff2d95] animate-pulse" />
            Popular Tracks
          </h3>
          
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 font-mono w-6">{String(index + 1).padStart(2, "0")}</span>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff2d95] to-[#8b5cf6] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={16} className="text-white ml-0.5" />
                  </div>
                  <div>
                    <div className="text-white font-medium group-hover:text-[#ff2d95] transition-colors">
                      {track.title}
                    </div>
                    <div className="text-sm text-gray-500">{track.genre}</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{track.plays} plays</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://soundcloud.com/axtorr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#ff2d95] hover:text-white transition-colors"
            >
              View all on SoundCloud
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
