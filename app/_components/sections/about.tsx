import { MENU } from "@/constants/menu-options";
import Animate from "@/components/animate";
import TechStackTree from "@/components/tech-stacks";

const About = () => {
  return (
    <section id={MENU.ABOUT} className="h-screen py-8 relative flex flex-col">
      <Animate text="About" className="text-5xl font-semibold" />

      <div className="flex items-center justify-between h-screen">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-medium">Hello, I'm John Doe</p>
          <p className="text-gray-500">Full Stack Developer</p>
        </div>

        <TechStackTree/>
      </div>
    </section>
  );
};

export default About;
