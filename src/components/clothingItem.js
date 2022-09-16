import React from 'react';
import { Link } from 'react-router-dom';
import { getDataById } from '../utils/manageData';
import Image from './image';

const ClothingItem = ({ id }) => {
  const data = getDataById(id);

  return (
    <Link to={`/tienda/${id}`}>
      <div className="bg-white font-nunito cursor-pointer relative flex flex-col gap-2 p-2 items-center">
        <Image url={data.imagesSource[0]} />
        <p>{data.name}</p>
        <p className="font-bold">$ {data.price}</p>
        <div className="absolute w-full h-full inset-0 z-10"></div>
      </div>
    </Link>
  );
};

export default ClothingItem;
