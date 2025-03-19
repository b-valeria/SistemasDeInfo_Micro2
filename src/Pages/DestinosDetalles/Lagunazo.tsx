"use client";
import * as React from "react";
import DestinationHeader from "../../components/DestinationHeader";
import DestinationContent from "../../components/DestinationContent";
import image from "../../images/image2.png";

const MuestraDestino: React.FC = () => {
  

  return (
    <main className="flex overflow-hidden flex-col items-end pt-8 pl-16 bg-stone-500 max-md:pl-5">
      <DestinationHeader name="Lagunazo"/>
      <DestinationContent 
      T1="Lagunazo es una ruta famosa por el lago que se encuentra en su cumbre. Es un destino ideal para quienes buscan una caminata larga y gratificante." 
      T2="•	El sendero atraviesa bosques densos y termina en un hermoso lago de montaña" 
      T3="•	Es conocido por su clima fresco y las vistas panorámicas" 
      duration="5-6" 
      dificultad="Media" 
      actividades="•	Fotografía y Acampada" 
      interes="•	El lago de montaña, vistas a la ciudad y la costa"
      imagen = {image}
      />
    </main>
  );
};

export default MuestraDestino;
