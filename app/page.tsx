import Home from "@/components/sections/home";
import DockMenu from "@/components/dock-menu";
import Projects from "@/components/sections/projects";
import About from "@/components/sections/about";

const Main = () => {
  return (
    <main className="min-h-screen flex flex-col relative">
      <div className="mx-auto w-full ">
        <Home />
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
