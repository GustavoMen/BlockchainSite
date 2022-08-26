import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <NavBar />
      <GlobalStyle />
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;
