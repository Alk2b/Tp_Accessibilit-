import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BreadcrumbsComponent from "./components/Breadcrumbs";

function App() {
  return (
    <Router>
      <Header />
      <BreadcrumbsComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
