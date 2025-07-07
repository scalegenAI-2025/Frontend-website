import { createUseStyles } from "react-jss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import GenerativeAITop from "./GenerativeAIChild/GenerativeAITop";
import CourseOverview from "./GenerativeAIChild/GenerativeAIOverview";
import TechnicalAIContentPage from "./GenerativeAIChild/TechnicalAIContentPage";
import CoachingPage from "./GenerativeAIChild/GenerativeAICoach";
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

function GenerativeAI() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.contentWrapper}>
          <Navbar />
          <GenerativeAITop />
          <CourseOverview />
          <TechnicalAIContentPage />
          <CoachingPage />
          <EcosystemPage />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GenerativeAI;
