"use client";
import * as React from "react";
import { ContactCard } from "../components/ContactCard";

const ContactPage: React.FC = () => {
  return (
    <main className="relative w-full bg-white min-h-[screen]">
      <section className="relative w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f481aa0ab6f61910faac3ac611c36c1a0ccbf1"
          alt="Background"
          className="w-full h-[935px] object-cover filter blur-[4px]"
        />
        <h1 className="absolute left-0 w-full text-8xl font-bold text-center text-white top-[50px] max-md:text-7xl max-sm:text-5xl">
          Contacta con Nuestro Equipo
        </h1>
        <ContactCard />
      </section>
    </main>
  );
};

export default ContactPage;
