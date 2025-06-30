import useGlobalStyles from "../../styles/useGlobalStyles";
import AssetBckground from "../../assets/assessment.jpg";
import { createUseStyles } from "react-jss";
import Navbar from "../../components/navbar/navbar";
import AssessmentTop from "./assessmentChildComponents/assessmentTop";
import AssetsSecond from "./assessmentChildComponents/assessmentSecond";
import AssessmentThirdComponent from "./assessmentChildComponents/assessmentThird";
import ContactUs from "../home/homeChildComponents/contactUs";
import Footer from "../../components/footer/footer";

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
    //overflow: "hidden",
  },
  backgroundOverlay: {
    backgroundImage: `url(${AssetBckground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 36%", // shifted downward
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
    zIndex: 0,
  },

  contentWrapper: {
    position: "relative",
    zIndex: 1,
  },
});

function Assessment() {
  useGlobalStyles();
  const classes = useStyles();

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
      <AssessmentThirdComponent />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Assessment;
