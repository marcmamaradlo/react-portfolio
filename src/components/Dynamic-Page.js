import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/context";
import projectsJSON from "./projects.json";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import PrimaryButton from "./buttons/PrimaryButton";

const DynamicPage = () => {
  const params = useParams();
  const context = useContext(MyContext);
  const setHomePageTrue = context.setHomePageTrue;

  useEffect(() => {
    setHomePageTrue();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, []);

  const filteredItem = projectsJSON.name.filter(
    (obj) => obj.name === params.name
  );

  const openNewTab = () => {
    window.open(filteredItem[0].url, "_self");
    console.log("openNewTab is clickd");
  };

  const showItems = () => {
    return filteredItem.map((item) => (
      <div className="dynamic-page" key={item.id}>
        <div className="dynamic-header">
          <h1>{params.name}</h1>
          <PrimaryButton
            style={`primary-button`}
            text={`Live Demo`}
            action={openNewTab}
          />
        </div>
        <div className="dynamic-page-banner">
          <img src={item.imageBanner} alt={item.name} />
        </div>
        <div className="dynamic-page-carousel">
          {item.imageCarousel.map((imageCarousel) => (
            <img src={imageCarousel} alt={imageCarousel} key={imageCarousel} />
          ))}
        </div>
        <div className="dynamic-page-description">
          <p>{item.description}</p>
        </div>
        <div className="dynamic-page-tech">
          {item.tech.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="main-container">
      <Navbar name={params.name} />
      <div className="container">{showItems()}</div>
      <Contact />
      <Footer />
    </div>
  );
};

export default DynamicPage;
