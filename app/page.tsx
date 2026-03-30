import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MusicSection from "./components/MusicSection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
