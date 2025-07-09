import { createUseStyles } from "react-jss";
import Rocket from "../../../assets/rocketFrame.png";

const useStyles = createUseStyles({
  container: {
    padding: 60,
    backgroundColor: "white",
    color: "black",
    fontFamily: 'Georgia, "Times New Roman", serif',
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
  },
  contentRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 32,
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flexShrink: 0,
  },
  boxGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 24,
    marginBottom: 40,
  },
  box: {
    backgroundColor: "#002c3e",
    color: "white",
    padding: 20,
    borderRadius: 12,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  boxDescription: {
    fontSize: 14,
    lineHeight: 1.5,
  },
  downloadSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    marginBottom: 40,
  },
  downloadButton: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    borderRadius: 4,
    cursor: "pointer",
    border: "none",
  },
  rocketWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 400,
  },
  rocketImage: {
    width: "100%",
    height: "auto",
  },
});

export default function AssessmentThirdComponent() {
  const classes = useStyles();

  const boxes = [
    {
      title: "GenAI Maturity",
      description:
        "Gauge your organization’s maturity level: 1 to 5, for GenAI",
    },
    {
      title: "AI Maturity",
      description:
        "Gauge your organization’s maturity level: 1 to 5, for traditional AI",
    },
    {
      title: "VITA",
      description:
        "Find out the impact of GenAI on your organization through VITA score",
    },
    {
      title: "Value chain",
      description: "Know the strength of your position in GenAI value chain",
    },
    {
      title: "Infrastructure",
      description:
        "Find out how ready your organization’s infrastructure is to scale GenAI",
    },
    {
      title: "Agents",
      description: "Find out if your organization is ready to deploy agents",
    },
    {
      title: "Customer Readiness",
      description: "Find out how ready your customers are for GenAI",
    },
    {
      title: "Technology Readiness",
      description:
        "Find out if your organization has the adjacent technologies to scale GenAI",
    },
    {
      title: "People Readiness",
      description:
        "Find out if your organization has the right skills and competencies to scale GenAI",
    },
    {
      title: "Operational Readiness",
      description:
        "Find out if your organization is operationally ready to scale GenAI",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.contentRow}>
        {/* Left Column: Heading + Boxes + Download */}
        <div className={classes.leftColumn}>
          <div className={classes.heading}>Assessment Catalog</div>

          <div className={classes.boxGrid}>
            {boxes.map(({ title, description }, index) => (
              <div key={index} className={classes.box}>
                <div className={classes.boxTitle}>{title}</div>
                <div className={classes.boxDescription}>{description}</div>
              </div>
            ))}
          </div>

          <div className={classes.heading}>Individual Assessments</div>

          <div className={classes.boxGrid}>
            <div className={classes.box}>
              <div className={classes.boxTitle}>AI Reskilling</div>
              <div className={classes.boxDescription}>
                Find out your AI journey map based on what you do, what you want
                to do, and how to do it
              </div>
            </div>

            <div className={classes.box}>
              <div className={classes.boxTitle}>AI/GenAI Mindset</div>
              <div className={classes.boxDescription}>
                Know your mindset toward AI
              </div>
            </div>

            <div className={classes.box}>
              <div className={classes.boxTitle}>Leadership</div>
              <div className={classes.boxDescription}>
                Find out if you have the four essential competencies of a
                digital leader
              </div>
            </div>
          </div>

          <div className={classes.downloadSection}>
            <button className={classes.downloadButton}>
              Download Full Report
            </button>
          </div>
        </div>

        {/* Right Column: Rocket Image */}
        <div className={classes.rightColumn}>
          <div className={classes.rocketWrapper}>
            <img src={Rocket} className={classes.rocketImage} alt="Rocket" />
          </div>
        </div>
      </div>
    </div>
  );
}
