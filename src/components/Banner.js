const Banner = () => {
  return (
    <>
      <div className='container'>
        <div className='banner'>
          {/* <p className='margin-bottom-2rem'><span>{'<div>'}</span></p> */}
          <p>Hello, I'am</p>
          <h1>
            {/* <span>{'<'}</span> */}
            Marc Mamaradlo
            {/* <span> {'/>'}</span> */}
          </h1>
          <p>Front-end Developer</p>
          <div className='banner-button'>
            <button>About Me <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          {/* <p><span>{'</div>'}</span></p> */}
        </div>
      </div>
    </>
  )
}

export default Banner;