import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    textAlign: "center",
    justifyContent: "center",
    //marginTop: "150px",
    paddingTop: "250px",
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
  homeHeader3: {
    fontWeight: 400,
    opacity: 1,
    backgroundColor: "transparent",
    color: "#ffffff",
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

const EcosystemTop = () => {
  const classes = useStyles();

  return (
    // <div className={classes.backgroundWrapper}>
    <div className={classes.container}>
      <div className={classes.homeHeader}>
        <h1 className={classes.homeHeader1}>
          Explore the power of collaboration through Ecosystems
        </h1>
      </div>
      <h3 className={classes.homeHeader3}>Scale 3X through ecosystems</h3>
    </div>
    // </div>
  );
};

export default EcosystemTop;
