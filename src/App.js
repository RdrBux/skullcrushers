import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Contacto from './routes/contacto';
import Home from './routes/home';
import Item from './routes/item';
import Tienda from './routes/tienda';

function App() {
  return (
    <div className="bg-zinc-300 flex flex-col items-center relative overflow-hidden">
      <div className="container font-bebas px-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/tienda">
              <Route index element={<Tienda />} />
              <Route path=":id" element={<Item />} />
            </Route>
            <Route path="/contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
