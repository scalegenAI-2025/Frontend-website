import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#e8e0d4",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "35px",
    fontWeight: "normal",
    padding: "25px 25px",
    color: "#333",
    margin: 0,
  },
  hireButton: {
    backgroundColor: "#fff",
    border: "1px solid #333",
    padding: "12px 24px",
    fontSize: 16,
    cursor: "pointer",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginBottom: 60,
  },
  // grid: {
  //   display: "grid",
  //   padding: "25px",
  //   gridTemplateColumns: "repeat(4, 1fr)",
  //   gap: 0, // No gap so borders align
  // },

  grid: {
    display: "grid",
    padding: "25px",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    // borderTop: "1px solid #333",
    // borderLeft: "1px solid #333",
    // borderRight: "1px solid #333",
    // borderBottom: "1px solid #333",
  },

  card: {
    backgroundColor: "#e8e0d4",
    display: "flex",
    flexDirection: "column",

    "&:nth-child(4n + 1) $cardContent": {
      borderLeft: "1px solid #333",
    },
  },
  cardImage: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    marginBottom: 0,
  },
  // cardContent: {
  //   padding: "30px 20px",
  //   borderBottom: "1px solid #333",
  //   //borderLeft: "1px solid #333",
  //   borderRight: "1px solid #333",
  //   height: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "flex-start",
  // },

  cardContent: {
    padding: "30px 20px",
    borderBottom: "1px solid #333",
    borderRight: "1px solid #333",
    height: "80%",
    display: "flex",
    paddingBottom: "0px",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderLeft: "none",
    // Add left border for first card in each row
    "&:nth-child(4n + 1)": {
      // 4 cards per row
      // borderLeft: "1px solid #333",
    },
  },

  cardTitle: {
    fontSize: 36,
    fontWeight: "normal",
    color: "#333",
    marginBottom: 20,
    lineHeight: 1.2,
  },
  cardSeparator: {
    height: 1,
    backgroundColor: "#333",
    marginBottom: 25,
    width: "80%",
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 1.5,
    color: "#333",
    fontWeight: "normal",
  },
});

const QualitiesPage = () => {
  const classes = useStyles();

  const qualities = [
    {
      title: "Customer",
      description:
        "The success of a business hinges on three key factors: delivering value to customers, generating profits, and managing customer relationships effectively. GenAI can enhance these factors by creating differentiated content to boost value and profits while fostering trust through responsible AI adoption. Understanding customer perspectives on GenAI is crucial, making customer the first readiness area of readiness rocket",
      image: "data:image/svg+xml;base64,...", // Replace with real image
    },
    {
      title: "Technology",
      description:
        "GenAI systems demand a strong technological foundation to support complex computations, scalable resources, and smooth integration with existing IT systems. Efficient management of technical debt is crucial to maximize the value and performance of these solutions. This makes technology the second readiness area of readiness rocket",
      image: "data:image/svg+xml;base64,...",
    },
    {
      title: "Data",
      description:
        "For GenAI models to perform accurately, they rely on high-quality, diverse data that is clean, well-structured, and readily available across systems. Proper data governance with clear policies and security measures ensures its integrity while enabling users to extract valuable insights. This makes data the third readiness area of readiness rocket.",
      image: "data:image/svg+xml;base64,...",
    },
    {
      title: "People",
      description:
        "Competent people are needed to develop, implement, and maintain genAI systems effectively. For its successful implementation, it is important that leaders should nurture a culture of continuous learning and collaboration among employees. This makes people the fourth readiness area of the readiness rocket.",
      image: "data:image/svg+xml;base64,...",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Our Qualities</h1>
      </div>

      <div className={classes.divider}></div>

      <div className={classes.grid}>
        {qualities.map((quality, index) => (
          <div key={index} className={classes.card}>
            <img
              src={quality.image}
              alt={quality.title}
              className={classes.cardImage}
            />
            <div className={classes.cardContent}>
              <h2 className={classes.cardTitle}>{quality.title}</h2>
              <div className={classes.cardSeparator}></div>
              <p className={classes.cardDescription}>{quality.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualitiesPage;
