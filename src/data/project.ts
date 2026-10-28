import type { ProjectData } from "@/types/project";

/**
 * SAMPLE DATA - replace before launch.
 * Only the project name, developer and locality come from the client.
 * Everything marked TODO is a placeholder, not a verified fact:
 * prices, carpet areas, RERA number, possession date, distances, amenities, FAQs.
 * Fields left undefined (price, carpetArea, distance, rera, downloads.url) hide
 * or soften the matching UI instead of showing made-up values.
 */

// Stock photos from Unsplash. Swap for real renders in /public/images.
const stock = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const project: ProjectData = {
  slug: "lodha-aureus",
  name: "Lodha Aureus",
  tagline: "Luxury residences in Sewri, South Mumbai",
  propertyType: "Luxury apartments",
  // TODO: confirm status and possession from the developer
  status: "Under-Contruction",
  possession: "March 27",
  developer: {
    name: "Lodha",
    // TODO: replace with verified developer profile
    description:
      "Lodha is a Mumbai-based real estate developer. Add verified background, completed projects and credibility details here. Lodha is a Mumbai-based real estate developer. Add verified background, completed projects and credibility details here. Lodha is a Mumbai-based real estate developer. Add verified background, completed projects and credibility details here.",
  },
  location: {
    locality: "Sewri",
    city: "Mumbai",
    state: "Maharashtra",
    // TODO: replace with the verified site address
    address: "Sewri, South Mumbai, Maharashtra",
    // TODO: replace with the exact Google Maps embed URL for the site
    mapEmbedUrl:
      "https://www.google.com/maps?q=Lodha+Aureus+Sewri+Mumbai&output=embed",
  },
  // TODO: rera: { number: "P51900000000", url: "https://maharera.maharashtra.gov.in" },
  rera: { number: "P51900000000", url: "https://maharera.maharashtra.gov.in" },
  heroImage: {
    // src: stock("photo-1486406146926-c627a92ad1ab", 2200),
    src:"/images/banner/desktop_banner1.jpg",
    alt: "Modern luxury residential tower at dusk",
    width: 2200,
    height: 1467,
  },
  description: [
    "Lodha Aureus brings premium apartment living to Sewri, on Mumbai's eastern waterfront, within reach of South Mumbai's business districts.",
    "Located on Zakaria Bunder Road in Sewri, Lodha Aureus is an ultra-luxury residential development overlooking Mumbai's eastern waterfront. Spread across five acres, the project comprises two Art Deco-inspired high-rise towers rising to G+66 floors.",
  ],
  highlights: [
    {
      title: "Sewri location",
      description:
        "A South Mumbai address close to the island city's business districts.",
    },
    {
      title: "Lodha development",
      description: "Delivered by Lodha, one of Mumbai's best-known developers.",
    },
    {
      title: "Thoughtful planning",
      description: "Add confirmed planning and design features here.",
    },
    {
      title: "Everyday convenience",
      description: "Add confirmed on-site and neighbourhood conveniences here.",
    },
  ],
  // TODO: replace with confirmed numbers
  specifications: [
    { label: "Location", value: "Sewri, Mumbai" },
    { label: "Developer", value: "Lodha" },
    { label: "Property type", value: "Luxury apartments" },
  ],
  overviewImage: {
    // src: stock("photo-1600607687939-ce8a6c25118c", 1400),
    src: "/images/overview/overview.jpg",
    alt: "Elegant living room with large windows",
    width: 1400,
    height: 933,
  },
  gallery: [
    {
      category: "Exterior",
      // src: stock("photo-1545324418-cc1a3fa10c00"),
      src:"/images/gallery/gallery-1.jpg",
      alt: "Tower facade with glass balconies",
      width: 1500,
      height: 1000,
    },
    {
      category: "Exterior",
      // src: stock("photo-1512917774080-9991f1c4c750"),
      src:"/images/gallery/gallery-2.jpg",
      alt: "Contemporary residence exterior",
      width: 1500,
      height: 1000,
    },
    {
      category: "Interiors",
      // src: stock("photo-1560448204-e02f11c3d0e2"),
      src:"/images/gallery/gallery-3.jpg",
      alt: "Spacious living and dining area",
      width: 1500,
      height: 1000,
    },
    {
      category: "Exterior",
      // src: stock("photo-1600585154340-be6161a56a0c"),
      src:"/images/gallery/gallery-4.jpg",
      alt: "Modern home with landscaped frontage",
      width: 1500,
      height: 1000,
    },
    {
      category: "Interiors",
      // src: stock("photo-1600566753190-17f0baa2a6c3"),
      src:"/images/gallery/gallery-5.jpg",
      alt: "Bright master bedroom",
      width: 1500,
      height: 1000,
    },
    {
      category: "Lifestyle",
      // src: stock("photo-1613490493576-7fde63acd811"),
      src:"/images/gallery/gallery-6.jpg",
      alt: "Residence with pool and terrace",
      width: 1500,
      height: 1000,
    },
  ],

  videos: [
    {
      type: "youtube",
      src: "ZlKi3z64C2M",
      title: "Lodha Aureus - Project Overview",
      poster: {
        src: "/images/banner/desktop_banner1.jpg",
        alt: "Lodha Aureus luxury residential tower",
        width: 1200,
        height: 675,
      },
      uploadDate: "2026-10-21",
    },
    {
      type: "youtube",
      src: "i3y36DROdMM",
      title: "Lodha Aureus - Project Walkthrough",
      poster: {
        src: "/images/gallery/gallery-2.jpg",
        alt: "Lodha Aureus project walkthrough preview",
        width: 1200,
        height: 675,
      },
    },
  ],

  // TODO: confirm configurations, carpet areas and prices. Undefined shows "Enquire for Price".
  configurations: [{ name: "2 BHK" }, { name: "3 BHK" }, { name: "4 BHK" }],
  pricingDisclaimer:
    "Prices and areas are indicative and subject to change without notice. Please contact the sales team for current details.",
  // TODO: keep only amenities confirmed by the developer
  featuredAmenities: [
    {
      name: "Swimming pool",
      description: "Lorem ipsum dolor sit amet.",
      image: {
        src: stock("photo-1530549387789-4c1017266635", 1200),
        alt: "Residential swimming pool",
        width: 1200,
        height: 800,
      },
    },
    {
      name: "Landscaped garden",
      description: "Lorem ipsum dolor sit amet.",
      image: {
        src: stock("photo-1558904541-efa843a96f01", 1200),
        alt: "Landscaped garden",
        width: 1200,
        height: 800,
      },
    },
  ],
  amenities: [
    { name: "Gymnasium", icon: "gym" },
    { name: "Covered parking", icon: "parking" },
    { name: "Power backup", icon: "power" },
    { name: "24x7 security", icon: "security" },
  ],
  // TODO: add verified distances. Names only until then.
  nearby: [
    { name: "Sewri railway station", category: "Rail" },
    { name: "Atal Setu (MTHL)", category: "Highway" },
    {
      name: "Chhatrapati Shivaji Maharaj International Airport",
      category: "Airport",
    },
  ],
  // TODO: put real files in /public/documents and set url, e.g. "/documents/lodha-aureus-brochure.pdf"
  downloads: { brochure: { label: "Download Brochure", url: "#popup" } },
  contact: { phone: "+9100000 00000", email: "info@zenvara.in", whatsapp: "+9100000 00000" },
  // TODO: review every answer with the developer
  faqs: [
    {
      question: "Where is Lodha Aureus located?",
      answer:
        "Lodha Aureus is in Sewri, South Mumbai, Maharashtra. Confirm the full address with the sales team.",
    },
    {
      question: "What configurations are available?",
      answer:
        "Sample answer. Replace with the confirmed configurations and carpet areas.",
    },
    {
      question: "What is the price of an apartment?",
      answer:
        "Pricing is shared by the sales team and changes with floor, view and availability. Use the enquiry form to request current prices.",
    },
    {
      question: "When is possession?",
      answer:
        "Sample answer. Replace with the possession date from the RERA registration.",
    },
    {
      question: "How can I book a site visit?",
      answer:
        "Submit the enquiry form and the sales team will contact you to arrange a visit.",
    },
  ],
  seo: {
    title: "Lodha Aureus Sewri | Luxury Apartments in South Mumbai",
    description:
      "Explore Lodha Aureus, luxury apartments in Sewri, South Mumbai. View configurations, amenities, location and enquire for current prices.",
    socialImage: stock("photo-1486406146926-c627a92ad1ab", 1200),
  },
  legalDisclaimer:
    "This website is for information only and does not constitute an offer. Images are artistic impressions. Details are subject to change and approval by the relevant authorities.",
};
