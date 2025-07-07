import { createUseStyles } from "react-jss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import LandingSlide from "./AIGenAIChild/GenAILeaderBook";
import CourseOverview from "./AIGenAIChild/CourseOverview";
import CourseContentPage from "./AIGenAIChild/CourseContentPage";
import CoachingPage from "./AIGenAIChild/CoachingPage";
import EcosystemPage from "../GenAIMindset/GenAIMindsetChild/ecosystem";

const useStyles = createUseStyles({
  heroSection: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  contentWrapper: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
});

function AIGenAILeadersBook() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.contentWrapper}>
          <Navbar />
          <LandingSlide />
          <CourseOverview />
          <CourseContentPage />
          <CoachingPage />
          <EcosystemPage />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AIGenAILeadersBook;
