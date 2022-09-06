import React from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {
  return (
    <div className="ham-menu | hidden">
      <div className="menu-layer | "></div>
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/tienda">TIENDA</Link>
          </li>
          <li>
            <Link to="/contacto">CONTACTO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
