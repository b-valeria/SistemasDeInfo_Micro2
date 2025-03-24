import * as React from "react";

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2374d24599a2a6d306a27140ab3ba05ed60d3774",
      text: "58 426 2203",
      alt: "Phone",
      url: "https://web.whatsapp.com", // Enlace a Whatsapp
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e93d77a46878b043fd26d9de2205656c00a276d",
      text: "Hikingmet2025",
      alt: "Social Media 1",
      url: "https://www.instagram.com", // Enlace a Instagram
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f02d2e77adbd62db22afbb6ad41c57ebe8931b9",
      text: "Hikingmet2025",
      alt: "Social Media 2",
      url: "https://www.twitter.com", // Enlace a Twitter
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce749b9777c58107a4a5bc42bdf3fb9dee801215",
      text: "Hikingmet2025",
      alt: "Social Media 3",
      url: "https://www.tiktok.com/es/", // Enlace a TikTok
    },
  ];

  return (
    <div className="flex-1 min-w-[300px]">
      <h2 className="mb-8 text-4xl text-center text-indigo-950">
        Búscanos en nuestras redes
      </h2>
      <div className="flex flex-col gap-6 items-center">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="flex gap-6 items-center">
            {/* Asegurando un tamaño uniforme para los iconos */}
            <img
              src={link.icon}
              alt={link.alt}
              className="w-[84px] h-[84px] object-contain"
            />
            {/* Cambiar color del texto y asegurar que el texto esté alineado */}
            <span className="text-4xl text-indigo-900 font-bold">{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};