import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import ClothingItem from '../components/clothingItem';
import StoreCarousel from '../components/storeCarousel';

const Tienda = () => {
  return (
    <div className="font-nunito flex flex-col relative">
      <div className="text-white bg-black w-fit py-2 px-8 self-center">
        <strong>Envíos gratis</strong> a todo el país en compras superiores a
        $10.000.
      </div>
      <div className="font-bebas text-7xl sm:text-9xl my-8">COLECCIONES</div>
      <div className="mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          SKULL<span className="text-yellow-500">CRUSHER</span>
        </div>
        <StoreCarousel>
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
        </StoreCarousel>
      </div>
      <div className="mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          INNER<span className="text-green-500">BEAST</span>
        </div>
        <StoreCarousel>
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
        </StoreCarousel>
      </div>
      <div className="mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          PSYCHE<span className="text-pink-500">DELIC</span>
        </div>
        <StoreCarousel>
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
          <ClothingItem id={1} />
        </StoreCarousel>
      </div>
      <footer className="font-nunito text-lg py-3 flex flex-col md:flex-row md:gap-2 justify-center items-center border-t border-t-black mt-16">
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
