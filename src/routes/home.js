import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import shirtCut from '../assets/img/shirt-cut.png';
import stickerSkull from '../assets/img/sticker-skull.svg';
import stickerHandOne from '../assets/img/sticker-hand.svg';
import stickerHandTwo from '../assets/img/sticker-hand2.svg';
import { orbitAnimation } from '../utils/gsap';

const Home = ({ loaded, setLoaded }) => {
  const shirtRef = useRef();
  const stickersRef = useRef();
  const stickersList = gsap.utils.selector(stickersRef);
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const subText = useRef();
  const button = useRef();

  useEffect(() => {
    if (!loaded) {
      const loader = document.getElementById('loader');
      setTimeout(() => {
        loader.style.display = 'none';
        mainAnimation();
        setLoaded(true);
      }, 2000);
    } else {
      mainAnimation();
    }

    function mainAnimation() {
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
            x: '100%',
            alpha: 0,
            duration: 3,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          stickersList('img'),
          {
            y: -800,
            alpha: 0,
            duration: 1,
            stagger: 0.1,
            onComplete: () => {
              orbitAnimation(stickersList('img')[0], 0.05, 2);
              orbitAnimation(stickersList('img')[1], 0.1, 5);
              orbitAnimation(stickersList('img')[2], 0.2, 3);
            },
          },
          '-=2.5'
        );
    }
  }, []);

  return (
    <div className="mt-16 lg:mt-4">
      <div className="flex flex-col items-center">
        <div className="relative z-10">
          <div className="text-[40vw] sm:text-[25vw] lg:text-[20vw] xl:text-[260px] leading-[80%]">
            <p ref={textOne} className="text-3xl text-zinc-600">
              READY TO
            </p>
            <div ref={textTwo} className="flex flex-col sm:flex-row sm:gap-6">
              <p className="">ROCK</p>
              <p>THE</p>
            </div>
            <p ref={textThree} className="w-fit">
              WORLD!
            </p>
          </div>
          <p ref={subText} className="font-nunito text-base sm:text-lg">
            Indumentaria blabla slogan{/* No digas quién eres, demuéstralo. */}
          </p>
          <Link to="/tienda">
            <button
              ref={button}
              className="my-6 flex items-center gap-2 font-nunito font-bold text-base sm:text-lg w-fit py-4 px-8 text-white bg-black -rotate-3 hover:animate-wiggle"
            >
              <p>Ir a la tienda</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
          <div ref={stickersRef} className="">
            <img
              className="w-7 sm:w-10 absolute top-1/4 left-0"
              src={stickerSkull}
              alt=""
            />
            <img
              className="w-7 sm:w-10 absolute bottom-1/4 right-1/4"
              src={stickerHandOne}
              alt=""
            />
            <img
              className="w-7 sm:w-10 absolute top-0 right-0"
              src={stickerHandTwo}
              alt=""
            />
          </div>
        </div>
      </div>

      <img
        ref={shirtRef}
        className="absolute top-1/4  lg:top-20  right-0 w-[60vw] sm:w-[220px] md:w-[300px] lg:w-[25vw]"
        src={shirtCut}
        alt=""
      />
    </div>
  );
};

export default Home;
