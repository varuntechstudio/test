import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import MenuSection from "@/components/MenuSection";
import ChefsTableSection from "@/components/ChefsTableSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReservationSection from "@/components/ReservationSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HeritageSection />
      <MenuSection />
      <ChefsTableSection />
      <GallerySection />
      <TestimonialsSection />
      <ServicesSection />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default Index;
