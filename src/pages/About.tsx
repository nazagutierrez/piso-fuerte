"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-brand-dark text-white pt-32 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="about-header mb-16 absolute">
          <h1 className="text-5xl sm:text-6xl title-font uppercase mb-6 text-balance">Sobre Nosotros</h1>
          <p className="text-2xl max-w-3xl text-pretty text-white/70 font-thin">
            Construyendo sueños y transformando espacios desde 2008
          </p>
        </div>

        <div>
          <svg
            viewBox="0 0 17 10"
            className="w-full h-auto mb-20"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <clipPath id="bite">
                <path d="
M 0 3.5 V 9 Q 0 10 1 10 H 16 Q 17 10 17 9 V 1 Q 17 0 16 0 H 10 Q 9 0 9 1 V 2 Q 9 3 8 3 H 1 Q 0 3 0 4 Z
                " />
              </clipPath>
            </defs>

            <image
              href="/construction-company-office-team-meeting-professio.jpg"
              width="100%"
              height="100%"
              clipPath="url(#bite)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="about-content">
            <img
              src="/construction-company-office-team-meeting-professio.jpg"
              alt="Equipo Piso Fuerte"
              className="w-full h-[400px] object-cover mb-8"
            />
          </div>
          <div className="about-content space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
              <p className="text-lg leading-relaxed text-white/70 font-thin">
                Piso Fuerte nació en 2008 con la visión de ofrecer servicios de construcción y remodelación de la más
                alta calidad. Desde nuestros inicios, nos hemos comprometido a superar las expectativas de nuestros
                clientes, combinando experiencia técnica con un trato personalizado.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-lg leading-relaxed text-white/70 font-thin">
                Transformar espacios en lugares funcionales y estéticamente excepcionales, utilizando materiales de
                primera calidad y las mejores prácticas del sector. Cada proyecto es una oportunidad para demostrar
                nuestro compromiso con la excelencia.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-content bg-neutral-900/90 p-12 mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Compromiso</h3>
              <p className="leading-relaxed text-white/70 font-thin">
                Nos dedicamos al 100% a cada proyecto, garantizando resultados excepcionales.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Calidad</h3>
              <p className="leading-relaxed text-white/70 font-thin">
                Utilizamos solo materiales premium y técnicas profesionales certificadas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Confianza</h3>
              <p className="leading-relaxed text-white/70 font-thin">
                Construimos relaciones duraderas basadas en la transparencia y honestidad.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-content grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-brand-yellow mb-2">15+</div>
            <p className="text-lg">Años de Experiencia</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-yellow mb-2">200+</div>
            <p className="text-lg">Proyectos Completados</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-yellow mb-2">100%</div>
            <p className="text-lg">Clientes Satisfechos</p>
          </div>
        </div>
      </div>
    </main>
  )
}
