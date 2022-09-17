import React, { useRef, useEffect } from 'react';
import CartItem from './cartItem';
import { nanoid } from 'nanoid';
import { gsap } from 'gsap';

const CartMenu = ({ items, removeItem, open, closeCart }) => {
  const bgRef = useRef();

  useEffect(() => {
    gsap.from(bgRef.current, {
      autoAlpha: 0,
      duration: 0.3,
    });
  }, []);

  if (!open) return null;

  let subtotal = 0;
  const itemsList = items.map((item) => {
    subtotal += Number(item.price);
    return (
      <CartItem
        key={nanoid()}
        id={item.id}
        img={item.img}
        name={item.name}
        size={item.size}
        price={item.price}
        removeItem={removeItem}
      />
    );
  });

  const envio = subtotal >= 10000 ? 0 : 900;

  function showThanks() {
    if (window.confirm('Gracias por probar mi aplicación.')) {
      window.open('https://github.com/RdrBux', '_blank');
    }
  }

  function hideCart() {
    gsap.to(bgRef.current, {
      autoAlpha: 0,
      duration: 0.1,
      onComplete() {
        closeCart();
      },
    });
  }

  return (
    <>
      <div
        ref={bgRef}
        onClick={hideCart}
        className="fixed bg-black opacity-70 w-screen h-screen inset-0 z-20"
      ></div>
      <div className="absolute top-[3.2rem] -right-9 sm:top-[3.3rem] cursor-default bg-zinc-100 w-[328px] sm:w-[440px] z-30 p-4 font-sans text-left text-base">
        <div className="max-h-[45vh] overflow-y-auto">
          {items.length > 0 ? (
            itemsList
          ) : (
            <p className="py-4">Tu carrito se encuentra vacío</p>
          )}
        </div>

        {items.length > 0 && (
          <>
            <div className="border-t border-b py-4 border-zinc-300">
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-600">Subtotal</p>
                <p className="">$ {subtotal}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-600">Envío</p>
                <p className="">$ {envio}</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-4 font-bold">
              <p className="">TOTAL</p>
              <p className="text-2xl">$ {subtotal + envio}</p>
            </div>
            <button
              className="w-fit font-bebas text-xl bg-black px-8 py-2 text-white"
              onClick={showThanks}
            >
              REALIZAR COMPRA
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartMenu;
