import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
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
        <Route path="/test" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
