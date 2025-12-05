"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { FiMail, FiPhone, FiMapPin, FiCheck } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Aquí iría la lógica de envío del formulario
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-brand-dark text-white pt-32 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="contact-header">
          <h1 className="text-5xl sm:text-6xl font-bold  mb-6 text-balance title-font uppercase">Contacto</h1>
          <p className="text-2xl mb-10 text-white/70 font-thin max-w-3xl text-pretty">
            Contactanos por cualquier duda que tengas o para solicitar un presupuesto y comenzar tu proyecto.
          </p>
          <p className="text-2xl text-white/70 font-thin max-w-3xl text-pretty">
            Hace click en la opción que prefieras!
          </p>
        </div>

        <div>
          {/* Contact Info */}
          <div className="contact-info space-y-8 mt-20">
            <div>
              <div className="space-y-6 grid grid-cols-2 gap-10">
                <a href={"tel:+5492364525588"} target="_blank"  rel="noopener noreferrer"  className="flex w-fit items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-3xl title-font uppercase letter tracking-wider text-white/90">Teléfono</h3>
                    <p className="text-white/90 font-thin text-3xl">+54 9 2364 52-5588</p>
                    <p className="text-white/50 font-thin mt-1">Lunes a Viernes: 9:00 - 21:00</p>
                  </div>
                </a>
                <a href={"mailto:info@pisofuerte.com"} target="_blank"  rel="noopener noreferrer"  className="flex items-start w-fit gap-4">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <FiMail className="" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-3xl title-font uppercase letter tracking-wider text-white/90">Email</h3>
                    <p className="text-white/90 font-thin text-3xl">info@pisofuerte.com</p>
                    <p className="text-white/50 font-thin mt-1">Respuesta en menos de 24 horas</p>
                  </div>
                </a>
                <a href={"https://api.whatsapp.com/send?phone=+5492364525588&text=Hola,%20te%20contacto%20desde%20la%20web"} target="_blank"  rel="noopener noreferrer"  className="flex items-start w-fit gap-4">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-3xl title-font uppercase letter tracking-wider text-white/90">Whatsapp</h3>
                    <p className="text-white/90 font-thin text-3xl">+54 9 2364 52-5588</p>
                    <p className="text-white/50 font-thin mt-1">Lunes a Viernes: 9:00 - 21:00</p>
                  </div>
                </a>
                <a href={"https://maps.app.goo.gl/mrRb26Zf8osD8umRA"} target="_blank"  rel="noopener noreferrer"  className="flex items-start w-fit gap-4">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-3xl title-font uppercase letter tracking-wider text-white/90">Dirección</h3>
                    <p className="text-white/90 font-thin text-3xl">
                      Junín y alrededores
                    </p>
                    <p className="text-white/50 font-thin mt-1">Llegamos a todas las localidades cercanas</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
