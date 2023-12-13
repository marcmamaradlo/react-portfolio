import { Link } from "react-router-dom";
import { useContext } from "react";

import projectsJSON from "../projects.json";
import PrimaryButton from "../buttons/PrimaryButton";
import { MyContext } from "../../context/context";

const AllProjects = ({
  sampleImage,
  handleMouseEnter,
  handleMouseLeave,
  ref,
}) => {
  const context = useContext(MyContext);
  const setHomePageTrue = context.setHomePageTrue;

  const showItems = () => {
    return projectsJSON.name.map((item, index) => (
      <div
        key={index}
        id={item.name}
        name={item.name}
        style={{
          backgroundImage: `url(${item.imageProfile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="projects-container-image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
      >
        <div
          id={item.name}
          className={sampleImage === item.name ? "" : "visibility-none"}
        >
          <h3>{item.name}</h3>
          <Link to={`/project/${item.name}`}>
            <PrimaryButton
              style={`primary-button`}
              text={`View Page`}
              action={setHomePageTrue}
            />
          </Link>
          <p>{item.text}</p>
        </div>
      </div>
    ));
  };

  return <>{showItems()}</>;
};
export default AllProjects;
