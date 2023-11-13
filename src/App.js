import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import ReactParticles from './components/ReactParticles';
// import ReactParticles from './components/ReactParticles';

const App = () => {
  return (
    <>
      <ReactParticles />
      <main className='main-container'>
        <Navbar />
        <Banner />
        <About />
      </main>
    </>
  )
}

export default App;
