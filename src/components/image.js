import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ url, placeholder, width = '100%' }) => {
  return (
    <LazyLoadImage
      className="min-h-[80px]"
      placeholderSrc={placeholder}
      effect="blur"
      draggable={false}
      src={url}
      alt=""
      style={{
        width: width,
        display: 'block',
        height: '100%',
        margin: 'auto',
      }}
    />
  );
};

export default Image;
