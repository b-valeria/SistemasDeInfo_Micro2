"use client";
import * as React from "react";
import DestinationHeader from "../../components/DestinationHeader";
import DestinationContent from "../../components/DestinationContent";
import image from "../../images/image1.jpg";

const MuestraDestino: React.FC = () => {
  

  return (
    <main className="flex overflow-hidden flex-col items-end pt-8 pl-16 bg-stone-500 max-md:pl-5">
      <DestinationHeader name="Sabas Nieves"/>
      <DestinationContent 
      T1="Sabas Nieves es un área de esparcimiento y deporte en el Parque Nacional Warairarepano, en Caracas, Venezuela. Toma la forma de un gimnasio natural al aire libre." 
      T2="•	Cuenta con puestos de guardaparques, servicios de comida, y áreas de ejercicio" 
      T3="•	El camino de subida es ancho y rojizo." 
      duration="0.6" 
      dificultad="Baja" 
      actividades="•	Fotografía y Senderismo" 
      interes="•	Centro Deportivo Sabas Nieves"
      imagen = {image}
      />
    </main>
  );
};

export default MuestraDestino;
