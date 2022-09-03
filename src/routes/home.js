import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import dude from '../assets/img/dude.png';
import { gsap } from 'gsap';

const Home = () => {
  const swapText = useRef();

  /*   useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    let tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    tl.to(swapText.current, {
      duration: 1,
      text: 'CRUSH',
      delay: 1,
    });
  }); */

  return (
    <div className="bg-naranja font-bebas px-[2vw] min-h-screen">
      <Navbar />
      <div className="flex">
        <div className="w-[45vw] mt-[4vh] flex flex-col gap-[2vh]">
          <div className="text-[12vw] leading-[80%]">
            <p>READY TO</p>
            <p>
              <span className="text-gray-100" ref={swapText}>
                ROCK
              </span>
            </p>
            <p>THE WORLD!</p>
          </div>
          <p className="font-nunito text-[1.25vw]">
            Indumentaria blabla, consectetur adipiscing elit. Malesuada gravida
            libero ipsum eu arcu felis convallis sed. Dui tellus duis fusce
          </p>
          <button className="font-nunito font-bold text-[1.25vw] w-fit py-[1em] px-[2em] text-white bg-black -rotate-3">
            Ir a la tienda {'->'}
          </button>
        </div>
        <img className="w-[30vw] ml-[10vw]" src={dude} alt="" />
      </div>
    </div>
  );
};

export default Home;
