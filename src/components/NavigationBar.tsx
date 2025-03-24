import * as React from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-5 justify-between items-start mr-16 w-full text-4xl whitespace-nowrap max-w-[1072px] text-indigo-950 max-md:mr-2.5 max-md:max-w-full">
      <a href="/" className="z-10 pt-0 pb-2 hover:text-indigo-800">
        Home
        <br />
      </a>
      <a href="/destinos" className="z-10 pt-0 pb-2 hover:text-indigo-800">
        Destinos
      </a>
      <a href="/reservas" className="z-10 pt-0 pb-2 hover:text-indigo-800">
        Reservas
      </a>
      <a
        href="/novedades"
        className="z-10 self-stretch pt-0 pb-1.5 hover:text-indigo-800"
      >
        Novedades
      </a>
      <a href="/foro" className="z-10 pt-0 pb-2 hover:text-indigo-800">
        Foro
      </a>
      <a href="/contacto" className="z-10 pt-0 pb-2 hover:text-indigo-800">
        Contacto
      </a>
    </nav>
  );
};

export default NavigationBar;
