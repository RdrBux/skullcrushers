import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import hoverEffect from 'hover-effect';
import imgOne from '../assets/img/dude.png';
import imgTwo from '../assets/img/dude (copy 1).png';
import stripe1 from '../assets/img/stripe1.png';
import Loading from '../components/loading';

const Home = () => {
  const swapText = useRef();
  const navRef = useRef();
  const leftHero = useRef();
  const rightHero = useRef();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    let tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    tl.to(swapText.current, {
      duration: 0.4,
      text: 'CRUSH',
      delay: 2.1,
    });

    gsap.from(navRef.current, {
      y: -100,
      duration: 1,
      ease: 'power4.out',
      delay: 2.1,
    });

    gsap.from(leftHero.current, {
      x: '-100%',
      alpha: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 2.1,
    });

    gsap.from(rightHero.current, {
      x: '100%',
      alpha: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 2.1,
    });
  }, []);

  useEffect(() => {
    const myAnimation = new hoverEffect({
      parent: rightHero.current,
      intensity: 0.3,
      image1: imgOne,
      image2: imgTwo,
      displacementImage: stripe1,
      imagesRatio: 1.4,
    });
  }, []);

  return (
    <div>
      <Loading />
      <div className="bg-yellow-500 flex flex-col items-center">
        <div className="container font-bebas px-4 lg:px-[2vw] min-h-screen">
          <Navbar ref={navRef} />
          <div className="flex flex-col lg:flex-row">
            <div ref={leftHero} className="lg:w-8/12 mt-8 flex flex-col gap-4">
              <div className="text-[25vw] sm:text-[20vw] lg:text-[140px] xl:text-[160px] 2xl:text-[200px] leading-[80%]">
                <p>READY TO</p>
                <p>
                  <span className="text-gray-50" ref={swapText}>
                    ROCK
                  </span>
                </p>
                <p>THE WORLD!</p>
              </div>
              <p className="font-nunito text-base sm:text-lg md: lg:w-3/4">
                Indumentaria blabla, consectetur adipiscing elit. Malesuada
                gravida libero ipsum eu arcu felis convallis sed. Dui tellus
                duis fusce
              </p>
              <button className="font-nunito font-bold text-base sm:text-lg w-fit py-4 px-8 text-white bg-black -rotate-3">
                Ir a la tienda {'->'}
              </button>
            </div>
            <div
              ref={rightHero}
              className="flex flex-col items-center mt-8 lg:mt-0 lg:w-4/12"
            >
              {/* <img src={dude} alt="" /> */}
            </div>
            <div className="my-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
