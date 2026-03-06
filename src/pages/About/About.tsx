import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Features from "./Features"

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buildingsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth < 640;

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
    <main className="min-h-screen bg-[url('/textura-oscura.jpg')] bg-bottom text-white xs:pt-24" ref={containerRef}>
      <div className="absolute bg-texture-black/80 inset-0 h-full z-0" />

      <img className="object-cover brightness-75 z-0 xs:hidden block absolute h-150 w-full object-[center_-180px] " src="/about-equipo.jfif" alt="equipo piso fuerte" />
      
      <div className="xs:max-w-7xl mx-3 xs:mx-auto sm:px-4 lg:px-8 z-20">
        {/* Header */}
        <div className="about-header w-full text-center xs:text-start h-100 px-5 xs:absolute  xs:w-1/2 pt-42 xs:pt-3 md:pt-6 xs:px-2 xs:ps-7 md:ps-8 mb-16">
          <h1 className="text-6xl xs:text-5xl sm:text-5xl lg:text-6xl title-font uppercase mb-1 xs:mb-3">
            <span className="title-font text-brand-yellow">Sobre</span> Nosotros
          </h1>
          <p className="text-[0.95rem] sm:text-xl md:text-2xl xs:font-thin max-w-xl text-pretty xs:text-white/85">
            Construyendo sueños y transformando espacios desde 2015
          </p>
        </div>

        <div ref={imageRef} className="w-full h-[710px] px-4 mb-20 relative xs:block hidden">
          <svg className="absolute">
            <defs>
              <clipPath id="bite" clipPathUnits="objectBoundingBox">
                <path
                  d="
                    M 0 0.35
                    V 0.9
                    Q 0 1 0.06 1
                    H 0.94
                    Q 1 1 1 0.9
                    V 0.1
                    Q 1 0 0.94 0
                    H 0.6
                    Q 0.53 0 0.53 0.1
                    V 0.2
                    Q 0.53 0.3 0.47 0.3
                    H 0.06
                    Q 0 0.3 0 0.4
                    Z
                  "
                />
              </clipPath>
              <clipPath id="bite-mobile" clipPathUnits="objectBoundingBox">
                <path
                  d="
                    M 0 0.35
                    V 0.9
                    Q 0 1 0.10 1
                    H 0.90
                    Q 1 1 1 0.9
                    V 0.1
                    Q 1 0 0.9 0
                    H 0.75
                    Q 0.64 0 0.65 0.1
                    V 0.2
                    Q 0.65 0.3 0.55 0.3
                    H 0.10
                    Q 0 0.3 0 0.35
                    Z
                  "
                />
              </clipPath>
            </defs>
          </svg>

          <img
            src="/about-equipo.jfif"
            alt="Equipo"
            className="w-full h-full object-cover brightness-80 saturate-120"
            style={{
              clipPath: isMobile ? "url(#bite-mobile)" : "url(#bite)"
            }}
          />
        </div>

        <div className="flex flex-col mx-1 xs:mx-3 sm:mx-5">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-5 sm:mb-20">
            <div className="about-content order-1">
              <img
                src="/galpon-3.jfif"
                alt="Equipo Piso Fuerte"
                className="w-full sm:h-[400px] rounded-3xl rounded-tl-none sm:rounded-bl-none sm:rounded-t-3xl object-cover mb-8"
              />
            </div>
            <div className="about-content space-y-6">
              <div>
                <h2 className="text-6xl sm:text-7xl font-bold mb-4">Nuestra Historia</h2>
                <p className="sm:text-lg leading-relaxed text-white/70 font-thin">
                  Piso Fuerte nació en 2015 con la visión de ofrecer servicios de construcción y remodelación de la más
                  alta calidad. Desde nuestros inicios, nos hemos comprometido a superar las expectativas de nuestros
                  clientes, combinando experiencia técnica con un trato personalizado.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-20">
            <div className="about-content space-y-6 lg:order-1">
              <div>
                <h2 className="text-6xl sm:text-7xl font-bold mb-4">Nuestra Misión</h2>
                <p className="sm:text-lg leading-relaxed text-white/70 font-thin">
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
                className="w-full sm:h-[400px] rounded-tl-none sm:rounded-tl-3xl sm:rounded-tr-none rounded-3xl object-cover mb-8"
              />
            </div>
          </div>
        </div>


        {/* Experience Section */}
        <div className="about-content grid grid-cols-3 xs:grid-cols-3 gap-4 xs:gap-8 mx-2 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-2">10+</div>
            <p className="text-base sm:text-lg font-thin">Años de Experiencia</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-2">20+</div>
            <p className="text-base sm:text-lg font-thin">Galpones realizados</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-2">30+</div>
            <p className="text-base sm:text-lg font-thin">Pisos fuertes</p>
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
