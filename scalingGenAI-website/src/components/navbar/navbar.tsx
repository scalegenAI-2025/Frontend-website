import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Image from "../../assets/image.png";
import { IoIosLock } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    height: "100px",
    width: "100%",
    position: "fixed", // <<< fixed navbar
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: "0 1rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },

  scrolled: {
    backgroundColor: "#fff !important",
    color: "#000 !important",

    "& $navLink": {
      color: "#000",
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
    width: "200px",
    height: "auto",
    "@media (max-width: 900px)": {
      width: "130px",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "@media (max-width: 550px)": {
      width: "100px",
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
  },

  mainLinks: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    paddingTop: "25px",
    paddingLeft: "200px",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "purple",
    },
  },

  activeNavLink: {
    textDecoration: "underline",
    color: "purple",
  },

  meetUsLinkWrapper: {
    marginLeft: "20px",
    paddingTop: "35px",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  mobileMenu: {
    flexDirection: "column",
    gap: "1rem",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#111",
    padding: "1rem",
    zIndex: 999,
    display: "flex",
  },

  authButtons: {
    display: "flex",
    gap: "1rem",
    paddingTop: "25px",
    marginLeft: "auto",
    "@media (max-width: 900px)": {
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
  },
  span: {
    // margin: "0 0.5rem",
    color: "inherit",
    paddingLeft: "20px",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${classes.navbar} ${isScrolled ? classes.scrolled : ""}`}>
      <MdOutlineMenu
        className={classes.menuIcon}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      />

      <Link to="/" className={classes.navLink}>
        <img src={Image} alt="Logo" className={classes.logo} />
      </Link>

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
                  <span className={classes.span}>|</span>
                )}
              </span>
            )
          )}
        </div>

        <div className={classes.authButtons}>
          {/* <button
            className={classes.authButton}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className={classes.authButton}
            onClick={() => navigate("/register")}
          >
            Register
          </button> */}
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className={classes.authButton}
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className={classes.authButton}
              >
                Register
              </button>
            </>
          ) : (
            <button onClick={logout} className={classes.authButton}>
              Logout
            </button>
          )}
        </div>

        <div className={classes.meetUsLinkWrapper}>
          <Link
            to="/meet-us"
            className={`${classes.navLink} ${
              location.pathname === "/meet-us" ? classes.activeNavLink : ""
            }`}
          >
            Meet Us
          </Link>
        </div>
      </div>

      <IoIosLock className={classes.lockIcon} />

      {isMobileOpen && (
        <div className={classes.mobileMenu}>
          {["assets", "assessments", "courses", "ecosystem"].map((path) => (
            <Link
              key={path}
              to={`/${path}`}
              className={`${classes.navLink} ${
                location.pathname === `/${path}` ? classes.activeNavLink : ""
              }`}
              onClick={() => setIsMobileOpen(false)}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}
          <div className={classes.authButtons}>
            <button
              className={classes.authButton}
              onClick={() => console.log("Login clicked")}
            >
              Login
            </button>
            <button
              className={classes.authButton}
              onClick={() => console.log("Register clicked")}
            >
              Register
            </button>
          </div>
          <Link
            to="/meet-us"
            className={`${classes.navLink} ${
              location.pathname === "/meet-us" ? classes.activeNavLink : ""
            }`}
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
