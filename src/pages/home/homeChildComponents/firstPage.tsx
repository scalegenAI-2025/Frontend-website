import { createUseStyles } from "react-jss";

//import Rocket from "../../../assets/rocket.png";
const useStyles = createUseStyles({
  //   backgroundWrapper: {
  //     backgroundImage: `url(${Rocket})`,
  //     backgroundSize: "cover",

  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat",
  //     //minHeight: "100vh",
  //   },
  container: {
    textAlign: "center",
    justifyContent: "center",
    // marginTop: "150px", // keep or increase this to push text below navbar
    paddingTop: "150px", // extra space so content doesn't overlap navbar
    color: "#fff", // ensure text is white
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

const FirstPage = () => {
  const classes = useStyles();

  return (
    // <div className={classes.backgroundWrapper}>
    <div className={classes.container}>
      <div className={classes.homeHeader}>
        <h1 className={classes.homeHeader1}>Help Enterprises</h1>
        <h1 className={classes.homeHeader2}> Scale Generative AI</h1>
      </div>
      <h3 className={classes.homeHeader3}>
        Through Readiness Rocket Framework
      </h3>
    </div>
    // </div>
  );
};

export default FirstPage;
