import { BackgroundCanvas } from "./components/BackgroundCanvas";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function TesseractPortfolio() {
  return (
    <div id="main-wrapper" className="w-full h-full flex flex-col justify-center text-white">
      <BackgroundCanvas />
      <Navbar />
      <main className="relative z-10 h-[3000px]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}