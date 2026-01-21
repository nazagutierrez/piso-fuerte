import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const animatedHeroTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(heroSectionRef.current, {
        borderRadius: "450px",
        overflow: "hidden",
      });

      gsap.from(heroSectionRef.current, {
        borderRadius: "0px",
        duration: 0.5,
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "center",
          end: "bottom",
          scrub: true,
        },
      });

      gsap.to(animatedHeroTextRef.current, {
        backgroundPosition: "-500% 0%",
        scrollTrigger: {
          start: "top",
          end: "bottom",
          scrub: true,
        },
      });
    }, heroSectionRef);
    return () => ctx.revert();
  }, []);

  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        
      });

      gsap.to(".hero-cta-item", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });

    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="h-screen relative flex items-center bg-[url('/modern-construction-site-with-workers-and-equipmen.jpg')] bg-cover bg-center"
    >
      <div className="max-w-7xl ms-72">
        <div className="gap-12 items-center">
          <div>
            <h1 className="hero-title text-4xl sm:text-7xl lg:text-9xl font-bold text-brand-yellow leading-tight text-balance">
              <span
                ref={animatedHeroTextRef}
                className="hollow-text title-font"
              >
                PISO
              </span>
              <span className="text-white title-font"> FUERTE</span>
            </h1>
            <p className="hero-subtitle font-thin text-2xl sm:text-2xl text-white/90 mt-6 leading-relaxed text-pretty">
              Constructora profesional en Junín y alrededores
            </p>
            <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
              <Link
                to="/contacto"
                className="inline-flex place-content-center bg-[#212121] hero-cta-item opacity-0 w-[169px] translate-y-5 border border-[#7a6a00] text-white hover:border-[#9c8700] hover:bg-[#1a1a1a] items-center hover:transition-colors gap-2 px-8 py-4"
              >
                <FiPhone size={20} />
                Llamar
              </Link>
              <Link
                to="/contacto"
                className="inline-flex bg-[#212121] hero-cta-item opacity-0 w-[169px] translate-y-5 border border-[#7a6a00] text-white hover:border-[#9c8700] hover:bg-[#1a1a1a] items-center hover:transition-colors gap-2 px-8 py-4"
              >
                <FaWhatsapp size={20} />
                Whatsapp
              </Link>
              <Link
                to="/contacto"
                className="inline-flex bg-[#212121] hero-cta-item opacity-0 w-[169px] translate-y-5 border border-[#7a6a00] text-white hover:border-[#9c8700] hover:bg-[#1a1a1a] items-center hover:transition-colors gap-2 px-8 py-4"
              >
                <FaInstagram size={20} />
                Instagram
              </Link>
            </div>
            <div className="items-center justify-center mt-4 flex flex-wrap gap-4">
              <Link
                to="/trabajos"
                data-variant="yellow"
                className="flex call-button place-content-end font-medium hero-cta-item opacity-0 w-[169px] text-center translate-y-5 items-center gap-2 px-5 py-4"
              >
                Ver Trabajos <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
