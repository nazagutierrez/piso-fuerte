"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";

export default function ContactPage() {
  const [copiedText, setCopiedText] = useState(null);
  const containerRef = useRef<HTMLDivElement>(null)

  const contactMethods = [
    {
      title: "teléfono",
      href: "tel:+5492364525588",
      label: "+54 9 2364 525588",
      availability: "Lunes a Viernes: 9:00 - 21:00",
      btnText: "Llamar",
      icon: <FiPhone size={16} />
    },
    {
      title: "Email",
      href: "mailto:info@pisofuerte.com",
      label: "info@pisofuerte.com",
      availability: "Respuesta en menos de 24 horas",
      btnText: "Enviar",
      icon: <FiMail size={16} />
    },
    {
      title: "Whatsapp",
      href: "https://api.whatsapp.com/send?phone=+5492364525588&text=Hola,%20te%20contacto%20desde%20la%20web",
      label: "+54 9 2364 525588 ",
      availability: "Lunes a Viernes: 9:00 - 21:00",
      btnText: "Enviar",
      icon: <FaWhatsapp size={16} />
    },
    {
      title: "Dirección",
      href: "https://maps.app.goo.gl/mrRb26Zf8osD8umRA",
      label: "Junín y alrededores",
      availability: "Llegamos a todas las localidades cercanas",
      btnText: "Ir",
      icon: <FiMapPin size={16} />
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".contact-info", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(".contact-form", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopiedText(text))
      .catch(console.error);
  };


  return (
    <main className="min-h-screen bg-brand-dark text-white pt-32 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="contact-header">
          <h1 className="text-5xl sm:text-6xl font-bold  mb-6 text-balance title-font uppercase">Contacto</h1>
          <p className="text-2xl mb-10 text-white/70 font-thin max-w-3xl text-pretty">
            Contactanos por cualquier duda que tengas o para solicitar un presupuesto y comenzar tu proyecto.
          </p>
          <div className="bg-brand-yellow w-14 h-1 rounded"></div>
        </div>

        <div>
          {/* Contact Info */}
          <div className="contact-info space-y-8 mt-13">
            <div>
              <div className="space-y-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
                
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex w-fit items-start gap-4">
                    <div>
                      <h3 className="mb-1 text-3xl title-font uppercase letter tracking-wider text-white/90">{method.title}</h3>
                      <p className="text-white/90 font-thin text-3xl">{method.label}</p>
                      <p className="text-white/50 font-thin mt-2">{method.availability}</p>
                      <div className="flex w-full gap-3 mt-4">
                        {
                          method.title !== "Dirección" &&
                          <button 
                            onClick={(e) => {
                                e.preventDefault();
                                handleCopy(method.label);
                            }}                          
                            className="inline-flex call-button cursor-pointer justify-center items-center gap-2 w-32 py-2 rounded"
                          >
                            <FaRegCopy size={16} /> {copiedText === method.label ? "¡Copiado!" : "Copiar"}
                          </button>
                        }
                        <a
                          href={method.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          data-variant="yellow"
                          className="inline-flex call-button cursor-pointer items-center gap-2 px-4 py-2 rounded"
                        >
                          {method.icon} {method.btnText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
