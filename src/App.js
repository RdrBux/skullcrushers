import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './routes/navbar';
import Contacto from './routes/contacto';
import Home from './routes/home';
import Item from './routes/item';
import Tienda from './routes/tienda';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItem(id) {
    setCartItems((prev) => prev.concat(id));
  }

  console.log(cartItems);

  return (
    <div className="bg-zinc-300 flex flex-col items-center relative overflow-clip">
      <div className="container font-bebas px-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Navbar items={cartItems} />}>
            <Route index element={<Home />} />
            <Route path="/tienda">
              <Route index element={<Tienda />} />
              <Route
                path=":id"
                element={<Item items={cartItems} addItem={addItem} />}
              />
            </Route>
            <Route path="/contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
