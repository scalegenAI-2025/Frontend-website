// import { createUseStyles } from "react-jss";
// //import Rocket from "../../../assets/rocketFrame.png";

// const useStyles = createUseStyles({
//   container: {
//     padding: 60,
//     backgroundColor: "white",
//     color: "black",
//     fontFamily: 'Georgia, "Times New Roman", serif',
//   },
//   heading: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 24,
//   },
//   contentRow: {
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     gap: 32,
//     flexWrap: "wrap",
//     "@media (max-width: 768px)": {
//       flexDirection: "column",
//     },
//   },
//   leftColumn: {
//     flex: 1,
//   },
//   rightColumn: {
//     flexShrink: 0,
//   },
//   boxGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//     gap: 24,
//     marginBottom: 40,
//   },
//   box: {
//     backgroundColor: "#002c3e",
//     color: "white",
//     padding: 20,
//     borderRadius: 12,
//     cursor: "pointer",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     transition: "transform 0.2s ease",
//     "&:hover": {
//       transform: "scale(1.02)",
//     },
//   },
//   boxTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   boxDescription: {
//     fontSize: 14,
//     lineHeight: 1.5,
//   },
//   downloadSection: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 8,
//     marginBottom: 40,
//   },
//   downloadButton: {
//     backgroundColor: "black",
//     color: "white",
//     padding: "8px 16px",
//     borderRadius: 4,
//     cursor: "pointer",
//     border: "none",
//   },
//   rocketWrapper: {
//     position: "relative",
//     width: "100%",
//     maxWidth: 400,
//   },
//   rocketImage: {
//     width: "100%",
//     height: "auto",
//   },
// });

// export default function AssessmentThirdComponent() {
//   const classes = useStyles();

//   const boxes = [
//     {
//       title: "GenAI Maturity",
//       description:
//         "Gauge your organization’s maturity level: 1 to 5, for GenAI",
//     },
//     {
//       title: "AI Maturity",
//       description:
//         "Gauge your organization’s maturity level: 1 to 5, for traditional AI",
//     },
//     {
//       title: "VITA",
//       description:
//         "Find out the impact of GenAI on your organization through VITA score",
//     },
//     {
//       title: "Value chain",
//       description: "Know the strength of your position in GenAI value chain",
//     },
//     {
//       title: "Infrastructure",
//       description:
//         "Find out how ready your organization’s infrastructure is to scale GenAI",
//     },
//     {
//       title: "Agents",
//       description: "Find out if your organization is ready to deploy agents",
//     },
//     {
//       title: "Customer Readiness",
//       description: "Find out how ready your customers are for GenAI",
//     },
//     {
//       title: "Technology Readiness",
//       description:
//         "Find out if your organization has the adjacent technologies to scale GenAI",
//     },
//     {
//       title: "People Readiness",
//       description:
//         "Find out if your organization has the right skills and competencies to scale GenAI",
//     },
//     {
//       title: "Operational Readiness",
//       description:
//         "Find out if your organization is operationally ready to scale GenAI",
//     },
//   ];

//   return (
//     <>
//       <div className={classes.container}>
//         <div className={classes.contentRow}>
//           {/* Left Column: Heading + Boxes + Download */}
//           <div className={classes.leftColumn}>
//             <div className={classes.heading}>Assessment Catalog</div>

//             <div className={classes.boxGrid}>
//               {boxes.map(({ title, description }, index) => (
//                 <div key={index} className={classes.box}>
//                   <div className={classes.boxTitle}>{title}</div>
//                   <div className={classes.boxDescription}>{description}</div>
//                 </div>
//               ))}
//             </div>

//             <div className={classes.heading}>Individual Assessments</div>

//             <div className={classes.boxGrid}>
//               <div className={classes.box}>
//                 <div className={classes.boxTitle}>AI Reskilling</div>
//                 <div className={classes.boxDescription}>
//                   Find out your AI journey map based on what you do, what you
//                   want to do, and how to do it
//                 </div>
//               </div>

//               <div className={classes.box}>
//                 <div className={classes.boxTitle}>AI/GenAI Mindset</div>
//                 <div className={classes.boxDescription}>
//                   Know your mindset toward AI
//                 </div>
//               </div>

//               <div className={classes.box}>
//                 <div className={classes.boxTitle}>Leadership</div>
//                 <div className={classes.boxDescription}>
//                   Find out if you have the four essential competencies of a
//                   digital leader
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Rocket Image */}
//           {/* <div className={classes.rightColumn}>
//             <div className={classes.rocketWrapper}>
//               <img src={Rocket} className={classes.rocketImage} alt="Rocket" />
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }

import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    padding: 20,
    position: "relative",
    "@media (max-width: 500px)": {
      paddingBottom: "20px",
    },
  },
  header: {
    color: "white",
    marginBottom: 40,
    paddingLeft: 4,
    margin: 0,
    fontSize: 46,
    fontWeight: "bold",
    marginTop: "0px",
    "@media (max-width: 500px)": {
      fontSize: 33,
    },
  },
  hireButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: 20,
    fontSize: 14,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
    // justifyContent: "center",
  },
  card: {
    flex: "1 1 calc(33.33% - 16px)",
    minWidth: 300,
    maxWidth: 400,
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 2px 0px rgba(225, 225, 225, 0.54)",
    boxSizing: "border-box",

    "@media (max-width: 1024px)": {
      flex: "1 1 calc(50% - 12px)",
    },
    "@media (max-width: 768px)": {
      flex: "1 1 100%",
    },
  },
  cardContent: {
    padding: 32,
    backgroundColor: " rgba(79, 75, 75, 0.49)",
    boxShadow: "0 4px 10px rgba(225, 225, 225, 0.86)",
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 400,
    marginBottom: 16,
    lineHeight: 1.2,
    "@media (max-width: 500px)": {
      fontSize: 26,
    },
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 1.5,
    marginBottom: 32,
    opacity: 0.9,
  },
  cardButton: {
    backgroundColor: "transparent",
    border: "1px solid",
    padding: "12px 24px",
    borderRadius: 24,
    fontSize: 14,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  darkCard: {
    composes: "$card",
    backgroundColor: "#111",
    color: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
    },
  },
  darkButton: {
    composes: "$cardButton",
    borderColor: "white",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#111",
    },
  },
});

const cardData = [
  {
    title: "GenAI Maturity",
    description: "Gauge your organization’s maturity level: 1 to 5, for GenAI",
    pdf: "/pdf/AssessmentPdf/GenAI Maturity.pdf",
  },
  {
    title: "AI Maturity",
    description:
      "Gauge your organization’s maturity level: 1 to 5, for traditional AI",
    pdf: "/pdf/AssessmentPdf/AI Maturity.pdf",
  },
  {
    title: "VITA",
    description:
      "Find out the impact of GenAI on your organization through VITA score",
    pdf: "/pdf/AssessmentPdf/VITA.pdf",
  },
  {
    title: "Value Chain",
    description: "Know the strength of your position in GenAI value chain",
    pdf: "/pdf/AssessmentPdf/Value Chain.pdf",
  },
  {
    title: "Infrastructure",
    description:
      "Find out how ready your organization’s infrastructure is to scale GenAI",
    pdf: "/pdf/AssessmentPdf/GenAI Maturity.pdf",
  },
  {
    title: "Agents",
    description: "Find out if your organization is ready to deploy agents",
    pdf: "/pdf/AssessmentPdf/Agents.pdf",
  },
  {
    title: "Reskilling",
    description: "Find out how ready your customers are for GenAI",
    pdf: "/pdf/AssessmentPdf/Reskilling.pdf",
  },
  {
    title: "Mindset",
    description:
      "Find out if your organization has the adjacent technologies to scale GenAI",
    pdf: "/pdf/AssessmentPdf/Mindset.pdf",
  },
  {
    title: "Leadership",
    description:
      "Find out if your organization has the right skills and competencies to scale GenAI",
    pdf: "/pdf/AssessmentPdf/Leadership.pdf",
  },
  {
    title: "Operational Readiness",
    description:
      "Find out if your organization is operationally ready to scale GenAI",
    pdf: "/pdf/AssessmentPdf/Operational Readiness.pdf",
  },
];

const AssessmentThirdComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleDownload = (pdfUrl: string) => {
    const username = localStorage.getItem("username");
    if (!username) {
      // If not logged in, redirect to login
      navigate("/user-login");
      return;
    }
    // If logged in, trigger file download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop() || "download.pdf";
    link.click();
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>All you need to Scale</h1>
      <div className={classes.cardsContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={classes.darkCard}>
            <div className={classes.cardContent}>
              <h2 className={classes.cardTitle}>{card.title}</h2>
              <p className={classes.cardDescription}>{card.description}</p>
              <button
                className={classes.darkButton}
                onClick={() => handleDownload(card.pdf)}
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentThirdComponent;
