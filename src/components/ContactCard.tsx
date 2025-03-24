import * as React from "react";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export const ContactCard: React.FC = () => {
  return (
    <section className="absolute left-2/4 p-10 shadow-lg -translate-x-2/4 backdrop-blur-[45px] bg-white bg-opacity-10 border-[3px] border-indigo-950 max-w-[90%] rounded-[40px] top-[182px] w-[1258px] max-md:p-8 max-sm:p-6">
      <div className="flex flex-wrap gap-10 max-md:gap-8">
        <ContactForm />
        <SocialLinks />
      </div>
    </section>
  );
};
