import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './routes/navbar';
import Contacto from './routes/contacto';
import Home from './routes/home';
import Item from './routes/item';
import Tienda from './routes/tienda';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loader = document.getElementById('loader');

    setTimeout(() => {
      loader.style.display = 'none';
      setLoaded(true);
    }, 2000);
  });

  function addItem(id) {
    setCartItems((prev) => prev.concat(id));
  }

  function removeItem(id) {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="bg-zinc-300 flex flex-col items-center relative overflow-clip">
      <div className="container font-bebas px-4 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                items={cartItems}
                removeItem={removeItem}
                cartOpen={cartOpen}
                setCartOpen={setCartOpen}
              />
            }
          >
            <Route
              index
              element={<Home loaded={loaded} setLoaded={setLoaded} />}
            />
            <Route path="/tienda">
              <Route index element={<Tienda />} />
              <Route
                path=":id"
                element={
                  <Item
                    items={cartItems}
                    addItem={addItem}
                    setCartOpen={setCartOpen}
                  />
                }
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
