import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contacto = () => {
  const marqueeRef = useRef();
  const contactRef = useRef();
  const refEl = gsap.utils.selector(contactRef);
  const socialRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(refEl('p'), {
      scale: 0,
      alpha: 0,
      duration: 0.3,
      stagger: 0.1,
    })
      .from(socialRef.current, {
        scale: 0,
        alpha: 0,
        duration: 0.3,
      })
      .from(footerRef.current, {
        scale: 0,
        alpha: 0,
        duration: 0.3,
      });
  }, []);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -15,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <div className="min-h-full sm:mt-10 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col">
      <div
        ref={contactRef}
        className="flex flex-col items-center gap-2 sm:gap-4 py-4"
      >
        <p className="select-all hover:text-yellow-500 hover:text-outlined">
          contacto@skullcrushersarg.com
        </p>
        <p className="select-all hover:text-yellow-500 hover:text-outlined">
          (0343) 154 123 456
        </p>
        <p className="select-all hover:text-yellow-500 hover:text-outlined">
          Calle Falsa 123. Paraná, Entre Ríos
        </p>
      </div>

      <section className="max-w-full inset-x-0 top-[200px] sm:top-[340px] md:top-[360px] lg:top-[400px] xl:top-[450px] absolute overflow-hidden">
        <div
          ref={marqueeRef}
          className="inline-block whitespace-nowrap text-2xl text-white bg-black py-4"
        >
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
          <span className="inline-block">SEGUINOS EN NUESTRAS REDES</span>
          <span className="inline-block px-6">-</span>
        </div>
      </section>

      <div
        ref={socialRef}
        className="flex flex-col items-center mt-32 sm:mt-40"
      >
        <div className="flex flex-col sm:flex-row text-4xl gap-8 sm:gap-20">
          <p className="hover:text-yellow-500 hover:text-outlined cursor-pointer">
            FB: SKULLCRUSHERSARG
          </p>
          <p className="hover:text-yellow-500 hover:text-outlined cursor-pointer">
            IG: SKULLCRUSHERSARG
          </p>
        </div>
      </div>

      <footer
        ref={footerRef}
        className="font-nunito text-lg py-3 flex flex-col md:flex-row md:gap-2 justify-center items-center border-t border-t-black mt-16"
      >
        <p>© 2022 CV Design.</p> <p>Todos los derechos reservados.</p>{' '}
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
