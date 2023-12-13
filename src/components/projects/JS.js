import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/context";

import projectsJSON from "../projects.json";
import PrimaryButton from "../buttons/PrimaryButton";

const Javascript = ({
  sampleImage,
  handleMouseEnter,
  handleMouseLeave,
  ref,
}) => {
  const context = useContext(MyContext);
  const setHomePageTrue = context.setHomePageTrue;

  const jsFrameworks = projectsJSON.name.filter(
    (obj) => obj.framework === "javascript"
  );

  const showItems = () => {
    return jsFrameworks.map((item, index) => (
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

export default Javascript;
