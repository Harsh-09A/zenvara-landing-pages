import { Cormorant_Garamond } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function Landing2Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} bg-ivory`}>{children}</div>;
}
