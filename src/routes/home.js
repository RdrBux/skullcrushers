import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import hoverEffect from 'hover-effect';
import imgOne from '../assets/img/dude.png';
import imgTwo from '../assets/img/dude (copy 1).png';
import stripe1 from '../assets/img/stripe1.png';
import Loading from '../components/loading';
import { Link } from 'react-router-dom';

const Home = () => {
  const swapText = useRef();
  const leftHero = useRef();
  const rightHero = useRef();
  const imgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(swapText.current, {
      duration: 0.4,
      text: 'CRUSH',
      delay: 1.5,
    });

    gsap.from(leftHero.current, {
      x: '-100%',
      alpha: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 0.1,
    });

    gsap.from(rightHero.current, {
      scale: 0,
      alpha: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 0.1,
    });
  }, []);

  /* useEffect(() => {
    const myAnimation = new hoverEffect({
      parent: rightHero.current,
      intensity: 0.3,
      image1: imgOne,
      image2: imgTwo,
      displacementImage: stripe1,
      imagesRatio: 1.4,
    });
  }, []); */

  return (
    <div>
      {/* <Navbar ref={navRef} /> */}
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
            Indumentaria blabla, consectetur adipiscing elit. Malesuada gravida
            libero ipsum eu arcu felis convallis sed. Dui tellus duis fusce
          </p>
          <button className="font-nunito font-bold text-base sm:text-lg w-fit py-4 px-8 text-white bg-black -rotate-3">
            <Link to="/tienda">Ir a la tienda {'->'}</Link>
          </button>
        </div>
        <div
          ref={rightHero}
          className="flex flex-col items-center mt-8 lg:mt-0 lg:w-4/12"
        >
          <img ref={imgRef} src={imgOne} alt="" />
        </div>
        <div className="my-div"></div>
      </div>
    </div>
  );
};

export default Home;
