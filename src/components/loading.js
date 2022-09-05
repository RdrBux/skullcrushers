import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
  const loadingRef = useRef();
  useEffect(() => {
    gsap.to(loadingRef.current, {
      delay: 2,
      y: '-100%',
    });
  }, []);

  return (
    <div
      ref={loadingRef}
      className="absolute bg-black text-yellow-500 flex flex-col items-center justify-center h-screen w-screen"
    >
      <div className="z-10">
        <h1 className="font-bebas text-9xl">SKULLCRUSHERS</h1>
        <p className="font-nunito text-xl">INDUMENTARIA MASCULINA</p>
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
