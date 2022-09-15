import React from 'react';
import shirtOne from '../assets/img/shirt1.png';
import Image from './image';

const ClothingItem = () => {
  return (
    <div className="bg-white font-nunito relative flex flex-col gap-2 p-2 items-center">
      <Image url={shirtOne} />
      <p>NOMBRE DE LA REMERA</p>
      <p className="font-bold">$ 5999</p>
      <div className="absolute w-full h-full inset-0 z-10"></div>
    </div>
  );
};

export default ClothingItem;
