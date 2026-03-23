import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { SEO } from "./lib/SEO";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <>
      <SEO 
        title="Construcción y Reformas Integrales" 
        description="Transformamos tus ideas en realidad. Empresa de construcción en Junín con más de 10 años de experiencia."
        path="/"
      />
      <Router>
        {/* ⚠️ Cursor SIEMPRE fuera del wrapper */}
        <CustomCursor />
        <ScrollToTop />
        <Navbar />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nosotros" element={<About />} />
                  <Route path="/trabajos" element={<Projects />} />
                  <Route path="/contacto" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
