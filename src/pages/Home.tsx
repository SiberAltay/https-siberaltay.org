import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Stats from "../components/Stats";
import About from "../components/About";
import FocusAreas from "../components/FocusAreas";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <FocusAreas />
      <Projects />
    </>
  );
}
