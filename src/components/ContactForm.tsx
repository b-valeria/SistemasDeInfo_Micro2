"use client";
import * as React from "react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 min-w-[300px]">
      <h2 className="mb-8 text-4xl text-center text-indigo-950">
        Envíanos un mensaje
      </h2>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Nombre Completo"
          className="px-4 w-full text-xl bg-zinc-300 h-[46px] text-indigo-950 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo"
          className="px-4 w-full text-xl bg-zinc-300 h-[46px] text-indigo-950 rounded"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Asunto"
          className="px-4 w-full text-xl bg-zinc-300 h-[46px] text-indigo-950 rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          className="p-4 w-full text-xl resize-none bg-zinc-300 h-[187px] text-indigo-950 rounded"
          required
        />
      </div>
    </form>
  );
};
