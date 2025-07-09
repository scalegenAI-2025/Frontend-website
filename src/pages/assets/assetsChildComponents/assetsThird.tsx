import { createUseStyles } from "react-jss";
import Rocket from "../../../assets/rocketFrame.png";

const useStyles = createUseStyles({
  container: {
    padding: 60,
    backgroundColor: "white",
    color: "black",
    fontFamily: 'Georgia, "Times New Roman", serif',
    "@media (max-width: 768px)": {
      padding: 20,
    },
  },
  contentRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 32,
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flexShrink: 0,
    "@media (max-width: 768px)": {
      alignSelf: "center",
      marginTop: 32,
    },
  },
  assetGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 24,
    marginBottom: 40,
  },
  assetBox: {
    border: "1px solid #d1d5db",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#f9fafb",
    textAlign: "center",
  },
  assetTitle: {
    fontWeight: "bold",
    marginBottom: 12,
    fontSize: 14,
  },
  downloadButton: {
    backgroundColor: "#002c3e",
    color: "white",
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontSize: 14,
  },
  moreText: {
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "600",
  },
  rocketWrapper: {
    position: "relative",
    width: 400,
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: 300,
    },
  },
  rocketImage: {
    width: "100%",
    height: "auto",
  },
});

export default function GenAILaunchpad() {
  const classes = useStyles();

  const assets = [
    "Customer Readiness Audit",
    "Business Case Selection",
    "Productivity Gain Calculation",
    "Pilot Selection",
    "Vendor Evaluation",
    "Green AI Evaluation",
    "TBA",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.contentRow}>
        {/* Left Column: Boxes with asset titles and download buttons */}
        <div className={classes.leftColumn}>
          <div className={classes.assetGrid}>
            {assets.map((title, index) => (
              <div key={index} className={classes.assetBox}>
                <div className={classes.assetTitle}>{title}</div>
                <button className={classes.downloadButton}>Download</button>
              </div>
            ))}
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
