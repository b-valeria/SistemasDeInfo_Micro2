"use client";

import * as React from "react";

interface NewsCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  imageUrl,
  imageAlt,
  title,
}) => {
  return (
    <article className="flex flex-col gap-5 items-center max-sm:w-full">
      <img
        src={imageUrl}
        className="object-cover rounded-3xl h-[273px] w-[302px] max-md:h-[225px] max-md:w-[250px] max-sm:w-full max-sm:h-auto"
        alt={imageAlt}
      />
      <h3 className="text-3xl text-center max-w-[397px] text-[black] max-sm:text-3xl">
        {title}
      </h3>
    </article>
  );
};