// // ScalingSteps.tsx
// import React from "react";
// import { createUseStyles } from "react-jss";
// import { useNavigate } from "react-router-dom";
// import graph from "../../../assets/graph.png";
// const useStyles = createUseStyles({
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     flexWrap: "wrap",
//     gap: 20,
//   },
//   stepButton: {
//     background: "#333",
//     color: "#fff",
//     padding: "12px 20px",
//     border: "none",
//     borderRadius: 12,
//     fontWeight: "bold",
//     fontSize: 14,
//     cursor: "pointer",
//     minWidth: 140,
//   },
//   stepButtonInner: {
//     background: "grey",
//     color: "#fff",
//     padding: "12px 20px",
//     border: "none",
//     borderRadius: 12,
//     fontWeight: "bold",
//     fontSize: 14,
//     cursor: "pointer",
//     minWidth: 140,
//   },
//   arrow: {
//     fontSize: 30,
//     color: "#999",
//   },
//   cluster: {
//     background: "#333",
//     color: "#fff",
//     borderRadius: 20,
//     padding: 15,
//     display: "flex",
//     flexDirection: "column",
//     gap: 15,
//     minWidth: 140,
//     alignItems: "center",
//   },
//   title: {
//     fontWeight: 600,
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//   },
//   pink: {
//     color: "#d633ff",
//     fontStyle: "italic",
//   },
//   finalSection: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     gap: 10,
//   },
//   graph: {
//     width: 120,
//     height: 80,
//   },
// });

// const ScalingSteps: React.FC = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   return (
//     <div style={{ padding: 40 }}>
//       <div className={classes.title}>Scaling Steps</div>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: 16,
//         }}
//       >
//         <span>
//           I am an <span className={classes.pink}>enterprise</span> aspiring to{" "}
//           <strong>scale</strong> Generative AI
//         </span>
//       </div>

//       <div className={classes.container}>
//         <button
//           className={classes.stepButton}
//           onClick={() => navigate("/member")}
//         >
//           Become
//           <br />
//           Member
//         </button>
//         <span className={classes.arrow}>→</span>

//         <button
//           className={classes.stepButton}
//           onClick={() => navigate("/assessments")}
//         >
//           Complete
//           <br />
//           Assessments
//         </button>
//         <span className={classes.arrow}>→</span>

//         <button
//           className={classes.stepButton}
//           onClick={() => navigate("/roadmap")}
//         >
//           Prepare
//           <br />
//           Roadmap
//         </button>
//         <span className={classes.arrow}>→</span>

//         <div className={classes.cluster}>
//           <button className={classes.stepButtonInner}>
//             Leverage
//             <br />
//             Ecosystem
//           </button>
//           <button className={classes.stepButtonInner}>
//             Implement
//             <br />
//             Assets
//           </button>
//           <button className={classes.stepButtonInner}>
//             Ace
//             <br />
//             Courses
//           </button>
//         </div>
//         <span className={classes.arrow}>→</span>

//         <button
//           className={classes.stepButton}
//           onClick={() => navigate("/progress")}
//         >
//           Monitor
//           <br />
//           Progress
//         </button>
//         <span className={classes.arrow}>→</span>

//         <div className={classes.finalSection}>
//           <img className={classes.graph} src={graph} alt="graph" />
//           <div>
//             <strong>Scale</strong>
//             <br />
//             GenAI
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScalingSteps;
import React from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import graph from "../../../assets/scale.png";
import { useUser } from "../../../context/userContext"; // Adjust path if needed

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexWrap: "wrap",
    gap: 20,
  },
  stepButton: {
    background: "#333",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: 12,
    fontWeight: "bold",
    cursor: "pointer",
    minWidth: 140,
  },
  stepButtonInner: {
    background: "grey",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: 12,
    fontWeight: "bold",
    fontSize: 14,
    cursor: "pointer",
    minWidth: 140,
  },
  arrow: {
    fontSize: 30,
    color: "#999",
  },
  cluster: {
    background: "#333",
    color: "#fff",
    borderRadius: 20,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    minWidth: 140,
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  pink: {
    color: "#d633ff",
    fontStyle: "italic",
  },
  finalSection: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    gap: 10,
  },
  graph: {
    width: 120,
    height: 80,
  },
});

const ScalingSteps: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useUser();
  const isLoggedIn = !!user;

  const handleStep = (step: number) => {
    switch (step) {
      case 1:
        navigate(isLoggedIn ? "/assessments" : "/member");
        break;
      case 2:
        navigate(isLoggedIn ? "/assessments" : "/login");
        break;
      case 3:
        if (isLoggedIn) {
          window.open("https://calendly.com/YOUR-CALENDLY-LINK", "_blank");
        } else {
          navigate("/login");
        }
        break;
      case 4:
        navigate(isLoggedIn ? "/ecosystem" : "/login");
        break;
      case 5:
        navigate(isLoggedIn ? "/dashboard" : "/login");
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <div className={classes.title}>Scaling Steps</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <span>
          I am an <span className={classes.pink}>enterprise</span> aspiring to{" "}
          <strong>scale</strong> Generative AI
        </span>
      </div>

      <div className={classes.container}>
        <button className={classes.stepButton} onClick={() => handleStep(1)}>
          Become
          <br />
          Member
        </button>
        <span className={classes.arrow}>→</span>

        <button className={classes.stepButton} onClick={() => handleStep(2)}>
          Complete
          <br />
          Assessments
        </button>
        <span className={classes.arrow}>→</span>

        <button className={classes.stepButton} onClick={() => handleStep(3)}>
          Prepare
          <br />
          Roadmap
        </button>
        <span className={classes.arrow}>→</span>

        <div className={classes.cluster}>
          <button
            className={classes.stepButtonInner}
            onClick={() => handleStep(4)}
          >
            Leverage
            <br />
            Ecosystem
          </button>
          <button
            className={classes.stepButtonInner}
            onClick={() => handleStep(4)}
          >
            Implement
            <br />
            Assets
          </button>
          <button
            className={classes.stepButtonInner}
            onClick={() => handleStep(4)}
          >
            Ace
            <br />
            Courses
          </button>
        </div>
        <span className={classes.arrow}>→</span>

        <button className={classes.stepButton} onClick={() => handleStep(5)}>
          Monitor
          <br />
          Progress
        </button>
        <span className={classes.arrow}>→</span>

        <div className={classes.finalSection}>
          <img className={classes.graph} src={graph} alt="graph" />
          <div>
            <strong>Scale</strong>
            <br />
            GenAI
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScalingSteps;
