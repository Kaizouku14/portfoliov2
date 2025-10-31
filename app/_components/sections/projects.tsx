import Animate from "@/components/animate";
import { ProjectCard } from "@/components/project-card";
import { MENU } from "@/constants/menu-options";

const Projects = () => {
  return (
    <section id={MENU.PROJECTS} className="h-auto flex flex-col md:px-12 px-8 justify-center">
      <Animate text="Projects" className="text-5xl font-semibold mb-12" />
      <div className="grid grid-cols-3 h-120 justify-center gap-2 p-4">
        {Array.from({ length: 3 }, (_, index) => (
          <ProjectCard key={index} title="Project Title" description="Project Description" imageSrc="" link="" />
        ))}
      </div>
    </section>
  );
};

export default Projects;
