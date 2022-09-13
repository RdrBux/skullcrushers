import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Link } from 'react-router-dom';
import shirt from '../assets/img/shirt2.png';
import stickerSkull from '../assets/img/sticker-skull.svg';
import stickerHandOne from '../assets/img/sticker-hand.svg';
import stickerHandTwo from '../assets/img/sticker-hand2.svg';

const Home = () => {
  const shirtRef = useRef();
  const swapTextRef = useRef();
  const stickersRef = useRef();
  const stickersList = gsap.utils.selector(stickersRef);
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const subText = useRef();
  const button = useRef();

  useEffect(() => {
    mainAnimation();

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
            y: -800,
            alpha: 0,
            duration: 1,
            onComplete: () => moveShirt(),
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
          '-=0.4'
        );
    }

    function moveShirt() {
      gsap.registerPlugin(MotionPathPlugin);
      const tl2 = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      tl2.to(shirtRef.current, {
        y: '-25%',
        duration: 2,
        ease: 'sine.inOut',
      });

      return tl2;
    }

    function orbitAnimation(element, strength = 1, speed = 5) {
      gsap.registerPlugin(MotionPathPlugin);
      const tl = gsap.timeline({
        repeat: -1,
      });

      tl.to(element, {
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: -50 * strength, y: 20 * strength },
            { x: 0, y: 40 * strength },
            { x: 50 * strength, y: 20 * strength },
            { x: 0, y: 0 },
          ],
        },
        duration: speed,
        ease: 'none',
      });

      return tl;
    }
  }, [stickersList]);

  return (
    <div className="mt-4 relative">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="text-[40vw] sm:text-[25vw] lg:text-[20vw] xl:text-[260px] leading-[80%]">
            <p ref={textOne} className="text-3xl text-zinc-600">
              READY TO
            </p>
            <div ref={textTwo} className="flex flex-col sm:flex-row sm:gap-6">
              <p className="" ref={swapTextRef}>
                ROCK
              </p>
              <p>THE</p>
            </div>
            <p ref={textThree} className="w-fit">
              WORLD
            </p>
          </div>
          <p ref={subText} className="font-nunito text-base sm:text-lg">
            Indumentaria blabla slogan{/* No digas quién eres, demuéstralo. */}
          </p>
          <Link to="/tienda">
            <button
              ref={button}
              className="my-6 font-nunito font-bold text-base sm:text-lg w-fit py-4 px-8 text-white bg-black -rotate-3 hover:animate-wiggle"
            >
              Ir a la tienda {'->'}
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
      <div
        ref={shirtRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img className="w-[360px]" src={shirt} alt="" />
      </div>
    </div>
  );
};

export default Home;
