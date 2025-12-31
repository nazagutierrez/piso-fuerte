import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Más de 10 años de experiencia",
  "El mejor precio en la industria",
  "Materiales de primera calidad",
  "Presupuestos sin compromiso",
  "Garantía en todos los trabajos",
  "Atención personalizada",
];

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-item", {
        scrollTrigger: { trigger: featuresRef.current, start: "top 80%" },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });
    }, featuresRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={featuresRef}
      className="py-20 relative z-30 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <img
              src="/galpon-2.jpg"
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
              to="/nosotros"
              className="inline-flex items-center gap-2 mt-8 text-brand-dark font-semibold hover:text-brand-yellow group transition-colors"
            >
              Conocer más sobre nosotros{" "}
              <FiArrowRight className="group-hover:ms-2 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
