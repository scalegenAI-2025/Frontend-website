import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "1400px",
    //height: "100%",
    backgroundColor: "#F9F7F2",
    //fontFamily: "Arial, sans-serif",
    padding: 20,
  },
  container: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 8,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: 900,
    width: "100%",
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#222",
  },
  heading2: {
    fontSize: 46,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: "0px",
    color: "#222",
  },
  description: {
    fontSize: 18,
    marginBottom: 40,
    color: "#555",
  },
  button: {
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "16px 32px",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#2c4a6b",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(30, 58, 95, 0.3)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
    "@media (max-width: 768px)": {
      padding: "14px 28px",
      fontSize: "1rem",
    },
  },
});

const AIReskilling = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("https://www.digiculum.com/");
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.heading}>
          AI Reskilling Journey for Individuals
        </h1>
        {/* <h1 className={classes.heading2}>Ecosystem</h1> */}
        <p className={classes.description}>
          {/* Fill out the membership form and we shall get back to you for a
          consultation. */}
        </p>
        <button className={classes.button} onClick={handleClick}>
          Become a member →
        </button>
      </div>
    </div>
  );
};

export default AIReskilling;
