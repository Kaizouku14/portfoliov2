import HeroSection from "@/app/_components/sections/home";
import Skill from "@/app/_components/sections/skills";
import Projects from "@/app/_components/sections/projects";
import DockMenu from "@/components/dock-menu";
import Chat from "@/components/chat/chat-dialog";

const Main = () => {
  return (
    <main className="flex flex-col relative z-0">
      <HeroSection />
      <Skill />
      <Projects />
      <div className="fixed bottom-2 w-full z-10">
        <DockMenu />
      </div>
      <Chat />
    </main>
  );
};

export default Main;
