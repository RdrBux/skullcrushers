import React from 'react';
import Carousel from 'react-multi-carousel';
import shirtOne from '../assets/img/shirt1.png';

const Item = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <button className="font-nunito text-2xl">{'<'}</button>
        <div
          style={{
            paddingBottom: '30px',
            position: 'relative',
          }}
        >
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="select-none cursor-move"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass="p-4"
            keyBoardControl
            minimumTouchDrag={50}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <img
              draggable="false"
              src={shirtOne}
              alt=""
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%',
              }}
            />
            <img
              draggable="false"
              src={shirtOne}
              alt=""
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%',
              }}
            />
            <img
              draggable="false"
              src={shirtOne}
              alt=""
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%',
              }}
            />
            <img
              draggable="false"
              src={shirtOne}
              alt=""
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%',
              }}
            />
            <img
              draggable="false"
              src={shirtOne}
              alt=""
              style={{
                display: 'block',
                height: '100%',
                margin: 'auto',
                width: '100%',
              }}
            />
          </Carousel>
        </div>
      </div>
      <div className="bg-black font-bebas text-white mt-4 lg:mt-0 p-10 flex flex-col gap-4 lg:gap-8 w-full justify-center">
        <div>
          <p className="text-3xl sm:text-5xl lg:text-6xl">
            NOMBRE DE LA REMERA
          </p>
          <p className="font-nunito text-sm sm:text-base">
            Descripción de la remera. Otras cosas y blabla blabla
          </p>
        </div>
        <p className="text-3xl">$ {'5999'}</p>
        <div className="text-lg">
          <p>TALLE: {'S'}</p>
          <ul className="flex gap-1">
            <li>
              <button className="text-bold bg-yellow-600 | border border-white w-12 py-1">
                S
              </button>
            </li>
            <li>
              <button className="border border-white w-12 py-1">M</button>
            </li>
            <li>
              <button className="border border-white w-12 py-1">L</button>
            </li>
            <li>
              <button className="border border-white w-12 py-1">XL</button>
            </li>
            <li>
              <button className="border border-white w-12 py-1">XXL</button>
            </li>
          </ul>
          <p className="font-nunito text-sm">Ver nuestra tabla de talles.</p>
        </div>
        <button className="text-left w-fit text-lg px-8 py-2 border border-white">
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default Item;
