import Animate from "@/components/animate";
import { heroHeader } from "@/data/data";

const HeroHeader = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-10">
      <Animate text={heroHeader.name} className="text-2xl md:text-4xl font-extrabold" />
      <Animate text={heroHeader.profession} className="text-xl md:text-3xl font-bold" />
    </header>
  );
};

export default HeroHeader;
