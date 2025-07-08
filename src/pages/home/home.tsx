// import { createUseStyles } from "react-jss";
// import Rocket from "../../assets/rocket.png";
// const useStyles = createUseStyles({
//   backgroundWrapper: {
//     backgroundImage: `url(${Rocket})`,
//     backgroundSize: "cover",

//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     //minHeight: "100vh",
//   },
//   container: {
//     textAlign: "center",
//     justifyContent: "center",
//     marginTop: "150px",
//   },
//   homeHeader: {
//     backgroundColor: "#000000",
//     color: "#ffffff",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "auto",
//   },
//   homeHeader1: {
//     margin: "0",
//     fontSize: "50px",
//     fontWeight: 500,
//   },
//   homeHeader2: {
//     margin: "0",
//     fontSize: "50px",
//     fontWeight: 500,
//   },
//   homeHeader3: {
//     fontWeight: 400,

//     backgroundColor: "#000000",
//     color: "#ffffff",
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#222",
//     marginBottom: "1rem",
//   },
//   subtitle: {
//     fontSize: "1rem",
//     color: "#555",
//   },
// });

// const Home = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.backgroundWrapper}>
//       <div className={classes.container}>
//         <div className={classes.homeHeader}>
//           <h1 className={classes.homeHeader1}>Help Enterprises</h1>
//           <h1 className={classes.homeHeader2}> Scale Generative AI</h1>
//         </div>
//         <h3 className={classes.homeHeader3}>
//           Through Readiness Rocket Framework
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import "./App.css";
// import Navbar from "../../components/navbar";
// import Home from "./pages/home/home";

// src/pages/home/home.tsx

// import { createUseStyles } from "react-jss";
// import useGlobalStyles from "../../styles/useGlobalStyles";
// import Rocket from "../../assets/rocket.png"; // Your updated rocket image
// import CloudyBackground from "../../assets/rocketBlack.png";
// import Navbar from "../../components/navbar/navbar";
// import FirstPage from "./homeChildComponents/firstPage";
// //import Mitigate from "./homeChildComponents/mitigate";
// import ReadinessRocket from "./homeChildComponents/readinessRocket";
// import QualitiesPage from "./homeChildComponents/qualitiesPage";
// import PhotoScroller from "./homeChildComponents/scrollingPhoto";
// import BlinkingTextComponent from "./homeChildComponents/adoptionComponent";
// import YouNeedToScaleCards from "./homeChildComponents/youNeedToScaleCards";
// import ContactUsPage from "./homeChildComponents/contactUs";
// import PolyOpportunityHero from "./homeChildComponents/videoPage";
// import Footer from "../../components/footer/footer";
// import EcosystemText from "./homeChildComponents/EcosystemText";
// import AssessmentPromo from "./homeChildComponents/assessmentPromo";
// import ScalingSteps from "./homeChildComponents/ScalingSteps";
// import MemberButton from "./homeChildComponents/memberButton";
// import ScalingStepsEmail from "./homeChildComponents/ScalingStepsEmail";

// const useStyles = createUseStyles({
//   heroSection: {
//     position: "relative",
//     minHeight: "110vh",
//     overflow: "hidden",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   backgroundOverlay: {
//     backgroundImage: `url(${Rocket}), url(${CloudyBackground})`,
//     backgroundSize: "contain, cover", // Rocket fits nicely, cloud image fills screen
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center center",
//     backgroundColor: "#000000",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 0,
//   },
//   contentWrapper: {
//     position: "relative",
//     zIndex: 1,
//     width: "100%",
//   },
// });

// function Home() {
//   useGlobalStyles();
//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.heroSection}>
//         <div className={classes.backgroundOverlay}></div>
//         <div className={classes.contentWrapper}>
//           <Navbar />
//           <FirstPage />
//         </div>
//       </div>
//       <MemberButton />

//       <ScalingSteps />
//       {/* <Mitigate /> */}
//       <ScalingStepsEmail />
//       <ReadinessRocket />
//       <QualitiesPage />
//       <PhotoScroller />
//       <BlinkingTextComponent />
//       <YouNeedToScaleCards />
//       <AssessmentPromo />
//       <PolyOpportunityHero />

//       <EcosystemText />
//       <ContactUsPage />
//       <Footer />
//     </>
//   );
// }

// export default Home;

// src/pages/home/home.tsx
import { createUseStyles } from "react-jss";
import useGlobalStyles from "../../styles/useGlobalStyles";
import Rocket from "../../assets/rocket.png";
import CloudyBackground from "../../assets/rocketBlack.png";
import Navbar from "../../components/navbar/navbar";
import FirstPage from "./homeChildComponents/firstPage";
import ReadinessRocket from "./homeChildComponents/readinessRocket";
import QualitiesPage from "./homeChildComponents/qualitiesPage";
import PhotoScroller from "./homeChildComponents/scrollingPhoto";
import BlinkingTextComponent from "./homeChildComponents/adoptionComponent";
import YouNeedToScaleCards from "./homeChildComponents/youNeedToScaleCards";
import ContactUsPage from "./homeChildComponents/contactUs";
import PolyOpportunityHero from "./homeChildComponents/videoPage";
import Footer from "../../components/footer/footer";
import EcosystemText from "./homeChildComponents/EcosystemText";
import AssessmentPromo from "./homeChildComponents/assessmentPromo";
//import ScalingSteps from "./homeChildComponents/ScalingSteps";
import MemberButton from "./homeChildComponents/memberButton";
import ScalingStepsEmail from "./homeChildComponents/ScalingStepsEmail";

const useStyles = createUseStyles({
  heroSection: {
    position: "relative",
    minHeight: "110vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundOverlay: {
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), 
      url(${Rocket}), 
      url(${CloudyBackground})
    `,
    backgroundSize: "contain, contain, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center, center center, center center",
    backgroundColor: "#000000",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  contentWrapper: {
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
});

function Home() {
  useGlobalStyles();
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroSection}>
        <div className={classes.backgroundOverlay}></div>
        <div className={classes.contentWrapper}>
          <Navbar />
          <FirstPage />
        </div>
      </div>
      <MemberButton />
      {/* <ScalingSteps /> */}
      <ScalingStepsEmail />
      <ReadinessRocket />
      <QualitiesPage />
      <PhotoScroller />
      <BlinkingTextComponent />
      <YouNeedToScaleCards />
      <AssessmentPromo />
      <PolyOpportunityHero />
      <EcosystemText />
      <ContactUsPage />
      <Footer />
    </>
  );
}

export default Home;
