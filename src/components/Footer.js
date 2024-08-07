const Footer = () => {
  return (
    <div className="footer">
      <div className="arrow-up-icon">
        <a href="#navbar">
          <i className="fa-solid fa-angles-up"></i>
          {/* <p>TOP</p> */}
        </a>
      </div>

      <div className="footer-icon-container">
        <div className="footer-content">
          <a href="https://www.facebook.com/marc.mamaradlo.3/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/marcmamaradlo/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="*">
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
      <div className="footer-extras">
        {/* <div className="need-a-website">
          <p>
            Need a website? <a href="#contact">send me an email</a>
          </p>
        </div> */}
        {/* <div className="SimpleCodesPH">
          <p>
            This website is owned by{" "}
            <a href="https://www.facebook.com/profile.php?id=100091145376427">
              SimpleCodesPH
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
