"use client";

import * as React from "react";

interface NavigationHeaderProps {
  logoUrl: string;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  logoUrl,
}) => {
  return (
    <header className="flex items-center px-5 py-0">
      <img
        src={logoUrl}
        className="h-[278px] w-[278px] max-sm:h-[200px] max-sm:w-[200px]"
        alt="Logo"
      />
      <nav className="flex gap-10 ml-auto max-md:hidden">
        <button className="text-4xl cursor-pointer text-[white]">Home</button>
        <button className="text-4xl cursor-pointer text-[white]">
          Destinos
        </button>
        <button className="text-4xl cursor-pointer text-[white]">
          Reservas
        </button>
        <button className="text-4xl cursor-pointer text-[white]">
          Novedades
        </button>
        <button className="text-4xl cursor-pointer text-[white]">Foro</button>
        <button className="text-4xl cursor-pointer text-[white]">
          Contacto
        </button>
      </nav>
    </header>
  );
};
