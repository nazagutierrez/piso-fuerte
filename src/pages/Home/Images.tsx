import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Images() {
  const imgContainer = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLImageElement>(null);
  const imgRef2 = useRef<HTMLImageElement>(null);
  const imgRef3 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imgRef1.current, {
        scale: 0.9,
        transformOrigin: "center center",
        borderRadius: "60px",
      });

      gsap.to(imgRef1.current, {
        scale: 1.2,
        borderRadius: "-50px",
        ease: "none",
        scrollTrigger: {
          trigger: imgRef1.current,
          start: "top bottom",
          end: "105% top",
          scrub: true,
        },
      });

      gsap.from(imgRef1.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: imgRef1.current,
          start: "top 7%",
          end: "bottom",
          scrub: true,
          pin: true,
        },
      });

      gsap.set(imgRef2.current, { scale: 1.1 });

      gsap.from(imgRef2.current, {
        scrollTrigger: {
          trigger: imgRef2.current,
          snap: { snapTo: 0.5, duration: 0.5, ease: "power1.out" },
        },
      });

      gsap.from(imgRef2.current, {
        scale: 1,
        scrollTrigger: {
          trigger: imgRef2.current,
          start: "top top",
          end: "bottom",
          scrub: true,
          pin: true,
        },
      });
    }, imgContainer);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={imgContainer} className="h-full w-full flex flex-col">
      <div className="h-screen w-full relative bg-[#141414]">
        <img
          src="/textura-de-la-pared-del-grunge.jpg"
          className="bg-top h-[674px] rotate-180 -scale-x-100 w-full opacity-30 object-cover"
          alt="background texture"
        ></img>
        <img
          ref={imgRef1}
          className="w-full h-screen absolute inset-0 "
          src="/galpon.jpg"
          alt="building example 1"
        />
        <div className="absolute flex flex-col items-start bottom-20 left-14">
          <h2 className="uppercase title-font text-brand-yellow text-7xl">
            Galpones
          </h2>
          <h4 className="text-2xl text-white font-thin">Un proyecto de construcción de casas personalizadas</h4>
        </div>
      </div>
			<div className="h-screen relative">
				<img
					ref={imgRef2}
					className="w-full h-screen object-cover z-20"
					src="/piletas.webp"
					alt="building example 2"
				/>
				<div className="absolute z-30 flex flex-col items-start bottom-20 left-14">
          <h2 className="uppercase title-font text-brand-yellow text-7xl">
            Piletas
          </h2>
          <h4 className="text-2xl text-white font-thin">Un proyecto de construcción de casas personalizadas</h4>
        </div>
			</div>
			<div className="h-screen relative z-30">
				<img
					ref={imgRef3}
					className="w-full h-screen object-cover"
					src="/pared.jpg"
					alt="building example 3"
				/>
				<div className="absolute z-30 flex flex-col items-start bottom-20 left-14">
          <h2 className="uppercase title-font text-brand-yellow text-7xl">
            Construcción prolija
          </h2>
          <h4 className="text-2xl text-white font-thin">Un proyecto de construcción de casas personalizadas</h4>
        </div>
			</div>
    </section>
  );
}
