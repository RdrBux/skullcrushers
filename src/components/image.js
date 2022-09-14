import React from 'react';

const Image = ({ url }) => {
  return (
    <img
      draggable={false}
      src={url}
      alt=""
      style={{
        width: '100%',
        display: 'block',
        height: '100%',
        margin: 'auto',
      }}
    />
  );
};

export default Image;
