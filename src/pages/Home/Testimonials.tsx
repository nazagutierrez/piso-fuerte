import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { testimonials } from '../../lib/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
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
        audioRef.current.play();
      }
      setPlayingId(id);
    }
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#242424]">
          Lo que dicen de nosotros
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Escucha las opiniones de nuestros clientes satisfechos
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#242424]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 fill-[#f1d200] text-[#f1d200]"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.opinion}"
              </p>

              {testimonial.audio_url && (
                <div className="border-t pt-4">
                  <button
                    onClick={() =>
                      handlePlayAudio(testimonial.id, testimonial.audio_url)
                    }
                    className="w-full flex items-center justify-center gap-3 bg-[#f1d200] text-[#242424] px-4 py-3 rounded-lg font-semibold hover:bg-[#d9be00] transition-colors"
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
