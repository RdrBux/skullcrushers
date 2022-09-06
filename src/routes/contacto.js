import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contacto = () => {
  const marqueeRef = useRef();

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <div className="sm:mt-10 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-col">
      <div className="flex flex-col items-center gap-2 sm:gap-4 py-4">
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

      <section className="max-w-full overflow-hidden">
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
        </div>
      </section>
    </div>
  );
};

export default Contacto;
