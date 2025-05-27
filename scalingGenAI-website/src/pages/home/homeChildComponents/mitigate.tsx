import { createUseStyles } from "react-jss";
import { BsArrows } from "react-icons/bs";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "2rem",
    //height: "80vh",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  heading1: {
    margin: "0",
    fontSize: "70px",
    fontWeight: 500,
    paddingTop: "150px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading3: {
    fontSize: "20px",
    fontWeight: 400,
  },
  arrow: {
    fontSize: "2rem",
    width: "100px",
  },
});

const Mitigate = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading1}>Mitigate Huge Gap</h1>

      <div className={classes.row}>
        <h3 className={classes.heading3}>
          Scaling <br></br>Enterprises <br></br> (10%)
        </h3>
        <BsArrows className={classes.arrow} size={40}>
          AL
        </BsArrows>
        <h3 className={classes.heading3}>
          Lagging <br></br>Enterprises<br></br> (90%)
        </h3>
      </div>
    </div>
  );
};

export default Mitigate;
