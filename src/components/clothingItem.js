import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDataById } from '../utils/manageData';
import Image from './image';

const ClothingItem = ({ id }) => {
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const onStart = (e) => {
    setDragStartPos({ x: e.screenX, y: e.screenY });
  };
  const onStop = (e) => {
    const dragX = Math.abs(dragStartPos.x - e.screenX);
    const dragY = Math.abs(dragStartPos.y - e.screenY);
    if (dragX < 10 && dragY < 10) {
      navigate(`/tienda/${id}`);
    }
  };

  const data = getDataById(id);

  return (
    <div
      /* to={`/tienda/${id}`} */
      className="cursor-pointer select-none"
      draggable={false}
      onMouseDown={onStart}
      onMouseUp={onStop}
    >
      <div className="bg-white font-nunito flex flex-col gap-1 p-4 items-center">
        <Image url={data.imagesSource[0]} placeholder={data.placeholder[0]} />
        <p>{data.name}</p>
        <p className="font-bold">$ {data.price}</p>
      </div>
    </div>
  );
};

export default ClothingItem;
