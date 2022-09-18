import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TablaTalles = ({ closeTable }) => {
  const bgTableRef = useRef();

  useEffect(() => {
    gsap.from(bgTableRef.current, {
      autoAlpha: 0,
      duration: 0.3,
    });
  }, []);

  function hideTalles() {
    gsap.to(bgTableRef.current, {
      autoAlpha: 0,
      duration: 0.1,
      onComplete() {
        closeTable();
      },
    });
  }

  return (
    <div className="fixed z-50 w-screen h-screen inset-0 flex flex-col items-center justify-center">
      <div
        onClick={hideTalles}
        ref={bgTableRef}
        className="fixed inset-0 bg-opacity-70 w-screen h-screen flex flex-col justify-center items-center bg-black"
      ></div>
      <div className="">
        <div className="bg-white p-8 font-nunito relative">
          <div
            onClick={hideTalles}
            className="font-nunito text-lg absolute bg-black text-white top-0 right-0 px-2 hover:bg-zinc-800"
          >
            X
          </div>
          <h1 className="text-lg font-bold mb-2">REMERAS</h1>
          <table className="">
            <thead>
              <tr>
                <th>Talle</th>
                <th>Alto (cm)</th>
                <th>Ancho (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>S</b>
                </td>
                <td>64</td>
                <td>46</td>
              </tr>
              <tr>
                <td>
                  <b>M</b>
                </td>
                <td>66</td>
                <td>50</td>
              </tr>
              <tr>
                <td>
                  <b>L</b>
                </td>
                <td>70</td>
                <td>54</td>
              </tr>
              <tr>
                <td>
                  <b>XL</b>
                </td>
                <td>72</td>
                <td>58</td>
              </tr>
              <tr>
                <td>
                  <b>XXL</b>
                </td>
                <td>75</td>
                <td>62</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaTalles;
