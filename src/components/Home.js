import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Projects from "./projects/Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="main-container">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
