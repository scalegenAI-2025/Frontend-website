// import { createUseStyles } from "react-jss";
// import book from "../../../../assets/Scaling GenAI_Cover.jpg";
// import speaker from "../../../../assets/amitsirfirstpic.png";
// import qr from "../../../../assets/QR.png";
// const useStyles = createUseStyles({
//   container: {
//     backgroundColor: "#000",
//     color: "#fff",
//     minHeight: "100vh",
//     padding: "40px",
//     fontFamily: `'Helvetica Neue', Arial, sans-serif`,
//     display: "flex",
//     flexDirection: "column",
//     /// alignItems: "center",
//   },
//   heading: {
//     fontSize: "48px",
//     fontWeight: 600,
//     // textAlign: "center",
//     lineHeight: 1.2,
//     marginBottom: "70px",
//     marginTop: "110px",
//   },
//   contentRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     width: "100%",
//     // alignItems: "flex-start",
//   },
//   left: {
//     flex: 1,
//     // maxWidth: "30%",
//   },
//   center: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//   },
//   right: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "flex-end",
//     position: "relative",
//   },
//   subtitle: {
//     fontSize: "20px",
//     marginBottom: "10px",
//     fontWeight: 500,
//   },
//   role: {
//     fontStyle: "italic",
//     fontSize: "16px",
//     marginBottom: "20px",
//   },
//   contact: {
//     fontSize: "16px",
//     lineHeight: 1.5,
//   },
//   qr: {
//     width: "100px",
//     margin: "10px 0",
//   },
//   linkedin: {
//     color: "#d4a0f0",
//     fontStyle: "italic",
//   },
//   book: {
//     width: "220px",
//   },
//   speaker: {
//     width: "320px",
//   },
// });

// export default function GenerativeAITop() {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       {/* Heading Centered at Top */}
//       <h1 className={classes.heading}>
//         Generative AI
//         <br />
//         Technical Masterclass
//       </h1>

//       {/* Main Content Row */}
//       <div className={classes.contentRow}>
//         {/* LEFT SECTION */}
//         <div className={classes.left}>
//           <div className={classes.subtitle}>A Course by Amit Prabhu</div>
//           <div className={classes.role}>
//             AI Consultant, Author, Speaker, Business Trainer
//           </div>
//           <div className={classes.contact}>
//             amit@amitprabhu.net <br />
//             <a href="https://www.amitprabhu.net" style={{ color: "#70b7ff" }}>
//               www.amitprabhu.net
//             </a>
//             <br />
//             <img src={qr} alt="QR Code" className={classes.qr} />
//             <div className={classes.linkedin}>Connect on LinkedIn</div>
//           </div>
//         </div>

//         {/* CENTER SECTION */}
//         <div className={classes.center}>
//           <img src={book} alt="Book" className={classes.book} />
//         </div>

//         {/* RIGHT SECTION */}
//         <div className={classes.right}>
//           <img src={speaker} alt="Amit Prabhu" className={classes.speaker} />
//         </div>
//       </div>
//     </div>
//   );
// }
import { createUseStyles } from "react-jss";
import book from "../../../../assets/Technical_masterclass.jpg";
import speaker from "../../../../assets/amitsirfirstpic.png";
import qr from "../../../../assets/QR.png";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: `'Helvetica Neue', Arial, sans-serif`,
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: "70px",
    marginTop: "110px",
  },
  contentRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: 500,
  },
  role: {
    fontStyle: "italic",
    fontSize: "16px",
    marginBottom: "20px",
  },
  contact: {
    fontSize: "16px",
    lineHeight: 1.5,
  },
  qr: {
    width: "100px",
    margin: "10px 0",
  },
  linkedin: {
    color: "#d4a0f0",
    fontStyle: "italic",
  },
  book: {
    width: "420px",
  },
  speaker: {
    width: "320px",
  },

  /* NEW STYLES FOR IMAGE + TEXT OVERLAY */
  imageWrapper: {
    position: "relative",
    display: "inline-block",
  },
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // centers vertically & horizontally
    color: "#fff",
    fontSize: "30px",
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.2)", // optional for readability
    padding: "6px 12px",
    borderRadius: "8px",
    textAlign: "center",
    whiteSpace: "nowrap", // prevents breaking into 2 lines
  },
});

export default function LandingSlide() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* Heading */}
      <h1 className={classes.heading}>
        Generative AI <br />
        Technical Masterclass
      </h1>

      {/* Main Content */}
      <div className={classes.contentRow}>
        {/* LEFT SECTION */}
        <div className={classes.left}>
          <div className={classes.subtitle}>A Course by Amit Prabhu</div>
          <div className={classes.role}>
            AI Consultant, Author, Speaker, Business Trainer
          </div>
          <div className={classes.contact}>
            amit@amitprabhu.net <br />
            <a href="https://www.amitprabhu.net" style={{ color: "#70b7ff" }}>
              www.amitprabhu.net
            </a>
            <br />
            <img src={qr} alt="QR Code" className={classes.qr} />
            <div className={classes.linkedin}>Connect on LinkedIn</div>
          </div>
        </div>

        {/* CENTER SECTION (Book Image + Text) */}
        <div className={classes.center}>
          <div className={classes.imageWrapper}>
            <img src={book} alt="Book" className={classes.book} />
            <div className={classes.overlayText}>
              Generative AI <br></br>Technical Masterclass
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Speaker Image + Text) */}
        <div className={classes.right}>
          <div className={classes.imageWrapper}>
            <img src={speaker} alt="Amit Prabhu" className={classes.speaker} />
            {/* <div className={classes.overlayText}>Amit Prabhu</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
