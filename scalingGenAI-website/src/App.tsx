// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Assets from "./pages/assets/assets";

import useGlobalStyles from "./styles/useGlobalStyles";
import Course from "./pages/course/course";
import Assessment from "./pages/assessment/assessment";
import Ecosystem from "./pages/Ecosystem/ecosystem";

function App() {
  useGlobalStyles();

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/assessments" element={<Assessment />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default App;
