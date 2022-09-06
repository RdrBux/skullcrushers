import React, { forwardRef, useState } from 'react';
import skull from '../assets/img/skull.svg';
import menu from '../assets/img/menu.svg';
import { Link, Outlet } from 'react-router-dom';
import Hamburger from './hamburger';

const Navbar = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav
        ref={ref}
        className="font-bebas text-2xl lg:text-3xl py-3 flex items-center justify-between border-b border-b-black"
      >
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-5 lg:w-7" src={skull} alt="" />
            <p>SKULLCRUSHERS</p>
          </div>
        </Link>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-1 text-xl lg:text-2xl"
        >
          <img className="w-5 lg:w-7" src={menu} alt="" />
          <p>menú</p>
        </button>
        {menuOpen && (
          <Hamburger open={menuOpen} closeMenu={() => setMenuOpen(false)} />
        )}
      </nav>
      <Outlet />
    </div>
  );
});

export default Navbar;
