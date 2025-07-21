import { createUseStyles } from "react-jss";
import logo from "../../assets/Logo (1).jpg";

const useStyles = createUseStyles({
  "@keyframes blink": {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0 },
  },
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "2.5rem 1.5rem",
    fontFamily: 'Georgia, "Times New Roman", serif',
  },
  topText: {
    fontSize: "1.5rem", // increased from 1.2rem
    marginBottom: "1.8rem",
  },
  linksWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: 800,
    margin: "0 auto 2.5rem",
    textAlign: "left",
  },
  follow: {
    flex: "1 1 40%",
    fontSize: "1.2rem", // increased from 1rem
    "& strong": {
      display: "block",
      fontSize: "2.5rem", // increased from 2rem
      marginTop: "0.3rem",
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
      "@media (max-width: 600px)": {
        fontSize: "20px",
      },
    },
  },
  navLinks: {
    flex: "1 1 40%",
    fontSize: "1.2rem", // increased from 1rem
    lineHeight: 2.2,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    cursor: "pointer",
    fontSize: "1.2rem", // increased from 1rem
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  logoImage: {
    maxWidth: 700, // increased size, can adjust px or %
    width: "100%",
    height: "auto",
    // marginTop: "1.5rem",
    animation: "$blink 1s ease-in-out 1",
    animationFillMode: "forwards",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.topText}>We help enterprises scale GenAI</div>
      <div className={classes.linksWrapper}>
        <div className={classes.follow}>
          Follow us on
          <a
            href="https://www.linkedin.com/company/scaling-genai/about/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <strong>LinkedIn</strong>
          </a>
        </div>
        <div className={classes.navLinks}>
          <a href="/about-us" className={classes.link}>
            About Us
          </a>
          <a href="/privacy-policy" className={classes.link}>
            Privacy Policy
          </a>
          <a href="/cookie-policy" className={classes.link}>
            Cookie Policy
          </a>
          <a href="/terms-conditions" className={classes.link}>
            Terms and Conditions
          </a>
          <a href="/admin-login" className={classes.link}>
            Admin login
          </a>
        </div>
      </div>
      <a href="/">
        <img
          src={logo}
          alt="Scaling Generative AI"
          className={` ${classes.logoImage}`}
        />
      </a>
    </footer>
  );
};

export default Footer;
