import { createUseStyles } from "react-jss";
import Rocket from "../../assets/rocket.png";
const useStyles = createUseStyles({
  backgroundWrapper: {
    backgroundImage: `url(${Rocket})`,
    backgroundSize: "cover",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    //minHeight: "100vh",
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: "150px",
  },
  homeHeader: {
    backgroundColor: "#000000",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  homeHeader1: {
    margin: "0",
    fontSize: "50px",
    fontWeight: 500,
  },
  homeHeader2: {
    margin: "0",
    fontSize: "50px",
    fontWeight: 500,
  },
  homeHeader3: {
    fontWeight: 400,

    backgroundColor: "#000000",
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

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundWrapper}>
      <div className={classes.container}>
        <div className={classes.homeHeader}>
          <h1 className={classes.homeHeader1}>Help Enterprises</h1>
          <h1 className={classes.homeHeader2}> Scale Generative AI</h1>
        </div>
        <h3 className={classes.homeHeader3}>
          Through Readiness Rocket Framework
        </h3>
      </div>
    </div>
  );
};

export default Home;
