import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Marquee = ({ text }) => {
  const marqueeRef = useRef();

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -15,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <section>
      <div
        ref={marqueeRef}
        className="inline-block whitespace-nowrap text-2xl text-white bg-black py-4"
      >
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block px-6">-</span>
      </div>
    </section>
  );
};

export default Marquee;
