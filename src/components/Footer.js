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
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-solid fa-globe"></i>
      </div>
      <div className="footer-extras">
        <div className="need-a-website">
          <p>
            Need a website? <a href="#contact">send me a message</a>
          </p>
        </div>
        <div className="SimpleCodesPH">
          <p>
            This website is owned by <a href="*">SimpleCodesPH</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
