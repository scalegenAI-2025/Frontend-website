import { createUseStyles } from "react-jss";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import GenAIMindsetTop from "./GenAIMindsetChild/GenAIMindsetTop";
import GenAIMindsetOverview from "./GenAIMindsetChild/GenAIMindsetOverview";
import GenAIMindsetContain from "./GenAIMindsetChild/GenAIMindsetContain";
import GenAIOperationalCoach from "../GenAIOperational/GenAIOperationalChild/GenAIOperationalCoach";
import EcosystemPage from "./GenAIMindsetChild/ecosystem";

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

function GenAIMindset() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.contentWrapper}>
          <Navbar />
          <GenAIMindsetTop />
          <GenAIMindsetOverview />
          <GenAIMindsetContain />
          <GenAIOperationalCoach />
          <EcosystemPage />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GenAIMindset;
