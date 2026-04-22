import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import StaggeredMenu from "./StaggeredMenu"
import logo from "../assets/jpg-assets/logo.png"

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  { link: "/", label: "Inicio", ariaLabel: "Ir a la página de inicio" },
  { link: "/nosotros", label: "Nosotros", ariaLabel: "Más información sobre nosotros" },
  { link: "/trabajos", label: "Trabajos", ariaLabel: "Ver nuestros trabajos" },
  { link: "/contacto", label: "Contacto", ariaLabel: "Contactarnos" },
]

const socialItems = [
  { label: 'Whatsapp', link: 'https://wa.me/542364525588?text=Hola!%20vengo%20de%20la%20página%20web%20y%20quiero%20saber%20más%20sobre%20sus%20servicios.' },
  { label: 'Instagram', link: 'https://www.instagram.com/constructorapisofuerte' },
];

export function Navbar() {
  useEffect(() => {
    const showNav = () => {
      gsap.to(".staggered-menu-header", {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const hideNav = () => {
      gsap.to(".staggered-menu-header", {
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
      <nav aria-label="Navegación principal" className="fixed top-0 left-0 w-full z-[60] pointer-events-none">
        <StaggeredMenu
          isFixed
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#d6c44f', '#f1d200']}
          logoUrl={logo}
          accentColor="#f1d200"
        />
      </nav>
  )
}