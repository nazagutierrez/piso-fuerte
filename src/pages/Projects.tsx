import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Carousel, MediaItem } from "../components/Carousel";

gsap.registerPlugin(ScrollTrigger)

const mediaGalpones: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/galpon.jpg',
  },
  {
    id: 2,
    type: 'image',
    src: '/galpon-6.jfif',
  },
  {
    id: 3,
    type: 'video',
    src: '/galpon-video-3.mp4',
    thumbnail: '/poster-galpon-3.png',
  },
  {
    id: 4,
    type: 'video',
    src: '/galpon-video-2.mp4',
    thumbnail: '/poster-galpon-2.png',
  },
  {
    id: 5,
    type: 'image',
    src: '/galpon-3.jfif',
  },
  {
    id: 6,
    type: 'video',
    src: '/video-hero.mp4',
    thumbnail: '/poster-hero-video.png',
  },
  {
    id: 7,
    type: 'image',
    src: '/galpon-2.jpg',
  },
  {
    id: 8,
    type: 'video',
    src: '/galpon-video-1.mp4',
    thumbnail: '/poster-galpon-1.png',
  },
];

const mediaPisos: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/piso-1.jfif',
  },
  {
    id: 2,
    type: 'image',
    src: '/piso-3.jpeg',
  },
  {
    id: 3,
    type: 'video',
    src: '/piso-fuerte-video-1.mp4',
    thumbnail: '/poster-piso-1.png',
  },
  {
    id: 4,
    type: 'image',
    src: '/piso-2.jpeg',
  },
  {
    id: 5,
    type: 'video',
    src: '/piso-fuerte-video-3.mp4',
    thumbnail: '/poster-piso-2.png',
  },
]

const mediaOtros: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/otro-4.jpg',
  },
  {
    id: 2,
    type: 'image',
    src: '/otro-5.jpg',
  },
  {
    id: 3,
    type: 'image',
    src: '/otro-6.jpg',
  },
  {
    id: 4,
    type: 'video',
    src: '/otro-video-1.mp4',
    thumbnail: '/poster-otro-1.png',
  },
  {
    id: 5,
    type: 'image',
    src: '/otro-1.jpeg',
  },
  {
    id: 6,
    type: 'image',
    src: '/otro-2.jpeg',
  },
]

export default function WorksPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline()

      tl.from(".works-title", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
      })

      tl.from(".works-description", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")

      tl.from(".works-info", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-[url('/textura-oscura.jpg')] pt-24 sm:pt-32 pb-20 text-white" ref={containerRef}>
      <div className="absolute bg-texture-black/80 inset-0 h-full z-0" />

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="works-title text-5xl sm:text-6xl font-semibold mb-4 tracking-tight uppercase title-font">
            <span className="title-font uppercase text-brand-yellow">Nuestros </span>
            Trabajos
          </h1>
          <p className="works-description text-lg font-thin max-w-xl text-pretty text-white/85 max-w-3xl">
            Galería de nuestros trabajos, las imagenes hablan por si solas.
          </p>
        </div>
        <div>
          <h2 className="works-info mb-12 text font-thin opacity-50 z-20 relative">* Deslizá para ver mas y cliquea para hacer zoom y ver videos.</h2>
          <div
            className="gap-y-16 pb-10 flex flex-col w-full mx-auto relative group"
          >
            <Carousel media={mediaGalpones} text="GALPONES" side="left" isFirst />
            <Carousel media={mediaPisos} text="PISOS" side="right" />
            <Carousel media={mediaOtros} text="OTROS" side="left" />

          </div>
        </div>
      </div>
    </main>
  )
}
