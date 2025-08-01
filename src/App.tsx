import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import FeaturedProjects from "./components/FeaturedProjects";
import Certification from "./components/certification";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Education />
      < FeaturedProjects/>
      <Experience />
      <Certification />
      <Skills/>
      <Contact />
    </div>
  );
};

export default App;
