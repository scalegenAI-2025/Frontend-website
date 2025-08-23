import { createUseStyles } from "react-jss";
//import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import GenAIMindsetTop from "./GenAIMindsetChild/GenAIMindsetTop";
import GenAIMindsetOverview from "./GenAIMindsetChild/GenAIMindsetOverview";
import GenAIMindsetContain from "./GenAIMindsetChild/GenAIMindsetContain";
import GenAIOperationalCoach from "../GenAIOperational/GenAIOperationalChild/GenAIOperationalCoach";
import EcosystemPage from "./GenAIMindsetChild/ecosystem";
import { useNavigate } from "react-router-dom";
import OrderFirstBook from "../AIGenAILeadersBook/AIGenAIChild/orderBook";
import BlackNavbar from "../../../components/navbar/blackNavbar";

const useStyles = createUseStyles({
  heroSection: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  contentWrapper: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
  button: {
    backgroundColor: "#002c3e",
    color: "white",
    border: "none",
    padding: "15px 30px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1e4a66",
      transform: "translateY(-2px)",
    },
  },
});

function GenAIMindset() {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/member");
  };
  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.contentWrapper}>
          <BlackNavbar />
          <GenAIMindsetTop />
          <GenAIMindsetOverview />
          <GenAIMindsetContain />
          <GenAIOperationalCoach />
          <EcosystemPage />
        </div>
        <button className={classes.button} onClick={handleClick}>
          Become a member →
        </button>
      </div>
      <OrderFirstBook />

      <Footer />
    </>
  );
}

export default GenAIMindset;
