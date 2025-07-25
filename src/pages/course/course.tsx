import useGlobalStyles from "../../styles/useGlobalStyles";

import { createUseStyles } from "react-jss";

import CourseAI from "../../assets/Courses.jpg";
import Navbar from "../../components/navbar/navbar";
import CourseCards from "./courseChildComponents/courseCards";
import CourseTopPage from "./courseChildComponents/courseTop";
import QuestionOnAI from "./courseChildComponents/questionOnAI";
//import ContactUs from "../home/homeChildComponents/contactUs";
import Footer from "../../components/footer/footer";
import ContactUsCourse from "./courseChildComponents/contactUs";
//import EssentialCompetencies from "./courseChildComponents/AI/GenAILeaderBook";

const useStyles = createUseStyles({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: 'Georgia, "Times New Roman", serif',
    },
  },
  backgroundWrapper: {
    position: "relative",
    height: "100vh",
    margin: 0,
    //overflow: "hidden",
  },
  // backgroundOverlay: {
  //   backgroundImage: `url(${CourseAI})`,
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
    url(${CourseAI})
  `,
    backgroundSize: "contain, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center, center center",
    // backgroundColor: "#000000",
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
      {/* <ContactUs /> */}
      <ContactUsCourse />
      <Footer />
    </>
  );
}

export default Course;
