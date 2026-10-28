import { project } from "./project";

// TODO: confirm every number below with the developer before going live.
export const projectArea = "5 acres";
export const possessionYear = "2032";

export const stats = [
  { value: "2", label: "Towers" },
  { value: "66", label: "Floors (G+66)" },
  { value: "354", label: "Residences" },
  { value: "25", label: "+ Amenities" },
  { value: "5", label: "Acres land parcel" },
  { value: "2032", label: "Possession year" },
];

export const trustBadges = [
  "RERA registered",
  "Bank approved project",
  "1 km from Sewri station",
  "Prime South Mumbai address",
];

// TODO: replace with real similar projects (name, location, type, image).
// Images are borrowed from this project's gallery as placeholders.
const sample = (i: number) => project.gallery[i % project.gallery.length];

export const similarProjects = [
  { name: "Project Name 1", location: "South Mumbai", type: "2, 3 & 4 BHK Residences", image: sample(0) },
  { name: "Project Name 2", location: "Central Mumbai", type: "3 & 4 BHK Residences", image: sample(1) },
  { name: "Project Name 3", location: "Mumbai Metropolitan Region", type: "2 & 3 BHK Residences", image: sample(2) },
];
