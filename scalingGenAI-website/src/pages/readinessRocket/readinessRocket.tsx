import { createUseStyles } from "react-jss";
import RocketFrame from "../../assets/rocketFrame.png";

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "2rem",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  textBox: {
    backgroundColor: "#D8C1B0",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  paragraph: {
    marginBottom: "1rem",
    lineHeight: 1.6,
  },
  //   rocketContainer: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
  //   module: {
  //     padding: "0.5rem 1rem",
  //     fontWeight: "bold",
  //     fontSize: "0.875rem",
  //     backgroundColor: "#ccc",
  //     borderRadius: "4px 4px 0 0",
  //   },
  //   moduleSecondary: {
  //     padding: "0.5rem 1rem",
  //     fontWeight: "bold",
  //     fontSize: "0.875rem",
  //     backgroundColor: "#aaa",
  //   },
  //   readinessBlock: {
  //     backgroundColor: "#444",
  //     color: "#fff",
  //     padding: "1rem",
  //     width: "160px",
  //     textAlign: "center",
  //   },
  //   readinessItem: {
  //     backgroundColor: "#666",
  //     borderRadius: "4px",
  //     padding: "0.25rem",
  //     marginTop: "0.25rem",
  //   },
  //   boosters: {
  //     display: "flex",
  //     gap: "0.5rem",
  //     marginTop: "1rem",
  //   },
  //   booster: {
  //     backgroundColor: "#ccc",
  //     padding: "0.25rem 0.5rem",
  //     fontSize: "0.75rem",
  //   },
  //   launchpad: {
  //     backgroundColor: "#000",
  //     color: "#fff",
  //     padding: "0.5rem 1.5rem",
  //     marginTop: "1rem",
  //     fontSize: "0.875rem",
  //     fontWeight: "bold",
  //   },
  logo: {
    width: "400px",
  },
});

const ReadinessRocket = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textBox}>
        <h2 className={classes.sectionTitle}>Readiness Rocket Framework</h2>
        <p className={classes.paragraph}>
          Just as rockets launch <strong>satellites</strong> into <em>space</em>
          , readiness rocket can launch <strong>enterprises</strong> into a new
          space of GenAI.
        </p>
        <p className={classes.paragraph}>
          The important components of rockets are <strong>payload</strong>,{" "}
          <strong>boosters</strong>, and <strong>launchpad</strong>.
        </p>
        <p className={classes.paragraph}>
          Just as <strong>payload</strong> carries satellite, the most critical
          component of the mission, payload of readiness rocket includes{" "}
          <strong>GenAI maturity assessment</strong>,{" "}
          <strong>scaled adoption strategy</strong>, and{" "}
          <strong>readiness areas</strong> — the most critical components of
          operational readiness.
        </p>
        <p className={classes.paragraph}>
          Just as <strong>boosters</strong> provide the necessary thrust to
          overcome earth's gravity and propel the rocket into space,{" "}
          <strong>boosters of readiness rocket</strong> facilitate enterprises
          to escape the status quo and accelerate toward new realms of AI
          innovations.
        </p>
        <p className={classes.paragraph}>
          Just as <strong>launchpad</strong> serves as the stable foundation for
          the rocket during preparation and liftoff, ensuring a safe and
          controlled launch, the launchpad of readiness rocket provides a strong
          foundation and support, helps mitigate risks and overcome issues, and
          ensures deliverables are achieved.
        </p>
        <p className={classes.paragraph}>
          Just as trajectory optimization enables rockets gain more speed
          through gravity turn, which involves using earth’s rotation for a
          speed boost, ecosystems enables scaled adoption of GenAI 3X faster by
          enabling collaboration between enterprises.
        </p>
      </div>

      {/* <div className={classes.rocketContainer}>
        <div className={classes.module}>GenAI Maturity Assessment</div>
        <div className={classes.moduleSecondary}>Scaled Adoption Strategy</div>

        <div className={classes.readinessBlock}>
          <div style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Readiness Areas
          </div>
          <div className={classes.readinessItem}>Customer</div>
          <div className={classes.readinessItem}>Technology</div>
          <div className={classes.readinessItem}>Data</div>
          <div className={classes.readinessItem}>People</div>
        </div>

        <div className={classes.boosters}>
          <div className={classes.booster}>Booster 1</div>
          <div className={classes.booster}>Booster 2</div>
          <div className={classes.booster}>Booster 3</div>
        </div>

        <div className={classes.launchpad}>Launchpad</div>
      </div> */}

      <div>
        <img src={RocketFrame} alt="Logo" className={classes.logo} />
      </div>
    </div>
  );
};

export default ReadinessRocket;
