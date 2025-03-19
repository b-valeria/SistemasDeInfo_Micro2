import * as React from "react";



interface DestinationContentProps {
  T1: string;
  T2: string;
  T3: string;
  duration: string;
  dificultad: string;
  actividades: string;
  interes: string;
  imagen;
}

const DestinationContent: React.FC<DestinationContentProps> = ({T1,T2,T3,duration,dificultad,actividades,interes,imagen}) => {
  return (
    <div className="self-stretch mt-11 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <article className="w-[67%] max-md:ml-0 max-md:w-full">
          <div className="z-10 px-9 pt-10 w-full text-4xl border-solid bg-white bg-opacity-10 border-[3px] border-indigo-950 rounded-[40px] text-indigo-950 max-md:px-5 max-md:max-w-full">
            <p className="mb-4">
              {T1}
            </p>
            <ul className="mb-4">
              <li>
                {T2}
              </li>
              <li>{T3}</li>
            </ul>
            <dl className="mt-4">
              <dt className="font-bold inline block">Duracion:</dt>
              <dd className="inline ml-2">{duration} h</dd>
              <br></br>
              <dt className="font-bold text-[rgba(39,3,75,1)] mt-4 inline block">Dificultad:</dt>
              <dd className="inline ml-2">{dificultad}</dd>
              

              <dt className="font-bold text-[rgba(39,3,75,1)] block mt-2">
                Actividades Disponibles:
              </dt>
              <dd className="inline ml-2">{actividades}</dd>

              <dt className="font-bold text-[rgba(39,3,75,1)] block mt-2">
                Puntos de Interés:
              </dt>
              <dd className="inline ml-2">{interes}</dd>
            </dl>
          </div>
        </article>
        <aside className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:max-w-full">
            <figure>
              <img
                src= {imagen}
                alt="Vista de Sabas Nieves"
                className="object-contain self-center max-w-full aspect-[1.36] rounded-[40px] w-[381px]"
              />
            </figure>
            <figure className="mt-11 max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3567b42b4c86f1b96f70608242e772e3137e361?placeholderIfAbsent=true&apiKey=503c1247ad0c431384cdc70defc82307"
                alt="Otra vista de Sabas Nieves"
                className="object-contain w-full aspect-[1.07] max-md:max-w-full"
              />
            </figure>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DestinationContent;
