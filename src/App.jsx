import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbsComponent from "@/components/Breadcrumbs";
import Sitemap from "@/pages/Sitemap";
import routesConfig from "@/utils/routesConfig";

function App() {
  return (
    <Router>
      <Header />
      <BreadcrumbsComponent />
      <Routes>
        {routesConfig.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;