import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { projects } from "../lib/projects";
import { Carousel, MediaItem } from "../components/Carousel";

gsap.registerPlugin(ScrollTrigger)

const media: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/galpon.jpg',
  },
  {
    id: 2,
    type: 'image',
    src: '/galpon.jpg',
  },
  {
    id: 3,
    type: 'image',
    src: '/galpon.jpg',
  },
  {
    id: 4,
    type: 'video',
    src: '/v1.mp4',
    thumbnail: '/a1.jpg',
  },
  {
    id: 5,
    type: 'image',
    src: '/galpon.jpg',
  },
];

export default function WorksPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline()

      tl.from(".works-header", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-[url('/textura-oscura.jpg')] pt-24 sm:pt-32 pb-20 text-white" ref={containerRef}>
      <div className="absolute bg-texture-black/80 inset-0 h-full z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="works-header mb-6">
          <h1 className="text-5xl sm:text-6xl font-semibold mb-4 tracking-tight uppercase title-font">
            <span className="title-font uppercase text-brand-yellow">Nuestros </span>
            Trabajos
          </h1>
          <p className="text-lg font-thin max-w-xl text-pretty text-white/85 max-w-3xl">
            Galería de nuestros trabajos, las imagenes hablan por si solas.
          </p>
        </div>
        <div>
          <h2 className="mb-12 text font-thin opacity-50 z-20 relative">* Deslizá para ver mas y cliquea para hacer zoom</h2>
          <div
            className="gap-y-16 pb-10 flex flex-col w-full relative group"
          >
            <Carousel media={media} text="GALPONES" side="left" isFirst />
            <Carousel media={media} text="PISOS" side="right" />
            <Carousel media={media} text="OTROS" side="left" />

          </div>
        </div>
      </div>
    </main>
  )
}
