import projectsJSON from "../projects.json";
import PrimaryButton from "../buttons/PrimaryButton";

const AllProjects = ({
  sampleImage,
  handleMouseEnter,
  handleMouseLeave,
  submit,
  ref,
}) => {
  // console.log(ref);

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
          <PrimaryButton
            // eslint-disable-next-line
            style={"primary-button"}
            text={"View Page"}
            action={submit}
          />
          <p>{item.text}</p>
        </div>
      </div>
    ));
  };

  return <>{showItems()}</>;
};

export default AllProjects;
