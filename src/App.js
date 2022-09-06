import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Contacto from './routes/contacto';
import Home from './routes/home';
import Tienda from './routes/tienda';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log('loaded');
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-yellow-500 flex flex-col items-center">
      {isLoading && <Loading />}
      <div className="container font-bebas px-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
