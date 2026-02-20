import Form from "../[components]/Form";

const Inredningsuppdrag = () => {
  return (
    <main className="w-full mt-30 sm:mt-40 pt-10 ">
      <section className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/50 break-all">
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
        <div className="w-screen">
          <Form />
        </div>
      </section>
    </main>
  );
};

export default Inredningsuppdrag;
