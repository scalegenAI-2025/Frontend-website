import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles({
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     background: "linear-gradient(135deg, #000 60%, #1a1a1a 100%)", // black gradient
//     color: "#fff",
//     paddingLeft: "5rem",
//     maxWidth: "2000px",
//     flexWrap: "wrap",
//     minHeight: "700px",
//     boxSizing: "border-box",
//   },

//   textSection: {
//     flex: "1 1 25%", // Smaller to give video more space
//     //paddingRight: "2rem",
//     minWidth: "280px",
//   },
//   heading: {
//     fontSize: "44px",
//     marginBottom: "3.5rem",
//     lineHeight: 1.4,
//   },
//   purpleText: {
//     color: "#d633ff",
//     fontWeight: "bold",
//   },
//   highlight: {
//     color: "#ffc107",
//     fontWeight: "bold",
//     fontSize: "2.5rem",
//     display: "inline-block",
//     marginRight: "0.5rem",
//   },
//   videoWrapper: {
//     flex: "1 1 75%", // Increased horizontal size
//     height: "600px", // Increased vertical size
//     position: "relative",
//     minWidth: "300px",
//     overflow: "hidden",
//     backgroundColor: "#000",

//     // Oval mask
//     maskImage: 'url("/pqr.svg")',
//     WebkitMaskImage: 'url("/pqr.svg")',
//     maskRepeat: "no-repeat",
//     WebkitMaskRepeat: "no-repeat",
//     maskSize: "100% 100%",
//     WebkitMaskSize: "100% 100%",
//     maskPosition: "left center",
//     WebkitMaskPosition: "left center",
//   },

//   videoInner: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     // transform: "rotate(-3deg)",
//     transformOrigin: "center center",
//   },

//   video: {
//     width: "100%",
//     height: "100%",
//     //objectFit: "cover",
//     // filter: "brightness(0.7) hue-rotate(200deg) saturate(3)",
//   },
// });

const useStyles = createUseStyles({
  container: {
    display: "flex",
    //alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(135deg, #000 60%, #1a1a1a 100%)",
    color: "#fff",
    paddingLeft: "5rem",
    maxWidth: "2000px",
    flexWrap: "wrap",
    minHeight: "700px",
    boxSizing: "border-box",
  },

  textSection: {
    flex: "1 1 40%", // Increased text section width
    minWidth: "280px",
  },
  heading: {
    fontSize: "70px",
    marginTop: "6.5rem",
    lineHeight: 1.4,
  },
  heading2: {
    fontSize: "50px",
    marginTop: "3.5rem",
    lineHeight: 1.4,
  },
  purpleText: {
    color: "#d633ff",
    fontWeight: "bold",
  },
  highlight: {
    color: "#ffc107",
    fontWeight: "bold",
    fontSize: "2.5rem",
    display: "inline-block",
    marginRight: "0.5rem",
  },
  videoWrapper: {
    flex: "1 1 60%", // Reduced video wrapper width
    height: "600px",
    position: "relative",
    minWidth: "300px",
    overflow: "hidden",
    backgroundColor: "#000",

    // Oval mask - unchanged except using new pqr.svg
    maskImage: 'url("/pqr.svg")',
    WebkitMaskImage: 'url("/pqr.svg")',
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskPosition: "left center",
    WebkitMaskPosition: "left center",
  },

  videoInner: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transformOrigin: "center center",
  },

  video: {
    width: "100%",
    height: "100%",
  },
});

const PolyOpportunityHero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        Explore the power of collaboration through{" "}
        <span className={classes.purpleText}>Ecosystems</span>
      </div>
      <div className={classes.textSection}>
        <div className={classes.heading2}>
          <span className={classes.highlight}>3X</span> your learning...
        </div>
      </div>
      <div className={classes.videoWrapper}>
        <div className={classes.videoInner}>
          <video
            className={classes.video}
            src="/homepage.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default PolyOpportunityHero;
