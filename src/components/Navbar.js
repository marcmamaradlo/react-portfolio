import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/context";
// import PrimaryButton from "./buttons/PrimaryButton";

const Navbar = ({ name }) => {
  const context = useContext(MyContext);
  const state = context.state;
  const setHomePageFalse = context.setHomePageFalse;
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = (e) => {
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  const handleHamburgerIconAction = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container" id="navbar">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/" onClick={setHomePageFalse}>
            <p>
              <span>{"<"}</span>
              {state.homePage ? "Home" : "Marc Mamaradlo"}
              <span> {"/>"}</span>
            </p>
          </Link>
        </div>

        {state.homePage ? null : (
          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}

        <div className="hamburger-icon">
          {state.homePage ? null : (
            <i
              onClick={handleHamburgerIconAction}
              className={
                isActive ? "fa-regular fa-rectangle-xmark" : "fa-solid fa-bars"
              }
            ></i>
          )}

          <div className={isActive ? "navbar-links-mobile" : "display-none"}>
            <a onClick={handleLinkClick} href="#about">
              About
            </a>
            <a onClick={handleLinkClick} href="#projects">
              Projects
            </a>
            <a onClick={handleLinkClick} href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
