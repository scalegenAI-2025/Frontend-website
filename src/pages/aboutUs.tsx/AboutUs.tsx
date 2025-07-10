import React from "react";
import { createUseStyles } from "react-jss";
import image from "../../assets/_DSC5769.jpg";
import QR from "../../assets/QR.png";

const useStyles = createUseStyles({
  section: {
    backgroundColor: "#f7f4ef", // sampled background color
    padding: "64px 24px",
    fontFamily: "'Inter', sans-serif",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
    "@media (min-width: 768px)": {
      flexDirection: "row",
      alignItems: "flex-start",
    },
  },
  image: {
    width: "280px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "4px",
  },
  textBlock: {
    flex: 1,
    textAlign: "left",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "16px",
  },
  paragraph: {
    fontSize: "18px",
    marginBottom: "16px",
    lineHeight: "1.6",
    "& b": {
      fontWeight: "600",
    },
    "& i": {
      fontStyle: "italic",
    },
  },
  contact: {
    fontSize: "16px",
    marginTop: "24px",
  },
  qrCode: {
    marginTop: "16px",
    width: "100px",
    height: "100px",
  },
});

const AboutUs: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <img
          src={image} // replace with actual profile path
          alt="Amit Prabhu"
          className={classes.image}
        />
        <div className={classes.textBlock}>
          <h2 className={classes.heading}>About Us</h2>
          <p className={classes.paragraph}>
            <b>Scaling Generative AI</b> is the brainchild of Amit Prabhu, an AI
            Consultant, Author, Speaker, Business Trainer, Policymaker,
            Entrepreneur, and Career Coach.
          </p>
          <p className={classes.paragraph}>
            Based on his 3rd book,{" "}
            <i>
              Scaling Generative AI: An Operational Readiness Framework for
              Enterprises
            </i>
            , <b>Scaling Generative AI</b> helps enterprises scale generative AI
            through ecosystems.
          </p>
          <div className={classes.contact}>
            For more details,
            <br />
            Email: <a href="mailto:amit@amitprabhu.net">amit@amitprabhu.net</a>
            <br />
            <br />
            <a href=" https://www.linkedin.com/company/scaling-genai/about/">
              {" "}
              Connect on LinkedIn:
            </a>
            <br />
            <img
              src={QR} // replace with actual QR path
              alt="QR Code to LinkedIn"
              className={classes.qrCode}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
