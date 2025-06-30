import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, type To } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Image from "../../assets/image.png";
import { IoIosLock } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { useUser } from "../../context/userContext";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    height: "100px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    padding: "0 1rem",
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
    width: "200px",
    height: "auto",
    "@media (max-width: 1200px)": {
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
    "@media (max-width: 1200px)": {
      display: "block",
    },
  },

  lockIcon: {
    fontSize: "1.8rem",
    width: "30px",
    height: "30px",
    position: "absolute",
    right: "2rem",
    top: "1rem",
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
      color: "purple",
    },
  },

  activeNavLink: {
    textDecoration: "underline",
    color: "purple",
  },

  meetUsLinkWrapper: {
    marginLeft: "auto", // Pushes the element to the right
    paddingTop: "35px",
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
    "@media (min-width: 901px)": {
      display: "none",
    },
  },

  span: {
    color: "inherit",
    paddingLeft: "20px",
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

        {/* <div className={classes.desktopAuthButtons}>
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
        </div> */}

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

      <Link to="/admin-login">
        <IoIosLock className={classes.lockIcon} style={{ cursor: "pointer" }} />
      </Link>

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

          {!user ? (
            <>
              <button
                onClick={() => handleLinkClick("/login")}
                className={classes.authButton}
              >
                Login
              </button>
              <button
                onClick={() => handleLinkClick("/register")}
                className={classes.authButton}
              >
                Register
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
