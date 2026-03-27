import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Carousel, MediaItem } from "../components/Carousel";
// JPG fallbacks
import textura from "../assets/jpg-assets/textura.jpg";
import galpon1 from "../assets/jpg-assets/galpon.jpg";
import galpon6 from "../assets/jpg-assets/galpon-6.jpg";
import posterGalpon3 from "../assets/jpg-assets/poster-galpon-3.jpg";
import posterGalpon2 from "../assets/jpg-assets/poster-galpon-2.jpg";
import galpon3 from "../assets/jpg-assets/galpon-3.jpg";
import posterHero from "../assets/jpg-assets/poster-hero-video.jpg";
import galpon2 from "../assets/jpg-assets/galpon-2.jpg";
import posterGalpon1 from "../assets/jpg-assets/poster-galpon-1.jpg";
import piso1 from "../assets/jpg-assets/piso-1.jpg";
import piso3 from "../assets/jpg-assets/piso-3.jpg";
import posterPiso1 from "../assets/jpg-assets/poster-piso-1.jpg";
import piso2 from "../assets/jpg-assets/piso-2.jpg";
import posterPiso2 from "../assets/jpg-assets/poster-piso-2.jpg";
import otro4 from "../assets/jpg-assets/otro-4.jpg";
import otro5 from "../assets/jpg-assets/otro-5.jpg";
import otro6 from "../assets/jpg-assets/otro-6.jpg";
import posterOtro1 from "../assets/jpg-assets/poster-otro-1.jpg";
import otro1 from "../assets/jpg-assets/otro-1.jpg";
import otro2 from "../assets/jpg-assets/otro-2.jpg";
// AVIF versions
import texturaAvif from "../assets/avif-assets/textura.avif";
import galpon1Avif from "../assets/avif-assets/galpon.avif";
import galpon6Avif from "../assets/avif-assets/galpon-6.avif";
import posterGalpon3Avif from "../assets/avif-assets/poster-galpon-3.avif";
import posterGalpon2Avif from "../assets/avif-assets/poster-galpon-2.avif";
import galpon3Avif from "../assets/avif-assets/galpon-3.avif";
import posterHeroAvif from "../assets/avif-assets/poster-hero-video.avif";
import galpon2Avif from "../assets/avif-assets/galpon-2.avif";
import posterGalpon1Avif from "../assets/avif-assets/poster-galpon-1.avif";
import piso1Avif from "../assets/avif-assets/piso-1.avif";
import piso3Avif from "../assets/avif-assets/piso-3.avif";
import posterPiso1Avif from "../assets/avif-assets/poster-piso-1.avif";
import piso2Avif from "../assets/avif-assets/piso-2.avif";
import posterPiso2Avif from "../assets/avif-assets/poster-piso-2.avif";
import otro4Avif from "../assets/avif-assets/otro-4.avif";
import otro5Avif from "../assets/avif-assets/otro-5.avif";
import otro6Avif from "../assets/avif-assets/otro-6.avif";
import posterOtro1Avif from "../assets/avif-assets/poster-otro-1.avif";
import otro1Avif from "../assets/avif-assets/otro-1.avif";
import otro2Avif from "../assets/avif-assets/otro-2.avif";

gsap.registerPlugin(ScrollTrigger)

const mediaGalpones: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: galpon1,
    avifSrc: galpon1Avif,
  },
  {
    id: 2,
    type: 'image',
    src: galpon6,
    avifSrc: galpon6Avif,
  },
  {
    id: 3,
    type: 'video',
    src: '/videos/galpon-video-4.mp4',
    thumbnail: posterGalpon3,
    thumbnailAvif: posterGalpon3Avif,
  },
  {
    id: 4,
    type: 'video',
    src: '/videos/galpon-video-2.mp4',
    thumbnail: posterGalpon2,
    thumbnailAvif: posterGalpon2Avif,
  },
  {
    id: 5,
    type: 'image',
    src: galpon3,
    avifSrc: galpon3Avif,
  },
  {
    id: 6,
    type: 'video',
    src: '/videos/video-hero.mp4',
    thumbnail: posterHero,
    thumbnailAvif: posterHeroAvif,
  },
  {
    id: 7,
    type: 'image',
    src: galpon2,
    avifSrc: galpon2Avif,
  },
  {
    id: 8,
    type: 'video',
    src: '/videos/galpon-video-1.mp4',
    thumbnail: posterGalpon1,
    thumbnailAvif: posterGalpon1Avif,
  },
];

const mediaPisos: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: piso1,
    avifSrc: piso1Avif,
  },
  {
    id: 2,
    type: 'image',
    src: piso3,
    avifSrc: piso3Avif,
  },
  {
    id: 3,
    type: 'video',
    src: '/videos/piso-fuerte-video-1.mp4',
    thumbnail: posterPiso1,
    thumbnailAvif: posterPiso1Avif,
  },
  {
    id: 4,
    type: 'image',
    src: piso2,
    avifSrc: piso2Avif,
  },
  {
    id: 5,
    type: 'video',
    src: '/videos/piso-fuerte-video-3.mp4',
    thumbnail: posterPiso2,
    thumbnailAvif: posterPiso2Avif,
  },
]

const mediaOtros: MediaItem[] = [
  {
    id: 1,
    type: 'image',
    src: otro4,
    avifSrc: otro4Avif,
  },
  {
    id: 2,
    type: 'image',
    src: otro5,
    avifSrc: otro5Avif,
  },
  {
    id: 3,
    type: 'image',
    src: otro6,
    avifSrc: otro6Avif,
  },
  {
    id: 4,
    type: 'video',
    src: '/videos/otro-video-1.mp4',
    thumbnail: posterOtro1,
    thumbnailAvif: posterOtro1Avif,
  },
  {
    id: 5,
    type: 'image',
    src: otro1,
    avifSrc: otro1Avif,
  },
  {
    id: 6,
    type: 'image',
    src: otro2,
    avifSrc: otro2Avif,
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
        filter: "blur(25px)",
        duration: 1,
        ease: "power3.out",
      })

      tl.from(".works-description", {
        opacity: 0,
        y: 50,
        filter: "blur(25px)",
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")

      tl.from(".works-info", {
        opacity: 0,
        y: 50,
        filter: "blur(25px)",
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6")
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-cover pt-28 sm:pt-32 pb-20 text-white" style={{ backgroundImage: `image-set(url(${texturaAvif}) type("image/avif"), url(${textura}) type("image/jpeg"))` }} ref={containerRef}>
      <div className="absolute bg-texture-black/80 inset-0 h-full z-0" />

      <div className="mx-auto max-w-[1650px] px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <header className="mb-4 ps-4 sm:ps-10">
          <h1 className="works-title text-5xl xs:text-7xl sm:text-8xl font-semibold mb-6 tracking-tight uppercase title-font">
            <span className="title-font uppercase text-brand-yellow">Nuestros </span>
            Trabajos
          </h1>
          <p className="works-description text-xl font-thin text-pretty text-white/85">
            Galería de nuestros trabajos, las imagenes hablan por si solas.
          </p>
        </header>
        <div>
          <h2 className="works-info ps-4 sm:ps-10 mb-12 text font-thin opacity-50 z-20 relative"><span className="text-brand-yellow">* </span> Deslizá para ver mas y cliquea para hacer zoom y ver videos.</h2>
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
