import React from 'react';
import skull from '../assets/img/skull.svg';
import menu from '../assets/img/menu.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="font-bebas text-[2.5vw] py-1 flex items-center justify-between border-b border-b-black">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img className="w-[2vw]" src={skull} alt="" />
          <p>SKULLCRUSHERS</p>
        </div>
      </Link>
      <button className="flex items-center gap-2 text-[2vw]">
        <img className="w-[1.75vw]" src={menu} alt="" />
        <p>menú</p>
      </button>
    </nav>
  );
};

export default Navbar;
