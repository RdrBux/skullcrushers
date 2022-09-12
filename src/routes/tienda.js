import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClothingItem from '../components/clothingItem';

const Tienda = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 80,
    },
  };

  return (
    <div className="font-nunito flex flex-col">
      <div className="text-white bg-black w-fit py-2 px-8 self-center">
        <strong>Envíos gratis</strong> a todo el país en compras superiores a
        $10.000.
      </div>
      <div className="font-bebas text-7xl sm:text-9xl my-8">COLECCIONES</div>
      <div className="mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          SKULL<span className="text-yellow-500">CRUSHER</span>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="bg-white"
          containerClass="container"
          draggable
          focusOnSelect={false}
          itemClass="p-4"
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
        </Carousel>
      </div>
      <div className="mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          INNER<span className="text-green-500">BEAST</span>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="bg-white select-none py-4"
          containerClass="container"
          draggable
          focusOnSelect={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
        </Carousel>
      </div>
      <div className="mb-16">
        <div className=" w-fit font-bebas self-start bg-black text-white px-8 pb-2 pt-3 text-3xl lg:text-4xl">
          PSYCHE<span className="text-pink-500">DELIC</span>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="bg-white"
          containerClass="container"
          draggable
          focusOnSelect={false}
          itemClass="p-4"
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
          <ClothingItem />
        </Carousel>
      </div>
    </div>
  );
};

export default Tienda;
