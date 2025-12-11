"use client";
import React from "react";

export default function PartnerLogos() {
  const logos = [
    { id: 1, img: "/assets/service/car1.jfif" },
    { id: 2, img: "/assets/service/car1.jfif" },
    { id: 3, img: "/assets/service/car1.jfif" },
    { id: 4, img: "/assets/service/car1.jfif" },
    { id: 5, img: "/assets/service/car1.jfif" },
  ];

  return (
    <div className="w-full bg-green-700 text-white flex flex-col p-4 items-center  px-4">

      

      {/* FIXED HEIGHT MAIN PARENT (100px) */}
      <div className="w-full max-w-7xl h-[100px]  flex justify-center items-center gap-12 overflow-hidden">

        {logos.map((logo) => (
          <div
            key={logo.id}
            className="h-[70px] flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300"
          >
            <img
              src={logo.img}
              className="h-full w-auto object-contain"
              alt="logo"
            />
          </div>
        ))}

      </div>

    

    </div>
  );
}
