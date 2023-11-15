import projectsJSON from "../projects.json";
import PrimaryButton from "../buttons/PrimaryButton";

const AllProjects = ({
  sampleImage,
  handleMouseEnter,
  handleMouseLeave,
  submit,
}) => {
  const showItems = () => {
    return projectsJSON.name.map((item, index) => (
      <div
        key={index}
        id={item.name}
        name={item.name}
        style={{
          backgroundImage: `url(${item.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="projects-container-image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          id={item.name}
          className={sampleImage === item.name ? "" : "display-none"}
        >
          <h3>{item.name}</h3>
          <PrimaryButton
            // eslint-disable-next-line
            style={"primary-button"}
            text={"View Page"}
            action={submit}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            in ornare quam viverra orci sagittis.
          </p>
        </div>
      </div>
    ));
  };

  return <>{showItems()}</>;
};

export default AllProjects;