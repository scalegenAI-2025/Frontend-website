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
    marginBottom: 20,
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
        <h1 className={classes.heading}>Join the scaling generative AI</h1>
        <p className={classes.description}>
          Be part of an innovative community focused on advancing AI research
          and applications across Sweden. Click the button below to get started
          and apply for membership and we will get back to you.
        </p>
        <button className={classes.button} onClick={handleClick}>
          Become a member →
        </button>
      </div>
    </div>
  );
};

export default BecomeMemberPage;
