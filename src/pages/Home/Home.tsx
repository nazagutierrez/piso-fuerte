import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";
import Services from "./Services";
import Images from "./Images";
import Features from "./Features";
import FinalCTA from "./FinalCTA";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const buildingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animation
    const ctx = gsap.context(() => {
      gsap.set(".building-img", { y: 0 });

      gsap.from(".building-img", {
        scrollTrigger: { 
          trigger: buildingsRef.current, 
          start: "top bottom",
          end: "bottom 40%",
          scrub: true,
        },
        y: 200,
        ease: "power3.out",
      });
    }, buildingsRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen">
    
      <Hero />

      <Services />

      <Images />
      
      <Features />

      {/* Buildings images */}
      <div ref={buildingsRef} className="relative">
        <img src="/building-no-bg.png" className="building-img absolute h-24 w-24 sm:w-40 sm:h-40 -top-[90px] sm:-top-[152px] z-30 left-5 object-cover pointer-events-none" alt="textura" />
        <img src="/building-2-no-bg.png" className="building-img absolute h-24 w-20 sm:w-52 sm:h-52 -top-[70px] sm:-top-40 z-30 right-5 object-cover pointer-events-none" alt="textura" />
      </div>
      
      <FinalCTA />
    </main>
  );
}
