import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main";
import { Work } from "./Pages/Work";
import { Connects } from "./Pages/Connects";
import { About } from "./Pages/About";
import "./App.css";
export default function App() {
  
  

  return (
    <div
      className={`w-[100vw] h-[100vh] overflow-x-hidden hide-scrollbar`}
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Work" element={<Work />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Connects" element={<Connects />}></Route>
      </Routes>
    </div>
  );
}

