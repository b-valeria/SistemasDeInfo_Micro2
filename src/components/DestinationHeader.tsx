import * as React from "react";

interface DestinationHeaderProps {
  name: string;
}

const DestinationHeader: React.FC<DestinationHeaderProps> = ({ name }) => {
  return (
    <header className="mt-14 mr-14 w-full max-w-[1223px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[68%] max-md:ml-0 max-md:w-full">
          <h1 className="text-8xl font-extrabold text-center text-white border-solid border-[3px] border-stone-500 border-opacity-50 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            {name} {/* Aquí se muestra el nombre dinámicamente */}
          </h1>
        </div>
        <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <button
            className="w-full px-12 pt-3 pb-11 mt-3.5 text-6xl text-center text-white whitespace-nowrap rounded-3xl border border-solid border-indigo-950 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-indigo-950 hover:bg-opacity-20 transition-colors max-md:px-5 max-md:mt-10 max-md:text-4xl"
            aria-label={`Reservar ${name}`}
          >
            Reservar
          </button>
        </div>
      </div>
    </header>
  );
};

export default DestinationHeader;