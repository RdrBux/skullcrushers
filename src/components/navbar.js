import React, { forwardRef, useState } from 'react';
import skullBlack from '../assets/img/skull-black.svg';
import menu from '../assets/img/menu.svg';
import { Link, Outlet } from 'react-router-dom';
import Hamburger from './hamburger';
import Cart from './cart';

const Navbar = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav
        ref={ref}
        className="font-bebas text-3xl sm:text-4xl py-4 flex items-center justify-between border-b border-b-black"
      >
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-6 pb-1" src={skullBlack} alt="" />
            <p>SKULLCRUSHERS</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Cart />
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-1 text-2xl sm:text-3xl"
          >
            <img className="w-6 pb-1" src={menu} alt="" />
          </button>
        </div>
        {menuOpen && (
          <Hamburger open={menuOpen} closeMenu={() => setMenuOpen(false)} />
        )}
      </nav>
      <Outlet />
    </div>
  );
});

export default Navbar;
