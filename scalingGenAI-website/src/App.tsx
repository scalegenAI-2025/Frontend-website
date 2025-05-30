// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Assets from "./pages/assets/assets";

import useGlobalStyles from "./styles/useGlobalStyles";
import Course from "./pages/course/course";

function App() {
  useGlobalStyles();

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/courses" element={<Course />} />
        {/* Add more routes here */}
      </Routes>
    </>
  );
}

export default App;
