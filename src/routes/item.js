import React from 'react';
import Carousel from 'react-multi-carousel';
import shirtOne from '../assets/img/shirt1.png';

const images = [<img className="w-10" src={shirtOne} />, 'text'];

const CustomDot = ({
  index,
  onClick,
  active,
  carouselState: { currentSlide },
}) => {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className={'custom-dot' + active && 'custom-dot--active'}
    >
      {React.Children.toArray(images)[index]}
    </button>
  );
};

const Item = () => {
  return (
    <div>
      <p>{'<-'}</p>
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
          className=""
          containerClass="container"
          customDot={<CustomDot />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="p-8"
          keyBoardControl
          minimumTouchDrag={80}
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
          <img src={shirtOne} alt="" />
          <img src={shirtOne} alt="" />
          <img src={shirtOne} alt="" />
          <img src={shirtOne} alt="" />
          <img src={shirtOne} alt="" />
        </Carousel>
      </div>
    </div>
  );
};

export default Item;
