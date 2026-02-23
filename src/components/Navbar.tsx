import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const pathname = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!navRef.current) return

    const showNav = () => {
      gsap.to(navRef.current, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const hideNav = () => {
      gsap.to(navRef.current, {
        y: "-100%",
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.scroll() < 200) {
          showNav()
          return
        }

        if (self.direction === 1) {
          hideNav()
        } else {
          showNav()
        }
      }
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <>
      {/* Desktop menu */}
      <nav ref={navRef} className="fixed hidden md:flex top-0 w-full z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 ">
          <div className="flex w-full justify-around items-center h-16">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-12 w-12" />
            </Link>

            <div className="items-center flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname.pathname === link.href
                      ? "text-brand-yellow"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav className="fixed md:hidden top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center h-18">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-12 w-12" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="py-4 border-t flex flex-col items-end text-white border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-fit p-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}