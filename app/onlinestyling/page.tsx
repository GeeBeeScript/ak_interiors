import Form from "../[components]/Form";

const OnlineStyling = () => {
  return (
    <main className="w-full mt-30 sm:mt-40 pt-10 ">
      <section className="w-full px-5 flex flex-col justify-between items-center gap-5 sm:gap-10">
        <p className="font-bold font-main text-2xl text-center text-gold-section-color/50 break-all">
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
        <div className="w-screen">
          <Form />
        </div>
      </section>
    </main>
  );
};

export default OnlineStyling;
