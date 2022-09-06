import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = ({ open, closeMenu }) => {
  const menuRef = useRef();

  useEffect(() => {
    gsap.from(menuRef.current, {
      y: '-100%',
      duration: 0.3,
    });
  }, []);

  function hideMenu() {
    gsap.to(menuRef.current, {
      y: '-100%',
      duration: 0.3,
      onComplete() {
        closeMenu();
      },
    });
  }

  if (!open) return null;

  return (
    <div ref={menuRef} className="fixed inset-0 w-screen h-screen z-10">
      <div className="bg-black h-full flex justify-center items-center">
        <button
          onClick={hideMenu}
          className="absolute right-10 top-4 font-nunito text-6xl text-yellow-500 hover:text-white"
        >
          x
        </button>
        <div className="wrapper | flex flex-col items-center">
          <ul className=" text-8xl sm:text-9xl flex flex-col">
            <li className="text-yellow-500 hover:text-white">
              <Link onClick={hideMenu} to="/">
                INICIO
              </Link>
            </li>
            <li className="text-yellow-500 hover:text-white">
              <Link onClick={hideMenu} to="/tienda">
                TIENDA
              </Link>
            </li>
            <li className="text-yellow-500 hover:text-white">
              <Link onClick={hideMenu} to="/contacto">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
