// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Assets from "./pages/assets/assets";
import Image from "./assets/Logo (1).jpg";
import useGlobalStyles from "./styles/useGlobalStyles";
import Course from "./pages/course/course";
import Assessment from "./pages/assessment/assessment";
import Ecosystem from "./pages/Ecosystem/ecosystem";
// import Register from "./pages/register/register";
// import Login from "./pages/login/login";
import Forgot from "./pages/login/loginChildComponents/Forgot";
import Reset from "./pages/login/loginChildComponents/Reset";
import Dashboard from "./pages/login/loginChildComponents/Dashboard";
import ActivateAccount from "./pages/login/loginChildComponents/ActivateAccount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PartnerForm from "./pages/home/homeChildComponents/becomeMember";
import AdminLogin from "./pages/adminLogin/adminLogin";
import { Toaster } from "react-hot-toast";
//import LandingSlide from "./pages/course/AIGenAILeadersBook/AIGenAIChild/GenAILeaderBook";
import AIGenAILeadersBook from "./pages/course/AIGenAILeadersBook/AIGenAILeadersBook";
import GenerativeAI from "./pages/course/GenerativeAI/GenerativeAI";
import GenAITransformation from "./pages/course/GenAITransformation/GenAITransformation";
import GenAIOperational from "./pages/course/GenAIOperational/GenAIOperational";
import GenAIMindset from "./pages/course/GenAIMindset/GenAIMindset";
import UserLogin from "./pages/users/UserLogin";
import UserRegister from "./pages/users/UserRegister";
import OtpVerification from "./pages/users/UserVerifyOtp";
import UserDashboard from "./pages/users/Dashboard";
import CookiePolicy from "./components/footer/CookiePolicy";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import AboutUs from "./pages/aboutUs.tsx/AboutUs";
import GeneralTerms from "./components/footer/TermsAndCondition";
import { AdminRoute } from "./pages/adminLogin/AdminRoute";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#000000",
  },
  logo: {
    width: 600,
    height: 200,
    marginBottom: 20,
    animation: "$bounce 2s infinite",
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: 500,
  },
  "@keyframes bounce": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-15px)" },
  },
});

function App() {
  useGlobalStyles();
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={classes.loaderContainer}>
        <img src={Image} alt="Loading" className={classes.logo} />
        <p className={classes.text}>🚀 Loading Scaling GenAI...</p>
      </div>
    );
  }
  return (
    <>
      {/* <Navbar /> */}
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/course1" element={<AIGenAILeadersBook />} />
        <Route path="/courses/course2" element={<GenerativeAI />} />
        <Route path="/courses/course3" element={<GenAITransformation />} />
        <Route path="/courses/course6" element={<GenAIOperational />} />
        <Route path="/courses/course4" element={<GenAIMindset />} />
        <Route path="/assessments" element={<Assessment />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset-password/:token" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activate-account/:token" element={<ActivateAccount />} />
        <Route path="/member" element={<PartnerForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* <Route path="/user-register" element={<UserRegister />} /> */}

        <Route
          path="/user-register"
          element={
            <AdminRoute>
              <UserRegister />
            </AdminRoute>
          }
        />

        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-conditions" element={<GeneralTerms />} />
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
