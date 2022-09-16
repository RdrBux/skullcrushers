import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Marquee from '../components/marquee';

const Contacto = () => {
  const contactRef = useRef();
  const refEl = gsap.utils.selector(contactRef);
  const socialRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(refEl('p'), {
      y: 30,
      alpha: 0,
      duration: 0.3,
      stagger: 0.1,
    })
      .from(socialRef.current, {
        y: 30,
        alpha: 0,
        duration: 0.3,
      })
      .from(footerRef.current, {
        y: 30,
        alpha: 0,
        duration: 0.3,
      });
  }, [refEl]);

  return (
    <div className="min-h-full mt-10 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col">
      <div ref={contactRef} className="flex flex-col items-center gap-4">
        <p className="select-all hover:text-zinc-300 hover:text-outlined">
          contacto@skullcrushersarg.com
        </p>
        <p className="select-all hover:text-zinc-300 hover:text-outlined">
          (0343) 154 123 456
        </p>
        <p className="select-all hover:text-zinc-300 hover:text-outlined">
          Calle Falsa 123. Paraná, Entre Ríos
        </p>
      </div>

      <div className="mt-12 lg:mt-2 mb-16">
        <Marquee text="SEGUINOS EN NUESTRAS REDES" />
      </div>

      <div ref={socialRef} className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row text-4xl gap-8 sm:gap-20">
          <p className="hover:text-zinc-300 hover:text-outlined cursor-pointer">
            FB: SKULLCRUSHERSARG
          </p>
          <p className="hover:text-zinc-300 hover:text-outlined cursor-pointer">
            IG: SKULLCRUSHERSARG
          </p>
        </div>
      </div>

      <footer
        ref={footerRef}
        className="font-nunito text-lg py-3 flex flex-col md:flex-row md:gap-2 justify-center items-center border-t border-t-black mt-16"
      >
        <p>© 2022 Skullcrushers.</p> <p>Todos los derechos reservados.</p>{' '}
        <p>
          <a className="font-bold" href="https://github.com/RdrBux">
            Diseño por RdrBux.
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Contacto;
