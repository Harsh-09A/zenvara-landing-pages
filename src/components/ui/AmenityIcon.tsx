import type { IconType } from "react-icons";
import { FiShield, FiZap, FiStar } from "react-icons/fi";
import { MdOutlineFitnessCenter, MdOutlineLocalParking, MdOutlinePool, MdOutlineElevator, MdOutlineChildCare, MdOutlineDirectionsRun, MdOutlineGroups, MdOutlineSportsTennis, MdOutlineYard } from "react-icons/md";

const icons: Record<string, IconType> = {
  gym: MdOutlineFitnessCenter,
  parking: MdOutlineLocalParking,
  pool: MdOutlinePool,
  lift: MdOutlineElevator,
  play: MdOutlineChildCare,
  jogging: MdOutlineDirectionsRun,
  community: MdOutlineGroups,
  sports: MdOutlineSportsTennis,
  garden: MdOutlineYard,
  security: FiShield,
  power: FiZap,
};

export function AmenityIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? FiStar;
  return <Icon className={className} aria-hidden />;
}
