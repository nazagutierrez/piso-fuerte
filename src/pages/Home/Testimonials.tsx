import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { testimonials } from '../../lib/projects';
import { LuQuote } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonial-card',
          start: 'top 90%',
        },
        y: 80,
        filter: "blur(25px)",
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.3,
        ease: 'power3.out',
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        filter: "blur(25px)",
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
        },
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 60,
        delay: .2,
        duration: 0.8,
        filter: "blur(25px)",
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 90%',
        },
      });
    });

    return () => ctx.revert();
  }, [testimonials]);

  const handlePlayAudio = (id: string, audioUrl: string | null) => {
    if (!audioUrl) return;

    if (playingId === id && audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.volume = 0.7;
        audioRef.current.play();
      }
      setPlayingId(id);
    }
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-32 bg-gray-100 relative z-40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl title-font uppercase md:text-6xl font-bold text-center mb-4 text-[#242424]">
          Lo que dicen de <span className='title-font uppercase text-brand-yellow'>nosotros</span>
        </h2>
        <p ref={subtitleRef} className="text-center text-gray-600 mb-16 sm:text-lg">
          Escucha las opiniones de nuestros clientes satisfechos
        </p>

        {/* <div className="grid md:grid-cols-3 gap-8"> */}
        <div className='max-w-200 mx-auto'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card relative text-center bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <LuQuote className="w-8 h-8 xs:w-10 xs:h-10 sm:w-15 sm:h-15 absolute top-3 sm:top-6 right-3 sm:right-8 text-brand-yellow/50" />

              <div className="flex items-center justify-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#242424]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 fill-[#f1d200] text-[#f1d200]"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-12 leading-relaxed">
                "{testimonial.opinion}"
              </p>

              {testimonial.audio_url && (
                <div className="border-t border-brand-dark/20 pt-4">
                  <button
                    onClick={() =>
                      handlePlayAudio(testimonial.id, testimonial.audio_url)
                    }
                    className="w-full flex items-center cursor-pointer justify-center gap-3 bg-[#f1d200] text-[#242424] px-4 py-3 rounded-lg font-semibold hover:bg-[#d9be00] transition-colors"
                  >
                    {playingId === testimonial.id && audioRef.current && !audioRef.current.paused ? (
                      <>
                        <CiPause1 className="w-5 h-5" />
                        Pausar Audio
                      </>
                    ) : (
                      <>
                        <IoPlayOutline className="w-5 h-5" />
                        Escuchar Opinión
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Audio de {testimonial.name.split(' ')[0]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        onEnded={() => setPlayingId(null)}
        className="hidden"
      />
    </section>
  );
}
