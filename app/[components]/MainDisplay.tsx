import Image from "next/image";
import Link from "next/link";

const MainDisplay = () => {
  return (
    <section className="w-full h-screen mb-20">
      <div className="w-full py-1.5 bg-newsletter-bg text-newsletter-text invisible">
        <div className="font-bold w-[70%] sm:max-2xl:w-[50%] mx-auto text-center font-schib text-[0.8rem] sm:hidden">
          Join us and get info on previews & discounts
        </div>

        <div className="font-bold w-[70%] sm:max-2xl:w-[50%] mx-auto text-center font-schib hidden sm:block">
          Join us and get info on previews, discounts & exclusive promotions
        </div>
      </div>

      <div className="bg-[url('/resources_new/spacejoy_new.jpg')] h-full w-full bg-cover bg-center bg-no-repeat lg:bg-position-[center_57%] place-content-end lg:px-8 lg:py-12 px-4 py-6">
        <div className="text-newsletter-text w-[80%] max-[205px]:w-full min-[400px]:w-[60%] sm:max-2xl:w-[50%] flex flex-col justify-between items-start gap-2">
          <p className="font-main text-[1.5rem] min-[370px]:text-[1.7rem] sm-max-2xl:text-[2.5rem] lg:text-[3rem] text-shadow-2xs shadow-display-text">
            Refined Interiors by Design Experts
          </p>
          <p className="text-[0.8rem] min-[370px]:text-[0.95rem] backdrop-blur-sm bg-white/20 sm:max-2xl:text-[1.1rem] font-brico">
            Anna Katarina Interiors creates beautifully crafted spaces that feel
            elevated, intentional, and deeply personal. Every design reflects an
            expert eye, exceptional quality, and a genuine passion for turning
            interiors into experiences worth living in.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block bg-newsletter-text text-newsletter-bg font-bold px-2.5 py-1 text-[0.8rem] sm:max-2xl:text-[1rem] rounded-3xl font-schib hover:bg-newsletter-text/50 transition-all sm:max-2xl:px-3 sm:max-2xl:py-1.5"
          >
            <Link href="#form" className="cursor-pointer">Schedule a Consultation</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainDisplay;
