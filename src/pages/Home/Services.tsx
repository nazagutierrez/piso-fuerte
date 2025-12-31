import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiWarehouseFill } from "react-icons/pi";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlinePool } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Galpones",
    description:
      "Construimos galpones industriales y comerciales adaptados a tus necesidades específicas.",
    icon: (
      <PiWarehouseFill className="text-3xl mb-4 absolute top-0 right-5 rotate-12 text-brand-yellow opacity-70" />
    ),
  },
  {
    title: "Casas",
    description:
      "Construimos casas personalizadas que combinan diseño, funcionalidad y calidad, siempre respetando tus gustos.",
    icon: (
      <IoHomeSharp className="text-3xl mb-4 absolute top-0 right-5 rotate-12 text-brand-yellow opacity-70" />
    ),
  },
  {
    title: "Piletas",
    description:
      "Construimos piletas de todos los tamaños y bien pensadas dependiendo del espacio disponible.",
    icon: (
      <MdOutlinePool className=" text-3xl mb-4 absolute top-0 right-5 rotate-12 text-brand-yellow opacity-70" />
    ),
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
          
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-4 text-balance title-font">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-lg text-white/80 mb-12 max-w-2xl text-pretty">
            Somos capaces de llevar a cabo muchos tipos de proyectos de construcción,
            pero principalmente nos especializamos en:
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
  );
}
