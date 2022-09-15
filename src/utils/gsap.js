import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export function orbitAnimation(element, strength = 1, speed = 5) {
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

export function moveVertical(element) {
  gsap.registerPlugin(MotionPathPlugin);
  const tl2 = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  tl2.to(element, {
    y: '-25%',
    duration: 2,
    ease: 'sine.inOut',
  });

  return tl2;
}
