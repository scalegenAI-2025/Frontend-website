import { createUseStyles } from "react-jss";
import book from "../../../../assets/leadership_pic.jpg";

const useStyles = createUseStyles({
  container: {
    backgroundImage: `url(${book})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center", // center vertically
    alignItems: "center", // center horizontally
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "90px", // even bigger
    fontWeight: 900,
    lineHeight: 1.2,
    textShadow: `
      4px 4px 15px rgba(0, 0, 0, 0.9),
      0px 0px 10px rgba(0, 0, 0, 0.6)
    `,
    maxWidth: "80%",
  },
});

export default function LandingSlide() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>
        Essential Competencies <br />
        for AI/GenAI Leaders
      </h1>
    </div>
  );
}
