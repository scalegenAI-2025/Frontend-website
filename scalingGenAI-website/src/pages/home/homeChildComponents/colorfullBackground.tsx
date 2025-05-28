import { createUseStyles } from "react-jss";
import colorfullImage from "../../../assets/colorfulImage.png";
const useStyles = createUseStyles({
  container: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    backgroundImage: `url(${colorfullImage})`, // Use the uploaded image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  content: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 32,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    opacity: 0.75,
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    borderRadius: 9999,
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(4px)",
    fontWeight: 500,
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
      transform: "scale(1.05)",
    },
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    textAlign: "center",
    color: "white",
  },
  date: {
    marginBottom: 32,
    fontSize: 18,
    opacity: 0.8,
    fontWeight: 300,
  },
  title: {
    fontSize: "clamp(2rem, 6vw, 6rem)",
    fontWeight: "bold",
    lineHeight: 1.1,
    marginBottom: 48,
  },
  bouncingDot: {
    display: "inline-block",
    width: 45,
    height: 45,
    backgroundColor: "#facc15",
    borderRadius: "50%",
    animation: "$bounce 1s infinite",
  },
  locationText: {
    fontSize: 40,
    fontWeight: 300,
    marginBottom: 48,
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 32,
    "& > div": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "white",
      margin: "0 6px",
      opacity: 0.4,
      "&:first-child": {
        opacity: 1,
      },
    },
  },
  "@keyframes bounce": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-20%)" },
  },
});

const PolyOpportunityHero = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <main className={classes.main}>
          <div className={classes.title}>
            Scale 3X thr <span className={classes.bouncingDot} /> ugh
            <br />
            Ec{" "}
            <span
              className={classes.bouncingDot}
              style={{ animationDelay: "0.2s" }}
            />{" "}
            systems
          </div>
          <div className={classes.locationText}>
            Future of work shall largely depend upon a firm's ability to work in
            ecosystems
          </div>
        </main>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default PolyOpportunityHero;
