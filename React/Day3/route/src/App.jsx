import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Complaints from "./components/Complaints";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

     

        <Route path="/complaints" element={<Complaints />} />

        

        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;