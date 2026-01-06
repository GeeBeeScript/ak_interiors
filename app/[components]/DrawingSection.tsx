const DrawingSection = () => {
  return (
    <section className="w-full h-[60vh] sm:max-2xl:h-[80vh] my-15">
      <div className="mx-auto w-[90%] h-full flex justify-between items-center">
        <div className="bg-[url('/resources_new/furniture_dimension.jpg')] max-sm:bg-position-[center_20%] h-full w-[70%] bg-cover bg-center bg-no-repeat flex justify-end">
          <div className="w-5 h-10 md:max-2xl:w-[20%] md:max-2xl:h-15 bg-newsletter-text"></div>
        </div>
        <div className="flex flex-col justify-between items-center gap-5">
          <p className="font-bold font-caglio text-[1rem] sm:text-[1.2rem] md:max-2xl:text-[1.6rem] text-display-text w-[75%] mx-auto">
            Turn Your Imaginations To Reality With Our Technical Drawings And 3D
            Modelling
          </p>
          <button
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer bg-newsletter-bg text-newsletter-text font-schib font-bold py-[0.3rem] px-[0.6rem] sm:max-2xl:py-[0.6rem] sm:max-2xl:px-[1.1rem] rounded-xl sm:max-2xl:rounded-3xl text-[0.8rem] sm:max-2xl:text-[1rem] hover:bg-green-section/35 hover:text-display-text transition-all duration-100 ease-in"
          >
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrawingSection;
