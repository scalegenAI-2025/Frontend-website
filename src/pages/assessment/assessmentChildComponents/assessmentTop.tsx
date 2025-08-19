import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    textAlign: "center",
    justifyContent: "center",
    //marginTop: "150px",
    alignItems: "center",
    paddingTop: "300px",
  },
  homeHeader: {
    backgroundColor: "none",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  homeHeader1: {
    margin: "0",
    fontSize: "clamp(2rem, 6vw, 6rem)",
    fontWeight: 500,
    opacity: 1,
  },
  homeHeader2: {
    margin: "0",
    fontSize: "clamp(2rem, 6vw, 6rem)",
    fontWeight: 500,
    opacity: 1,
  },
  // homeHeader3: {
  //   fontWeight: 400,
  //   opacity: 1,
  //   backgroundColor: "transparent",
  //   color: "#ffffff",
  // },
  // homeHeaderLine: {
  //   margin: 0,
  //   fontSize: "clamp(2.2rem, 6vw, 5rem)",
  //   fontWeight: 700,
  //   lineHeight: 1.1,
  //   textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  // },

  // homeHeader3: {
  //   marginTop: "1.5rem",
  //   fontWeight: 400,
  //   fontSize: "clamp(1.2rem, 4vw, 2rem)",
  //   color: "#ffffff",
  //   maxWidth: "100%",
  //   textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
  // },
  homeHeaderLine: {
    margin: 0,
    fontSize: "clamp(2.2rem, 6vw, 5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  },

  homeHeader3: {
    marginTop: "1.5rem",
    fontWeight: 400,
    fontSize: "clamp(1.2rem, 4vw, 2rem)",
    color: "#ffffff",
    maxWidth: "100%",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
  },
  title: {
    fontSize: "2rem",
    color: "#222",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
  },
});

const AssessmentTop = () => {
  const classes = useStyles();

  return (
    // <div className={classes.backgroundWrapper}>
    <div className={classes.container}>
      <div className={classes.homeHeader}>
        <h1 className={classes.homeHeaderLine}>
          The first step to <br></br>Scaling Generative AI
        </h1>
      </div>
      <h3 className={classes.homeHeader3}>
        Through Readiness Rocket Framework
      </h3>
    </div>
    // </div>
  );
};

export default AssessmentTop;
