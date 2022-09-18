import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { useNavigate, useParams } from 'react-router-dom';
import Image from '../components/image';
import { getDataById } from '../utils/manageData';
import { nanoid } from 'nanoid';
import { CustomLeftArrow, CustomRightArrow } from '../components/customArrows';
import { gsap } from 'gsap';
import TablaTalles from '../components/tablaTalles';

const Item = ({ addItem, setCartOpen }) => {
  const [size, setSize] = useState('S');
  const [tableOpen, setTableOpen] = useState(false);
  const itemRef = useRef();

  /* useEffect(() => {
    let anim = gsap.from(itemRef.current, {
      y: '100%',
      duration: 0.3,
    });
    anim.play();
    setTimeout(() => {
      anim.kill();
    }, 310);
  }, []); */

  const params = useParams();
  const navigate = useNavigate();
  const data = getDataById(params.id);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 9000,
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
  };

  const imagesArray = data.imagesSource.map((img) => (
    <Image key={nanoid()} url={img} />
  ));

  function navigateBack() {
    gsap.to(itemRef.current, {
      y: '100%',
      duration: 0.3,
      onComplete() {
        navigate(-1);
      },
    });
  }

  function addToCart(data) {
    addItem({
      id: nanoid(),
      img: data.imagesSource[0],
      name: data.name,
      price: data.price,
      size: size,
    });
    setCartOpen(true);
  }

  return (
    <div ref={itemRef} className="flex flex-col lg:flex-row relative">
      <div className="lg:w-1/2">
        <button className="font-nunito font-bold mt-4" onClick={navigateBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <div
          style={{
            paddingBottom: '30px',
            position: 'relative',
          }}
        >
          <Carousel
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
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
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {imagesArray}
          </Carousel>
        </div>
      </div>
      <div className="bg-black font-bebas text-white mt-4 lg:mt-0 p-10 flex flex-col gap-4 lg:gap-8 w-full justify-center">
        <div>
          <p className="text-3xl sm:text-5xl lg:text-6xl">{data.name}</p>
          <p className="font-nunito text-sm sm:text-base">{data.description}</p>
        </div>
        <p className="text-3xl">$ {data.price}</p>
        <div className="text-lg">
          <p>TALLE: {size}</p>
          <ul className="flex gap-1">
            <li>
              <button
                className={`text-bold border border-white w-12 py-1 ${
                  size === 'S' && 'bg-yellow-600'
                }`}
                onClick={() => setSize('S')}
              >
                S
              </button>
            </li>
            <li>
              <button
                className={`text-bold border border-white w-12 py-1 ${
                  size === 'M' && 'bg-yellow-600'
                }`}
                onClick={() => setSize('M')}
              >
                M
              </button>
            </li>
            <li>
              <button
                className={`text-bold border border-white w-12 py-1 ${
                  size === 'L' && 'bg-yellow-600'
                }`}
                onClick={() => setSize('L')}
              >
                L
              </button>
            </li>
            <li>
              <button
                className={`text-bold border border-white w-12 py-1 ${
                  size === 'XL' && 'bg-yellow-600'
                }`}
                onClick={() => setSize('XL')}
              >
                XL
              </button>
            </li>
            <li>
              <button
                className={`text-bold border border-white w-12 py-1 ${
                  size === 'XXL' && 'bg-yellow-600'
                }`}
                onClick={() => setSize('XXL')}
              >
                XXL
              </button>
            </li>
          </ul>
          <p className="font-nunito text-sm mt-2">
            Ver nuestra{' '}
            <span onClick={() => setTableOpen(true)} className="underline">
              tabla de talles.
            </span>
          </p>
        </div>
        <button
          onClick={() => addToCart(data)}
          className="text-left w-fit text-lg px-8 py-2 border border-white"
        >
          AGREGAR AL CARRITO
        </button>
      </div>
      {tableOpen && <TablaTalles closeTable={() => setTableOpen(false)} />}
    </div>
  );
};

export default Item;
