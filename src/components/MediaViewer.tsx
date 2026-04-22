import { useEffect, useRef, useState } from "react";
import { MediaItem } from "./Carousel";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";

function MediaSlide({ item, index, videoRefs }: { item: MediaItem, index: number, videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]> }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full md:w-[40vw] h-[80dvh] mx-auto flex items-center justify-center">
      {!loaded && (
        <div className="absolute bg-texture-black/30 border border-brand-yellow/20 inset-0 flex items-center justify-center z-[-1]">
          <div className="w-10 h-10 border-4 border-white/20 border-t-brand-yellow rounded-full animate-spin"></div>
        </div>
      )}
      
      {item.type === "image" ? (
        <picture className="w-full h-full">
          {item.avifSrc && <source srcSet={item.avifSrc} type="image/avif" />}
          <img
            src={item.src}
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover rounded transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
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
          onLoadedData={() => setLoaded(true)}
          className={`w-full h-full object-cover rounded pointer-events-none transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

type ViewerProps = {
  media: MediaItem[];
  initialIndex: number;
  onClose: () => void;
};

export function MediaViewer({ media, initialIndex, onClose }: ViewerProps) {
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

  // Bloquear scroll del body
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

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
      className="fixed cursor-zoom-out top-0 left-0 w-screen h-[100dvh] z-[9999] bg-black/60 flex items-center justify-center"
    >
      <button
        onClick={closeWithAnimation}
        className="absolute cursor-pointer right-4 md:right-6 text-white text-3xl md:text-4xl z-50 p-2"
        style={{ top: 'calc(1rem + env(safe-area-inset-top, 0px))' }}
      >
        ✕
      </button>

      <div ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <Swiper
          initialSlide={initialIndex}
          centeredSlides
          slidesPerView={1.1}
          spaceBetween={30}
          loop={true}
          nested={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          className="viewer-swiper overflow-visible! max-w-[90vw] max-h-[90vh]"
        >
          {media.map((item, index) => (
            <SwiperSlide key={item.id} className="viewer-slide">
              <MediaSlide item={item} index={index} videoRefs={videoRefs} />
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
