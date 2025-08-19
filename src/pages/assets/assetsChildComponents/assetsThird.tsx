// import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles({
//   container: {
//     padding: 60,
//     backgroundColor: "white",
//     color: "black",
//     fontFamily: 'Georgia, "Times New Roman", serif',
//     "@media (max-width: 768px)": {
//       padding: 20,
//     },
//   },
//   contentRow: {
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "space-between",
//     gap: 32,
//     "@media (max-width: 768px)": {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   },
//   leftColumn: {
//     flex: 1,
//   },
//   rightColumn: {
//     flexShrink: 0,
//     "@media (max-width: 768px)": {
//       alignSelf: "center",
//       marginTop: 32,
//     },
//   },
//   assetGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//     gap: 24,
//     marginBottom: 40,
//   },
//   assetBox: {
//     border: "1px solid #d1d5db",
//     borderRadius: 8,
//     padding: 16,
//     backgroundColor: "#f9fafb",
//     textAlign: "center",
//   },
//   assetTitle: {
//     fontWeight: "bold",
//     marginBottom: 12,
//     fontSize: 14,
//   },
//   downloadButton: {
//     backgroundColor: "#002c3e",
//     color: "white",
//     padding: "8px 16px",
//     borderRadius: 8,
//     border: "none",
//     cursor: "pointer",
//     fontSize: 14,
//   },
//   moreText: {
//     marginBottom: 40,
//     textAlign: "center",
//     fontWeight: "600",
//   },
//   rocketWrapper: {
//     position: "relative",
//     width: 400,
//     "@media (max-width: 768px)": {
//       width: "100%",
//       maxWidth: 300,
//     },
//   },
//   rocketImage: {
//     width: "100%",
//     height: "auto",
//   },
// });

// export default function GenAILaunchpad() {
//   const classes = useStyles();

//   const assets = [
//     "Customer Readiness Audit",
//     "Business Case Selection",
//     "Productivity Gain Calculation",
//     "Pilot Selection",
//     "Vendor Evaluation",
//     "Green AI Evaluation",
//     "TBA",
//     "Customer Readiness Audit",
//     "Business Case Selection",
//     "Productivity Gain Calculation",
//     "Pilot Selection",
//     "Vendor Evaluation",
//     "Green AI Evaluation",
//     "TBA",
//     "Customer Readiness Audit",
//     "Business Case Selection",
//     "Productivity Gain Calculation",
//     "Pilot Selection",
//     "Vendor Evaluation",
//     "Green AI Evaluation",
//     "TBA",
//     "Customer Readiness Audit",
//     "Business Case Selection",
//     "Productivity Gain Calculation",
//     "Pilot Selection",
//     "Vendor Evaluation",
//     "Green AI Evaluation",
//     "TBA",
//   ];

//   return (
//     <div className={classes.container}>
//       <div className={classes.contentRow}>
//         {/* Left Column: Boxes with asset titles and download buttons */}
//         <div className={classes.leftColumn}>
//           <div className={classes.assetGrid}>
//             {assets.map((title, index) => (
//               <div key={index} className={classes.assetBox}>
//                 <div className={classes.assetTitle}>{title}</div>
//                 <button className={classes.downloadButton}>Download</button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Column: Rocket Image */}
//         {/* <div className={classes.rightColumn}>
//           <div className={classes.rocketWrapper}>
//             <img src={Rocket} className={classes.rocketImage} alt="Rocket" />
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { createUseStyles } from "react-jss";

// Replace imports with your actual SVG icon files
import CustomerIcon from "../../../assets/CourseImage1.png";
import TechnologyIcon from "../../../assets/CourseImage2.png";
import DataIcon from "../../../assets/CourseImage3.png";
import PeopleIcon from "../../../assets/CourseImage3.png";
import IndustryIcon from "../../../assets/CourseImage1.png";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "white",
    padding: 40,
  },
  categoryHeader: {
    ///color: "white",
    // margin: "60px 0 20px",
    // fontSize: 32,
    //fontWeight: "bold",
    fontSize: 46,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: "0px",
    color: "#222",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    backgroundColor: "white",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    backgroundColor: "#444444",
    color: "#fff",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
    },
  },
  iconWrapper: {
    padding: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
      height: "100%",
      // objectFit: "contain",
    },
  },
  cardContent: {
    padding: 20,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    borderBottom: "1px solid #fff",
    paddingBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 12,
  },
  button: {
    alignSelf: "flex-start",
    background: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    borderRadius: 24,
    padding: "8px 16px",
    fontSize: 14,
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      background: "#fff",
      color: "#111",
    },
  },
});

const categories = {
  Customer: [
    {
      title: "Selecting Right Customer for GenAI",
      description:
        "Criteria to identify ideal early adopters for maximum impact.",
    },
    {
      title: "Selling Generative AI",
      description: "Strategies to position and close enterprise GenAI deals.",
    },
    {
      title: "3 Piloting Mistakes",
      description:
        "Common errors that derail GenAI pilots and how to avoid them.",
    },
  ],
  Technology: [
    {
      title: "Building the Right Infrastructure",
      description: "Key tech and cloud components for scalable GenAI.",
    },
    {
      title: "Conducting AI Audit",
      description:
        "Assessing AI systems for compliance, performance, and risk.",
    },
    {
      title: "Top AI Tools, Frameworks, and Platforms",
      description: "Curated list of leading AI/GenAI solutions.",
    },
    {
      title: "Agentic AI Architecture",
      description: "Guidelines for autonomous, goal-driven AI systems.",
    },
  ],
  Data: [
    {
      title: "Fixing the Organization Data",
      description: "Steps to clean, structure, and govern enterprise data.",
    },
    {
      title: "Data Monetization",
      description: "Turning organizational data into new revenue streams.",
    },
  ],
  People: [
    {
      title: "12 New AI/GenAI Roles",
      description: "Emerging job titles shaping the AI-powered workforce.",
    },
    {
      title: "Responsible AI Framework",
      description: "Ethical and compliant AI deployment guidelines.",
    },
  ],
  Industry: [
    {
      title: "Top 5 Industry-Agnostic Use Cases",
      description: "Universal GenAI applications across sectors.",
    },
    {
      title: "Generative AI Competitive Landscape",
      description: "Market players, trends, and positioning.",
    },
    {
      title: "GenAI Impact on Media & Entertainment",
      description: "Content creation and audience engagement transformation.",
    },
    {
      title: "GenAI Impact on Education",
      description: "Personalized, scalable, and adaptive learning models.",
    },
    {
      title: "GenAI Impact on Automotive",
      description: "AI-driven design, manufacturing, and mobility solutions.",
    },
    {
      title: "GenAI Impact on Financial Services",
      description:
        "Enhanced decision-making, automation, and fraud prevention.",
    },
    {
      title: "GenAI Impact on CMT",
      description: "Transformation in communications, media, and technology.",
    },
    {
      title: "GenAI Impact on Retail",
      description: "Hyper-personalized shopping and intelligent supply chains.",
    },
    {
      title: "GenAI Impact on Life Sciences",
      description: "Accelerated drug discovery and patient care innovation.",
    },
    {
      title: "GenAI Impact on Energy",
      description: "AI-enabled grid optimization and sustainable operations.",
    },
  ],
};

const categoryIcons = {
  Customer: CustomerIcon,
  Technology: TechnologyIcon,
  Data: DataIcon,
  People: PeopleIcon,
  Industry: IndustryIcon,
};

export default function KnowledgeCardsWithIcons() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {Object.entries(categories).map(([category, items]) => (
        <div key={category}>
          <h2 className={classes.categoryHeader}>{category}</h2>
          <div className={classes.cardsContainer}>
            {items.map((item, idx) => (
              <div key={idx} className={classes.card}>
                <div className={classes.iconWrapper}>
                  <img src={categoryIcons[category]} alt={`${category} icon`} />
                </div>
                <div className={classes.cardContent}>
                  <h3 className={classes.cardTitle}>{item.title}</h3>
                  <p className={classes.cardDescription}>{item.description}</p>
                  <button className={classes.button}>Download</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
