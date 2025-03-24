"use client";

import * as React from "react";

import { NewsHero } from "../components/NewsHero";
import { NewsCardGrid } from "../components/NewsCardGrid";

const NewsPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Italiana&display=swap"
        rel="stylesheet"
      />
      <main className="p-5 min-h-screen">
        <article className="p-10 m-5 border-solid shadow-lg backdrop-blur-[45px] bg-white bg-opacity-10 border-[3px] border-indigo-950 rounded-[40px] max-sm:p-5 max-sm:m-2.5">
          <NewsHero />
          <NewsCardGrid />
        </article>
      </main>
    </>
  );
};

export default NewsPage;


