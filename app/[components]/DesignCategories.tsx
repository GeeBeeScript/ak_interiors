import React from "react";
import AutoSlideshow from "./AutoSlideshow";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const images: string[] = [
  "resources_new/white_cabinet.jpeg",
  "resources_new/book_case.jpeg",
  "resources_new/brown_mirror.jpeg",
  "resources_new/black_bedroom.jpeg",
  "resources_new/light_dining.jpeg",
  "resources_new/white_cabinet.jpeg",
  "resources_new/white_dining.jpeg",
  "resources_new/white_mirror.jpeg"
]

const DesignCategories = () => {
  return (
    <div className="bg-zinc-200 py-7 flex w-full flex-col items-center">
      <div className="flex flex-col gap-5 sm:gap-7 justify-between items-center mb-10 px-4 py-2 w-full sm:max-2xl:w-[50%] text-center">
        <p className="font-bold font-main text-3xl text-center text-[#333]">
          INREDNING VERKSAMHET
        </p>
        <div className="font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          <p>
            Behöver du vägledning i designval och uttryck för din verksamhet?
            Oavsett om det gäller en bar, restaurang, butik eller ett annat
            spännande koncept, erbjuder jag rådgivning genom hela processen –
            från idé och konceptutveckling till färdig gestaltning.
          </p>
          <p>
            Jag samarbetar även med kommuner och offentliga verksamheter, där
            jag bistår med inredning av exempelvis klassrum och bibliotek, med
            målet att skapa inspirerande miljöer som berikar den pedagogiska
            upplevelsen.
          </p>
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[1.1rem] underline underline-offset-4">
          <div
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex space-x-2 items-center cursor-pointer"
          >
            <p>Kontakta oss</p>
            <p>
              <ArrowRight />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-7 justify-between items-center mb-10 px-4 py-2 w-full sm:max-2xl:w-[50%] text-center">
        <p className="font-bold font-main text-3xl text-center text-[#333]">
          PLANLÖSNING OCH MÄTNING
        </p>
        <div className="font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          <p>
            Jag erbjuder även stöd vid planering av platsbyggda lösningar, där
            noggrann mätning och genomtänkt planlösning ligger till grund för
            ett lyckat resultat. Oavsett om det gäller garderober, hyllsystem
            eller kök, hjälper jag dig att optimera ytor och funktion utifrån
            dina behov och förutsättningar.
          </p>
          <p>
            Med ett helhetsperspektiv säkerställer jag att varje lösning inte
            bara är estetiskt tilltalande, utan också praktisk och hållbar över
            tid – som ett tryggt underlag inför inköp och vidare produktion.
          </p>
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[1.1rem] underline underline-offset-4">
          <div
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex space-x-2 items-center cursor-pointer"
          >
            <p>Kontakta oss</p>
            <p>
              <ArrowRight />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-7 justify-between items-center mb-7 px-4 py-2 w-full sm:max-2xl:w-[50%] text-center">
        <p className="font-bold font-main text-3xl text-center text-[#333] max-[400px]:break-all">
          MÖBELRENOVERING / SPRUTLACKERING
        </p>
        <div className="font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          <p>
            Vi erbjuder även sprutlackeringstjänster som ett hållbart och
            effektivt sätt att förnya befintlig inredning. Tjänsten kan bokas
            separat för exempelvis möbler, dörrar eller köksluckor, eller
            integreras som en del av ett större inredningsuppdrag i ditt hem.
          </p>
          <p>
            Genom att arbeta med befintliga objekt och ge dem nya kulörer skapar
            vi ett uppdaterat uttryck – utan att kompromissa med vare sig
            kvalitet eller miljömedvetenhet.
          </p>
          <p>
            Önskar du en offert för sprutlackering är du varmt välkommen att
            skicka en bild till oss, så återkommer vi med ett prisförslag.
          </p>
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[1.1rem] underline underline-offset-4">
          <div
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex space-x-2 items-center cursor-pointer"
          >
            <p>Kontakta oss</p>
            <p>
              <ArrowRight />
            </p>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden py-6 group">
      <div className="flex w-max gap-4 animate-scroll group-hover:[animation-play-state:paused]">
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="slider"
            className="h-[60vh] sm:h-[70vh] w-auto object-cover"
          />
        ))}
      </div>
    </div>

      <div className="w-[70%] sm:w-[60%] my-5">
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
  );
};

export default DesignCategories;
