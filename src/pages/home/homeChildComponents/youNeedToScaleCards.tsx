import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Assessments from "../../../assets/assessment.jpg";
import Assets from "../../../assets/assets_pic.jpg";
import Ecosystem from "../../../assets/assetsBackground.jpg";
import Course from "../../../assets/Courses.jpg";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    padding: 20,
    position: "relative",
  },
  header: {
    color: "white",
    // fontSize: 24,
    // fontWeight: 400,
    marginBottom: 40,
    paddingLeft: 4,
    margin: 0,
    fontSize: 46,
    fontWeight: "bold",
    // marginBottom: 20,
    marginTop: "0px",
    // color: "#222",
    "@media (max-width: 500px)": {
      fontSize: 33,
    },
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
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "center",
  },
  card: {
    //  width: "calc(50% - 12px)", // Two cards per row
    flex: "1 1 calc(50% - 12px)",
    minWidth: 300,
    maxWidth: 600,
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(18, 11, 11, 0.3)",
    boxShadow: "0px 4px 2px rgba(255, 255, 255, 0.5)",
    boxSizing: "border-box",
    // "@media (max-width: 768px)": {
    //   width: "100%", // Stack on smaller screens
    // },
    "@media (max-width: 1024px)": {
      flex: "1 1 calc(50% - 12px)", // still two cards on medium screens
    },
    "@media (max-width: 768px)": {
      flex: "1 1 100%", // stack on smaller screens
    },
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
    "@media (max-width: 768px)": {
      fontSize: 14,
    },
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
  darkCard: {
    composes: "$card",
    backgroundColor: "#111",
    color: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
    },
  },
  darkCardImage: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
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

const cardData = [
  {
    title: "Assets",
    description:
      "Accelerate AI Adoption with curated, enterprise-grade, and downloadable assets",
    image: Assets,
    link: "/assets#middle-section",
  },
  {
    title: "Assessments",
    description:
      "Assess your capabilities, identify the gaps, and speed up your AI Journey",
    image: Assessments,
    link: "/assessments#middle-section",
  },
  {
    title: "Courses",
    description:
      "We do not offer just courses. We offer personalized continuous AI Reskilling Journey",
    image: Course,
    link: "/courses#middle-section",
  },
  {
    title: "Ecosystems",
    description: "Explore the power of collaboration through Ecosystems",
    image: Ecosystem,
    link: "/ecosystem",
  },
];

const YouNeedToScaleCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>All you need to Scale</h1>
      <div className={classes.cardsContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={classes.darkCard}>
            <div className={classes.darkCardImage}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={classes.cardContent}>
              <h2 className={classes.cardTitle}>{card.title}</h2>
              <p className={classes.cardDescription}>{card.description}</p>
              <Link to={card.link}>
                <button className={classes.darkButton}>Explore</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouNeedToScaleCards;
