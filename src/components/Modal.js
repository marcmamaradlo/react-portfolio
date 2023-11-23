const Modal = ({ handleCloseModal }) => {
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">
            <h4>{`Streaming Website`}</h4>
          </div>
          <i onClick={handleCloseModal} className="fa-solid fa-xmark"></i>
        </div>
        <div className="modal-container">
          <div className="modal-banner">
            <img
              // src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaAdCzTtVY-FA5VvE7CySvp2mHXqgQ6mHYchchGFdEw-5pBpH7SIm12law23CckhEX9j_GFHMW5aIM8huMZsj6hDI5DBOg=s1600"
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile-banner"
            />
          </div>
          <div className="modal-image-carousel">
            <img
              src="https://images.unsplash.com/photo-1555960840-f536ae1e4e95?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousel"
            />
            <img
              src="https://images.unsplash.com/photo-1555960840-f536ae1e4e95?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousel"
            />
            <img
              src="https://images.unsplash.com/photo-1555960840-f536ae1e4e95?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousel"
            />
            <img
              src="https://images.unsplash.com/photo-1555960840-f536ae1e4e95?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousel"
            />
            <img
              src="https://images.unsplash.com/photo-1555960840-f536ae1e4e95?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousel"
            />
            <img
              src="https://images.unsplash.com/photo-1555960840-f536ae1e4e95?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="carousel"
            />
          </div>
          <div className="modal-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames
              ac turpis egestas sed tempus urna. Interdum varius sit amet mattis
              vulputate. Consequat id porta nibh venenatis cras sed. Porttitor
              leo a diam sollicitudin.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames
              ac turpis egestas sed tempus urna. Interdum varius sit amet mattis
              vulputate. Consequat id porta nibh venenatis cras sed. Porttitor
              leo a diam sollicitudin.
            </p>
          </div>
          <div className="modal-tech">
            <p>Javascript</p>
            <p>ReactJS</p>
            <p>AWS</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>API</p>
            <p>Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
