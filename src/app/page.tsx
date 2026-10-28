import { Button } from "@/components/ui/Button";
import { project } from "@/data/project";

const pages = [
  { href: "/landing1", label: "Landing Page 1" },
  { href: "/landing2", label: "Landing Page 2" },
  { href: "/landing3", label: "Landing Page 3" },
];
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-ivory px-5 text-center">
      <h1 className="font-serif text-4xl text-navy md:text-5xl">{project.name}</h1>
      <div className="flex w-full max-w-xs flex-col gap-4">
        {pages.map((p) => (
          <Button key={p.href} href={p.href}>{p.label}</Button>
        ))}
      </div>
    </main>
    </>
  );
}
