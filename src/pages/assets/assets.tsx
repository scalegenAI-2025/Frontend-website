import useGlobalStyles from "../../styles/useGlobalStyles";
import AssetBckground from "../../assets/assets_pic.jpg";
import { createUseStyles } from "react-jss";
import Navbar from "../../components/navbar/navbar";
import AssetsTop from "./assetsChildComponents/assetsTop";
import AssetsSecond from "./assetsChildComponents/assetsSecond";
import GenAILaunchpad from "./assetsChildComponents/assetsThird";
import Footer from "../../components/footer/footer";

import ConsultationCardAssets from "./assetsChildComponents/ConsultationCardAssets";

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

function Assets() {
  useGlobalStyles();
  const classes = useStyles();

  return (
    <>
      <div className={classes.backgroundWrapper}>
        <div className={classes.backgroundOverlay}></div>
        <div className={classes.contentWrapper}>
          <Navbar />
          <AssetsTop />
        </div>
      </div>
      <AssetsSecond />
      <GenAILaunchpad />
      <ConsultationCardAssets />
      <Footer />
    </>
  );
}

export default Assets;
