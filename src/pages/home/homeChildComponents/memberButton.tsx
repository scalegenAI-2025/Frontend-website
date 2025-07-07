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
    padding: "18px 36px",
    backgroundColor: "#002c3e",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: 20,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#021123",
    },
  },
});

const BecomeMemberPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/member");
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Join The scaling Generative AI</h1>
        <h1 className={classes.heading2}>Ecosystem</h1>
        <p className={classes.description}>
          fill out the membership form and we shall get back to you for a
          consultation.
        </p>
        <button className={classes.button} onClick={handleClick}>
          Become a member →
        </button>
      </div>
    </div>
  );
};

export default BecomeMemberPage;
