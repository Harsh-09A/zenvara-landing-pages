import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCta } from "@/components/layout/MobileCta";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { VideoSection } from "@/components/sections/VideoSection";

export default function LandingPage1() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <OverviewSection />
        <GallerySection />
        <VideoSection />
        <PricingSection />
        <AmenitiesSection />
        <LocationSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
