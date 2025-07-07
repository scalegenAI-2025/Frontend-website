import React from "react";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc, #ff5cac)",
    backgroundSize: "400% 400%",
    animation: "$gradientBG 15s ease infinite",
    fontFamily: "Arial, sans-serif",
    padding: 20,
  },
  "@keyframes gradientBG": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    padding: 40,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: 600,
    width: "100%",
    textAlign: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 18,
    color: "#555",
    marginBottom: 30,
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
  },
  button: {
    padding: "12px 24px",
    borderRadius: 30,
    border: "none",
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
    color: "#fff",
    background: "rgb(0, 64, 90)",
    "&:hover": {
      background: "#0056b3",
    },
  },
});

const UserDashboard: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h1 className={classes.heading}>Welcome to ScalingGen AI!</h1>
        <p className={classes.subtext}>
          You are successfully logged in and verified.
        </p>
        <div className={classes.buttonGroup}>
          <button className={classes.button} onClick={() => navigate("/")}>
            Go to Home
          </button>
          <button
            className={classes.button}
            onClick={() => navigate("/courses")}
          >
            Access Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
