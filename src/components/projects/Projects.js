// import sampleImage from "../assets/sampleImage.jpg";
import { useState, useEffect } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import AllProjects from "./All";
import Javascript from "./JS";
import Reactjs from "./Reactjs";
import Modal from "../Modal";

const Projects = () => {
  const [sampleImage, setSampleImage] = useState("");
  // eslint-disable-next-line
  const [onHover, setOnHover] = useState(true);
  const [projectButtons, setProjectButtons] = useState("all");
  const [modalActive, setModalActive] = useState(false);

  const handleMouseEnter = (e) => {
    setSampleImage(e.target.id);
  };

  const handleMouseLeave = (e) => {
    setOnHover(false);
  };

  const handleProjectButton = (e) => {
    setProjectButtons(e.target.id);
  };

  const handleButtons = (e) => {
    e.preventDefault();
    setModalActive(true);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  const handleModal = () => {
    return modalActive ? <Modal handleCloseModal={handleCloseModal} /> : null;
  };

  useEffect(() => {
    setSampleImage("");
  }, []);

  return (
    <div className="container">
      <div className="project">
        <h2>{`<Projects/>`}</h2>
        <div className="project-button-container">
          <PrimaryButton
            text="ALL"
            id="all"
            style={
              projectButtons === "all"
                ? "project-button-active"
                : "project-button"
            }
            action={handleProjectButton}
          />
          <PrimaryButton
            text="JAVASCRIPT"
            id="javascript"
            style={
              projectButtons === "javascript"
                ? "project-button-active"
                : "project-button"
            }
            action={handleProjectButton}
          />
          <PrimaryButton
            text="REACT JS"
            id="reactjs"
            style={
              projectButtons === "reactjs"
                ? "project-button-active"
                : "project-button"
            }
            action={handleProjectButton}
          />
        </div>
      </div>
      <div className="projects-container">
        {projectButtons === "all" ? (
          <AllProjects
            sampleImage={sampleImage}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            submit={handleButtons}
          />
        ) : projectButtons === "javascript" ? (
          <Javascript
            sampleImage={sampleImage}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            submit={handleButtons}
          />
        ) : projectButtons === "reactjs" ? (
          <Reactjs
            sampleImage={sampleImage}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            submit={handleButtons}
          />
        ) : (
          <AllProjects
            sampleImage={sampleImage}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            submit={handleButtons}
          />
        )}
      </div>
      {handleModal()}
    </div>
  );
};

export default Projects;
