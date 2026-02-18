import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Galpones",
    description:
      "Construimos galpones industriales y comerciales adaptados a tus necesidades específicas.",
  },
  {
    title: "Casas",
    description:
      "Construimos casas personalizadas que combinan diseño, funcionalidad y calidad, siempre respetando tus gustos.",
  },
  {
    title: "Piletas",
    description:
      "Construimos piletas de todos los tamaños y bien pensadas dependiendo del espacio disponible.",
  },
];

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".service-card", {
        scrollTrigger: { trigger: servicesRef.current, start: "top 80%" },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

    }, servicesRef);
    return () => ctx.revert();
  }, []);

  return (
      <section ref={servicesRef} className="relative -mb-1 bg-[#141414]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none"
          src="/textura-de-la-pared-del-grunge.jpg"
          alt="textura"
        />
        <div className="max-w-7xl mx-auto py-40 px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-4 text-balance title-font">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-lg text-white/90 font-thin mb-12 max-w-2xl text-pretty">
            Somos capaces de llevar a cabo muchos tipos de proyectos de construcción,
            pero principalmente nos especializamos en:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card relative border-s border-brand-yellow/70 p-8 hover:shadow-lg transition-shadow"
              >
                
                <h3 className="text-2xl font-bold text-white/90 mb-3 title-font uppercase">
                  {service.title}
                </h3>
                <p className="text-white/80 font-thin leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-center text-white/90 font-thin text-lg mt-20">También brindamos servicios de electricidad, soldadura y plomería, entre otros. Consultanos sin compromiso</h2>
        </div>
      </section>
  );
}
