import HeroSection from "@/components/sections/home";
import Skill from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ChatFeatureSection } from "@/components/sections/chat-feature";
import { Navigation } from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Chat from "@/components/chat/chat-dialog";

const Main = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <Skill />
        <Projects />
        <ChatFeatureSection />
        <ContactSection />
      </main>
      <Footer />
      <Chat />
    </>
  );
};

export default Main;
