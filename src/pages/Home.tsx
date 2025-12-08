import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiPhone } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiCrane, GiHammerBreak } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Construcción",
    description:
      "Proyectos de construcción desde cero con los más altos estándares de calidad y seguridad.",
    icon: (
      <GiCrane className="text-4xl mb-4 absolute top-0 right-5 rotate-12 text-brand-yellow opacity-70" />
    ),
  },
  {
    title: "Remodelación",
    description:
      "Transformamos espacios existentes en ambientes modernos y funcionales adaptados a tus necesidades.",
    icon: (
      <GiHammerBreak className="text-4xl mb-4 absolute top-0 right-5 rotate-12 text-brand-yellow opacity-70" />
    ),
  },
  {
    title: "Diseño de Interiores",
    description:
      "Creamos espacios únicos que reflejan tu estilo y maximizan la funcionalidad de cada ambiente.",
    icon: (
      <TfiRulerPencil className="text-4xl mb-4 absolute top-0 right-5 rotate-12 text-brand-yellow opacity-70" />
    ),
  },
];
const features = [
  "Más de 15 años de experiencia",
  "Equipo profesional certificado",
  "Materiales de primera calidad",
  "Presupuestos sin compromiso",
  "Garantía en todos los trabajos",
  "Atención personalizada",
];
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLImageElement>(null);
  const imgRef2 = useRef<HTMLImageElement>(null);
  const imgRef3 = useRef<HTMLImageElement>(null);
  const backdropOpacityRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const animatedHeroTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Hero Animation
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
          markers: true,
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

      gsap.set(imgRef1.current, {
        scale: 0.9,
        transformOrigin: "center center",
        borderRadius: "60px",
      });

      gsap.to(imgRef1.current, {
        scale: 1.2,
        borderRadius: "-50px",
        ease: "none",
        scrollTrigger: {
          trigger: imgRef1.current,
          start: "top bottom",
          end: "105% top",
          scrub: true,
        },
      });

      gsap.from(imgRef1.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: imgRef1.current,
          start: "top 7%",
          end: "bottom",
          scrub: true,
          pin: true,
        },
      });
      
      gsap.set(imgRef2.current, { scale: 1.1, borderRadius: "30px 30px 0 0" });

      gsap.from(imgRef2.current, {
        scrollTrigger: {
          trigger: imgRef2.current,
          snap: { snapTo: 0.5, duration: 0.5, ease: "power1.out" },
        },
      });

      gsap.from(imgRef2.current, {
        scale: 1,
        scrollTrigger: {
          trigger: imgRef2.current,
          start: "top top",
          end: "bottom",
          scrub: true,
          pin: true,
        },
      });

      gsap.from(".service-card", {
        scrollTrigger: { trigger: servicesRef.current, start: "top 80%" },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".feature-item", {
        scrollTrigger: { trigger: featuresRef.current, start: "top 80%" },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen" ref={heroRef}>
    
      {/* Hero Section */}
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
                  className="inline-flex call-button items-center gap-2 px-8 py-4"
                >
                  <FiPhone className=" flex-shrink-0" size={20} />
                  Llamar
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex call-button items-center gap-2 px-8 py-4"
                >
                  <FaWhatsapp className=" flex-shrink-0" size={20} />
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section ref={servicesRef} className="relative -mb-1 bg-[#141414]">
        
        <div
          className="bg-[#141414] inset-0 absolute pointer-events-none -scale-x-100 -top-[99.9%] -z-10 w-full"
        >
          
          <img
            src="/textura-de-la-pared-del-grunge.jpg"
            className="bg-top rotate-180 w-full opacity-30 object-cover h-[674px]"
            alt="textura"
          ></img>
        </div>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none"
          src="/textura-de-la-pared-del-grunge.jpg"
          alt="textura"
        />
        <div className="max-w-7xl mx-auto py-40 px-4 sm:px-6 lg:px-8 relative">
          
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow-200/80 mb-4 text-balance title-font">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl text-pretty">
            
            Ofrecemos una amplia gama de servicios de construcción y
            remodelación adaptados a tus necesidades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card relative border-s border-brand-yellow/70 p-8 hover:shadow-lg transition-shadow"
              >
                
                {service.icon}
                <h3 className="text-2xl font-bold text-white/90 mb-3 title-font uppercase">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-full w-full flex flex-col">
        
        <div className="h-screen w-full relative bg-[#141414]">
          
          <img
            src="/textura-de-la-pared-del-grunge.jpg"
            className="bg-top h-[674px] rotate-180 -scale-x-100 w-full opacity-30 object-cover"
          ></img>
          <img
            ref={imgRef1}
            className="w-full h-screen absolute inset-0 object-cover"
            src="/modern-construction-site-with-workers-and-equipmen.jpg"
            alt="bg"
          />
        </div>
        <img
          ref={imgRef2}
          className="h-screen object-cover z-20"
          src="/professional-construction-team-working-on-renovati.jpg"
          alt="bg"
        />
        <img
          ref={imgRef3}
          className="h-screen object-cover z-30"
          src="/modern-construction-site-with-workers-and-equipmen.jpg"
          alt="bg"
        />
      </section>
      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 relative z-30 px-4 sm:px-6 lg:px-8 bg-white"
      >
        
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative h-[400px]">
              
              <img
                src="/professional-construction-team-working-on-renovati.jpg"
                alt="Equipo profesional"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              
              <h2 className="text-4xl uppercase title-font sm:text-5xl text-brand-dark mb-6 text-balance">
                ¿Por qué elegirnos?
              </h2>
              <ul className="space-y-4">
                
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="feature-item flex items-center gap-3"
                  >
                    
                    <div className="w-6 h-6 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                      
                      <FiCheck className="text-brand-dark" size={16} />
                    </div>
                    <span className="text-lg text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center gap-2 mt-8 text-brand-dark font-semibold hover:text-brand-yellow transition-colors"
              >
                
                Conocer más sobre nosotros <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white">
        
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl uppercase title-font sm:text-5xl font-bold mb-6 text-balance">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-pretty">
            
            Contáctanos hoy y recibe un presupuesto personalizado sin
            compromiso.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-8 py-4 font-semibold hover:bg-yellow-400 transition-colors"
          >
            
            Solicitar Presupuesto <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
