import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer2 from "./components/Footer2/Footer2";
import NavBar from "./components/NavBar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyles";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <NavBar />
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Page404 />} />
        <Route path="/test" element={<Footer2 />} />
      </Routes>
      <Footer2 />
    </Router>
  );
}

export default App;
