import { createUseStyles } from "react-jss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import GenAIOperationalTop from "./GenAIOperationalChild/GenAIOperationalTop";
import GenAIOperationalOverView from "./GenAIOperationalChild/GenAIOperationalOverView";
import GenAIOperationalContent from "./GenAIOperationalChild/GenAIOperationalContent";
import GenAIOperationalCoach from "./GenAIOperationalChild/GenAIOperationalCoach";
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

function GenAIOperational() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.contentWrapper}>
          <Navbar />
          <GenAIOperationalTop />
          <GenAIOperationalOverView />
          <GenAIOperationalContent />
          <GenAIOperationalCoach />
          <EcosystemPage />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GenAIOperational;
