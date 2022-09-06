import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import skullWhite from '../assets/img/skull-white.svg';

const Loading = () => {
  return (
    <div className="absolute font-bebas bg-black text-yellow-500 flex flex-col items-center justify-center h-screen w-screen z-30">
      <div className="z-10 flex flex-col items-center">
        <img className="w-32" src={skullWhite} alt="" />
        <h1 className="text-5xl lg:text-9xl mt-10">SKULLCRUSHERS</h1>
        <p className="font-nunito text-xl text-gray-50">
          INDUMENTARIA MASCULINA
        </p>
      </div>
      <div className="h-16 w-16 rounded-full mt-10">
        <div className="elipse-thin | border border-gray-600 w-full h-full rounded-full flex items-center justify-center">
          <div className="elipse-thick | w-[90%] h-[90%] border-4 border-y-yellow-500 border-x-gray-500 rounded-full z-10 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
