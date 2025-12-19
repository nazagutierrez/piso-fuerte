import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

export function Footer() {
  return (
    <footer className="bg-brand-dark relative text-white border-t border-neutral-700">      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center w-fit">
              <img src="/logo.png" alt="Logo" className="h-16 w-16" />

              <span className="font-bold text-3xl text-white title-font"><span className='text-brand-yellow title-font'>PISO</span> FUERTE</span>
            </Link>
            <p className="text-sm sm:w-2/3 text-pretty text-neutral-400 leading-relaxed">
              Construcción profesional de galpones, piletas y casas en Junín y alrededores.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-thin mb-4 text-brand-yellow">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-nosotros"
                  className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/trabajos" className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors">
                  Trabajos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-thin mb-4 text-brand-yellow">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiPhone className="mt-1 text-brand-yellow flex-shrink-0" size={16} />
                <span className="text-sm text-neutral-400">+54 9 2364 52-5588</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-1 text-brand-yellow flex-shrink-0" size={16} />
                <span className="text-sm text-neutral-400">info@pisofuerte.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-brand-yellow flex-shrink-0" size={16} />
                <span className="text-sm text-neutral-400">Junín, Buenos Aires</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Piso Fuerte. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* <img src="/logo.png" alt="Logo" className="h-[1000px] pointer-events-none opacity-30 w-[1000px] -rotate-45 absolute blur-sm -bottom-40 -right-90" /> */}
      
      <div className='flex items-center xs:items-start pointer-events-none h-18 xs:h-50 sm:h-60 md:h-[340px] lg:h-[440px] xs:-mt-12 sm:-mt-18 justify-center ml-10 xs:ml-[150px] sm:ml-[250px] md:ml-[350px] lg:ml-[450px] xl:ml-0'>
        <h1 className="text-nowrap text-center text-[6rem] xs:text-[11rem] sm:text-[16rem] md:text-[20rem] lg:text-[27rem] z-30 brightness-50 title-font"><span className="text-brand-yellow title-font">PISO</span> FUERTE</h1>
      </div>

    </footer>
  )
}
