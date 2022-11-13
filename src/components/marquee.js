const Marquee = () => {
  return (
    <div className="marquee | text-2xl text-white bg-black py-4 ">
      <ul className="marquee__content">
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
      </ul>
      <ul aria-hidden="true" className="marquee__content">
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
        <li>SEGUINOS EN NUESTRAS REDES</li>
      </ul>
    </div>
  );
};

export default Marquee;
