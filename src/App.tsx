import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

import Home from "./pages/Home/Home"; // Eagerly load Home for better LCP
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

import { Navbar } from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import logo from "./assets/jpg-assets/logo.png";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    const handlePageHide = () => {
      // Revert GSAP state for bfcache
      smoother?.kill();
    };

    window.addEventListener("pagehide", handlePageHide);

    const startAnimation = () => {
      // Forzar estado inicial como inline styles (mayor especificidad que CSS)
      // Esto evita el flash cuando GSAP dejó inline styles de una animación anterior
      gsap.set("#logo-mask", {
        maskImage: `url(${logo})`,
        webkitMaskImage: `url(${logo})`,
        maskPosition: "center 50%",
        maskSize: "300px",
        webkitMaskPosition: "center 50%",
        webkitMaskSize: "300px",
      });

      const tl = gsap.timeline();

      tl.to("#logo-wrapper", {
        filter: "brightness(100%)",
        duration: 0.5,
        ease: "power2.in",
      });

      tl.to("#logo-img", {
        filter: "saturate(200%)",
        duration: 1,
        ease: "power2.in",
      });

      tl.to("#logo-img", {
        duration: 0.7,
        opacity: 0,
        ease: "power2.out",
      });

      tl.to(
        "#logo-img",
        {
          width: "28000px",
          height: "28000px",
          duration: 1.5,
          ease: "power1.in",
        },
      );

      tl.to(
        "#logo-mask",
        {
          maskSize: "0px",
          webkitMaskSize: "0px",
          maskPosition: "center 40%",
          webkitMaskPosition: "center 40%",
          duration: 1.5,
          ease: "power1.in",
        },
        "<",
      );
      tl.to(
        "#logo-mask",
        {
          maskSize: "38000px",
          webkitMaskSize: "38000px",
          duration: 1.5,
          ease: "power1.in",
        },
        "<0.5",
      );

      tl.to("#logo-mask", {
        maskImage: "none",
        webkitMaskImage: "none",
      });

      tl.to("#logo-wrapper", {
        display: "none"
      });
    };

    startAnimation();

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      smoother?.kill();
    };
  }, []);

  return (
    <>
      <Router>
        {/* ⚠️ Cursor SIEMPRE fuera del wrapper */}
        <CustomCursor />
        <ScrollToTop />

        <div
          id="logo-wrapper"
          className="fixed brightness-50 inset-0 flex justify-center items-center w-full h-screen z-300"
        >
          <img
            id="logo-img"
            src={logo}
            className="w-[300px] saturate-0 h-[300px] object-cover"
            alt="Piso Fuerte Logo"
          />
        </div>

        <div id="logo-mask" className="fixed top-0 w-full h-screen z-200" style={{ maskImage: `url(${logo})`, WebkitMaskImage: `url(${logo})` }}>
          <Navbar />

          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="min-h-screen flex flex-col">
                <main className="flex-grow">
                  <Suspense fallback={<div className="min-h-screen bg-texture-black" />}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/nosotros" element={<About />} />
                      <Route path="/trabajos" element={<Projects />} />
                      <Route path="/contacto" element={<Contact />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Router>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
