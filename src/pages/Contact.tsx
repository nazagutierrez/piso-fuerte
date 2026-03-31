"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { SEO } from "../lib/SEO";
// JPG fallbacks
import textura from "../assets/jpg-assets/textura.jpg";
// AVIF versions
import texturaAvif from "../assets/avif-assets/textura.avif";

export default function ContactPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null)

  const contactMethods = [
    {
      title: "teléfono",
      href: "tel:+5492364525588",
      copy: "5492364525588 ",
      label: <h3><span className="text-brand-yellow">+</span>54 9 2364 525588</h3>,
      availability: "Lunes a Viernes: 9:00 - 21:00",
      btnText: "Llamar",
      icon: <FiPhone size={16} />
    },
    {
      title: "Email",
      href: "mailto:pisofuertejunin@gmail.com",
      copy: "pisofuertejunin@gmail.com",
      label: <h3>pisofuertejunin<span className="text-brand-yellow">@</span>gmail.com</h3>,
      availability: "Respuesta en menos de 24 horas",
      btnText: "Enviar",
      icon: <FiMail size={16} />
    },
    {
      title: "Whatsapp",
      href: "https://api.whatsapp.com/send?phone=+5492364525588&text=Hola,%20te%20contacto%20desde%20la%20web",
      copy: "5492364525588",
      label: <h3><span className="text-brand-yellow">+</span>54 9 2364 525588</h3>,
      availability: "Lunes a Viernes: 9:00 - 21:00",
      btnText: "Mensaje",
      icon: <FaWhatsapp size={16} />
    },
    {
      title: "Dirección",
      href: "https://maps.app.goo.gl/mrRb26Zf8osD8umRA",
      label: <h3>Junín <span className="text-brand-yellow">y</span> alrededores</h3>,
      availability: "Llegamos a todas las localidades cercanas",
      btnText: "Ir",
      icon: <FiMapPin size={16} />
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl =  gsap.timeline()

      tl.from(".contact-title", {
        opacity: 0,
        y: 100,
        duration: 1,
        filter: "blur(25px)",
        ease: "power3.out",
      })

      tl.to(".contact-title-acto", {
        color: "var(--brand-yellow)",
        duration: 1,
        ease: "power3.out",
      }, "-=0.3")

      tl.from(".contact-description", {
        opacity: 0,
        y: 100,
        filter: "blur(25px)",
        duration: 0.8,
        ease: "power3.out",
      }, "-=1")

      tl.to(".contact-line", {
        opacity: 1,
        width: "64px",
        duration: 1,
        ease: "power3.out",
      })

      tl.from(".contact-info", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out",
      }, "<")

      tl.from(".contact-form", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  
  const handleCopy = (text : string) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopiedText(text))
      .catch(console.error);
  };


  return (
    <main className="min-h-screen bg-cover bg-top text-white pt-28 md:pt-32 pb-20" style={{ backgroundImage: `image-set(url(${texturaAvif}) type("image/avif"), url(${textura}) type("image/jpeg"))` }} ref={containerRef}>
      <SEO 
        title="Contacto"
        description="Contactanos para presupuestos y consultas sobre tu próximo proyecto de construcción en Junín. Estamos para asesorarte en galpones, piletas y más."
        path="/contacto"
      />
      <div className="absolute bg-texture-black/80 inset-0 h-full z-0" />
      
      <div className="max-w-[1650px] mx-auto px-6 sm:px-8 lg:px-10 z-20">
        {/* Header */}
        <header>
          <h1 className="contact-title text-6xl xs:text-7xl sm:text-8xl font-bold  mb-6 text-balance title-font uppercase">
            Cont
            <span className="contact-title-acto title-font">acto</span>
          </h1>
          <p className="contact-description text-xl mb-10 text-white/70 font-thin max-w-3xl text-pretty">
            Contactanos por cualquier duda que tengas o para solicitar un presupuesto y comenzar tu proyecto.
          </p>
          <div className="contact-line relative z-10 w-0 bg-brand-yellow h-1 rounded"></div>
        </header>

          {/* Contact Info */}
        <address className="contact-info not-italic space-y-8 mt-13">
          <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-y-10">
            
            {contactMethods.map((method, index) => (
              <div key={index} className="flex w-fit items-start gap-4">
                <div>
                  <h3 className="mb-1 text-3xl sm:text-4xl title-font uppercase letter tracking-wider text-white/90">{method.title}</h3>
                  <p className="text-white/90 font-thin text-2xl sm:text-3xl">{method.label}</p>
                  <p className="text-white/50 font-thin mt-2">{method.availability}</p>
                  <div className="flex w-full gap-3 mt-4">
                    {
                      method.title !== "Dirección" &&
                      <button 
                        onClick={(e) => {
                            e.preventDefault();
                            if (!method.copy) return;
                            handleCopy(method.copy);
                        }}                          
                        className="inline-flex call-button cursor-pointer justify-center items-center gap-2 w-32 py-2 rounded"
                      >
                        <FaRegCopy size={16} /> {copiedText === method.copy ? "¡Copiado!" : "Copiar"}
                      </button>
                    }
                    <a
                      href={method.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      data-variant="yellow"
                      className="inline-flex border call-button cursor-pointer items-center gap-2 px-4 py-2 rounded"
                    >
                      {method.icon} {method.btnText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </address>
      </div>
    </main>
  )
}
