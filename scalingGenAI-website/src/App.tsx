import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import useGlobalStyles from "./styles/useGlobalStyles";
import Rocket from "./assets/rocket.png";
import { createUseStyles } from "react-jss";

// JSS styles
const useStyles = createUseStyles({
  backgroundWrapper: {
    backgroundImage: `url(${Rocket})`,
    backgroundSize: "cover",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  },
});

function App() {
  useGlobalStyles();
  const classes = useStyles();

  return (
    <div className={classes.backgroundWrapper}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
