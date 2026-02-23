"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Features from "./Features"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buildingsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      gsap.set(".building-img", { y: 0 });

      gsap.from(".building-img", {
        scrollTrigger: { 
          trigger: buildingsRef.current, 
          start: "top bottom",
          end: "bottom 40%",
          scrub: true,
        },
        y: 200,
        ease: "power3.out",
      });
    }, containerRef)


    gsap.fromTo(imageRef.current, {
      opacity: 0,
      y: -20,
      ease: "power3.out",
    }, 
    {
      opacity: 1,
      y: 0,
    }
    );

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-[url('/textura-oscura.jpg')] bg-bottom text-white pt-24" ref={containerRef}>
      <div className="absolute bg-texture-black/35 inset-0 h-full z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="about-header pt-8 ps-8 mb-16 absolute">
          <h1 className="text-5xl sm:text-6xl title-font uppercase mb-6 text-balance">
            <span className="title-font text-brand-yellow">Sobre</span> Nosotros
          </h1>
          <p className="text-2xl font-thin max-w-xl text-pretty text-white/85">
            Construyendo sueños y transformando espacios desde 2015
          </p>
        </div>

        <div ref={imageRef}>
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
              href="/about-equipo.jfif"
              width="110%"
              height="100%"
              className="brightness-80 saturate-120"
              clipPath="url(#bite)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="about-content">
            <img
              src="/galpon-3.jfif"
              alt="Equipo Piso Fuerte"
              className="w-full h-[400px] rounded-bl-3xl rounded-t-3xl object-cover mb-8"
            />
          </div>
          <div className="about-content space-y-6">
            <div>
              <h2 className="text-7xl font-bold mb-4">Nuestra Historia</h2>
              <p className="text-lg leading-relaxed text-white/70 font-thin">
                Piso Fuerte nació en 2015 con la visión de ofrecer servicios de construcción y remodelación de la más
                alta calidad. Desde nuestros inicios, nos hemos comprometido a superar las expectativas de nuestros
                clientes, combinando experiencia técnica con un trato personalizado.
              </p>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="about-content space-y-6">
            <div>
              <h2 className="text-7xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-lg leading-relaxed text-white/70 font-thin">
                Transformar espacios en lugares funcionales y estéticamente excepcionales, utilizando materiales de
                primera calidad y las mejores prácticas del sector. Cada proyecto es una oportunidad para demostrar
                nuestro compromiso con la excelencia.
              </p>
            </div>
          </div>
          <div className="about-content">
            <img
              src="/about-galpon-equipo.png"
              alt="Equipo Piso Fuerte"
              className="w-full h-[400px] rounded-tr-3xl rounded-b-3xl object-cover mb-8"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="about-content grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-brand-yellow mb-2">10+</div>
            <p className="text-lg font-thin">Años de Experiencia</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-yellow mb-2">20+</div>
            <p className="text-lg font-thin">Galpones realizados</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-brand-yellow mb-2">30+</div>
            <p className="text-lg font-thin">Pisos fuertes</p>
          </div>
        </div>

  
      </div>
      <div className="relative mt-20 z-10">
        <Features />

        {/* Buildings images */}
        <div ref={buildingsRef} className="relative">
          <img src="/about-illustracion.png" className="building-img absolute hidden xs:block w-40 h-40 -top-[120px] sm:-top-[124px] z-10 right-62 xl:left-5 object-cover pointer-events-none" alt="textura" />
          <img src="/about-illustracion-2.png" className="building-img absolute w-34 h-34 xs:w-52 xs:h-52 -top-[129px] xs:-top-[195px] sm:-top-40 z-10 right-5 object-cover pointer-events-none" alt="textura" />
        </div>

      </div>
    </main>
  )
}
