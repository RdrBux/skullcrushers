import React from 'react';
import shirtOne from '../assets/img/shirt1.png';

const CartMenu = ({ open, closeCart }) => {
  if (!open) return null;

  return (
    <>
      <div
        onClick={closeCart}
        className="fixed bg-black opacity-70 w-screen h-screen inset-0 z-20"
      ></div>
      <div className="absolute top-[3.2rem] -right-9 sm:top-[3.3rem]  bg-zinc-100 w-[328px] sm:w-[440px] z-30 p-4 font-sans text-left text-base">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img
              className="w-16 p-1 border border-zinc-600"
              src={shirtOne}
              alt=""
            />
            <div className="flex flex-col items-start">
              <p className="text-xl">Remera</p>
              <p className="text-sm text-zinc-600">Talle: S</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="min-w-fit">$ 5999</p>
            <p>T</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img
              className="w-16 p-1 border border-zinc-600"
              src={shirtOne}
              alt=""
            />
            <div className="flex flex-col items-start">
              <p className="text-xl">Remera</p>
              <p className="text-sm text-zinc-600">Talle: S</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="min-w-fit">$ 5999</p>
            <p>T</p>
          </div>
        </div>

        <div className="border-t border-b py-4 border-zinc-300">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600">Subtotal</p>
            <p className="">$ 5999</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600">Envío</p>
            <p className="">$ 900</p>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 font-bold">
          <p className="">TOTAL</p>
          <p className="text-2xl">$ 6899</p>
        </div>

        <button className="w-fit font-bebas text-xl bg-black px-8 py-2 text-white">
          REALIZAR COMPRA
        </button>
      </div>
    </>
  );
};

export default CartMenu;
