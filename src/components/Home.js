import { useEffect, useContext } from "react";

import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Projects from "./projects/Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { MyContext } from "../context/context";

const Home = () => {
  const context = useContext(MyContext);
  const setHomePageFalse = context.setHomePageFalse;

  useEffect(() => {
    setHomePageFalse();
    // eslint-disable-next-line
  }, []);

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
