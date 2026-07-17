import React from "react";
import { images } from "../arrayValues";
import { ArrowRight } from "lucide-react";

const NewServices = () => {
  return (
    <section className="w-full flex flex-col justify-between items-center gap-10 sm:gap-20 mt-5 mb-20 md:px-10">
      <div className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl md:text-[1.8rem] text-center text-gold-section-color/70 break-all">
          STYLINGKONSULTATION
        </p>
        <div className="w-full flex flex-col justify-between items-start font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          <div>
            En personlig konsultation i din bostad där vi tillsammans går igenom
            rum för rum och identifierar förbättringsmöjligheter – både visuellt
            och funktionellt. Du får konkreta råd kring möblering eller
            eventuell möbel renovering, styling, inköp samt vad som med fördel
            kan flyttas eller plockas bort för att skapa ett mer harmoniskt hem.
          </div>
          <div>
            Konsultationen pågår i 1–3 timmar beroende på antal rum. Du
            antecknar och genomför själv rekommenderade åtgärder.
          </div>
          <div>
            <p>Pris</p>
            <div>1–2 rum: 2 000 kr inkl. moms</div>
            <div>3–4 rum: 2 500 kr inkl. moms</div>
            <div>5+ rum: 3 000 kr inkl. moms</div>
          </div>
          <div>Inkluderar ej restid.</div>
        </div>
        <div>
          <img
            key={images[3]}
            src={images[3]}
            alt="list of work images"
            className="w-[60vh] sm:w-[80vh]"
          />
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[0.9rem] sm:text-[1rem] underline underline-offset-4">
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

      <div className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/70 break-all">
          KULÖRKONSULTATION
        </p>
        <div className="w-full flex flex-col justify-between items-start font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          <div>
            Behöver du vägledning i valet av kulörer för ett eller flera rum i
            ditt hem? Fotografera rummen och inkludera möbler samt
            inredningsdetaljer som ska bevaras. Utifrån detta tar jag fram
            genomtänkta kulörförslag för väggar, tak, fönster och lister –
            anpassade för helhet, ljus och känsla.
          </div>

          <div>
            <p>Pris</p>
            <div>1–2 rum: 1 500 kr inkl. moms</div>
            <div>3–4 rum: 2 000 kr inkl. moms</div>
            <div>5+ rum: 2 500 kr inkl. moms</div>
          </div>

          <div>
            Konsultationen kan även ske på plats i form av hembesök. Ett besök
            varar mellan 1,5 och 6 timmar beroende på bostadens storlek och
            antal ytor. Kontakta mig idag för att diskutera!
          </div>
        </div>
        <div>
          <img
            key={images[4]}
            src={images[4]}
            alt="list of work images"
            className="w-[60vh] sm:w-[80vh]"
          />
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[0.9rem] sm:text-[1rem] underline underline-offset-4">
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

      <div className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/70 break-all">
          ONLINESTYLING
        </p>
        <div className="w-full flex flex-col justify-between items-start font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          <div>
            OnlineStyling är ett flexibelt alternativ för dig som inte önskar en
            fysisk konsultation, eller som bor på annan ort. Du fotograferar
            bostadens samtliga rum och skickar bilderna till mig. Därefter får
            du rumsspecifika rekommendationer kring vad som kan tas bort,
            flyttas eller adderas för att skapa balans, harmoni och ett mer
            genomarbetat uttryck.
          </div>

          <div>
            <div>
              Tjänsten passar lika bra för dig som vill förnya ditt hem för egen
              trivsel som inför en kommande försäljning.
            </div>
            <div>Du genomför själv de föreslagna åtgärderna.</div>
          </div>

          <div>
            <p>Pris</p>
            <div>1–2 rum: 1 500 kr inkl. moms</div>
            <div>3–4 rum: 2 000 kr inkl. moms</div>
            <div>5+ rum: 2 500 kr inkl. moms</div>
          </div>
        </div>
        <div>
          <img
            key={images[5]}
            src={images[5]}
            alt="list of work images"
            className="w-[60vh] sm:w-[80vh]"
          />
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[0.9rem] sm:text-[1rem] underline underline-offset-4">
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

      <div className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/70 break-all">
          INREDNINGSUPPDRAG
        </p>
        <div className="w-full flex flex-col justify-between items-start font-schib text-[0.9rem] md:text-[1.1rem] text-display-text">
          <div>
            Behöver du ett mer omfattande stöd i ditt inredningsprojekt? Jag
            hjälper dig med kulörval, material, planlösning, arrangemang av
            konst, och – vid behov – även inköp och materialanskaffning. Behöver
            möbler renoveras så erbjuder jag även sprutlackerings tjänster samt
            utför enklare möbel tapetsering.
          </div>

          <div>
            Jag åtar mig både mindre och större uppdrag och ser fram emot att
            tillsammans skapa en lösning som är anpassad efter dina behov, din
            stil och ditt hem.
          </div>
        </div>
        <div>
          <img
            key={images[6]}
            src={images[6]}
            alt="list of work images"
            className="w-[60vh] sm:w-[80vh]"
          />
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[0.9rem] sm:text-[1rem] underline underline-offset-4">
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

      <div className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/70 break-all">
          Köksförnyelse och förädling
        </p>
        <div className="w-full flex flex-col justify-between items-start font-schib text-[0.9rem] md:text-[1.1rem] text-display-text space-y-2">
          <div>
            <span className="font-bold">Köksförnyelse & Design:</span> Ge ditt
            befintliga kök ett helt nytt uttryck – utan att byta ut hela köket.
            Genom en kombination av färgsättning, målning av köksluckor, kakel
            eller klinker, förändring av skåpslösningar och noggrant utvalda
            detaljer skapar vi ett kök som känns både modernt och personligt.
            Med fokus på design, kvalitet och hållbara lösningar förvandlar vi
            ditt kök med utgångspunkt i det som redan finns.
          </div>

          <div>
            Under hembesöket går vi tillsammans igenom idéer, önskemål och olika
            lösningar för att skapa ett kök som passar både ditt hem och dina
            behov.
          </div>

          <div>
            <p>Hembesök (1–2 timmar): 2 000 kr</p>
            <p>Resekostnad kan tillkomma.</p>
          </div>

          <div>
            Om projektet kräver ytterligare arbete, såsom framtagning av
            materialförslag, färgsättning, sammanställning av kulörpaletter
            eller annan projektering, debiteras detta enligt timtaxa. Kostnaden
            anpassas efter projektets omfattning.
          </div>
        </div>
        <div>
          <img
            key={images[8]}
            src={images[8]}
            alt="list of work images"
            className="w-[60vh] sm:w-[80vh]"
          />
        </div>
        <div className="flex justify-end items-center w-full text-display-text font-schib text-[0.9rem] sm:text-[1rem] underline underline-offset-4">
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
    </section>
  );
};

export default NewServices;
