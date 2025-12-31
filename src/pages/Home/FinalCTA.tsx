import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative py-20 px-4 z-40 sm:px-6 lg:px-8 bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl uppercase title-font sm:text-5xl font-bold mb-6 text-balance">
          ¿Listo para comenzar tu proyecto?
        </h2>
        <p className="text-xl text-neutral-400 font-thin mb-8 text-pretty">
          Mandanos un mensaje y en menos de 24 horas te enviaremos un
          presupuesto sin compromiso.
        </p>
        <Link
          to="/contacto"
          className="inline-flex group items-center gap-2 bg-brand-yellow text-brand-dark px-8 py-4 font-semibold hover:opacity-80 transition-opacity"
        >
          Solicitar Presupuesto <FiArrowRight className="group-hover:translate-x-1.5 transition-all"  />
        </Link>
      </div>
    </section>
  );
}
