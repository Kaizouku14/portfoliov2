import Header from "@/components/header";
import Home from "@/components/sections/home";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

const Main = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col gap-y-6 md:gap-y-14 px-4 md:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Main;
