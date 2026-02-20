import Image from "next/image";
import Link from "next/link";

const MainDisplay = () => {
  return (
    <section className="w-full h-screen mb-20">
      <div className="w-full py-1.5 bg-newsletter-bg text-newsletter-text invisible">
        <div className="font-bold w-[90%] mx-auto text-center font-schib text-[0.8rem] max-[250px]:block hidden">
          Gå med oss ​​och få information om förhandsvisningar och rabatter
        </div>
      </div>

      <div className="bg-[url('/resources_new/spacejoy_new.jpg')] h-full w-full bg-cover bg-center bg-no-repeat lg:bg-position-[center_57%] place-content-end lg:px-8 lg:py-12 px-4 py-6">
        <div className="text-newsletter-text w-[80%] max-[205px]:w-full min-[400px]:w-[60%] sm:max-2xl:w-[50%] flex flex-col justify-between items-start gap-2">
          <p className="font-main text-[1.5rem] min-[370px]:text-[1.7rem] sm-max-2xl:text-[2.5rem] lg:text-[3rem] text-shadow-2xs shadow-display-text">
            Raffinerade interiörer av designexperter
          </p>
          <p className="text-[0.8rem] min-[370px]:text-[0.95rem] backdrop-blur-sm bg-white/20 sm:max-2xl:text-[1.1rem] font-brico">
            Anna Katarina Interiors skapar vackert utformade utrymmen som känns
            upphöjda, avsiktliga och djupt personliga. Varje design återspeglar
            ett expertöga, exceptionell kvalitet och en genuin passion för att
            förvandla interiörer till upplevelser värda att leva i.
          </p>
          <button
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block bg-newsletter-text text-newsletter-bg font-bold px-2.5 py-1 text-[0.8rem] sm:max-2xl:text-[1rem] rounded-3xl font-schib hover:bg-newsletter-text/50 transition-all sm:max-2xl:px-3 sm:max-2xl:py-1.5"
          >
            <Link href="#form" className="cursor-pointer">
              Boka en konsultation
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainDisplay;
