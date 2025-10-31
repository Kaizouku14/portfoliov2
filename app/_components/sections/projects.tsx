import Animate from "@/components/animate";
import { MENU } from "@/constants/menu-options";

const Projects = () => {
  return (
    <section id={MENU.PROJECTS} className="h-screen flex flex-col">
      <Animate text="Projects" className="text-5xl font-semibold mb-12" />
    </section>
  );
};

export default Projects;
