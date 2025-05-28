// import { createUseStyles } from "react-jss";
import { BsArrows } from "react-icons/bs";

// const useStyles = createUseStyles({
//   container: {
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "2rem",
//     //height: "80vh",
//     height: "600px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     textAlign: "center",
//   },
//   heading1: {
//     margin: "0",
//     fontSize: "70px",
//     fontWeight: 500,
//     paddingTop: "150px",
//   },
//   row: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   heading3: {
//     fontSize: "20px",
//     fontWeight: 400,
//   },
//   arrow: {
//     fontSize: "2rem",
//     width: "100px",
//   },
// });

// const Mitigate = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <h1 className={classes.heading1}>Mitigate Huge Gap</h1>

//       <div className={classes.row}>
//         <h3 className={classes.heading3}>
//           Scaling <br></br>Enterprises <br></br> (10%)
//         </h3>
//         <BsArrows className={classes.arrow} size={40}>
//           AL
//         </BsArrows>
//         <h3 className={classes.heading3}>
//           Lagging <br></br>Enterprises<br></br> (90%)
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Mitigate;

import { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    "@keyframes blinkOnce": {
      "0%": { opacity: 1 },
      "20%": { opacity: 0 },
      "40%": { opacity: 1 },
      "60%": { opacity: 0 },
      "80%": { opacity: 1 },
      "100%": { opacity: 1 },
    },
    body: {
      margin: 0,
      padding: 0,
      //fontFamily: 'Georgia, "Times New Roman", serif',
    },
    "*": {
      boxSizing: "border-box",
    },
  },
  container: {
    height: "600px", // Fixed height instead of viewport units
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 2rem",
    cursor: "default",
    overflow: "hidden", // Prevent content overflow
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading3: {
    fontSize: "20px",
    fontWeight: 400,
  },
  arrow: {
    fontSize: "2rem",
    width: "100px",
  },
  spacer: {
    height: "400px", // Fixed height instead of viewport units
    backgroundColor: "#111111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666666",
    fontSize: "1.2rem",
  },
  text: {
    fontSize: "clamp(2rem, 6vw, 6rem)", // Adjusted font sizes
    fontWeight: 400,
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
    color: "#ffffff",
    fontFamily: 'Georgia, "Times New Roman", serif',
    textAlign: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    opacity: 1,
  },
  blinking: {
    animation: "$blinkOnce 2s ease-in-out",
  },
});

const Mitigate = () => {
  const classes = useStyles();
  const [shouldBlink, setShouldBlink] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  // Trigger animation on component mount
  useEffect(() => {
    setShouldBlink(true);
  }, []);

  // Handle mouse enter to retrigger animation
  const handleMouseEnter = () => {
    setShouldBlink(true);
  };

  // Reset animation state after completion
  useEffect(() => {
    const node = textRef.current;
    if (!node) return;

    const handleAnimationEnd = () => {
      setShouldBlink(false);
    };

    node.addEventListener("animationend", handleAnimationEnd);
    return () => {
      node.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <>
      <div className={classes.container} onMouseEnter={handleMouseEnter}>
        <div
          ref={textRef}
          className={`${classes.text} ${shouldBlink ? classes.blinking : ""}`}
        >
          Mitigate Huge Gap
          <div className={classes.row}>
            <h3 className={classes.heading3}>
              Scaling <br></br>Enterprises <br></br> (10%)
            </h3>
            <BsArrows className={classes.arrow} size={40}>
              AL
            </BsArrows>
            <h3 className={classes.heading3}>
              Lagging <br></br>Enterprises<br></br> (90%)
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mitigate;
