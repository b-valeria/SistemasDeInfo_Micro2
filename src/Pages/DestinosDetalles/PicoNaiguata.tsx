"use client";
import * as React from "react";
import DestinationHeader from "../../components/DestinationHeader";
import DestinationContent from "../../components/DestinationContent";
import image from "../../images/image4.png";

const MuestraDestino: React.FC = () => {
  

  return (
    <main className="flex overflow-hidden flex-col items-end pt-8 pl-16 bg-stone-500 max-md:pl-5">
      <DestinationHeader name="Pico Naiguata"/>
      <DestinationContent 
      T1="El Pico Naiguatá es uno de los picos más altos del Parque Nacional Warairarepano, en Caracas. Es una de las rutas más desafiantes de la zona." 
      T2="•	Su ascenso es empinado y cubierto por una vegetación densa" 
      T3="•	La vista desde la cima es impresionante, con vistas a Caracas y al mar Caribe" 
      duration="6-7" 
      dificultad="Alta" 
      actividades="•	Fotografía y Senderismo" 
      interes="•	Vista panorámica desde la cima, flora y fauna única"
      imagen = {image}
      />
    </main>
  );
};

export default MuestraDestino;
