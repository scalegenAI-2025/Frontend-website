import useGlobalStyles from "../../styles/useGlobalStyles";
import AssetBckground from "../../assets/eco_pic.jpg";
import { createUseStyles } from "react-jss";
import Navbar from "../../components/navbar/navbar";

import Footer from "../../components/footer/footer";
import EcosystemTop from "./ecosystemChildComponents/ecosystemTop";
import ContactUs from "../home/homeChildComponents/contactUs";
import HowItWorks from "./ecosystemChildComponents/HowItWorks";
import EcosystemHero from "./ecosystemChildComponents/EcosystemHero";
import CollaborationHero from "./ecosystemChildComponents/CollabirationnHero";
import AIEcosystems from "./ecosystemChildComponents/AIEcosystems";
import Benefits from "./ecosystemChildComponents/Benefits";

// JSS styles
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

function Ecosystem() {
  useGlobalStyles();
  const classes = useStyles();

  return (
    <>
      <div className={classes.backgroundWrapper}>
        <div className={classes.backgroundOverlay}></div>
        <div className={classes.contentWrapper}>
          <Navbar />
          <EcosystemTop />
        </div>
      </div>
      <EcosystemHero />
      <CollaborationHero />
      <HowItWorks />
      <AIEcosystems />
      <Benefits />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Ecosystem;
