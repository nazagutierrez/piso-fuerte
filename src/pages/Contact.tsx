"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { FiMail, FiPhone, FiMapPin, FiCheck } from "react-icons/fi"

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
    <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="contact-header mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-brand-dark mb-6 text-balance">Contacto</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl text-pretty">
            Estamos aquí para responder tus preguntas y comenzar tu proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-8">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-brand-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 612 345 678</p>
                    <p className="text-sm text-muted-foreground mt-1">Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-brand-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Email</h3>
                    <p className="text-muted-foreground">info@pisofuerte.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Respuesta en menos de 24 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-brand-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Calle Gran Vía 123, 4º B<br />
                      28013 Madrid, España
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-muted p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <FiCheck className="text-brand-yellow flex-shrink-0" />
                  <span className="text-foreground">Presupuesto sin compromiso</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="text-brand-yellow flex-shrink-0" />
                  <span className="text-foreground">Atención personalizada</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="text-brand-yellow flex-shrink-0" />
                  <span className="text-foreground">Garantía en todos los trabajos</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiCheck className="text-brand-yellow flex-shrink-0" />
                  <span className="text-foreground">Más de 15 años de experiencia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-white p-8 border-2 border-border">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border focus:border-brand-yellow focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border focus:border-brand-yellow focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-border focus:border-brand-yellow focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-yellow text-brand-dark px-8 py-4 font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "Mensaje Enviado ✓" : "Enviar Mensaje"}
                </button>
                {isSubmitted && (
                  <p className="text-center text-sm text-green-600 font-medium">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
