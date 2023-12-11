import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyProvider } from "./context/context";
import ReactParticles from "./components/ReactParticles";
import Home from "./components/Home";
import DynamicPage from "./components/Dynamic-Page";
import About from "./components/About";

const App = () => {
  return (
    <>
      <MyProvider>
        <ReactParticles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:name" element={<DynamicPage />} />
            <Route path="/about/" element={<About />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </>
  );
};

export default App;
