import { useState } from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Image from "../../assets/image.png";
import { IoIosLock } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "#000000",
    color: "#fff",
    height: "130px",
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    //padding: "0 1rem",
    paddingRight: "1rem",
  },

  logo: {
    width: "200px",
    height: "auto",
    "@media (max-width: 900px)": {
      margin: "0 auto",
      position: "absolute",
      width: "130px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "@media (max-width: 550px)": {
      margin: "0 auto",
      position: "absolute",
      width: "100px",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },

  menuIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    display: "none",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },

  lockIcon: {
    fontSize: "1.8rem",
    width: "30px",
    height: "30px",
    position: "absolute",
    right: "1rem",
    top: "1rem",
    "@media (max-width: 900px)": {
      position: "absolute",
      right: "1rem",
    },
  },

  mainLinks: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "200px",
    paddingTop: "25px",
    //backgroundColor: "#000000",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  navLink: {
    color: "#fff",
    backgroundColor: "#000000",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "purple",
    },
  },

  meetUsLinkWrapper: {
    marginLeft: "auto",
    //marginRight: "2rem",
    paddingTop: "25px",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  mobileMenu: {
    display: "none",
    flexDirection: "column",
    gap: "1rem",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#111",
    padding: "1rem",
    zIndex: 1000,

    "@media (max-width: 900px)": {
      display: "flex",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      {/* Hamburger Menu */}
      <MdOutlineMenu
        className={classes.menuIcon}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      />

      {/* Logo */}
      <img src={Image} alt="Logo" className={classes.logo} />

      {/* Desktop Nav */}
      <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
        <div className={classes.mainLinks}>
          <Link to="/assets" className={classes.navLink}>
            Assets
          </Link>
          <span>|</span>
          <Link to="/assessments" className={classes.navLink}>
            Assessments
          </Link>
          <span>|</span>
          <Link to="/courses" className={classes.navLink}>
            Courses
          </Link>
          <span>|</span>
          <Link to="/ecosystem" className={classes.navLink}>
            Ecosystem
          </Link>
        </div>

        <div className={classes.meetUsLinkWrapper}>
          <Link to="/meet-us" className={classes.navLink}>
            Meet Us
          </Link>
        </div>
      </div>

      {/* Lock Icon */}
      <IoIosLock className={classes.lockIcon} />

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className={classes.mobileMenu}>
          <Link
            to="/assets"
            className={classes.navLink}
            onClick={() => setIsMobileOpen(false)}
          >
            Assets
          </Link>
          <Link
            to="/assessments"
            className={classes.navLink}
            onClick={() => setIsMobileOpen(false)}
          >
            Assessments
          </Link>
          <Link
            to="/courses"
            className={classes.navLink}
            onClick={() => setIsMobileOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/ecosystem"
            className={classes.navLink}
            onClick={() => setIsMobileOpen(false)}
          >
            Ecosystem
          </Link>
          <Link
            to="/meet-us"
            className={classes.navLink}
            onClick={() => setIsMobileOpen(false)}
          >
            Meet Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.jsx

// import { Link } from "react-router-dom";
// import { createUseStyles } from "react-jss";
// import logo from "../../assets/logoAI.png";
// import { IoIosLock } from "react-icons/io";

// const useStyles = createUseStyles({
//   navbar: {
//     display: "flex",
//     backgroundColor: "#000000",
//     color: "#fff",
//     minHeight: "170px",
//     position: "relative",
//   },
//   logoContainer: {
//     display: "flex",
//     width: "100%",
//   },
//   logo: {
//     width: "250px",
//     height: "170px",
//     flexShrink: 0,
//   },
//   rightSection: {
//     flexGrow: 1,
//     display: "flex",
//     flexDirection: "column",
//   },
//   topBar: {
//     display: "flex",
//     justifyContent: "flex-end",
//     padding: "1rem",
//   },
//   mainLinks: {
//     flexGrow: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "2rem",
//     position: "relative",
//   },
//   lockIcon: {
//     width: "30px",
//     height: "30px",
//     position: "absolute",
//     right: "1rem",
//     top: "1rem",
//   },
//   navLink: {
//     color: "#fff",
//     textDecoration: "none",
//     "&:hover": {
//       textDecoration: "underline",
//     },
//   },
//   meetUsLink: {
//     position: "absolute",
//     right: "2rem",
//   },
// });

// const Navbar = () => {
//   const classes = useStyles();

//   return (
//     <nav className={classes.navbar}>
//       <img src={logo} alt="Logo" className={classes.logo} />
//       <IoIosLock className={classes.lockIcon} />

//       <div className={classes.mainLinks}>
//         <Link to="/assets" className={classes.navLink}>
//           Assets
//         </Link>
//         <Link to="/assessments" className={classes.navLink}>
//           Assessments
//         </Link>
//         <Link to="/courses" className={classes.navLink}>
//           Courses
//         </Link>
//         <Link to="/ecosystem" className={classes.navLink}>
//           Ecosystem
//         </Link>
//         <Link to="/meet-us" className={classes.navLink}>
//           Meet Us
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
