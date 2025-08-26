// import React from "react";
// import { createUseStyles } from "react-jss";
// import { FaRegCheckSquare } from "react-icons/fa"; // Checkmark square icon

// // Define TypeScript interfaces
// type ConsultationCardProps = object;

// // Define styles using react-jss
// const useStyles = createUseStyles({
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     fontFamily:
//       '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//     padding: "20px",
//   },
//   card: {
//     backgroundColor: "#e8e2d4",
//     borderRadius: "12px",
//     padding: "60px 80px",
//     textAlign: "center",
//     width: "100%",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     "@media (max-width: 768px)": {
//       padding: "40px 30px",
//     },
//   },
//   title: {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     color: "#2c3e50",
//     marginBottom: "30px",
//     lineHeight: "1.2",
//     "@media (max-width: 768px)": {
//       fontSize: "2.2rem",
//     },
//   },
//   subtitle: {
//     fontSize: "1.2rem",
//     color: "#5a6c7d",
//     marginBottom: "40px",
//     fontWeight: "400",
//     "@media (max-width: 768px)": {
//       fontSize: "1.1rem",
//       marginBottom: "30px",
//     },
//   },
//   button: {
//     backgroundColor: "#1e3a5f",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     padding: "16px 32px",
//     fontSize: "1.1rem",
//     fontWeight: "500",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "10px",
//     textDecoration: "none",
//     "&:hover": {
//       backgroundColor: "#2c4a6b",
//       transform: "translateY(-2px)",
//       boxShadow: "0 4px 12px rgba(30, 58, 95, 0.3)",
//     },
//     "&:active": {
//       transform: "translateY(0)",
//     },
//     "@media (max-width: 768px)": {
//       padding: "14px 28px",
//       fontSize: "1rem",
//     },
//   },
//   icon: {
//     fontSize: "18px",
//   },
// });

// const ConsultationCardAssets: React.FC<ConsultationCardProps> = () => {
//   const classes = useStyles();

//   const mailtoLink = `mailto:info@scalinggenai.com?subject=Scaling%20GenAI%20consultation%20request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname`;

//   return (
//     <>
//       <div className={classes.container}>
//         <div className={classes.card}>
//           <h1 className={classes.title}>Need help with Assessment?</h1>
//           <p className={classes.subtitle}>Not sure where to start?</p>
//           <a href={mailtoLink} className={classes.button}>
//             Book a Consultation
//             <FaRegCheckSquare className={classes.icon} />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ConsultationCardAssets;

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "1400px",
    //height: "100%",
    backgroundColor: "#F9F7F2",
    //fontFamily: "Arial, sans-serif",
    padding: 80,
    "@media (max-width: 500px)": {
      padding: 30,
    },
  },
  container: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 8,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: 900,
    width: "100%",
  },
  heading: {
    // fontSize: 36,
    // fontWeight: "bold",
    // // marginBottom: 2,
    // marginBottom: 20,
    // color: "#222",
    // marginTop: "0px",
    fontSize: 18,
    marginBottom: 40,
    color: "#555",
  },
  heading2: {
    fontSize: 46,
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: "0px",
    color: "#222",
    "@media (max-width: 500px)": {
      fontSize: 33,
    },
  },
  description: {
    fontSize: 18,
    marginBottom: 40,
    color: "#555",
  },
  // button: {
  //   padding: "18px 36px",
  //   backgroundColor: "#002c3e",
  //   color: "#fff",
  //   border: "none",
  //   borderRadius: 6,
  //   fontSize: 20,
  //   fontWeight: 600,
  //   cursor: "pointer",
  //   transition: "all 0.3s ease",
  //   "&:hover": {
  //     backgroundColor: "#021123",
  //   },
  // },
  button: {
    backgroundColor: "#1e3a5f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "16px 32px",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#2c4a6b",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(30, 58, 95, 0.3)",
    },
    "&:active": {
      transform: "translateY(0)",
    },
    "@media (max-width: 768px)": {
      padding: "14px 28px",
      fontSize: "1rem",
    },
    "@media (max-width: 450px)": {
      padding: "14px 28px",
      fontSize: "0.6rem",
    },
  },
});

const ConsultationCardAssets = () => {
  const classes = useStyles();

  const mailtoLink = `mailto:info@scalinggenai.com?subject=Scaling%20GenAI%20consultation%20request&body=Hello,%0D%0A%0D%0AI would like to know more about Scaling GenAI.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AEmail:%0D%0APhone:%0D%0A%0D%0ARegards,%0D%0Aname`;
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.heading2}>Need help with Assessments?</h1>
        <h1 className={classes.heading}>Not sure where to start?</h1>

        <a href={mailtoLink} className={classes.button}>
          Book a Consultation →
        </a>
      </div>
    </div>
  );
};

export default ConsultationCardAssets;
