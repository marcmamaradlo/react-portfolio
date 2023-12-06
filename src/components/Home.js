import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Projects from "./projects/Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="main-container">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
