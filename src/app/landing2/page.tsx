import { Header2 } from "@/components/landing2/Header2";
import { Header } from "@/components/layout/Header";

import { Gallery2 } from "@/components/landing2/Gallery2";
import {
  Hero2,
  Overview2,
  Videos2,
  Amenities2,
  Location2,
  Contact2,
  Faq2,
  Footer2,
  MobileCta2,
} from "@/components/landing2/Sections";
import { Pricing2 } from "@/components/landing2/Pricing2";
import { EnquiryPopup } from "@/components/ui/EnquiryPopup";
import { SimilarProjects } from "@/components/ui/SimilarProjects";

export default function LandingPage2() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero2 />
        <Overview2 />
        <Gallery2 />
        <Videos2 />
        <Pricing2 />
        <Amenities2 />
        <Location2 />
        <SimilarProjects />
        <Contact2 />
        <Faq2 />
      </main>
      <Footer2 />
      <MobileCta2 />
      <EnquiryPopup />
    </>
  );
}
