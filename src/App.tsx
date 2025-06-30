// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Assets from "./pages/assets/assets";

import useGlobalStyles from "./styles/useGlobalStyles";
import Course from "./pages/course/course";
import Assessment from "./pages/assessment/assessment";
import Ecosystem from "./pages/Ecosystem/ecosystem";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Forgot from "./pages/login/loginChildComponents/Forgot";
import Reset from "./pages/login/loginChildComponents/Reset";
import Dashboard from "./pages/login/loginChildComponents/Dashboard";
import ActivateAccount from "./pages/login/loginChildComponents/ActivateAccount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PartnerForm from "./pages/home/homeChildComponents/becomeMember";
import AdminLogin from "./pages/adminLogin/adminLogin";

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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset-password/:token" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activate-account/:token" element={<ActivateAccount />} />
        <Route path="/member" element={<PartnerForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Add more routes here */}
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        pauseOnHover
        //theme="dark"
      />
    </>
  );
}

export default App;
