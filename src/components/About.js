import profilePic from './assets/profilePicture.png';

const About = () => {
  return (
    <div className='container'>
      <section className='about'>
        <h2>
          <span>{'<'}</span>
          About
          <span>{'/>'}</span>
        </h2>
        <div className='about-content-container'>
          <div className='about-content-div'>
            <h3>Modern</h3>
            <p> Minimalistic and clutter free. Simplicity is an integral part of a good website design.</p>
          </div>
          <div className='about-content-div'>
            <h3>Responsive</h3>
            <p>With mobile first design, Layouts will be compatible on all devices.</p>
          </div>
          <div className='about-content-div'>
            <h3>Fast</h3>
            <p>Using the latest frameworks to make websites lag free and load as fast as posible.</p>
          </div>
          <div className='about-content-div'>
            <h3>Ease of Use</h3>
            <p>Websites are easy to use and provide a good user experience.</p>
          </div>
        </div>
        <div className='about-me'>
          <img src={profilePic} alt='Profile-Picture' />
        </div>
        <div className='about-skills'>

        </div>
      </section>
    </div>
  )
}

export default About;