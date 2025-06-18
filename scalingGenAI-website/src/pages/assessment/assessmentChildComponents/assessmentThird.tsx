import { createUseStyles } from "react-jss";
import Rocket from "../../../assets/rocketFrame.png";

const useStyles = createUseStyles({
  container: {
    padding: 60,
    backgroundColor: "white",
    color: "black",
    fontFamily: "sans-serif",
  },
  contentRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 32,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flexShrink: 0,
  },
  heading: {
    fontSize: 18,
    marginBottom: 24,
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    paddingTop: "100px",
    marginBottom: 32,
  },
  button: {
    // height: "50px",
    backgroundColor: "#002c3e",
    color: "white",
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
  moreText: {
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "600",
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
  downloadNote: {
    fontSize: 14,
    textAlign: "center",
    maxWidth: 400,
  },
  rocketWrapper: {
    position: "relative",
    width: 400, // increased size from 256 to 400
  },
  rocketImage: {
    width: "100%",
    height: "auto",
  },
  maturityText: {
    position: "absolute",
    top: 8,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  strategyBox: {
    position: "absolute",
    top: 40,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#d1d5db",
    padding: "4px 8px",
    fontSize: 14,
    fontWeight: "500",
  },
  readinessStack: {
    position: "absolute",
    top: 80,
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  readinessItem: {
    backgroundColor: "#374151",
    padding: 4,
    marginBottom: 4,
  },
  boosters: {
    position: "absolute",
    top: 208,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: 10,
    color: "#1f2937",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 8px",
  },
  boosterItem: {
    backgroundColor: "#e5e7eb",
    padding: 4,
    textAlign: "center",
  },
  launchpad: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "black",
    color: "white",
    padding: "4px 8px",
    fontSize: 14,
  },
  assetsFooter: {
    marginTop: 40,
    fontWeight: "bold",
  },
});

export default function AssessmentThirdComponent() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.contentRow}>
        {/* Left Side: Buttons and Download Section */}
        <div className={classes.leftColumn}>
          <div className={classes.buttonGrid}>
            <button className={classes.button}>Generative AI Maturity</button>
            <button className={classes.button}>AI Maturity</button>
            <button className={classes.button}>AI/GenAI Mindset</button>
            <button className={classes.button}>AI Reskilling Journey</button>
            <button className={classes.button}>VITA</button>
            <button className={classes.button}>AI Value chain</button>
            <button className={classes.button}>Vendor selection</button>
            <button className={classes.button}>AI/GenAI Capabilities</button>
            <button className={classes.button}>Infrastructure readiness</button>
            <button className={classes.button}>Green AI</button>
            <button className={classes.button}>Customer Readiness</button>
            <button className={classes.button}>Technology Readiness</button>
            <button className={classes.button}>Data Readiness</button>
            <button className={classes.button}>People Readiness</button>
            <button className={classes.button}>
              Comprehensive Operational Readiness
            </button>
          </div>

          <div className={classes.downloadSection}>
            <button className={classes.downloadButton}>Download Now</button>
          </div>
        </div>

        {/* Right Side: Rocket Image */}
        <div className={classes.rightColumn}>
          <div className={classes.rocketWrapper}>
            <img src={Rocket} className={classes.rocketImage} alt="Rocket" />
          </div>
        </div>
      </div>
    </div>
  );
}
