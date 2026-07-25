import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FocusAreas from "./components/FocusAreas";
import CommunityCTA from "./components/CommunityCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <CommunityCTA />
      </main>
      <Footer />
    </div>
  );
}
