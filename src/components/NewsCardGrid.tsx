"use client";

import * as React from "react";
import { NewsCard } from "./NewsCard";

export const NewsCardGrid: React.FC = () => {
  const newsItems = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e7b2839b5ec10f7ca9025785052935805fae94c2",
      imageAlt: "Equipo de senderismo",
      title: "El mejor equipo para hacer senderismo",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e5b8e697f17fefd6e859e66ad7a5324f722d8d4d",
      imageAlt: "Grupo de senderismo",
      title: "Como armar un grupo de senderismo",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3e32d1963c1a1c6c2da46e25aad9f1a7c39679b7",
      imageAlt: "Ejercicio en montaña",
      title: "Ejercitar en la Montaña",
    },
  ];

  return (
    <section className="relative bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-lg shadow-lg flex flex-wrap gap-8 justify-around max-md:gap-5">
      {newsItems.map((item, index) => (
        <NewsCard
          key={index}
          imageUrl={item.imageUrl}
          imageAlt={item.imageAlt}
          title={item.title}
        />
      ))}
    </section>
  );
};
