import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ReactParticles from "./components/ReactParticles";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <ReactParticles />
      <main className="main-container">
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
