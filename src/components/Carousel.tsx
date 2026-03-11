import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, A11y } from 'swiper/modules';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { FaPlay } from "react-icons/fa";
import gsap from 'gsap';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { MediaViewer } from './MediaViewer';

export type MediaItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
};

export function Carousel({ text, media, side, classname, isFirst = false }: { text: string, media: MediaItem[], side: 'left' | 'right', classname?: string, isFirst?: boolean }) {

const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const smoother = ScrollSmoother.get();

    if (activeIndex) {
      smoother?.paused(true);
    } else {
      smoother?.paused(false);
    }
  }, [activeIndex]);

useEffect(() => {
  const ctx = gsap.context(() => {
    if (!carouselRef.current) return;

    const slides = carouselRef.current.querySelectorAll(".swiper-slide");
    const fades = carouselRef.current.querySelectorAll(".fade-element");
    const title = carouselRef.current.querySelector(".carousel-title");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "top 70%",
      }
    });

    // 🔥 Slides stagger
    tl.from(slides, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      stagger: 0.15,
      delay: isFirst ? 1 : 0,
      duration: isFirst ? 1 : 0.6,
      ease: "power3.out",
    });

    // 🔥 Fade izquierdo, derecho y pagination
    tl.fromTo(fades, {
      opacity: 0,
      stagger: 0.15,
      duration: isFirst ? 1 : 0.6,
      ease: "power3.out",
    }, {
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }, "-=1");

    // 🔥 Título lateral
    tl.from(title, {
      opacity: 0,
      x: side === "left" ? -40 : 40,
      duration: isFirst ? 1 : 0.7,
      ease: "power3.out",
    }, "-=0.5");

  }, carouselRef);

  return () => ctx.revert();
}, []);
  return (
    <div ref={carouselRef} className={`${classname} carousel-section ${side === "left" ? "ms-5 xs:ms-20" : "me-5 xs:me-20"} relative text-main-white `}>
      <div
        ref={paginationRef}
        className="swiper-pagination fade-element opacity-0 absolute -bottom-13! h-10 left-0 w-full flex justify-center z-10"
      />
      
      {/* FADE IZQUIERDO */}
      <div className={`fade-element pointer-events-none absolute left-0 top-0 h-full w-16 z-20 bg-linear-to-r from-black/80 to-transparent`} />
        
      {/* FADE DERECHO */}
      <div className={`fade-element pointer-events-none fade-in absolute shadow-[20px_0px_30px_-5px_#000] right-0 top-0 h-full w-16 z-20 bg-linear-to-l from-black/80 to-transparent`} />

      {/* TEXTO ABSOLUTO */}
      <span
        className={`hollow-text pointer-events-none carousel-title text-center h-24 w-90 title-font text-7xl xs:text-8xl absolute top-1/2 z-40 -translate-y-1/2 ${side === 'left' ? '-left-40 xs:-left-[170px] -rotate-90' : '-right-40 xs:-right-45 rotate-90'}`}
      >
        {text}
      </span>

      <Swiper
        initialSlide={side === "right" ? 4 : 0}
        pagination={{
          clickable: true,
          renderBullet: (_index, className) => {
            return `
              <button class="${className} custom-bullet">
                <span></span>
              </button>
            `;
          },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode, Pagination, A11y]}
        className="h-120 mx-0! w-full m-0!"
      >
        {media.map((item, index) => (
          <SwiperSlide key={item.id}>
            <button
      onClick={() => setActiveIndex(index)}
              className="w-full h-full relative cursor-zoom-in"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt="Imagen de ejemplo del trabajo de Piso Fuerte"
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={item.thumbnail}
                    alt="Video de ejemplo del trabajo de Piso Fuerte"
                    className="w-full h-full object-cover rounded"
                  />
                  {/* play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className='border border-brand-yellow rounded-full py-4 pl-4 pr-3'>
                      <FaPlay className='text-[#fff67d] text-3xl' />
                    </div>
                  </div>
                </div>
              )}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeIndex !== null && (
        <MediaViewer
          media={media}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </div>
  );
}
