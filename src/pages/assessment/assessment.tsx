import useGlobalStyles from "../../styles/useGlobalStyles";
import AssetBckground from "../../assets/assessment.jpg";
import { createUseStyles } from "react-jss";
import Navbar from "../../components/navbar/navbar";
import AssessmentTop from "./assessmentChildComponents/assessmentTop";
import AssetsSecond from "./assessmentChildComponents/assessmentSecond";
import AssessmentThirdComponent from "./assessmentChildComponents/assessmentThird";
import ContactUs from "../home/homeChildComponents/contactUs";
import Footer from "../../components/footer/footer";
import ConsultationCardAssessment from "./assessmentChildComponents/ConsultationCardAssessment";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// JSS styles
const useStyles = createUseStyles({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  backgroundWrapper: {
    position: "relative",
    height: "100vh",
    margin: 0,
    "@media (max-width: 500px)": {
      height: "80vh",
    },
    //overflow: "hidden",
  },
  // backgroundOverlay: {
  //   backgroundImage: `url(${AssetBckground})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "left 36%", // shifted downward
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   opacity: 1,
  //   zIndex: 0,
  // },

  backgroundOverlay: {
    backgroundImage: `
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
    url(${AssetBckground})
  `,
    backgroundSize: "contain, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center, center center",
    backgroundColor: "#000000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    //filter: "blur(8px)", // <-- adds the blur effect here
  },
  contentWrapper: {
    position: "relative",
    zIndex: 1,
  },
});

function Assessment() {
  useGlobalStyles();
  const classes = useStyles();
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <>
      <div className={classes.backgroundWrapper}>
        <div className={classes.backgroundOverlay}></div>
        <div className={classes.contentWrapper}>
          <Navbar />
          <AssessmentTop />
        </div>
      </div>
      <AssetsSecond />
      <ConsultationCardAssessment />
      <div>
        <div id="middle-section">
          {/* This is the middle */}
          <AssessmentThirdComponent />
        </div>
      </div>

      <ContactUs />
      <Footer />
    </>
  );
}

export default Assessment;
