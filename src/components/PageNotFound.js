import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MyContext } from "../context/context";

const PageNotFound = () => {
  const context = useContext(MyContext);
  const setHomePageTrue = context.setHomePageTrue;

  useEffect(() => {
    setHomePageTrue();
    // eslint-disable-next-line
  }, []);

  const showPage = () => {
    return (
      <>
        <div className="container-404">
          <h1>PAGE NOT FOUND</h1>
          <p>"{document.URL}"</p>
          <p>
            Do you want to go back <Link to="/">Home</Link>?
          </p>
        </div>
      </>
    );
  };

  return (
    <main className="main-container">
      <Navbar />
      {showPage()}
      <Footer />
    </main>
  );
};

export default PageNotFound;
