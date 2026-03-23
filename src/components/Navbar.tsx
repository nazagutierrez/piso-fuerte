import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import StaggeredMenu from "./StaggeredMenu"

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
      <div className="h-screen w-full bg-black overflow-hidden z-60">
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
          logoUrl="src/assets/logo.png"
          accentColor="#f1d200"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
  )
}