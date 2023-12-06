import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleLinkClick = (e) => {
    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };

  const handleHamburgerIconAction = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-logo">
          <a href="*">
            <p>
              <span>{"<"}</span>
              Marc Mamaradlo
              <span> {"/>"}</span>
            </p>
          </a>
        </div>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger-icon">
          <i
            onClick={handleHamburgerIconAction}
            className={
              isActive ? "fa-regular fa-rectangle-xmark" : "fa-solid fa-bars"
            }
          ></i>
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
