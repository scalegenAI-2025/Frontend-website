import "./App.css";

import Home from "./pages/home/home";
import useGlobalStyles from "./styles/useGlobalStyles";

// JSS styles

function App() {
  useGlobalStyles();
  //const classes = useStyles();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
