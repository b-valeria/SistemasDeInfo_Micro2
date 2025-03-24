"use client";
import * as React from "react";
import DestinationHeader from "../../components/DestinationHeader";
import DestinationContent from "../../components/DestinationContent";
import image from "../../images/image5.jpg";

const MuestraDestino: React.FC = () => {
  

  return (
    <main className="flex overflow-hidden flex-col items-end pt-8 pl-16 bg-stone-500 max-md:pl-5">
      <DestinationHeader name="El Banquito"/>
      <DestinationContent 
      T1="El Banquito es una ruta accesible para senderistas que desean disfrutar de un recorrido fácil pero hermoso en el Parque Nacional Warairarepano." 
      T2="•	Se caracteriza por un sendero en un entorno de bosque nublado" 
      T3="•	Es ideal para una caminata ligera con un paisaje agradable" 
      duration="2.5" 
      dificultad="Baja" 
      actividades="•	Fotografía y Senderismo" 
      interes="•	Área de descanso, vistas panorámicas de Caracas"
      imagen = {image}
      />
    </main>
  );
};

export default MuestraDestino;
