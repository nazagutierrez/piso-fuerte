import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

import Home from "./pages/Home/Home"; // Eagerly load Home for better LCP
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

import { Navbar } from "./components/Navbar";

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
      smoothTouch: false, // MUST be false — iOS uses a compositor thread for native scroll; any JS interception causes severe jank
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
        "#intro-overlay",
        {
          "--mask-size": "0px",
          duration: 1.5,
          ease: "power1.in",
        },
        "<"
      );

      tl.to(
        "#intro-overlay",
        {
          "--mask-size": "38000px",
          "--mask-x": "45%", // TWEAK ME: Menos es a la izquierda, Más es a la derecha
          "--mask-y": "39%", // TWEAK ME: Menos es arriba, Más es abajo
          duration: 1.5,
          ease: "power1.in",
        },
        "<0.5"
      );

      tl.to("#intro-overlay", {
        display: "none"
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
        {/* ⚠️ Cursor lazy-loaded — no se carga en el bundle inicial */}
        <ScrollToTop />

        <div
          id="logo-wrapper"
          className="fixed pointer-events-none inset-0 w-full h-[100dvh] z-300"
        >
          <div
            id="logo-img"
            className="w-full h-full brightness-50 saturate-0"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: '300px 300px',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        <div 
          id="intro-overlay" 
          className="fixed inset-0 w-full h-[100dvh] z-200 pointer-events-none bg-[#141414]"
          style={{
            '--mask-size': '300px',
            '--mask-x': '50%',
            '--mask-y': '50%',
            WebkitMaskImage: `url(${logo}), linear-gradient(black, black)`,
            maskImage: `url(${logo}), linear-gradient(black, black)`,
            WebkitMaskSize: 'var(--mask-size) var(--mask-size), 100% 100%',
            maskSize: 'var(--mask-size) var(--mask-size), 100% 100%',
            WebkitMaskPosition: 'var(--mask-x) var(--mask-y), center',
            maskPosition: 'var(--mask-x) var(--mask-y), center',
            WebkitMaskRepeat: 'no-repeat, no-repeat',
            maskRepeat: 'no-repeat, no-repeat',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          } as React.CSSProperties}
        ></div>
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
      </Router>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
