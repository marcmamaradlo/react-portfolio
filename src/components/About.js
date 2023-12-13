// import profilePic from "./assets/fbProfile.png";

const About = () => {
  return (
    <div className="container" id="about">
      <section className="about">
        <h2>
          <span>{"<"}</span>
          About
          <span>{"/>"}</span>
        </h2>
        <div className="about-content-container">
          <div className="about-content-div">
            <h3>Modern</h3>
            <p>
              Minimalistic and clutter free. Simplicity is an integral part of a
              good website design.
            </p>
          </div>
          <div className="about-content-div">
            <h3>Responsive</h3>
            <p>
              With mobile first design, Websites will be compatible on all
              devices.
            </p>
          </div>
          <div className="about-content-div">
            <h3>Fast</h3>
            <p>
              Using the latest frameworks to make websites lag free and load as
              fast as posible.
            </p>
          </div>
          <div className="about-content-div">
            <h3>Ease of Use</h3>
            <p>Websites are easy to use and provide a good user experience.</p>
          </div>
        </div>
        <div className="about-me-container">
          {/* <div className="about-me">
            <img src={profilePic} alt="Profile" />
          </div> */}
          <div className="about-skills">
            <h3 className="text-align-center">Who am I?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique senectus et netus et.
            </p>
          </div>
        </div>
        {/* <div className="about-me-skill-container">
          <i className="fa-brands fa-react"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-bootstrap"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-html5"></i>
        </div> */}
      </section>
    </div>
  );
};

export default About;
