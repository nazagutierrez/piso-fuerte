import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function FinalCTA() {
  const ctaSection = useRef<HTMLDivElement>(null);
  const cardContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ctaSection.current, {
        padding: "16px 16px 40px 16px",
        borderRadius: "0 0 30px 30px",
        scrollTrigger: {
          trigger: ctaSection.current,
          start: "50% 70%",
          end: "center 20%",
          scrub: true,
        },
      });

      gsap.to(cardContainer.current, {
        borderRadius: "5px 5px 30px 30px",
        scrollTrigger: {
          trigger: ctaSection.current,
          start: "50% 70%",
          end: "center 20%",
          scrub: true,
        },
      });
    }, ctaSection);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ctaSection}
      className="relative -mt-2 bg-gray-100 text-white"
    >
      <div ref={cardContainer} className="h-full z-40 w-full text-center bg-brand-dark py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl uppercase title-font sm:text-5xl font-bold mb-6 text-balance">
          ¿Listo para
          <span className="text-brand-yellow title-font"> comenzar </span>
          tu proyecto?
        </h2>
        <p className="sm:text-xl text-neutral-400 font-thin mb-8 text-pretty">
          Mandanos un mensaje y en menos de 24 horas te enviaremos un
          presupuesto sin compromiso.
        </p>
        <Link
          to="/contacto"
          className="text-sm sm:text-base inline-flex group items-center gap-2 bg-brand-yellow text-brand-dark px-8 py-4 font-semibold hover:opacity-80 transition-opacity"
        >
          Solicitar Presupuesto{" "}
          <FiArrowRight className="group-hover:translate-x-1.5 transition-all" />
        </Link>
      </div>
    </section>
  );
}
