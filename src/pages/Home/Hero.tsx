import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const backdropOpacityRef = useRef<HTMLDivElement>(null);
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
          trigger: heroRef.current,
          start: "top",
          end: "bottom",
          scrub: true,
        },
      });

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

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="h-screen relative flex items-center bg-[url('/modern-construction-site-with-workers-and-equipmen.jpg')] bg-cover bg-center"
    >
      <div
        ref={backdropOpacityRef}
        className="absolute h-full w-full bg-neutral-900/70 pointer-events-none"
      ></div>
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
            <div className="hero-cta mt-8 flex flex-wrap gap-4">
              <Link
                to="/trabajos"
                data-variant="yellow"
                className="inline-flex call-button font-medium items-center gap-2 px-8 py-4"
              >
                Ver Trabajos <FiArrowRight />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex bg-[#212121] border border-[#7a6a00] text-white hover:border-[#9c8700] hover:bg-[#1a1a1a] transition-all duration-300 items-center gap-2 px-8 py-4"
              >
                <FiPhone className="flex-shrink-0" size={20} />
                Llamar
              </Link>
              <Link
                to="/contacto"
                className="inline-flex bg-[#212121] border border-[#7a6a00] text-white hover:border-[#9c8700] hover:bg-[#1a1a1a] transition-all duration-300 items-center gap-2 px-8 py-4"
              >
                <FaWhatsapp className="flex-shrink-0" size={20} />
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
