import React, { useRef, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import ClothingItem from '../components/clothingItem';
import StoreCarousel from '../components/storeCarousel';
import { gsap } from 'gsap';

const Tienda = () => {
  const storeRef = useRef();
  const storeElements = gsap.utils.selector(storeRef);

  useEffect(() => {
    gsap.from(storeElements('.element'), {
      y: 30,
      alpha: 0,
      duration: 0.4,
      stagger: 0.2,
    });
  }, []);

  return (
    <div ref={storeRef} className="font-nunito flex flex-col relative">
      <div className="element | text-white bg-black w-fit py-2 px-8 self-center">
        <strong>Envíos gratis</strong> a todo el país en compras superiores a
        $10.000.
      </div>
      <div className="element | font-bebas text-7xl sm:text-9xl my-8">
        COLECCIONES
      </div>
      <div className="element | mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          SKULL<span className="text-yellow-500">CRUSHER</span>
        </div>
        <StoreCarousel>
          <ClothingItem id={1} />
          <ClothingItem id={2} />
          <ClothingItem id={3} />
        </StoreCarousel>
      </div>
      <div className="element | mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          PSYCHE<span className="text-pink-500">DELIC</span>
        </div>
        <StoreCarousel>
          <ClothingItem id={4} />
          <ClothingItem id={5} />
          <ClothingItem id={6} />
        </StoreCarousel>
      </div>
      <div className="element | mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          INNER<span className="text-green-500">BEAST</span>
        </div>
        <StoreCarousel>
          <ClothingItem id={7} />
          <ClothingItem id={8} />
          <ClothingItem id={9} />
        </StoreCarousel>
      </div>
      <footer className="element | font-nunito text-lg py-3 flex flex-col md:flex-row md:gap-2 justify-center items-center border-t border-t-black mt-16">
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

export default Tienda;
