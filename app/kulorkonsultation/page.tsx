import Form from "../[components]/Form";

const KulorKonsultation = () => {
  return (
    <main className="w-full mt-30 sm:mt-40 pt-10 ">
      <section className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/50 break-all">
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
        <div className="w-screen">
          <Form />
        </div>
      </section>
    </main>
  );
};

export default KulorKonsultation;
