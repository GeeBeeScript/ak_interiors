"use client"

import Image from "next/image";
import React from "react";
import { workImages } from "../arrayValues";

const PreviousWork = () => {
  return (
    <section className="w-full flex flex-col gap-5 my-4">
      <div className="font-bold font-main text-[1.3rem] max-sm:text-[1.2rem] text-center text-gold-section-color/70 break-all">Previous Work</div>
      <div className="w-full px-3 max-sm:px-1 py-2">
        <div className="grid grid-cols-3 gap-2 w-full">
          {workImages.map((item) => (
            <img src={item} alt="list of images" width={100} height={100} className="w-full h-100 object-cover"/>
          ))}
        </div>

        <div className="w-full flex justify-center items-center my-5">
        <button
          onClick={() => {
            document
              .getElementById("form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer bg-zinc-950/90 text-newsletter-text font-space text-[0.9rem]  sm:max-2xl:text-[1.2rem] sm:max-2xl:font-bold px-3 block w-[70%] sm:w-[60%] py-1 sm:max-2xl:py-2 sm:px-4 lg:max-2xl:px-7 rounded-lg max-[260px]:break-all hover:bg-zinc-950/70 transition-all duration-100 ease-in-out"
        >
          Boka en konsultation
        </button>
      </div>
      </div>
    </section>
  );
};

export default PreviousWork;
