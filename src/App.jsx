import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home/index";
import AboutUs from "./pages/AboutUs";
import Porfolio from "./pages/Portfolio";
import Articles from "./pages/Articles";
import index from "./pages/Services";
import Team from "./pages/Team/index";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/portfolio" Component={Porfolio} />
            <Route path="/articles" Component={Articles} />
            <Route path="/services" Component={index} />
            <Route path="/team" Component={Team} />
            <Route path="/about-us" Component={AboutUs} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;