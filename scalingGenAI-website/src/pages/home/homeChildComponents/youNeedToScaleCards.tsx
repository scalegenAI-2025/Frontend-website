import { createUseStyles } from "react-jss";
import Assessments from "../../../assets/assessment.png";
import Assets from "../../../assets/assests.png";
const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    //minHeight: "100vh",
    padding: 20,
    position: "relative",
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 40,
    paddingLeft: 4,
  },
  hireButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: 20,
    fontSize: 14,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  cardsContainer: {
    display: "flex",
    gap: 24,
    //maxWidth: 1200,
    flexWrap: "wrap",
  },
  card: {
    flex: 1,
    minWidth: 400,
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  cardContent: {
    padding: 32,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 400,
    marginBottom: 16,
    lineHeight: 1.2,
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 1.5,
    marginBottom: 32,
    opacity: 0.9,
  },
  cardButton: {
    backgroundColor: "transparent",
    border: "1px solid",
    padding: "12px 24px",
    borderRadius: 24,
    fontSize: 14,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  // Dark styles
  darkCard: {
    composes: "$card",
    backgroundColor: "#111",
    color: "white",
  },
  darkCardImage: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222", // Optional fallback background
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  darkButton: {
    composes: "$cardButton",
    borderColor: "white",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#111",
    },
  },
});

const YouNeedToScaleCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>All you need to Scale</h1>

      <div className={classes.cardsContainer}>
        {/* Dark Card */}
        <div className={classes.darkCard}>
          <div className={classes.darkCardImage}>
            <img src={Assets} alt="Logo" />
          </div>
          <div className={classes.cardContent}>
            <h2 className={classes.cardTitle}>Assets</h2>
            <p className={classes.cardDescription}>
              Our festival this year includes four in-person gatherings across
              four continents, a 12-week digital learning journey, and a series
              of online public forums.
            </p>
            <button className={classes.darkButton}>Explore</button>
          </div>
        </div>

        {/* Light Card */}
        <div className={classes.darkCard}>
          <div className={classes.darkCardImage}>
            <img src={Assessments} alt="Logo" />
          </div>
          <div className={classes.cardContent}>
            <h2 className={classes.cardTitle}>Assessments</h2>
            <p className={classes.cardDescription}>
              Become a more active member of our community, support our mission,
              and benefit from exclusive programming and special rates for
              events.
            </p>
            <button className={classes.darkButton}>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouNeedToScaleCards;
