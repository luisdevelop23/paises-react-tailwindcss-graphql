import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Vista1 from "./page/Vista1";
import Vista2 from "./page/Vista2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="main" className="w-full bg-sky-200 h-[100vh] flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
       

        <Route path="/vista1" element={<Vista1 />} />
        <Route path="/vista2" element={<Vista2 />} />
      </Routes>
    </div>
  );
}

export default App;
