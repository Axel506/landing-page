"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Clock, Ticket } from "lucide-react";

const upcomingEvents = [
  {
    title: "Techno Inferno",
    venue: "Club Vertigo",
    location: "San José, Costa Rica",
    date: "Apr 12, 2026",
    time: "10:00 PM",
    image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80",
    ticketUrl: "#",
    featured: true,
  },
  {
    title: "Afro Beach Festival",
    venue: "Playa Tamarindo",
    location: "Guanacaste, Costa Rica",
    date: "Apr 25, 2026",
    time: "4:00 PM",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    ticketUrl: "#",
    featured: false,
  },
  {
    title: "Underground Sessions",
    venue: "Club El Sótano",
    location: "San José, Costa Rica",
    date: "May 8, 2026",
    time: "11:00 PM",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
    ticketUrl: "#",
    featured: false,
  },
];

const pastEvents = [
  { name: "Electric Daisy Carnival", location: "Las Vegas, USA", year: "2025" },
  { name: "Tomorrowland", location: "Boom, Belgium", year: "2025" },
  { name: "BPM Festival", location: "Tamarindo, CR", year: "2024" },
  { name: "Afterlife", location: "Mexico City", year: "2024" },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-[#100a15] to-black overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#8b5cf6] text-sm uppercase tracking-[0.3em] mb-4">
            Live
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Upcoming <span className="text-[#ff2d95]">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#ff2d95] mx-auto" />
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative group overflow-hidden rounded-3xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff2d95] via-[#8b5cf6] to-[#00f0ff] rounded-3xl opacity-75 blur group-hover:opacity-100 transition-opacity" />
            
            <div className="relative bg-black rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={upcomingEvents[0].image}
                    alt={upcomingEvents[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black lg:bg-gradient-to-r" />
                </div>

                <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff2d95]/20 rounded-full text-[#ff2d95] text-sm font-medium w-fit mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#ff2d95] animate-pulse" />
                    Featured Event
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    {upcomingEvents[0].title}
                  </h3>
                  
                  <p className="text-xl text-gray-400 mb-6">
                    {upcomingEvents[0].venue}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin size={20} className="text-[#00f0ff]" />
                      {upcomingEvents[0].location}
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar size={20} className="text-[#ff2d95]" />
                      {upcomingEvents[0].date}
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock size={20} className="text-[#8b5cf6]" />
                      {upcomingEvents[0].time}
                    </div>
                  </div>

                  <motion.a
                    href={upcomingEvents[0].ticketUrl}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ff2d95] to-[#8b5cf6] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#ff2d95]/30 transition-all w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Ticket size={20} />
                    Get Tickets
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {upcomingEvents.slice(1).map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-[#ff2d95]/50 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff2d95] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">{event.venue}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-[#00f0ff]" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#ff2d95]" />
                    {event.date}
                  </span>
                </div>

                <motion.a
                  href={event.ticketUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#ff2d95] text-[#ff2d95] rounded-full hover:bg-[#ff2d95] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Ticket size={16} />
                  Get Tickets
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h4 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
            Previously Performed At
          </h4>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-gray-400 hover:text-white transition-colors cursor-default"
              >
                <span className="font-semibold">{event.name}</span>
                <span className="text-gray-600"> · {event.location} · {event.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
