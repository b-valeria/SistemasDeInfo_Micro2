"use client";
import * as React from "react";
import DestinationHeader from "../../components/DestinationHeader";
import DestinationContent from "../../components/DestinationContent";
import image from "../../images/image6.png";

const MuestraDestino: React.FC = () => {
  

  return (
    <main className="flex overflow-hidden flex-col items-end pt-8 pl-16 bg-stone-500 max-md:pl-5">
      <DestinationHeader name="Piedra Indio"/>
      <DestinationContent 
      T1="Piedra Indio es una ruta intermedia ideal para aquellos que buscan disfrutar de formaciones rocosas y vistas panorámicas sin un recorrido excesivamente difícil" 
      T2="•	El camino es corto pero desafiante, con paisajes espectaculares" 
      T3="•	Es perfecta para aquellos que no tienen experiencia avanzada pero desean un reto moderado" 
      duration="3" 
      dificultad="Media" 
      actividades="•	Fotografía y Senderismo" 
      interes="•	Formaciones rocosas, vistas de Caracas y la costa"
      imagen = {image}
      />
    </main>
  );
};

export default MuestraDestino;
