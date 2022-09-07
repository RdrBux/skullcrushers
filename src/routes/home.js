import React, { useEffect, useRef } from 'react';
import shirt from '../assets/img/shirt2.png';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Link } from 'react-router-dom';

const Home = () => {
  const shirtRef = useRef();
  const swapTextRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const subText = useRef();
  const button = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(textOne.current, {
      y: 30,
      alpha: 0,
      duration: 0.3,
    })
      .from(textTwo.current, {
        y: 30,
        alpha: 0,
        duration: 0.3,
      })
      .from(textThree.current, {
        y: 30,
        alpha: 0,
        duration: 0.3,
      })
      .from([subText.current, button.current], {
        y: 30,
        alpha: 0,
        duration: 0.3,
      })
      .from(
        shirtRef.current,
        {
          y: -800,
          alpha: 0,
          duration: 1,
        },
        '-=0.3'
      );

    tl.add(moveShirt());

    function moveShirt() {
      const tl2 = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl2.to(shirtRef.current, {
        y: '-10%',
        duration: 2,
        ease: 'power1.inOut',
      });

      return tl2;
    }
  }, []);

  return (
    <div className="mt-4 relative">
      <div className="flex flex-col items-center">
        <div>
          <div className="text-[40vw] sm:text-[25vw] lg:text-[20vw] xl:text-[260px] leading-[80%]">
            <p ref={textOne} className="text-3xl text-yellow-600">
              READY TO
            </p>
            <div ref={textTwo} className="flex flex-col sm:flex-row sm:gap-6">
              <p ref={swapTextRef}>ROCK</p>
              <p>THE</p>
            </div>
            <p ref={textThree} className="w-fit">
              WORLD
            </p>
          </div>
          <p ref={subText} className="font-nunito text-base sm:text-lg">
            No digas quién eres, demuéstralo.
          </p>
          <Link to="/tienda">
            <button
              ref={button}
              className="mt-6 font-nunito font-bold text-base sm:text-lg w-fit py-4 px-8 text-white bg-black -rotate-3 hover:animate-wiggle"
            >
              Ir a la tienda {'->'}
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={shirtRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img className="w-[300px]" src={shirt} alt="" />
      </div>
    </div>
  );
};

export default Home;
