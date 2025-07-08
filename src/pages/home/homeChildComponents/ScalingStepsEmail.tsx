// import React from "react";
// import { createUseStyles } from "react-jss";
// import rocket from "../../../assets/Logo (1).jpg"; // Ensure path is valid

// const useStyles = createUseStyles({
//   container: {
//     backgroundColor: "#000",
//     minHeight: "100vh",
//     color: "#fff",
//     padding: "40px 20px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   title: {
//     fontSize: 36,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   arrowLineWrapper: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//     width: "80%",
//     position: "relative",
//   },
//   arrowLine: {
//     flex: 1,
//     height: 2,
//     backgroundColor: "#fff",
//     position: "relative",
//     margin: "0 12px",
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       top: -5,
//       right: -6,
//       borderTop: "7px solid transparent",
//       borderBottom: "7px solid transparent",
//       borderLeft: "10px solid white",
//     },
//   },
//   arrowLabelLeft: {
//     fontSize: 14,
//     color: "#ccc",
//   },
//   arrowLabelRight: {
//     fontSize: 14,
//     color: "#ccc",
//   },
//   stairsWrapper: {
//     position: "relative",
//     width: "100%",
//     maxWidth: 800,
//     height: 500,
//     "@media (max-width: 800px)": {
//       height: "auto",
//     },
//   },
//   step: {
//     position: "absolute",
//     backgroundColor: "#fff",
//     color: "#000",
//     padding: "12px 20px",
//     fontWeight: "bold",
//     borderRadius: 6,
//     minWidth: 250,
//     boxShadow: "0 4px 8px rgba(255,255,255,0.2)",
//     transition: "transform 0.2s ease",
//     "&:hover": {
//       transform: "scale(1.05)",
//       backgroundColor: "#eee",
//     },
//     "@media (max-width: 800px)": {
//       position: "static",
//       marginBottom: 16,
//       width: "100%",
//       maxWidth: "100%",
//     },
//   },
//   rocket: {
//     position: "absolute",
//     width: 80,
//     height: 80,
//     "@media (max-width: 800px)": {
//       display: "none",
//     },
//   },
//   bottomLabel: {
//     position: "absolute",
//     bottom: -40,
//     left: 0,
//     color: "#ccc",
//     fontSize: 14,
//     "@media (max-width: 800px)": {
//       position: "static",
//       marginTop: 20,
//       textAlign: "left",
//     },
//   },
//   scalingText: {
//     position: "absolute",
//     bottom: 100,
//     right: -180,
//     color: "#fff",
//     fontSize: 24,
//     "@media (max-width: 800px)": {
//       position: "static",
//       marginTop: 20,
//       textAlign: "right",
//     },
//   },
//   highlight: {
//     color: "purple",
//     fontWeight: "bold",
//     fontSize: "1.0rem",
//     display: "inline-block",
//     marginRight: "0.5rem",
//   },
// });

// const steps = [
//   "1. Become a Member",
//   "2. Complete Assessments",
//   "3. Implement Assets",
//   "4. Leverage Ecosystem",
//   "5. Prepare Roadmap",
//   "6. Personalize Reskilling",
//   "7. Monitor Progress",
// ];

// const ScalingStepsEmail: React.FC = () => {
//   const classes = useStyles();

//   const handleEmailClick = () => {
//     const mailtoLink =
//       "mailto:aishwayagorakhshinde@gmail.com?subject=Scaling GenAI consultation request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname";
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div className={classes.container}>
//       <div className={classes.title}>Mitigate Huge Gap</div>

//       <div className={classes.arrowLineWrapper}>
//         <span className={classes.arrowLabelLeft}>
//           Lagging Enterprises (80%)
//         </span>
//         <div className={classes.arrowLine}></div>
//         <span className={classes.arrowLabelRight}>
//           Scaling Enterprises (100%)
//         </span>
//       </div>

//       <div className={classes.stairsWrapper}>
//         {/* Rocket image near Step 4 */}
//         <img
//           src={rocket}
//           alt="rocket"
//           className={classes.rocket}
//           style={{
//             bottom: `${3 * 60}px`,
//             left: `${3 * 80 - 150}px`,
//           }}
//         />

//         {/* Steps */}
//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className={classes.step}
//             onClick={
//               i === 0 || i === steps.length - 1 ? handleEmailClick : undefined
//             }
//             style={{
//               bottom: `${i * 60}px`,
//               left: `${i * 80}px`,
//               cursor: i === 0 || i === steps.length - 1 ? "pointer" : "default",
//             }}
//             role={i === 0 || i === steps.length - 1 ? "button" : undefined}
//             tabIndex={i === 0 || i === steps.length - 1 ? 0 : undefined}
//             onKeyPress={(e) => {
//               if ((i === 0 || i === steps.length - 1) && e.key === "Enter") {
//                 handleEmailClick();
//               }
//             }}
//           >
//             {step}
//           </div>
//         ))}

//         {/* Bottom and top labels */}
//         <div className={classes.bottomLabel}>I am a Lagging Enterprise</div>
//         <div
//           style={{
//             position: "absolute",
//             bottom: `${6 * 60 + 60}px`,
//             left: `${6 * 80 + 20}px`,
//             color: "#ccc",
//             fontSize: 14,
//             display: window.innerWidth <= 800 ? "none" : "block",
//           }}
//         >
//           I am now a <span className={classes.highlight}>Scaling</span>
//           Enterprise
//         </div>

//         <div className={classes.scalingText}>Scaling Steps</div>
//       </div>
//     </div>
//   );
// };

// export default ScalingStepsEmail;

import React from "react";
import { createUseStyles } from "react-jss";
import rocket from "../../../assets/Rocket_pic.jpg";
import scalingImage from "../../../assets/scale.png";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    /// minHeight: "110vh",
    color: "#fff",
    padding: "90px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    //marginBottom: "50px",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  arrowLineWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    width: "80%",
    position: "relative",
    "@media (max-width: 500px)": {
      justifyContent: "center",
      flexDirection: "row",
      gap: 10,
      marginBottom: 30,
    },
  },
  arrowLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#fff",
    position: "relative",
    margin: "0 12px",
    "&::after": {
      content: '""',
      position: "absolute",
      top: -5,
      right: -6,
      borderTop: "7px solid transparent",
      borderBottom: "7px solid transparent",
      borderLeft: "10px solid white",
    },
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  arrowIcon: {
    display: "none",
    color: "#ccc",
    fontSize: 24,
    fontWeight: "bold",
    "@media (max-width: 500px)": {
      display: "inline-block",
    },
  },
  arrowLabelLeft: {
    fontSize: 14,
    color: "#ccc",
    "@media (max-width: 500px)": {
      fontSize: 12,
    },
  },
  arrowLabelRight: {
    fontSize: 14,
    color: "#ccc",
    "@media (max-width: 500px)": {
      fontSize: 12,
    },
  },
  stairsWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 800,
    height: 500,
    "@media (max-width: 800px)": {
      height: "auto",
    },
  },
  step: {
    position: "absolute",
    backgroundColor: "#fff",
    color: "#000",
    padding: "12px 20px",
    fontWeight: "bold",
    borderRadius: 6,
    minWidth: 350,
    boxShadow: "0 4px 8px rgba(255,255,255,0.2)",
    transition: "transform 0.2s ease",
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#eee",
    },
    "@media (max-width: 800px)": {
      position: "static",
      marginBottom: 12,
      width: "100%",
      minWidth: "unset",
      fontSize: 14,
      padding: "10px 16px",
    },
  },
  rocket: {
    position: "absolute",
    width: 160,
    height: 160,
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  bottomLabel: {
    position: "absolute",
    bottom: -40,
    left: 0,
    color: "#ccc",
    fontSize: 14,
    "@media (max-width: 800px)": {
      position: "static",
      marginTop: 20,
      textAlign: "left",
    },
    "@media (max-width: 500px)": {
      marginBottom: 30,
    },
  },
  scalingText: {
    position: "absolute",
    bottom: 100,
    right: -10,
    color: "#fff",
    fontSize: 24,
    "@media (max-width: 800px)": {
      position: "static",
      marginTop: 20,
      textAlign: "right",
    },
    "@media (max-width: 500px)": {
      marginBottom: 30,
    },
  },
  // ✅ Updated: Desktop scaling label row - more width for text, image pushed right
  scalingLabelContainer: {
    position: "absolute",
    bottom: `${6 * 60 + 60}px`,
    left: `${6 * 80 + 20}px`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: 400, // ⬅️ Wider container pushes image right
    maxWidth: "100%",
    color: "#ccc",
    fontSize: 14,
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  scalingLabel: {
    flexGrow: 1,
    marginRight: 12,
  },
  mobileScalingContainer: {
    display: "none",
    flexDirection: "column",
    alignItems: "flex-end",
    color: "#ccc",
    fontSize: 14,
    width: "100%",
    maxWidth: 200,
    marginBottom: 20,
    "@media (max-width: 800px)": {
      display: "flex",
    },
  },
  mobileScalingLabel: {
    marginTop: 6,
  },
  scalingImageDesktop: {
    maxWidth: 100, // ⬅️ Reduce image size for spacing if needed
    width: "100%",
    height: "auto",
  },
  scalingImageMobile: {
    maxWidth: 120,
    width: "100%",
    height: "auto",
  },
  highlight: {
    color: "purple",
    fontWeight: "bold",
    fontSize: "1.0rem",
    display: "inline-block",
    marginRight: "0.5rem",
  },
});

const steps = [
  "1. Become a Member",
  "2. Complete Assessments",
  "3. Implement Assets",
  "4. Leverage Ecosystem",
  "5. Prepare Roadmap",
  "6. Personalize Reskilling",
  "7. Monitor Progress",
];

const ScalingStepsEmail: React.FC = () => {
  const classes = useStyles();

  const handleEmailClick = () => {
    const mailtoLink =
      "mailto:aishwayagorakhshinde@gmail.com?subject=Scaling GenAI consultation request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname";
    window.location.href = mailtoLink;
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Mitigate Huge Gap</div>

      <div className={classes.arrowLineWrapper}>
        <span className={classes.arrowLabelLeft}>
          Lagging Enterprises (80%)
        </span>

        <div className={classes.arrowLine}></div>

        <span className={classes.arrowIcon}>→</span>

        <span className={classes.arrowLabelRight}>
          Scaling Enterprises (100%)
        </span>
      </div>

      {/* MOBILE SCALING LABEL + IMAGE (right aligned) */}
      <div className={classes.mobileScalingContainer}>
        <div className={classes.mobileScalingLabel}>
          I am now a <span className={classes.highlight}>Scaling</span>
          Enterprise
        </div>
        <img
          src={scalingImage}
          alt="Scaling"
          className={classes.scalingImageMobile}
        />
      </div>

      <div className={classes.stairsWrapper}>
        {/* Rocket near Step 4 */}
        <img
          src={rocket}
          alt="rocket"
          className={classes.rocket}
          style={{
            bottom: `${3 * 60}px`,
            left: `${3 * 80 - 190}px`,
          }}
        />

        {/* Steps */}
        {steps.map((step, i) => (
          <div
            key={i}
            className={classes.step}
            onClick={
              i === 0 || i === steps.length - 1 ? handleEmailClick : undefined
            }
            style={{
              bottom: `${i * 60}px`,
              left: `${i * 80}px`,
              cursor: i === 0 || i === steps.length - 1 ? "pointer" : "default",
            }}
          >
            {step}
          </div>
        ))}

        {/* DESKTOP SCALING LABEL + IMAGE (now wider text + image right) */}
        <div className={classes.scalingLabelContainer}>
          <div className={classes.scalingLabel}>
            I am now a <span className={classes.highlight}>Scaling</span>{" "}
            Enterprise
          </div>
          <img
            src={scalingImage}
            alt="Scaling"
            className={classes.scalingImageDesktop}
          />
        </div>

        <div className={classes.bottomLabel}>
          I am a <span className={classes.highlight}>Lagging </span>Enterprise
        </div>

        <div className={classes.scalingText}>Scaling Steps</div>
      </div>
    </div>
  );
};

export default ScalingStepsEmail;
