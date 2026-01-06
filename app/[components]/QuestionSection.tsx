const QuestionSection = () => {
  return (
    <section className="w-full h-[90vh] flex flex-row-reverse my-20">
      <div className="bg-[url('/resources_new/spacejoy_second.jpg')] h-full w-[50vw] bg-cover bg-center bg-no-repeat"></div>
      <div>
        <div className="bg-bg-section-color/20 w-[50vw] h-full flex flex-col justify-center items-center gap-4 sm:max-2xl:gap-7">
          <p className="font-main text-[1.2rem] sm:text-[1.5rem] lg:max-2xl:text-[1.9rem] text-display-text w-[80%] mx-auto">
            Think Stunning Interior Design Costs Too Much ? Think Again
          </p>
          <div className="w-[80%]">
            <button
              onClick={() => {
                document
                  .getElementById("form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer bg-gold-section-second-color/90 text-newsletter-text font-space text-[0.9rem]  sm:max-2xl:text-[1.2rem] sm:max-2xl:font-bold px-3 block w-full py-1 sm:max-2xl:py-2 sm:px-4 lg:max-2xl:px-7 rounded-lg max-[260px]:break-all hover:bg-gold-section-second-color/50 transition-all duration-100 ease-in-out"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
