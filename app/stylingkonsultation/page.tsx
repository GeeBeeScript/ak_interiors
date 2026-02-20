import Form from "../[components]/Form";

const StylingKonsultation = () => {
  return (
    <main className="w-full mt-30 sm:mt-40 pt-10 ">
      <section className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/50 break-all">STYLINGKONSULTATION</p>
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
        <div className="w-screen">
            <Form />
        </div>
      </section>
    </main>
  );
};

export default StylingKonsultation;
