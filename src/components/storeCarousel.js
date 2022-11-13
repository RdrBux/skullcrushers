import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow, CustomRightArrow } from '../components/customArrows';

const StoreCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 9000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 0,
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
    <Carousel
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="bg-zinc-200 select-none"
      containerClass="container"
      draggable
      focusOnSelect={false}
      itemClass="p-1"
      keyBoardControl
      minimumTouchDrag={30}
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
      {props.children}
    </Carousel>
  );
};

export default StoreCarousel;
