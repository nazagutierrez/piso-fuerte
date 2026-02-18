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
    id: 2,
    type: 'video',
    src: '/v1.mp4',
    thumbnail: '/a1.jpg',
  },
  {
    id: 3,
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

    // 🔥 STAGGER DEL PRIMER CAROUSEL
    .from(".first-carousel .swiper-slide", {
      opacity: 0,
      y: 40,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.2")

            
    .to(".init-fade",
    {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.50")
    

    // opcional: animar también el texto lateral
    .from(".first-carousel .carousel-title", {
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6")

  }, containerRef)

  return () => ctx.revert()
}, [])


  return (
    <main className="min-h-screen bg-[url('/textura-oscura.jpg')] pt-32 pb-20 text-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="works-header mb-16">
          <h1 className="text-4xl sm:text-6xl font-semibold mb-4 tracking-tight uppercase title-font">
            <span className="title-font uppercase text-brand-yellow">Nuestros </span>
            Trabajos
          </h1>
          <p className="text-lg font-thin max-w-xl text-pretty text-white/85 max-w-3xl">
            Galería de nuestros trabajos, las imagenes hablan por si solas.
          </p>
        </div>

        <div
          className="mb-6 gap-y-16 flex flex-col w-full relative group"
        >
          <Carousel media={media} text="GALPONES" side="left" classname="first-carousel" />
          <Carousel media={media} text="PILETAS" side="right" />
          <Carousel media={media} text="CASAS" side="left" />
          <Carousel media={media} text="OTRAS" side="right" />

          {/* <div className="pl-1 pr-3 py-3 text-white">
            <div className="text-xs text-brand-yellow title-font uppercase tracking-widest font-medium mb-1">asas</div>
            <h3 className="text-base font-semibold  leading-tight">asas</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">dsadasdasdas</p>
          </div> */}
        </div>
      </div>
    </main>
  )
}
