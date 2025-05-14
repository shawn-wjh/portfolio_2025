import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Footer />
      </main>

      <Navbar />
    </div>
  );
}

export default App;
