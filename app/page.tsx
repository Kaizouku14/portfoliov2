import HeroSection from "@/components/sections/home";
import Skill from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import DockMenu from "@/components/shared/dock-menu";
import Chat from "@/components/chat/chat-dialog";
import Footer from "@/components/layout/footer";

const Main = () => {
  return (
    <main className="flex flex-col relative z-0 ">
      <HeroSection />
      <Skill />
      <Projects />
      <Footer />
      <div className="fixed bottom-2 w-full z-10">
        <DockMenu />
      </div>
      <Chat />
    </main>
  );
};

export default Main;
