import { Hero3 } from "@/components/landing3/Hero3";
import { Highlights3 } from "@/components/landing3/Highlights3";
import { LocationSection3 } from "@/components/landing3/LocationSection3";
import { OverviewSection3 } from "@/components/landing3/OverviewSection3";
import { PricingSection3 } from "@/components/landing3/PricingSection3";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCta } from "@/components/layout/MobileCta";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VideoSection } from "@/components/sections/VideoSection";
import { EnquiryPopup } from "@/components/ui/EnquiryPopup";
import { SimilarProjects } from "@/components/ui/SimilarProjects";

// Landing 3 = new hero + highlights, rest of the sections are shared with landing 1.
export default function LandingPage3() {
  return (
    <>
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero3 />
        <Highlights3 />
        <OverviewSection3 />
        <GallerySection />
        <VideoSection />
        <PricingSection3 />
        <AmenitiesSection />
        <LocationSection3 />
        <ContactSection />
        <FaqSection />
        <SimilarProjects />
      </main>
      <Footer />
      <MobileCta />
      <EnquiryPopup />
    </>
  );
}
