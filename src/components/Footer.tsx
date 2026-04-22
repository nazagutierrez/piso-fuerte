import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";
import logo from "../assets/jpg-assets/logo.png";
import PhoneSvg from '@/assets/svg/PhoneSvg';
import InstagramSvg from '@/assets/svg/InstagramSvg';
import MailSvg from '@/assets/svg/MailSvg';
import MapPinSvg from '@/assets/svg/MapPinSvg';
import NaztroSvg from '@/assets/svg/NaztroSvg';

export function Footer() {
  const pathname = useLocation().pathname;
  const scrollTween = useRef<gsap.core.Tween | null>(null);

  const scrollToTop = () => {
    const smoother = ScrollSmoother.get();
    if (!smoother) return;

    scrollTween.current?.kill();

    scrollTween.current = gsap.to(smoother, {
      scrollTop: 0,
      duration: 1.5,
      ease: "power3.inOut"
    });
  };

  return (
    <footer className="bg-brand-dark z-20 relative text-white overflow-hidden">      
      <div className="max-w-7xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-4 sm:pt-12">
        <div className={`grid ${pathname === "/" ? "grid-cols-2 sm:grid-cols-2" : "grid-cols-2 sm:grid-cols-3"} gap-x-4 gap-y-8 sm:gap-8`}>
          {/* Company Info */}
          <div className={`${pathname === "/" && "hidden"} col-span-2 sm:col-span-1 mx-auto sm:mx-0 text-center sm:text-start`}>
            <Link to="/" className="flex items-center w-fit">
              <img src={logo} alt="Logotipo de Constructora Piso Fuerte" className="h-16 -ms-2 sm:-ms-4 w-16" />

              <span className="font-bold text-3xl text-white title-font"><span className='text-brand-yellow title-font'>PISO</span> FUERTE</span>
            </Link>
            <p className="text-sm w-[200px] md:w-60 text-pretty text-neutral-400 leading-relaxed">
              Construcción profesional de galpones, pisos y mucho mas en Junín y alrededores.
            </p>
          </div>

          {/* Quick Links */}
          <div className='mx-auto '>
            <nav aria-label="Enlaces rápidos del pie de página">
              <h3 className="font-thin mb-4 text-brand-yellow">Enlaces Rápidos</h3>
              <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/trabajos" className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors">
                  Trabajos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-neutral-400 hover:text-brand-yellow transition-colors">
                  Contacto
                </Link>
              </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <address className='mx-auto ps-10 xs:ps-8 sm:ps-0 not-italic'>
            <h3 className="font-thin mb-4 text-center sm:text-start text-brand-yellow">Contacto</h3>
            <ul className="space-y-3 flex gap-3 sm:gap-0 items-end sm:items-start flex-col">
              <a 
                href="tel:+5492364525588" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-brand-yellow"
              >
                <PhoneSvg className="text-brand-yellow flex-shrink-0 w-6 h-6 sm:w-4 sm:h-4" />
                <span className="text-sm transition-all sm:block hidden">+54 9 2364 52-5588</span>
              </a>
              <a 
                href="https://www.instagram.com/constructorapisofuerte" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-brand-yellow"
              >
                <InstagramSvg className="text-brand-yellow flex-shrink-0 w-6 h-6 sm:w-4 sm:h-4" />
                <span className="text-sm transition-all sm:block hidden">@constructorapisofuerte</span>
              </a>
              <a 
                href="mailto:pisofuertejunin@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-brand-yellow"
              >
                <MailSvg className="text-brand-yellow flex-shrink-0 w-6 h-6 sm:w-4 sm:h-4" />
                <span className="text-sm break-all text-balance transition-all sm:block hidden">pisofuertejunin@gmail.com</span>
              </a>
              <li className="hidden items-start gap-3 sm:flex">
                <MapPinSvg className="text-brand-yellow flex-shrink-0 w-6 h-6 sm:w-4 sm:h-4" />
                <span className="text-sm text-neutral-400">Junín, Buenos Aires</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t text-neutral-400 border-[#353535] flex flex-col mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Piso Fuerte. Todos los derechos reservados.
          </p>
          <p className="mt-2 flex mx-auto">
            <span className='p-2 pr-0'>Hecho por </span>
            <a 
              href="https://www.instagram.com/naztrosoftware/" 
              target='_blank' 
              rel='noopener noreferrer' 
              className='underline p-2 pl-1 title-font uppercase tracking-wider flex items-center underline-offset-4 decoration-[#4b96e3]'
            >
              Naztro
              <NaztroSvg className="w-6 h-6 ml-1" />
            </a>
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          className="mx-auto w-fit px-6 hover:shadow-[5px_5px_2px_2px_#000] transition-all text-neutral-400 py-px rounded mt-5 bg-neutral-700 cursor-pointer"
        >
          Volver arriba
        </button>
      </div>

      <div className='flex items-center xs:items-start pointer-events-none h-18 xs:h-50 sm:h-60 md:h-[340px] lg:h-[440px] xs:-mt-12 sm:-mt-18 justify-center ml-10 xs:ml-[150px] sm:ml-[250px] md:ml-[350px] lg:ml-[450px] xl:ml-0'>
        <h1 className="text-nowrap text-center text-[6rem] xs:text-[11rem] sm:text-[16rem] md:text-[20rem] lg:text-[27rem] z-30 brightness-50 title-font"><span className="text-brand-yellow title-font">PISO</span> FUERTE</h1>
      </div>

    </footer>
  )
}
