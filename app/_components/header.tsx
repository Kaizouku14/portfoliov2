import { Animate } from "@/components/animate";
import { heroHeader } from "@/data/data";

export const HeroHeader = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-10">
      <Animate
        text={heroHeader.name}
        className="text-4xl font-extrabold
      bg-[linear-gradient(to_right,oklch(0.25_0_0),oklch(0.55_0_0))]
      dark:bg-[linear-gradient(to_right,var(--foreground),var(--primary))]
      bg-clip-text text-transparent"
      />
      <Animate text={heroHeader.profession} className="text-3xl font-bold" />
    </header>
  );
};
