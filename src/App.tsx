import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import AllServices from "./components/AllServices";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import Highlights from "./components/Highlights";
import Parallax from "./components/Parallax";
import GetStarted from "./components/GetStarted";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testinomials";

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />

      <Services />
      <Parallax image="https://res.cloudinary.com/djhsdo5to/image/upload/v1763395383/home_t0cidf.png" height="600px" />
      <About />
      <Parallax image="https://res.cloudinary.com/djhsdo5to/image/upload/v1763395618/pexels-nguy-n-ti-n-th-nh-2150376175-33104577_vfibmq.jpg" height="600px" />
      <Highlights />
      <Parallax image="https://res.cloudinary.com/djhsdo5to/image/upload/v1763395614/pexels-thevisionaryvows-33485972_dlu2tw.jpg" height="600px" />
      <Testimonials/>

      <Contact />
      <Footer />
      <GetStarted />
    </>
  );
}

// Wrapper to apply ScrollToTop on route change
function AppWrapper() {


  return (
    <>
      {/* Scroll to top whenever the route changes */}
      <ScrollToTop  />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <AllServices />
              <Footer />
            </>
          }
        />

        <Route
          path="/service/:serviceId"
          element={
            <>
              <Navbar />
              <ServiceDetail />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
