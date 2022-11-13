import React from 'react';

const Image = ({ url, width = '100%' }) => {
  return (
    <img
      className=""
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
