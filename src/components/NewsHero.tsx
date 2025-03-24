"use client";

import * as React from "react";

export const NewsHero: React.FC = () => {
  return (
    <section className="text-center">
      <h1 className="mx-0 my-10 text-8xl font-extrabold text-indigo-950 max-md:text-7xl max-sm:text-5xl">
        Novedades
      </h1>
      <p className="mx-auto mt-0 mb-10 mb-16 text-3xl text-center max-w-[1295px] text-[black] max-md:text-3xl max-sm:text-2xl">
        ¡Bienvenidos al blog Novedades! Aquí encontrarás una fuente inagotable
        de tips sobre senderismo y fascinantes curiosidades de la montaña.
        Nuestro objetivo es inspirarte a explorar la naturaleza, compartir
        contigo consejos prácticos para tus aventuras al aire libre y sumergirte
        en el asombroso mundo de las montañas. Prepárate para descubrir rutas
        impresionantes, aprender sobre la flora y fauna que habita en estos
        entornos, y disfrutar de todo lo que la montaña tiene para ofrecer.
        ¡Acompáñanos en esta emocionante travesía!
      </p>
    </section>
  );
};
