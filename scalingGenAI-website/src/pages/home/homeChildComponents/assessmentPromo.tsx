// src/components/assessmentPromo/AssessmentPromo.tsx
import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#e8e0d4",
    padding: "4rem 1rem",
    textAlign: "center",
  },
  subText: {
    fontSize: "2.2rem",
    fontWeight: 400,
    color: "#555",
    marginBottom: "1rem",
    "& span": {
      fontWeight: 600,
    },
  },
  mainText: {
    fontSize: "3.5rem",
    fontWeight: 300,
    color: "#333",
    maxWidth: "900px",
    margin: "0 auto 2rem auto",
    lineHeight: 1.4,
    "& span": {
      fontWeight: 700,
    },
    "@media (max-width: 768px)": {
      fontSize: "1.8rem",
    },
  },
  button: {
    backgroundColor: "#fbbf24",
    border: "none",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#f59e0b",
    },
  },
});

const AssessmentPromo: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.subText}>
        We do not offer just <span>Courses</span>
      </div>
      <div className={classes.mainText}>
        We offer personalized and continuous <span>AI Reskilling Journey</span>
      </div>
      <button
        className={classes.button}
        onClick={() => navigate("/assessments")}
      >
        Go
      </button>
    </div>
  );
};

export default AssessmentPromo;
