"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Music, Headphones, CheckCircle, AtSign } from "lucide-react";

const socialLinks = [
  { name: "SoundCloud", icon: Music, url: "https://soundcloud.com/axtorr", color: "#ff5500" },
  { name: "Instagram", icon: AtSign, url: "https://instagram.com/axtorr", color: "#E4405F" },
  { name: "Mixcloud", icon: Headphones, url: "https://mixcloud.com/axtorr", color: "#52aad8" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-[#0a0515] to-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#ff2d95]/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#ff2d95] text-sm uppercase tracking-[0.3em] mb-4">
            Connect
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get in <span className="text-[#00f0ff]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff2d95] to-[#00f0ff] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring the energy? Let's talk bookings, collaborations, or just share the love for music.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Create Magic</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you're looking to book AXTORR for your event, collaborate on a track, 
                or just want to connect over our shared passion for electronic music — 
                I'm all ears.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff2d95]/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-[#ff2d95]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Email</div>
                  <a href="mailto:booking@axtorr.com" className="text-white hover:text-[#ff2d95] transition-colors">
                    booking@axtorr.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="text-[#00f0ff]" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Based In</div>
                  <span className="text-white">San José, Costa Rica</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Follow the Beat</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group relative w-14 h-14 rounded-xl glass flex items-center justify-center hover:scale-110 transition-transform"
                    style={{ borderColor: social.color + "40" }}
                    whileHover={{ y: -5 }}
                  >
                    <social.icon
                      size={24}
                      className="text-gray-400 group-hover:text-white transition-colors"
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff2d95] focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff2d95] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Subject</label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#ff2d95] focus:outline-none transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-black">Select a subject</option>
                  <option value="booking" className="bg-black">Event Booking</option>
                  <option value="collab" className="bg-black">Collaboration</option>
                  <option value="press" className="bg-black">Press Inquiry</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#ff2d95] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your event or idea..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#ff2d95] to-[#8b5cf6] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#ff2d95]/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
