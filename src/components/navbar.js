import React, { forwardRef, useState } from 'react';
import skullBlack from '../assets/img/skull-black.svg';
import menu from '../assets/img/menu.svg';
import { Link, Outlet } from 'react-router-dom';
import Hamburger from './hamburger';
import Cart from './cart';
import CartMenu from './cartMenu';

const Navbar = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <nav
        ref={ref}
        className="sticky top-0 z-30 bg-zinc-300 bg-opacity-90 font-bebas text-3xl sm:text-4xl py-4 flex items-center justify-between border-b border-b-black"
      >
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-6 pb-1" src={skullBlack} alt="" />
            <p>SKULLCRUSHERS</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Cart />
          <button onClick={() => setMenuOpen(true)}>
            <img className="w-6 pb-1" src={menu} alt="" />
          </button>
        </div>
        {menuOpen && (
          <Hamburger open={menuOpen} closeMenu={() => setMenuOpen(false)} />
        )}
        {/* {cartOpen && (
          <CartMenu open={cartOpen} closeCart={() => setCartOpen(false)} />
        )} */}
      </nav>
      <Outlet />
    </div>
  );
});

export default Navbar;
