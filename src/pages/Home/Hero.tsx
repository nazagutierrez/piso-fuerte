import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const buttons = [
  {
    href: "tel:+542364525588",
    icon: <FiPhone className="group-hover:text-brand-yellow transition-all" />,
    text: "Llamar",
  },
  {
    href: "https://wa.me/542364525588?text=Hola!%20vengo%20de%20la%20página%20web%20y%20quiero%20saber%20más%20sobre%20sus%20servicios.",
    icon: <FaWhatsapp className="group-hover:text-brand-yellow transition-all" />,
    text: "Whatsapp",
  },
  {
    href: "https://www.instagram.com/constructorapisofuerte",
    icon: <FaInstagram className="group-hover:text-brand-yellow transition-all" />,
    text: "Instagram",
  },
]

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const animatedHeroTextRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(videoRef.current, {
        borderRadius: "450px",
        overflow: "hidden",
      });

      gsap.from(videoRef.current, {
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
        backgroundPosition: "-570% 0%",
        scrollTrigger: {
          start: "top 10%",
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
        delay: 0.5,
        ease: "power3.out",
        
      });

      gsap.to(".hero-cta-item", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        delay: 1,
      });

    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="h-screen relative flex items-center"
    >
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute shadow-2xl shadow-white/20 brightness-35 inset-0 object-cover h-full w-full z-10">
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>
      <div className="bg-texture-black inset-0 absolute pointer-events-none -scale-x-100 -top-[89.9%] -z-10 w-full">
        <img
          src="/textura.jpg"
          className="rotate-180 w-full opacity-35 h-full"
          alt="textura"
        />
      </div>
      
      <div className="max-w-7xl mx-auto z-50">
        <div className="gap-12 items-center">
          <div >
            <h1 className="hero-title text-center text-6xl xs:text-7xl sm:text-8xl lg:text-[9rem] font-bold text-brand-yellow leading-tight text-balance">
              <span
                ref={animatedHeroTextRef}
                className="hollow-text title-font"
              >
                PISO
              </span>
              <span className="text-white title-font"> FUERTE</span>
            </h1>
            <p className="hero-subtitle text-center font-thin  xs:text-lg sm:text-xl text-white leading-relaxed text-pretty">
              Constructora profesional en Junín y alrededores
            </p>
            <div className="mt-10 mx-10 flex items-center justify-center flex-wrap gap-2">

              {buttons.map((button) => (
                <a
                  key={button.text}
                  href={button.href}
                  className="inline-flex rounded group place-content-center bg-[#212121] hero-cta-item opacity-0 w-[80px] sm:w-[169px] translate-y-5 border border-transparent text-white hover:border-[#9c8700] hover:bg-[#1a1a1a] items-center duration-400 transition-colors gap-2 px-8 py-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-xl">{button.icon}</span>
                  <span className="hidden sm:block">{button.text}</span>
                </a>
              ))}

            </div>
            <div className="items-center justify-center mt-4 flex flex-wrap gap-4">
              <Link
                to="/trabajos"
                className="flex rounded border-b border-brand-yellow/50 call-button place-content-end font-medium hero-cta-item opacity-0 w-[169px] text-center translate-y-5 items-center gap-2 px-5 py-3 sm:py-4"
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
