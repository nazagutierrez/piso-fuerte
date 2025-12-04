"use client"

import { useEffect, useRef } from "react"
import { Link, useLocation, useParams } from 'react-router-dom';
import { gsap } from "gsap"
import { FiArrowLeft, FiCalendar, FiUser, FiCheck } from "react-icons/fi"
import { getProjectById } from "../lib/projects";

export default function ProjectPage() {
  const params = useParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const project = getProjectById(params.slug as string)

  console.log("params", params)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".project-image", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(".project-info", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-2xl text-muted-foreground">Proyecto no encontrado</p>
          <Link
            to="/trabajos"
            className="inline-flex items-center gap-2 mt-8 text-brand-dark font-semibold hover:text-brand-yellow transition-colors"
          >
            <FiArrowLeft />
            Volver a Trabajos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/trabajos"
          className="inline-flex items-center gap-2 mb-8 text-brand-dark font-semibold hover:text-brand-yellow transition-colors"
        >
          <FiArrowLeft />
          Volver a Trabajos
        </Link>

        {/* Header */}
        <div className="project-header mb-12">
          <div className="inline-block bg-brand-yellow text-brand-dark px-4 py-1 font-semibold mb-4">
            {project.category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6 text-balance">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <FiCalendar />
              <span>{project.date}</span>
            </div>
            {project.client && (
              <div className="flex items-center gap-2">
                <FiUser />
                <span>{project.client}</span>
              </div>
            )}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {project.images.map((image, index) => (
            <div key={index} className={`project-image overflow-hidden ${index === 0 ? "md:col-span-2" : ""}`}>
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Imagen ${index + 1}`}
                className={`w-full object-cover ${index === 0 ? "h-[500px]" : "h-[350px]"}`}
              />
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2 project-info">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Descripción del Proyecto</h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">{project.description}</p>
          </div>

          {/* Tasks */}
          <div className="project-info">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Trabajos Realizados</h3>
            <ul className="space-y-3">
              {project.tasks.map((task, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="text-brand-dark" size={12} />
                  </div>
                  <span className="text-foreground">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-muted p-12 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">¿Tienes un proyecto similar en mente?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contáctanos y cuéntanos tu idea. Estaremos encantados de ayudarte.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-8 py-4 font-semibold hover:bg-yellow-400 transition-colors"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </main>
  )
}
