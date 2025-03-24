"use client";
import * as React from "react";
import DestinationHeader from "../../components/DestinationHeader";
import DestinationContent from "../../components/DestinationContent";
import image from "../../images/image3.png";

const MuestraDestino: React.FC = () => {
  

  return (
    <main className="flex overflow-hidden flex-col items-end pt-8 pl-16 bg-stone-500 max-md:pl-5">
      <DestinationHeader name="Pico Oriental"/>
      <DestinationContent 
      T1="El Pico Oriental es un destino popular para los senderistas más experimentados que buscan vistas excepcionales." 
      T2="•	El sendero lleva a través de bosques y áreas de alta montaña" 
      T3="•	Se puede disfrutar de una vista impresionante del valle de Caracas y la costa" 
      duration="4" 
      dificultad="Alta" 
      actividades="•	Observación de aves y Senderismo" 
      interes="•	Vistas de Caracas, flora diversa"
      imagen = {image}
      />
    </main>
  );
};

export default MuestraDestino;
