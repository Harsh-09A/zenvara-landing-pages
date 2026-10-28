export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface GalleryImage extends ImageAsset {
  category: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Configuration {
  name: string;
  /** Carpet area in sq. ft. Leave undefined until confirmed. */
  carpetArea?: string;
  /** Display price, e.g. "₹ 4.5 Cr onwards". Leave undefined to show "Enquire for Price". */
  price?: string;
  floorPlan?: ImageAsset;
}

export interface Amenity {
  name: string;
  /** Key into the icon map in components/ui/AmenityIcon.tsx */
  icon: string;
}

export interface FeaturedAmenity {
  name: string;
  description: string;
  image: ImageAsset;
}

export interface NearbyPlace {
  name: string;
  category: string;
  /** e.g. "2.5 km". Leave undefined until verified. */
  distance?: string;
}

export interface ProjectVideo {
  title: string;
  /** Locally hosted file or YouTube video ID. */
  type: "file" | "youtube";
  src: string;
  poster: ImageAsset;
  uploadDate?: string;
}

export interface DownloadItem {
  label: string;
  /** Public URL such as /documents/brochure.pdf. Leave undefined until the file exists. */
  url?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ProjectData {
  slug: string;
  name: string;
  tagline: string;
  propertyType: string;
  status?: string;
  possession?: string;
  developer: { name: string; description: string; website?: string };
  location: {
    locality: string;
    city: string;
    state: string;
    address: string;
    mapEmbedUrl: string;
  };
  rera?: { number: string; url?: string };
  heroImage: ImageAsset;
  description: string[];
  highlights: Highlight[];
  specifications: Specification[];
  overviewImage: ImageAsset;
  gallery: GalleryImage[];
  videos: ProjectVideo[];
  configurations: Configuration[];
  pricingDisclaimer: string;
  featuredAmenities: FeaturedAmenity[];
  amenities: Amenity[];
  nearby: NearbyPlace[];
  downloads: { brochure: DownloadItem; priceSheet?: DownloadItem };
  contact: { phone?: string; email?: string; whatsapp?: string };
  faqs: Faq[];
  seo: { title: string; description: string; socialImage: string };
  legalDisclaimer: string;
}
