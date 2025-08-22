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
//import React from "react";

import { createUseStyles } from "react-jss";

// ---------- TYPES ----------
type CategoryKey = "Customer" | "Technology" | "Data" | "People" | "Industry";

interface CardItem {
  title: string;
  description: string;
  pdf: string;
}

type Categories = Record<CategoryKey, CardItem[]>;

// ---------- STYLES ----------
const useStyles = createUseStyles({
  container: {
    backgroundColor: "white",
    padding: 40,
    paddingTop: 20,
  },
  categoryHeader: {
    fontSize: 46,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
    "@media (max-width: 500px)": {
      fontSize: 36,
      display: "flex",
      justifyContent: "center",
    },
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    marginBottom: "80px",
    backgroundColor: "white",
    "@media (max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    backgroundColor: "#dfdddd",
    color: "#000",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 5px 0px rgba(126, 122, 122, 0.4)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(225, 225, 225, 0.86)",
    },
  },
  cardContent: {
    padding: 20,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // boxShadow: "0 5px 0px rgba(126, 122, 122, 0.4)",
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    // borderBottom: "1px solid #000",
    paddingBottom: 6,
    "@media (max-width: 500px)": {
      fontSize: 24,
    },
  },
  cardDescription: {
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 12,
  },
  button: {
    alignSelf: "flex-start",
    background: "transparent",
    //backgroundColor: "#1e3a5f",
    color: "#000",

    border: "1px solid #000",
    borderRadius: 24,
    padding: "8px 16px",
    fontSize: 14,
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#2c4a6b",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(30, 58, 95, 0.3)",
      color: "white",
    },
    // "&:active": {
    //   transform: "translateY(0)",
    // },
    "&:active": {
      background: "white",
      color: "black",
    },
  },
});

// ---------- DATA ----------
const categories: Categories = {
  Customer: [
    {
      title: "Selecting Right Customer for GenAI",
      description:
        "Criteria to identify ideal early adopters for maximum impact.",
      pdf: "/pdf/AssetsPdf/C-Selecting the right customer for GenAI.pdf",
    },
    {
      title: "Selling Generative AI",
      description: "Strategies to position and close enterprise GenAI deals.",
      pdf: "/pdf/AssetsPdf/C-Selling GenAI.pdf",
    },
    {
      title: "3 Piloting Mistakes",
      description:
        "Common errors that derail GenAI pilots and how to avoid them.",
      pdf: "/pdf/AssetsPdf/C-Avoid these 3 piloting mistakes.pdf",
    },
  ],
  Technology: [
    {
      title: "Building the Right Infrastructure",
      description: "Key tech and cloud components for scalable GenAI.",
      pdf: "/pdf/AssetsPdf/T-Building the right technology infra.pdf",
    },
    {
      title: "Conducting AI Audit",
      description:
        "Assessing AI systems for compliance, performance, and risk.",
      pdf: "/pdf/AssetsPdf/T-Conducting AI Audit.pdf",
    },
    {
      title: "Top AI Tools, Frameworks, and Platforms",
      description: "Curated list of leading AI/GenAI solutions.",
      pdf: "/pdf/AssetsPdf/T-Tools n frameworks.pdf",
    },
    {
      title: "Agentic AI Architecture",
      description: "Guidelines for autonomous, goal-driven AI systems.",
      pdf: "/pdf/AssetsPdf/T-Agentic AI Architecture.pdf",
    },
  ],
  Data: [
    {
      title: "Fixing the Organization Data",
      description: "Steps to clean, structure, and govern enterprise data.",
      pdf: "/pdf/AssetsPdf/D-Fixing the organization data.pdf",
    },
    {
      title: "Data Monetization",
      description: "Turning organizational data into new revenue streams.",
      pdf: "/pdf/AssetsPdf/D-Data Monetization.pdf",
    },
  ],
  People: [
    {
      title: "12 New AI/GenAI Roles",
      description: "Emerging job titles shaping the AI-powered workforce.",
      pdf: "/pdf/AssetsPdf/P-12 New Roles.pdf",
    },
    {
      title: "Responsible AI Framework",
      description: "Ethical and compliant AI deployment guidelines.",
      pdf: "/pdf/AssetsPdf/P-RAI Framework.pdf",
    },
  ],
  Industry: [
    {
      title: "Top 5 Industry-Agnostic Use Cases",
      description: "Universal GenAI applications across sectors.",
      pdf: "/pdf/AssetsPdf/I-Top 5 GenAI Use cases.pdf",
    },
    {
      title: "Generative AI Competitive Landscape",
      description: "Market players, trends, and positioning.",
      pdf: "/pdf/AssetsPdf/I-GenAI Comp Landscape.pdf",
    },
    {
      title: "GenAI Impact on Media & Entertainment",
      description: "Content creation and audience engagement transformation.",
      pdf: "/pdf/AssetsPdf/I-GenAI Impact-Media n Entertainment.pdf",
    },
    {
      title: "GenAI Impact on Education",
      description: "Personalized, scalable, and adaptive learning models.",
      pdf: "/pdf/AssetsPdf/I-GenAI impact-Education.pdf",
    },
    {
      title: "GenAI Impact on Automotive",
      description: "AI-driven design, manufacturing, and mobility solutions.",
      pdf: "/pdf/AssetsPdf/I-GenAI Impact Automotive.pdf",
    },
    {
      title: "GenAI Impact on Financial Services",
      description:
        "Enhanced decision-making, automation, and fraud prevention.",
      pdf: "/pdf/AssetsPdf/I-GenAI Impact finance.pdf",
    },
    {
      title: "GenAI Impact on CMT",
      description: "Transformation in communications, media, and technology.",
      pdf: "/pdf/AssetsPdf/I-GenAI impact-communications.pdf",
    },
    {
      title: "GenAI Impact on Retail",
      description: "Hyper-personalized shopping and intelligent supply chains.",
      pdf: "/pdf/AssetsPdf/I-GenAI impact-retail.pdf",
    },
    {
      title: "GenAI Impact on Life Sciences",
      description: "Accelerated drug discovery and patient care innovation.",
      pdf: "/pdf/AssetsPdf/I-GenAI impact-lifesciences.pdf",
    },
    {
      title: "GenAI Impact on Energy",
      description: "AI-enabled grid optimization and sustainable operations.",
      pdf: "/pdf/AssetsPdf/I-GenAI impact-energy.pdf",
    },
  ],
};

// ---------- COMPONENTS ----------
interface CardProps {
  item: CardItem;
}

function Card({ item }: CardProps) {
  const classes = useStyles();
  //  const [clicked, setClicked] = useState(false);
  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <h3 className={classes.cardTitle}>{item.title}</h3>
        <p className={classes.cardDescription}>{item.description}</p>
        <a href={item.pdf} download className={classes.button}>
          Download
        </a>
      </div>
    </div>
  );
}

interface CategorySectionProps {
  category: CategoryKey;
  items: CardItem[];
}

function CategorySection({ category, items }: CategorySectionProps) {
  const classes = useStyles();
  return (
    <section aria-labelledby={`${category}-header`}>
      <h2 id={`${category}-header`} className={classes.categoryHeader}>
        {category}
      </h2>
      <div className={classes.cardsContainer}>
        {items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

// ---------- MAIN ----------
export default function KnowledgeCards() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {(Object.entries(categories) as [CategoryKey, CardItem[]][]).map(
        ([category, items]) => (
          <CategorySection key={category} category={category} items={items} />
        )
      )}
    </div>
  );
}
