import React from "react";
import { createUseStyles } from "react-jss";
import Rocket from "../../../assets/Scaling GenAI_Cover.jpg";

const useStyles = createUseStyles({
  container: {
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    display: "flex",
  },
  header: {
    fontSize: "24px",
    fontWeight: "normal",
    marginBottom: "40px",
    textAlign: "center",
    color: "#333",
  },
  content: {
    display: "flex",
    //alignItems: "flex-start",
    gap: "60px",
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  bookImage: {
    width: "300px",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    "@media (max-width: 768px)": {
      width: "250px",
      margin: "0 auto",
    },
  },
  rightSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    justifyContent: "center",
  },
  description: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  availableText: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#333",
    lineHeight: "1.2",
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      fontSize: "36px",
    },
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  orderButton: {
    backgroundColor: "#002c3e",
    color: "white",
    border: "none",
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1e4a66",
      transform: "translateY(-2px)",
    },
  },
  arrow: {
    fontSize: "24px",
    color: "#2c5f7e",
    fontWeight: "bold",
    transform: "rotate(45deg)",
    "@media (max-width: 768px)": {
      transform: "rotate(90deg)",
    },
  },
  note: {
    fontSize: "14px",
    color: "#666",
    fontStyle: "italic",
    marginTop: "10px",
    "@media (max-width: 768px)": {
      marginTop: "20px",
    },
  },
});

const ReadinessRocketSection: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img
          src={Rocket}
          alt="Scaling Generative AI Book Cover"
          className={classes.bookImage}
        />

        <div className={classes.rightSection}>
          <p className={classes.description}>
            Find out more about Readiness Rocket Framework
          </p>

          <div className={classes.availableText}>
            Available on
            <br />
            Amazon
          </div>

          <div className={classes.buttonContainer}>
            <button
              className={classes.orderButton}
              onClick={() =>
                (window.location.href =
                  "https://www.amazon.com/Scaling-Generative-Operational-Readiness-Enterprises/dp/1637427980")
              }
            >
              Order →
            </button>

            {/* <div className={classes.arrow}>↗</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadinessRocketSection;
