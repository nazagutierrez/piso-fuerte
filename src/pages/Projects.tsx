"use client"

import { useEffect, useRef } from "react"
import { Link } from 'react-router-dom';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FiArrowRight } from "react-icons/fi"
import { projects } from "../lib/projects";

gsap.registerPlugin(ScrollTrigger)

export default function WorksPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".works-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="works-header mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-brand-dark mb-6 text-balance">Nuestros Trabajos</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl text-pretty">
            Descubre algunos de los proyectos que hemos completado con éxito
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/trabajos/${project.id}`} className="project-card group">
              <div className="overflow-hidden mb-4">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-brand-yellow font-semibold">
                  {project.category} • {project.date}
                </div>
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-yellow transition-colors text-balance">
                  {project.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="inline-flex items-center gap-2 text-brand-dark font-semibold pt-2 group-hover:text-brand-yellow transition-colors">
                  Ver proyecto
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
