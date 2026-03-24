import { useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import textura from "../../assets/jpg-assets/textura.jpg";
import posterHero from "../../assets/jpg-assets/poster-hero-video.jpg";

gsap.registerPlugin(ScrollTrigger);

const buttons = [
  {
    href: "tel:+542364525588",
    icon: <FiPhone className="group-hover:text-brand-yellow transition-all" aria-hidden="true" />,
    text: "Llamar",
    label: "Llamar por teléfono a Piso Fuerte",
  },
  {
    href: "https://wa.me/542364525588?text=Hola!%20vengo%20de%20la%20página%20web%20y%20quiero%20saber%20más%20sobre%20sus%20servicios.",
    icon: <FaWhatsapp className="group-hover:text-[#25D366] transition-all" aria-hidden="true" />,
    text: "Whatsapp",
    label: "Contactar por WhatsApp",
  },
  {
    href: "https://www.instagram.com/constructorapisofuerte",
    icon: (
      <span className="relative flex items-center justify-center" aria-hidden="true">
        <FaInstagram className="transition-opacity duration-500 group-hover:opacity-0" />
        <FaInstagram className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 fill-[url(#instagramGradient)]" />
      </span>
    ),
    text: "Instagram",
    label: "Seguir a Piso Fuerte en Instagram",
  }
]

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const animatedHeroTextRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      gsap.set(videoRef.current, { borderRadius: "450px", overflow: "hidden" });
      mm.add("(max-width: 1023px)", () => {
        gsap.from(videoRef.current, {
          borderRadius: "0px",
          duration: 0.5,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top -80%",
            end: "bottom -50%",
            scrub: true,
          },
        });
      });
      mm.add("(min-width: 1024px)", () => {
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
      });
      gsap.to(animatedHeroTextRef.current, {
        backgroundPosition: "-570% 50%",
        scrollTrigger: { start: "top 10%", end: "bottom", scrub: true },
      });
    }, heroSectionRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: 120, duration: 1.5, filter: "blur(25px)", ease: "power3.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 40, duration: 1, delay: 0.5, filter: "blur(25px)", ease: "power3.out" });
      gsap.from(".hero-cta-item", { opacity: 0, filter: "blur(15px)", ease: "power3.out", duration: 1, delay: .8 });
      gsap.fromTo(".hero-cta-work-item",
        { opacity: 0, y: 60, filter: "blur(15px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", ease: "power3.out", duration: 1.5, delay: 1.2 }
      );
    }, heroSectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="min-h-screen relative flex items-center"
      aria-labelledby="hero-heading"
    >
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
      </svg>

      {/* <div className="h-screen w-screen z-999 absolute">
          <div id="logo-mask" className="fixed top-0 w-full h-screen z-50">
          </div>
      </div> */}

      <video 
        poster={posterHero} 
        ref={videoRef} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute sm:shadow-2xl shadow-white/20 brightness-35 inset-0 object-cover h-full w-full z-10"
        title="Video institucional de Piso Fuerte Constructora"
      >
        <source src="/videos/video-hero.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>


      <div className="bg-texture-black inset-0 absolute pointer-events-none -scale-x-100 -top-[89.9%] -z-10 w-full">
        <img
          src={textura}
          className="rotate-180 w-full opacity-20 h-full"
          alt="Textura de fondo de obra en construcción"
          loading="lazy"
        />
      </div>
      
      <div className="max-w-7xl mx-auto z-50 py-20">
        <div className="gap-12 items-center">
          <div>
            <h1 id="hero-heading" className="hero-title text-center text-6xl xs:text-7xl sm:text-8xl lg:text-[9rem] font-bold text-brand-yellow leading-tight text-balance">
              <span
                ref={animatedHeroTextRef}
                className="hollow-text title-font"
              >
                PISO
              </span>
              <span className="text-white title-font"> FUERTE</span>
            </h1>
            
            <h2 className="hero-subtitle text-center font-thin xs:text-lg sm:text-xl text-white leading-relaxed text-pretty">
              Constructora profesional en Junín, Buenos Aires
            </h2>

            <div className="mt-10 mx-10 flex items-center justify-center flex-wrap gap-2">
              {buttons.map((button) => (
                <a
                  key={button.text}
                  href={button.href}
                  className="inline-flex rounded group place-content-center bg-[#212121] hero-cta-item w-[80px] sm:w-[159px] translate-y-5 border border-transparent text-white hover:border-[#9c8700] hover:bg-[#1a1a1a] items-center duration-400 transition-colors gap-2 px-8 py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={button.label}
                >
                  <span className="text-xl">{button.icon}</span>
                  <span className="hidden sm:block">{button.text}</span>
                </a>
              ))}
            </div>

            <div className="items-center justify-center mt-4 flex flex-wrap gap-4">
              <Link
                to="/trabajos"
                className="flex rounded opacity-0 border-b border-brand-yellow/50 call-button font-medium hero-cta-work-item w-[200px] text-center justify-center items-center gap-1 px-5 py-3 sm:py-4 mt-5"
                title="Ver galería de trabajos realizados"
              >
                <span className="ps-2">Ver Trabajos</span> 
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}