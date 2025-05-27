import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#f5f5f5",
    //minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "20px",
  },
  mainContainer: {
    display: "flex",

    gap: "40px",
    maxWidth: "2000px",
    justifyContent: "center",
    alignItems: "center",
  },
  leftSection: {
    flex: 1,
    backgroundColor: "#d4c4b0",
    padding: "30px",

    maxWidth: "800px",
  },
  rightSection: {
    flex: 0,
    minWidth: "300px",
    //paddingTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "15px",
    textAlign: "justify",
  },
  boldText: {
    fontWeight: "bold",
  },
  italicText: {
    fontStyle: "italic",
  },
  homePageButton: {
    backgroundColor: "#f5f5f5",
    border: "2px solid #333",
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",
    marginTop: "30px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#ddd",
      transform: "scale(1.1)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    },
  },
  rocketContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rocketTopTriangle: {
    width: 0,
    height: 0,
    borderLeft: "100px solid transparent",
    borderRight: "100px solid transparent",
    borderBottom: "60px solid #e8e8e8",
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(1.1)",
      transform: "scale(1.05)",
    },
  },
  maturityText: {
    position: "absolute",
    //top: "15px",
    left: "-85px",
    width: "170px",
    fontSize: "11px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  scaledAdoption: {
    backgroundColor: "#d0d0d0",
    padding: "12px 20px",
    marginTop: "10px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    width: "200px",
    border: "1px solid #bbb",
    borderRadius: "3px",
    marginBottom: "4px",
    "&:hover": {
      backgroundColor: "#e0e0e0",
      transform: "scale(1.05)",
    },
  },
  readinessAreasHeader: {
    backgroundColor: "#b8b8b8",
    padding: "8px 20px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
    width: "200px",
    marginBottom: "4px",
  },
  readinessBox: {
    backgroundColor: "#666666",
    padding: "14px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    width: "90%",
    borderRadius: "20px",
    marginBottom: "4px",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "purple",
    },
  },
  readinessBoxContainer: {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    padding: "14px 2px",
    gap: "5px",
  },
  boostersSection: {
    backgroundColor: "#c8c8c8",
    padding: "10px 0",
    paddingTop: "0px",
    marginTop: "5px",
    width: "180px",
    border: "1px solid #aaa",
    marginBottom: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  boostersLabel: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#333",
    fontStyle: "italic",
    marginBottom: "5px",
  },
  boostersRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    paddingBottom: "5px",
  },
  booster: {
    backgroundColor: "#a8a8a8",
    width: "30px",
    height: "60px",
    border: "1px solid #888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: "bold",
    color: "#333",
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#bbb",
      transform: "scale(1.1)",
    },
  },
  launchpad: {
    backgroundColor: "#333333",
    padding: "6px 2px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    width: "250px",
    "&:hover": {
      backgroundColor: "#444",
      transform: "scale(1.05)",
    },
  },
});

const ReadinessRocketPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <div className={classes.leftSection}>
          <h1 className={classes.title}>Readiness Rocket Framework</h1>

          <p className={classes.paragraph}>
            Just as rockets launch{" "}
            <span className={classes.boldText}>satellites</span> into{" "}
            <span className={classes.italicText}>space</span>, readiness rocket
            can launch <span className={classes.boldText}>enterprises</span>{" "}
            into a new space of GenAI.
          </p>

          <p className={classes.paragraph}>
            The important components of rockets are{" "}
            <span className={classes.italicText}>payload</span>,{" "}
            <span className={classes.italicText}>boosters</span>, and{" "}
            <span className={classes.italicText}>launchpad</span>.
          </p>

          <p className={classes.paragraph}>
            Just as <span className={classes.boldText}>payload</span> carries
            satellite, the most critical component of the mission, payload of
            readiness rocket includes{" "}
            <span className={classes.boldText}>GenAI maturity assessment</span>,{" "}
            <span className={classes.boldText}>scaled adoption strategy</span>,
            and <span className={classes.boldText}>readiness areas</span> — the
            most critical components of operational readiness.
          </p>

          <p className={classes.paragraph}>
            Just as <span className={classes.boldText}>boosters</span> provide
            the necessary thrust to overcome earth's gravity and propel the
            rocket into space,{" "}
            <span className={classes.boldText}>
              boosters of readiness rocket
            </span>{" "}
            facilitate enterprises to escape the status quo and accelerate
            toward new realms of AI innovations.
          </p>

          <p className={classes.paragraph}>
            Just as <span className={classes.boldText}>launchpad</span> serves
            as the stable foundation for the rocket during preparation and
            liftoff, ensuring a safe and controlled launch, the launchpad of
            readiness rocket provides a strong foundation and support, helps
            mitigate risks and overcome issues, and ensures deliverables are
            achieved.
          </p>

          <p className={classes.paragraph}>
            Just as trajectory optimization enables rockets gain more speed
            through gravity turn, which involves using earth's rotation for a
            speed boost, ecosystems enables scaled adoption of GenAI 3X faster
            by enabling collaboration between enterprises.
          </p>
        </div>

        <div className={classes.rightSection}>
          <div className={classes.rocketContainer}>
            <div className={classes.rocketTopTriangle}>
              <div className={classes.maturityText}>
                <br />
                GenAI<br></br> Maturity Assessment
                <br />
              </div>
            </div>

            <div className={classes.scaledAdoption}>
              Scaled Adoption
              <br />
              Strategy
            </div>

            <div className={classes.readinessAreasHeader}>Readiness Areas</div>
            <div className={classes.readinessBoxContainer}>
              <div className={classes.readinessBox}>Customer</div>
              <div className={classes.readinessBox}>Technology</div>
              <div className={classes.readinessBox}>Data</div>
              <div className={classes.readinessBox}>People</div>
            </div>

            <div className={classes.boostersSection}>
              <div className={classes.boostersLabel}>Boosters</div>
              <div className={classes.boostersRow}>
                <div className={classes.booster}>Booster 1</div>
                <div className={classes.booster}>Booster 2</div>
                <div className={classes.booster}>Booster 3</div>
              </div>
            </div>

            <div className={classes.launchpad}>Launchpad</div>
          </div>
        </div>
        <span>©</span>
      </div>
    </div>
  );
};

export default ReadinessRocketPage;
