import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Features from "./Features"
// JPG fallbacks
import textura from "../../assets/jpg-assets/textura.jpg"
import aboutEquipoImg from "../../assets/jpg-assets/about-equipo.jpg"
import galpon3 from "../../assets/jpg-assets/galpon-3.jpg";
import galponEquipo1 from "../../assets/jpg-assets/about-galpon-equipo.jpg";
import illustracion1 from "../../assets/jpg-assets/about-illustracion.png";
import illustracion2 from "../../assets/jpg-assets/about-illustracion-2.png";
// AVIF versions
import texturaAvif from "../../assets/avif-assets/textura.avif";
import aboutEquipoImgAvif from "../../assets/avif-assets/about-equipo.avif";
import galpon3Avif from "../../assets/avif-assets/galpon-3.avif";
import galponEquipo1Avif from "../../assets/avif-assets/about-galpon-equipo.avif";

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buildingsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.fromTo(
        ".about-header",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.inOut",
        }
      );

      tl.fromTo(
        ".about-header-img",
        {
          scale: 1.4,
        },
        {
          scale: 1.2,
          duration: 1.5,
          ease: "power3.inOut",
        },
        "<" // Arranca al mismo tiempo que la animación de la cabecera
      );

      gsap.from(".about-content-1", {
        scrollTrigger: {
          trigger: ".about-content-1",
          start: "top bottom",
        },
        filter: "blur(25px)",
        opacity: 0,
        delay: 1.8,
        y: 30,
        duration: 1,
        ease: "power3.out",
      })

      tl.from(".about-title", {
        opacity: 0,
        y: 30,
        filter: "blur(25px)",
        duration: 1,
        ease: "power3.out",
      }, "<1")

      tl.from(".about-description", {
        opacity: 0,
        y: 30,
        filter: "blur(25px)",
        duration: 1,
        ease: "power3.out",
      }, "<0.5")

      gsap.from(".about-content-2", {
        scrollTrigger: {
          trigger: ".about-content-2",
          start: "top 90%",
        },
        filter: "blur(25px)",
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
    <main className="min-h-screen bg-bottom bg-cover text-white" style={{ backgroundImage: `image-set(url(${texturaAvif}) type("image/avif"), url(${textura}) type("image/jpeg"))` }} ref={containerRef}>
      <div className="absolute bg-texture-black/80 inset-0 h-full z-0" />
            
      <div className="w-full z-20 p-2 xs:p-3">
        {/* Header */}
        <div className="about-header relative overflow-hidden h-80 xs:h-100 sm:h-120 md:h-140 lg:h-160 xl:h-180 rounded-t-xl rounded-b text-center md:text-start md:ps-20 pt-16 sm:pt-20 md:pt-20 mb-4 xs:mb-16">
          <picture>
            <source srcSet={aboutEquipoImgAvif} type="image/avif" />
            <img 
              src={aboutEquipoImg} 
              alt="Equipo de Piso Fuerte construyendo un galpón" 
              className="about-header-img absolute inset-0 w-full h-full object-cover object-[30%_5%] xxs:object-[30%_35%] xs:object-[0_25%] sm:object-[0_35%] md:object-[0_40%] xl:object-center -z-20 origin-center"
            />
          </picture>
          <div className="absolute bg-black/15 xs:bg-black/25 inset-0 h-full -z-10" />
          
          <h1 className="about-title text-5xl sm:text-7xl lg:text-8xl title-font uppercase mb-1 xs:mb-3 mx-3 xs:ms-0">
            <span className="title-font text-brand-yellow">Sobre</span> Nosotros
          </h1>
          <p className="about-description text-lg xs:text-xl md:text-2xl xs:font-thin md:max-w-xl hidden xs:block text-pretty xs:text-white">
            Construyendo sueños y transformando espacios desde 2015
          </p>
        </div>

        <p className="about-description text-lg mx-2 mb-8 xs:text-xl md:text-2xl xs:font-thin block xs:hidden text-pretty text-center text-white z-10 relative">
          Construyendo sueños y transformando espacios desde 2015
        </p>

        <div className="flex flex-col xs:max-w-7xl px-2 mx-auto">
          {/* Main Content */}
          <section className="about-content-1 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-5 sm:mb-20">
            <div className="order-1">
              <picture>
                <source srcSet={galpon3Avif} type="image/avif" />
                <img
                  src={galpon3}
                  alt="Equipo Piso Fuerte"
                  className="w-full sm:h-[400px] rounded-3xl rounded-tl-none sm:rounded-bl-none sm:rounded-t-3xl object-cover mb-8"
                />
              </picture>
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
          </section>

          {/* Main Content */}
          <section className="about-content-2 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 mb-10 sm:mb-20">
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
              <picture>
                <source srcSet={galponEquipo1Avif} type="image/avif" />
                <img
                  src={galponEquipo1}
                  alt="Equipo Piso Fuerte"
                  className="w-full sm:h-[400px] rounded-tl-none sm:rounded-tl-3xl sm:rounded-tr-none rounded-3xl object-cover mb-8"
                />
              </picture>
            </div>
          </section>
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
          <img src={illustracion1} className="building-img absolute hidden xs:block w-40 h-40 -top-[120px] sm:-top-[124px] z-10 right-62 xl:left-5 object-cover pointer-events-none" alt="textura" />
          <img src={illustracion2} className="building-img absolute w-34 h-34 xs:w-52 xs:h-52 -top-[129px] xs:-top-[195px] sm:-top-40 z-10 right-5 object-cover pointer-events-none" alt="textura" />
        </div>

      </div>
    </main>
  )
}
