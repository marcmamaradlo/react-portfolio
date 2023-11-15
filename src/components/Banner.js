const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="banner">
          <div>
            {/* <p className='margin-bottom-2rem'><span>{'<div>'}</span></p> */}
            <p className="text-align-left">Hello, I'am</p>
            <h1>
              {/* <span>{'<'}</span> */}
              Marc Mamaradlo
              {/* <span> {'/>'}</span> */}
            </h1>
            <p className="text-align-left">Front-end Developer</p>
            <div className="banner-button">
              <button>
                About Me <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            {/* <p><span>{'</div>'}</span></p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
