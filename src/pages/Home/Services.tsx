import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import textura from "@/assets/jpg-assets/textura.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Galpones",
    description:
      "Construimos galpones industriales y comerciales adaptados a tus necesidades específicas.",
  },
  {
    title: "Pisos",
    description:
      "Ofrecemos pisos de alta resistencia para todo tipo de espacios, desde residenciales hasta industriales.",
  },
  {
    title: "Otros",
    description:
     "También somos capaces de llevar a cabo muchos tipos de proyectos de construcción.",
  },
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const lastTextRef = useRef<HTMLHeadingElement>(null);
  const servicesTitle = useRef<HTMLHeadingElement>(null);
  const servicesDescription = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(servicesTitle.current, {
        scrollTrigger: { 
          trigger: servicesTitle.current, 
          start: "top 90%" 
        },
        opacity: 0,
        y: 80,
        duration: 1.2,
        filter: "blur(25px)",
        ease: "power3.out",
      });

      gsap.from(servicesDescription.current, {
        scrollTrigger: { 
          trigger: servicesDescription.current, 
          start: "top 90%" 
        },
        opacity: 0,
        y: 70,
        duration: 1,
        filter: "blur(25px)",
        ease: "power3.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: { trigger: ".service-card", start: "top 90%" },
        opacity: 0,
        y: 50,
        filter: "blur(25px)",
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(lastTextRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        filter: "blur(25px)",
        scrollTrigger: { trigger: lastTextRef.current, start: "top 90%" },
      });
    }, servicesRef);
    return () => ctx.revert();
  }, []);

  return (
      <section ref={servicesRef} className="relative -mb-1 bg-texture-black">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
          src={textura}
          alt="Textura de fondo oscuro para contraste"
        />
        <div className="max-w-[1600px] mx-auto py-28 sm:py-40 px-4 sm:px-6 lg:px-8 relative">
          <h2 ref={servicesTitle} className="text-7xl sm:text-[7rem] font-bold text-brand-yellow mb-4 text-balance title-font">
            NUESTROS <span className="text-white uppercase title-font">Servicios</span>
          </h2>
          <p ref={servicesDescription} className="text-lg text-white/90 font-thin mb-12 max-w-2xl text-pretty">
            Somos capaces de llevar a cabo muchos tipos de proyectos de construcción,
            pero principalmente nos especializamos en:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="service-card relative border-s border-brand-yellow/70 p-4 sm:p-8 transition-shadow"
              >
                
                <h3 className="text-3xl font-bold text-white/90 mb-3 title-font uppercase">
                  {service.title}
                </h3>
                <p className="text-white/80 text-xl font-thin text-pretty leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <h2 ref={lastTextRef} className="text-center text-white/90 font-thin text-lg mt-20">También brindamos servicios de electricidad, soldadura, plomería y más! Consultanos sin compromiso</h2>
        </div>
      </section>
  );
}
