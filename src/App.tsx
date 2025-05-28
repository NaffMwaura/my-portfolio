import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import FeaturedProjects from "./components/FeaturedProjects";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      < FeaturedProjects/>
      <Experience />
      <Skills/>
      <Contact />
    </div>
  );
};

export default App;
