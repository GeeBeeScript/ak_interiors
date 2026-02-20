import React from "react";
import AutoSlideshow from "./AutoSlideshow";
import { slideShowArrayLeft, slideShowArrayRight } from "../arrayValues";

const DesignCategories = () => {
  return (
    <div className="h-[200vh] overflow-hidden bg-zinc-200 py-7 flex w-full flex-col items-center">
      <div className="flex flex-col gap-5 sm:gap-7 justify-between items-center mb-10 px-4 py-2 w-full sm:max-2xl:w-[50%] text-center">
        <p className="font-bold font-main text-3xl text-center text-[#333]">
          Bostads- och kommersiell inredning
        </p>
        <p className="font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          Vi skapar förfinade bostads- och kommersiella interiörer som
          kombinerar skönhet, funktion och varaktig kvalitet. Oavsett om vi
          designar ett privat hem eller ett professionellt utrymme, är vårt
          arbete skräddarsytt, avsiktligt och utfört enligt högsta standard.
          Från koncept till färdigställande är varje detalj noggrant övervägd
          för att leverera utrymmen som känns exceptionella och fungerar utan
          ansträngning. Låt oss förverkliga din vision.
        </p>
        <div className="w-[60%]">
          <button
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer bg-zinc-950/90 text-newsletter-text font-space text-[0.9rem]  sm:max-2xl:text-[1.2rem] sm:max-2xl:font-bold px-3 block w-full py-1 sm:max-2xl:py-2 sm:px-4 lg:max-2xl:px-7 rounded-lg max-[260px]:break-all hover:bg-zinc-950/70 transition-all duration-100 ease-in-out"
          >
            Boka en konsultation
          </button>
        </div>
      </div>
      <AutoSlideshow
        leftImages={slideShowArrayLeft}
        rightImages={slideShowArrayRight}
      />
    </div>
  );
};

export default DesignCategories;
