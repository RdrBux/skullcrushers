import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Tienda = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="font-nunito flex flex-col items-center">
      <div className="text-white bg-black w-fit py-2 px-8">
        <strong>Envíos gratis</strong> a todo el país en compras superiores a
        $10.000.
      </div>
      <div>COLECCIONES</div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 2,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="h-96 border w-96">TEXTO 2</div>
        <div className="h-96 border w-96">TEXTO 2</div>
        <div className="h-96 border w-96">TEXTO 2</div>
        <div className="h-96 border w-96">TEXTO 2</div>
        <div className="h-96 border w-96">TEXTO 2</div>
        <div className="h-96 border w-96">TEXTO 2</div>
      </Carousel>
    </div>
  );
};

export default Tienda;
