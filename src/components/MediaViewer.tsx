import { useEffect, useRef, useState } from "react";
import { MediaItem } from "./Carousel";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";

type ViewerProps = {
  media: MediaItem[];
  initialIndex: number;
  onClose: () => void;
};

export function MediaViewer({ media, initialIndex, onClose }: ViewerProps) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const closeWithAnimation = () => {
    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.2,
      onComplete: onClose,
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
    });
  };

  // ESC para cerrar
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Animación de entrada
  useEffect(() => {
    if (!overlayRef.current || !contentRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power1.out" },
    ).fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
      "-=0.15",
    );

    return () => {
      tl.kill();
    };
  }, []);

  const updateVideos = (activeIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  useEffect(() => {
  updateVideos(activeIndex)
}, [activeIndex])

  return createPortal(
    <div
      ref={overlayRef}
      onClick={closeWithAnimation}
      className="fixed cursor-zoom-out inset-0 z-[9999] bg-black/60 flex items-center justify-center"
    >
      <button
        onClick={closeWithAnimation}
        className="absolute cursor-pointer top-6 right-6 text-white text-4xl z-50"
      >
        ✕
      </button>

      <div ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <Swiper
          initialSlide={initialIndex}
          centeredSlides
          slidesPerView={1.1}
          spaceBetween={30}
          nested={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="viewer-swiper overflow-visible! max-w-[90vw] max-h-[90vh]"
        >
          {media.map((item, index) => (
            <SwiperSlide key={item.id} className="viewer-slide">
              {item.type === "image" ? (
                <picture>
                  {item.avifSrc && <source srcSet={item.avifSrc} type="image/avif" />}
                  <img
                    src={item.src}
                    className="w-full md:w-[40vw] h-[80dvh] object-cover rounded"
                  />
                </picture>
              ) : (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}                
                src={item.src}
                controls={false}
                loop
                playsInline
                muted
                className="w-full md:w-[40vw] h-[80dvh] object-cover rounded pointer-events-none"
              />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
      .viewer-swiper .viewer-slide { display: flex; justify-content: center; transition: all 0.35s ease, transform 0.35s ease; transform: scale(0.9); }

      .viewer-swiper .swiper-slide-active { opacity: 1; transform: scale(1.1) !important; }

      .viewer-swiper .swiper-slide-prev,
      .viewer-swiper .swiper-slide-next { filter: brightness(50%) blur(2px); transform: scale(0.95) !important; }
        `}</style>
    </div>,
    document.body,
  );
}
