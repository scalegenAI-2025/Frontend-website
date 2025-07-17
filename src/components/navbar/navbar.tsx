// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate, type To } from "react-router-dom";
// import { createUseStyles } from "react-jss";
// import Image from "../../assets/image.png";
// import { IoIosLock } from "react-icons/io";
// import { MdOutlineMenu } from "react-icons/md";
// import { useUser } from "../../context/userContext";

// const useStyles = createUseStyles({
//   "@global": {
//     "*, *::before, *::after": {
//       boxSizing: "border-box",
//     },
//     body: {
//       margin: 0,
//       overflowX: "hidden",
//     },
//   },

//   navbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     color: "#fff",
//     height: "100px",
//     width: "100%",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     zIndex: 1000,
//     padding: "0 1rem",
//     transition: "background-color 0.3s ease, color 0.3s ease",
//     maxWidth: "100vw",
//     overflowX: "hidden",
//   },

//   scrolled: {
//     backgroundColor: "#000000 !important",
//     color: "#ffffff !important",

//     "& $navLink": {
//       color: "#ffffff",
//       "&:hover": {
//         color: "purple",
//       },
//     },

//     "& $authButton": {
//       color: "#000",
//       borderColor: "#000",
//       "&:hover": {
//         backgroundColor: "#000",
//         color: "#fff",
//       },
//     },

//     "& $lockIcon": {
//       color: "#000",
//     },
//   },

//   logo: {
//     width: "180px",
//     height: "auto",
//     "@media (max-width: 768px)": {
//       width: "120px",
//     },
//     "@media (max-width: 480px)": {
//       width: "90px",
//     },
//   },

//   menuIcon: {
//     fontSize: "2rem",
//     cursor: "pointer",
//     display: "none",
//     "@media (max-width: 1200px)": {
//       display: "block",
//     },
//   },

//   lockIcon: {
//     fontSize: "1.8rem",
//     width: "30px",
//     height: "30px",
//     marginLeft: "1rem",
//   },

//   mainLinks: {
//     display: "flex",
//     gap: "1rem",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     "@media (max-width: 1200px)": {
//       display: "none",
//     },
//   },

//   navLink: {
//     color: "#fff",
//     textDecoration: "none",
//     transition: "color 0.3s ease",
//     "&:hover": {
//       textDecoration: "underline",
//       color: "purple",
//     },
//   },

//   activeNavLink: {
//     textDecoration: "underline",
//     color: "purple",
//   },

//   meetUsLinkWrapper: {
//     "@media (max-width: 1200px)": {
//       display: "none",
//     },
//   },

//   desktopAuthButtons: {
//     display: "flex",
//     gap: "1rem",
//     "@media (max-width: 1200px)": {
//       display: "none",
//     },
//   },

//   authButton: {
//     backgroundColor: "transparent",
//     color: "#fff",
//     border: "1px solid #fff",
//     padding: "0.5rem 1rem",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     transition: "all 0.3s ease",
//     "&:hover": {
//       backgroundColor: "#fff",
//       color: "#000",
//     },
//   },

//   mobileMenu: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//     position: "absolute",
//     top: "100%",
//     left: 0,
//     right: 0,
//     backgroundColor: "#111",
//     padding: "1rem",
//     zIndex: 999,
//     "@media (min-width: 1201px)": {
//       display: "none",
//     },
//   },
// });

// const navItems = ["assets", "assessments", "courses", "ecosystem"];

// const Navbar = () => {
//   const classes = useStyles();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user, logout } = useUser();

//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileOpen(false); // close menu on route change
//   }, [location.pathname]);

//   const handleLinkClick = (path: To) => {
//     navigate(path);
//     setIsMobileOpen(false);
//   };

//   return (
//     <nav className={`${classes.navbar} ${isScrolled ? classes.scrolled : ""}`}>
//       <MdOutlineMenu
//         className={classes.menuIcon}
//         onClick={() => setIsMobileOpen(!isMobileOpen)}
//         aria-label="Toggle navigation menu"
//       />

//       <Link to="/" aria-label="Home">
//         <img src={Image} alt="Logo" className={classes.logo} />
//       </Link>

//       <div className={classes.mainLinks}>
//         {navItems.map((path) => (
//           <Link
//             key={path}
//             to={`/${path}`}
//             className={`${classes.navLink} ${
//               location.pathname === `/${path}` ? classes.activeNavLink : ""
//             }`}
//           >
//             {path.charAt(0).toUpperCase() + path.slice(1)}
//           </Link>
//         ))}
//       </div>

//       <div className={classes.meetUsLinkWrapper}>
//         <Link
//           to="/meet-us"
//           className={`${classes.navLink} ${
//             location.pathname === "/meet-us" ? classes.activeNavLink : ""
//           }`}
//         >
//           Meet Us
//         </Link>
//       </div>

//       <Link to="/user-login" aria-label="User Login">
//         <IoIosLock className={classes.lockIcon} />
//       </Link>

//       {isMobileOpen && (
//         <div className={classes.mobileMenu}>
//           {navItems.map((path) => (
//             <Link
//               key={path}
//               to={`/${path}`}
//               className={`${classes.navLink} ${
//                 location.pathname === `/${path}` ? classes.activeNavLink : ""
//               }`}
//               onClick={() => setIsMobileOpen(false)}
//             >
//               {path.charAt(0).toUpperCase() + path.slice(1)}
//             </Link>
//           ))}

//           {!user ? (
//             <>
//               <button
//                 onClick={() => handleLinkClick("/login")}
//                 className={classes.authButton}
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => handleLinkClick("/register")}
//                 className={classes.authButton}
//               >
//                 Register
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => {
//                 logout();
//                 setIsMobileOpen(false);
//               }}
//               className={classes.authButton}
//             >
//               Logout
//             </button>
//           )}

//           <Link
//             to="/meet-us"
//             className={`${classes.navLink} ${
//               location.pathname === "/meet-us" ? classes.activeNavLink : ""
//             }`}
//             onClick={() => setIsMobileOpen(false)}
//           >
//             Meet Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, type To } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Image from "../../assets/scaling_genai_transparent.png";
import { IoIosLock } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useUser } from "../../context/userContext";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "#fff",
    height: "100px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: "0 1rem",
    paddingLeft: "0px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },

  scrolled: {
    backgroundColor: "#000000 !important",
    color: "#ffffff !important",

    "& $navLink": {
      color: "#ffffff",
      "&:hover": {
        color: "purple",
      },
    },

    "& $authButton": {
      color: "#000",
      borderColor: "#000",
      "&:hover": {
        backgroundColor: "#000",
        color: "#fff",
      },
    },

    "& $lockIcon": {
      color: "#000",
    },
  },

  logo: {
    width: "300px",
    height: "120px",
    "@media (max-width: 1200px)": {
      //width: "130px",
      // position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "@media (max-width: 600px)": {
      // width: "100px",
      width: "150px",
      height: "80px",
      position: "static",
    },
  },

  menuIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    display: "none",
    "@media (max-width: 1200px)": {
      display: "block",
      width: "100px",
      marginRight: "100px",
    },
    "@media (max-width: 550px)": {
      width: "60px",
      position: "relative",
      display: "flex",
      justifyContent: "flex-end", // Aligns content (like the logo) to the right
      alignItems: "center",
      marginRight: "50px",
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
      display: "none", // 👈 hide lock icon on smaller screens
    },
  },

  mainLinks: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    paddingTop: "25px",
    paddingLeft: "200px",
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#FF00FF",
    },
  },

  activeNavLink: {
    textDecoration: "underline",
    color: "#FF00FF",
  },

  meetUsLinkWrapper: {
    marginLeft: "auto",
    paddingTop: "10px",
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },

  desktopAuthButtons: {
    display: "flex",
    gap: "1rem",
    paddingTop: "25px",
    marginLeft: "auto",
    "@media (max-width: 1200px)": {
      display: "none",
    },
  },

  authButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    "@media (max-width: 900px)": {
      background: "black",
      color: "white",
      border: "1px solid #ffffff",
      marginBottom: "10px",
    },
  },

  /* MOBILE MENU FULL SCREEN OVERLAY */
  mobileMenuOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "black",
    display: "flex",
    flexDirection: "column",
    paddingTop: "3rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    overflowY: "auto",
  },

  closeIcon: {
    position: "absolute",
    top: "1rem",
    right: "1.5rem",
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "#fff",
    zIndex: 2100,
  },

  mobileMenuLink: {
    color: "#fff",
    fontSize: "1.8rem",
    margin: "1.2rem 0",
    textDecoration: "none",
    "&:hover": {
      color: "purple",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path: To) => {
    navigate(path);
    setIsMobileOpen(false);
  };

  return (
    <nav className={`${classes.navbar} ${isScrolled ? classes.scrolled : ""}`}>
      {/* Mobile hamburger menu icon */}
      <MdOutlineMenu
        className={classes.menuIcon}
        onClick={() => setIsMobileOpen(true)}
      />

      {/* Logo */}
      <Link to="/" className={classes.navLink}>
        <img src={Image} alt="Logo" className={classes.logo} />
      </Link>

      {/* Desktop navigation links */}
      <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
        <div className={classes.mainLinks}>
          {["assets", "assessments", "courses", "ecosystem"].map(
            (path, index, arr) => (
              <span key={path}>
                <Link
                  to={`/${path}`}
                  className={`${classes.navLink} ${
                    location.pathname === `/${path}`
                      ? classes.activeNavLink
                      : ""
                  }`}
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
                {index < arr.length - 1 && (
                  <span style={{ paddingLeft: "20px", color: "inherit" }}>
                    |
                  </span>
                )}
              </span>
            )
          )}
        </div>

        <div className={classes.meetUsLinkWrapper}>
          <Link
            to="/user-login"
            className={`${classes.navLink} ${
              location.pathname === "/meet-us" ? classes.activeNavLink : ""
            }`}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Lock icon for user login */}
      <Link to="/user-login">
        <IoIosLock className={classes.lockIcon} style={{ cursor: "pointer" }} />
      </Link>

      {/* MOBILE FULL SCREEN MENU OVERLAY */}
      {isMobileOpen && (
        <div className={classes.mobileMenuOverlay}>
          <IoMdClose
            className={classes.closeIcon}
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          />

          {["assets", "assessments", "courses", "ecosystem"].map((path) => (
            <Link
              key={path}
              to={`/${path}`}
              className={classes.mobileMenuLink}
              onClick={() => setIsMobileOpen(false)}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}

          {!user ? (
            <>
              <button
                onClick={() => handleLinkClick("/user-login")}
                className={classes.authButton}
              >
                User Login
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                setIsMobileOpen(false);
              }}
              className={classes.authButton}
            >
              Logout
            </button>
          )}

          <Link
            to="/meet-us"
            className={classes.mobileMenuLink}
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
