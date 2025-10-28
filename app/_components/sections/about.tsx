import { MENU } from "@/constants/menu-options";
import { Animate } from "@/components/animate";

const About = () => {
  return (
    <section id={MENU.ABOUT} className="h-screen py-8">
      <Animate text="About" className="text-4xl font-semibold" />
    </section>
  );
};

export default About;
