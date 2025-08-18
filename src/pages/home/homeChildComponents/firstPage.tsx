// import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles({
//   "@global": {
//     "*, *::before, *::after": {
//       boxSizing: "border-box",
//     },
//     body: {
//       margin: 0,
//       padding: 0,
//       overflowX: "hidden",
//       // fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       // backgroundColor: "#000",
//     },
//   },

//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     paddingTop: "150px",
//     paddingLeft: "1rem",
//     paddingRight: "1rem",
//     minHeight: "100vh",

//     color: "#fff",
//     overflowX: "hidden",
//     maxWidth: "100vw",
//   },

//   homeHeader: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: "1.5rem",
//     width: "100%",
//   },

//   homeHeader1: {
//     margin: 0,
//     fontSize: "clamp(2.2rem, 6vw, 5rem)",
//     fontWeight: 700,
//     lineHeight: 1.1,
//   },

//   homeHeader2: {
//     margin: 0,
//     fontSize: "clamp(2.2rem, 6vw, 5rem)",
//     fontWeight: 700,
//     lineHeight: 1.1,
//   },

//   homeHeader3: {
//     marginTop: "1.5rem",
//     fontWeight: 400,
//     fontSize: "clamp(2rem, 2.5vw, 1.5rem)",
//     color: "#ffffff",
//     maxWidth: "90%",
//   },

//   // Mobile-specific tweaks
//   "@media (max-width: 600px)": {
//     container: {
//       paddingTop: "100px",
//       paddingBottom: "50px",
//     },
//     homeHeader1: {
//       fontSize: "clamp(1.8rem, 8vw, 2.5rem)",
//     },
//     homeHeader2: {
//       fontSize: "clamp(1.8rem, 8vw, 2.5rem)",
//     },
//     homeHeader3: {
//       fontSize: "clamp(2rem, 4vw, 1.2rem)",
//     },
//   },
// });

// const FirstPage = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <div className={classes.homeHeader}>
//         <h1 className={classes.homeHeader1}>Help Enterprises</h1>
//         <h1 className={classes.homeHeader2}>Scale Generative AI</h1>
//       </div>
//       <h3 className={classes.homeHeader3}>
//         Through Readiness Rocket Framework
//       </h3>
//     </div>
//   );
// };

// export default FirstPage;

// src/pages/home/homeChildComponents/firstPage.tsx
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      // fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#000",
    },
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "150px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    minHeight: "100vh",
    color: "#fff",
    overflowX: "hidden",
    maxWidth: "100vw",
  },

  homeHeader: {
    //display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    width: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.1)", // optional overlay behind text
    padding: "1rem 2rem",
    borderRadius: "12px",
  },

  homeHeaderLine: {
    margin: 0,
    fontSize: "clamp(2.2rem, 6vw, 5rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  },

  homeHeader3: {
    marginTop: "1.5rem",
    fontWeight: 400,
    fontSize: "clamp(1.2rem, 4vw, 2rem)",
    color: "#ffffff",
    maxWidth: "90%",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
  },

  "@media (max-width: 600px)": {
    container: {
      paddingTop: "100px",
      paddingBottom: "50px",
    },
    homeHeaderLine: {
      fontSize: "clamp(1.8rem, 8vw, 2.5rem)",
    },
    homeHeader3: {
      fontSize: "clamp(1rem, 5vw, 1.2rem)",
    },
  },
});

const FirstPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.homeHeader}>
        <h1 className={classes.homeHeaderLine}>We Help Enterprises</h1>
        <h1 className={classes.homeHeaderLine}>Scale Generative AI</h1>
      </div>
      <h3 className={classes.homeHeader3}>
        Through Readiness Rocket Framework
      </h3>
    </div>
  );
};

export default FirstPage;
