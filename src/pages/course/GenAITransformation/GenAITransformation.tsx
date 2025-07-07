import { createUseStyles } from "react-jss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import GenAITransformationTop from "./GenAITransformationChild/GenAITransformationTop";
import CourseOverview from "./GenAITransformationChild/GenAITransformationOverview";
import GenAITransformationContain from "./GenAITransformationChild/GenAITransformationContain";
import GenAITransformationCoach from "./GenAITransformationChild/GenAITransformationCoach";
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

function GenAITransformation() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.contentWrapper}>
          <Navbar />
          <GenAITransformationTop />
          <CourseOverview />
          <GenAITransformationContain />
          <GenAITransformationCoach />
          <EcosystemPage />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GenAITransformation;
