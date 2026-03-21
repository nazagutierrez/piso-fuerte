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
      gsap.fromTo(
        ".about-header",
        {
          backgroundSize: "140%", // zoom inicial (leve)
          opacity: 0,
          y: 50,
        },
        {
          backgroundSize: "120%", // tu valor final
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.inOut",
        }
      );

      gsap.from(".about-content-1", {
        scrollTrigger: {
          trigger: ".about-content-1",
          start: "top bottom",
        },
        opacity: 0,
        delay: 1,
        y: 30,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".about-content-2", {
        scrollTrigger: {
          trigger: ".about-content-2",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".info-section", {
        scrollTrigger: {
          trigger: ".info-section",
          start: "top 80%",
        },
        opacity: 0,
        stagger: 0.25,
        y: 40,
        duration: 0.5,
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
    <main className="min-h-screen bg-[url('/textura-oscura.jpg')] bg-bottom text-white " ref={containerRef}>
      <div className="absolute bg-texture-black/80 inset-0 h-full z-0" />
            
      <div className="w-full z-20">
        {/* Header */}
        <div className="about-header bg-[url('about-equipo.jfif')] bg-no-repeat bg-size-[120%] xs:bg-size-[110%] sm:bg-cover h-80 xs:h-100 sm:h-120 md:h-140 lg:h-160 xl:h-180 m-2 xs:m-4 rounded-t-xl rounded-b  bg-position-[30%_5%] xxs:bg-position-[30%_35%] xs:bg-position-[0_25%] sm:bg-position-[0_35%] md:bg-position-[0_40%] xl:bg-center text-center md:text-start md:ps-20 pt-16 sm:pt-20 md:pt-20 mb-4 xs:mb-16">
          <div className="absolute bg-black/15 xs:bg-black/25 inset-0 h-full -z-10" />
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl title-font uppercase mb-1 xs:mb-3 mx-3">
            <span className="title-font text-brand-yellow">Sobre</span> Nosotros
          </h1>
          <p className="text-lg xs:text-xl md:text-2xl xs:font-thin md:max-w-xl hidden xs:block text-pretty xs:text-white">
            Construyendo sueños y transformando espacios desde 2015
          </p>
        </div>

        <p className="text-lg mx-2 mb-8 xs:text-xl md:text-2xl xs:font-thin block xs:hidden text-pretty text-center text-white z-10 relative">
          Construyendo sueños y transformando espacios desde 2015
        </p>

        <div className="flex flex-col xs:max-w-7xl px-4 mx-auto">
          {/* Main Content */}
          <div className="about-content-1 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-5 sm:mb-20">
            <div className="order-1">
              <img
                src="/galpon-3.jfif"
                alt="Equipo Piso Fuerte"
                className="w-full sm:h-[400px] rounded-3xl rounded-tl-none sm:rounded-bl-none sm:rounded-t-3xl object-cover mb-8"
              />
            </div>
            <div className="space-y-6">
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
          <div className="about-content-2 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-20">
            <div className="space-y-6 lg:order-1">
              <div>
                <h2 className="text-6xl sm:text-7xl font-bold mb-4">Nuestra Misión</h2>
                <p className="sm:text-lg leading-relaxed text-white/70 font-thin">
                  Transformar espacios en lugares funcionales y estéticamente excepcionales, utilizando materiales de
                  primera calidad y las mejores prácticas del sector. Cada proyecto es una oportunidad para demostrar
                  nuestro compromiso con la excelencia.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/about-galpon-equipo.png"
                alt="Equipo Piso Fuerte"
                className="w-full sm:h-[400px] rounded-tl-none sm:rounded-tl-3xl sm:rounded-tr-none rounded-3xl object-cover mb-8"
              />
            </div>
          </div>
        </div>


        {/* Experience Section */}
        <div className="relative grid grid-cols-3 xs:grid-cols-3 gap-4 xs:gap-8 mx-2 text-center">
          <div className="info-section">
            <div className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-2">10+</div>
            <p className="text-base sm:text-lg font-thin">Años de Experiencia</p>
          </div>
          <div className="info-section">
            <div className="text-4xl sm:text-5xl font-bold text-brand-yellow mb-2">20+</div>
            <p className="text-base sm:text-lg font-thin">Galpones realizados</p>
          </div>
          <div className="info-section">
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
