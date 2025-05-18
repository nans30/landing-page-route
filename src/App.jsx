import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Contact2 from "./component/Contact2";
import Gallery from "./component/Gallery";
import Projects2 from "./component/Projects2";
import Certifications from "./component/Certifications";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact2 />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/projects"element={<Projects2/>}/>
        <Route path="/certifications"element={<Certifications/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
