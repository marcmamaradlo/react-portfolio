const Modal = ({ handleCloseModal, dataName }) => {
  console.log(dataName);
  const data = dataName;

  const handleTech = () => {
    return data.tech
      ? data.tech.map((item, index) => <p key={index}>{item}</p>)
      : null;
  };

  const handleImageInCarousel = () => {
    return data.imageCarousel
      ? data.imageCarousel.map((item, index) => <img src={item} alt={index} />)
      : null;
  };

  const handleImageBanner = () => {
    return data.imageBanner ? data.imageBanner : null;
  };

  return (
    <div className="container">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">
            <h4>{data.name}</h4>
          </div>
          <i onClick={handleCloseModal} className="fa-solid fa-xmark"></i>
        </div>
        <div className="modal-container">
          <div className="modal-banner">
            <img src={handleImageBanner()} alt={data.name} />
          </div>
          <div className="modal-image-carousel">{handleImageInCarousel()}</div>
          <div className="modal-description">
            <p>
              {data.text}
              <br />
              <br />
              {data.description}
            </p>
          </div>
          <div className="modal-tech">{handleTech()}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
