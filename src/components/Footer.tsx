import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-yellow flex items-center justify-center">
                <span className="text-brand-dark font-bold text-xl">PF</span>
              </div>
              <span className="font-bold text-xl">Piso Fuerte</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Construcción y remodelación profesional con más de 15 años de experiencia en el sector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-brand-yellow">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-brand-yellow transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre-nosotros"
                  className="text-sm text-gray-400 hover:text-brand-yellow transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/trabajos" className="text-sm text-gray-400 hover:text-brand-yellow transition-colors">
                  Trabajos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-400 hover:text-brand-yellow transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-brand-yellow">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiPhone className="mt-1 text-brand-yellow flex-shrink-0" size={16} />
                <span className="text-sm text-gray-400">+34 612 345 678</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-1 text-brand-yellow flex-shrink-0" size={16} />
                <span className="text-sm text-gray-400">info@pisofuerte.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-brand-yellow flex-shrink-0" size={16} />
                <span className="text-sm text-gray-400">Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Piso Fuerte. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
