"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
    alt: "DJ performing at festival",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80",
    alt: "Club atmosphere",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571266028243-3716f02d4c11?w=600&q=80",
    alt: "DJ booth",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    alt: "Concert crowd",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80",
    alt: "Festival lights",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    alt: "Mixing desk",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80",
    alt: "Neon lights",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    alt: "Stage setup",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0a0a15] to-black overflow-hidden"
      >
        <div ref={ref} className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#00f0ff] text-sm uppercase tracking-[0.3em] mb-4">
              Visuals
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-[#ff2d95]">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff2d95] mx-auto" />
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${image.span} group relative overflow-hidden rounded-xl cursor-pointer`}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ff2d95] rounded-xl transition-colors duration-300 z-20" />
                
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#ff2d95] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </>
  );
}
