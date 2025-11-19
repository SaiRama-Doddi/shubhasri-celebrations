import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbars";
import Home from "./components/Homes";
import Services from "./components/Services";
import AllServices from "./components/AllServices";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import Highlights from "./components/Highlights";
import Parallax from "./components/Parallax";
import Testimonials from "./components/Testinomials";
import ScrollToTop from "./components/ScrollToTop";
import { PopupModal } from "react-calendly";
import Gallery from "./components/Gallery";

import GetStarted from "./components/GetStarted";

function AppWrapper() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  const calendlyUrl = "https://calendly.com/shubhashricelebrations1/30min";

  return (
    <>
      <ScrollToTop />

      {/* Pass openCalendly to Navbar */}
      <Navbar onBookClick={openCalendly} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Parallax
                image="https://res.cloudinary.com/djhsdo5to/image/upload/v1763395383/home_t0cidf.png"
                height="600px"
              />
              <About />
              <Parallax
                image="https://res.cloudinary.com/djhsdo5to/image/upload/v1763395618/pexels-nguy-n-ti-n-th-nh-2150376175-33104577_vfibmq.jpg"
                height="600px"
              />
              <Highlights />
              <Parallax
                image="https://res.cloudinary.com/djhsdo5to/image/upload/v1763395614/pexels-thevisionaryvows-33485972_dlu2tw.jpg"
                height="600px"
              />
             
              <Gallery/>
               <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <AllServices />
              <Footer />
            </>
          }
        />

        <Route
          path="/service/:serviceId"
          element={
            <>
              <ServiceDetail />
              <Footer />
            </>
          }
        />
  
     <Route path="/gallery" element={
      <Gallery/>
     }/>
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Remove /book route now */}
      </Routes>

      {/* Calendly Popup Modal */}
      <PopupModal
        url={calendlyUrl}
        open={isCalendlyOpen}
        onModalClose={closeCalendly}
        rootElement={document.getElementById("root") as HTMLElement}
      />

      <GetStarted/>
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
