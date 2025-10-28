import HeroSection from "@/app/_components/sections/home";
import About from "@/app/_components/sections/about";
import Projects from "@/app/_components/sections/projects";
import DockMenu from "@/components/dock-menu";

const Main = () => {
  return (
    <main className="min-h-screen flex flex-col relative">
      <HeroSection />
      <div className="px-8">
        <About />
        <Projects />
      </div>
      <div className="fixed bottom-2 w-full">
        <DockMenu />
      </div>
    </main>
  );
};

export default Main;
