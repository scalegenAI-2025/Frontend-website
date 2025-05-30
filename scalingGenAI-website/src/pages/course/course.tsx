import useGlobalStyles from "../../styles/useGlobalStyles";

import { createUseStyles } from "react-jss";

import CourseAI from "../../assets/AlCourse.png";
import Navbar from "../../components/navbar/navbar";
import CourseCards from "./courseChildComponents/courseCards";
import CourseTopPage from "./courseChildComponents/courseTop";
import QuestionOnAI from "./courseChildComponents/questionOnAI";
import ContactUs from "../home/homeChildComponents/contactUs";
import Footer from "../../components/footer/footer";

// JSS styles
const useStyles = createUseStyles({
  backgroundWrapper: {
    position: "relative",
    height: "100vh",
    //overflow: "hidden",
  },
  backgroundOverlay: {
    backgroundImage: `url(${CourseAI})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 36%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    filter: "blur(2px)", // Apply blur here
    //transform: "scale(1.05)", // Slight scale to avoid edge bleed
  },

  contentWrapper: {
    position: "relative",
    zIndex: 1,
  },
});

function Course() {
  useGlobalStyles();
  const classes = useStyles();

  return (
    <>
      <div className={classes.backgroundWrapper}>
        <div className={classes.backgroundOverlay}></div>
        <div className={classes.contentWrapper}>
          <Navbar />
          <CourseTopPage />
          {/* <CourseCards /> */}
        </div>
      </div>
      <QuestionOnAI />
      <CourseCards />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Course;
