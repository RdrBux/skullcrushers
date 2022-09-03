import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Contacto from './routes/contacto';
import Home from './routes/home';
import Tienda from './routes/tienda';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </BrowserRouter>
);
