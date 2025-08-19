import React from "react";
import { createUseStyles } from "react-jss";

import BlackNavbar from "../navbar/blackNavbar";
import Footer from "./footer";

const useStyles = createUseStyles({
  container: {
    //  maxWidth: 800,
    margin: "0 auto",
    padding: "2rem",
    // fontFamily: "'Segoe UI', sans-serif",
    lineHeight: 1.6,
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    marginTop: "100px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  },
  content: {
    fontSize: "1rem",
    color: "#555",
  },
});

const CookiePolicy: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <BlackNavbar />
      <div className={classes.container}>
        <h1 className={classes.header}>Cookie Policy</h1>
        <p className={classes.content}>
          We do not use any cookies on the website at the moment. The policy
          will be updated if we intend to use any cookies on{" "}
          <strong>www.scalinggenai.com</strong> in future.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
