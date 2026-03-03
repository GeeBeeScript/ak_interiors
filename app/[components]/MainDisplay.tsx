import Image from "next/image";
import Link from "next/link";

const MainDisplay = () => {
  return (
    <section className="w-full h-[120vh] mb-20">
      <div className="bg-[url('/resources_new/spacejoy_new.jpg')] h-full w-full bg-cover bg-center bg-no-repeat lg:bg-position-[center_57%] place-content-end lg:px-8 lg:py-12 px-4 py-6">
        <div className="text-newsletter-text w-[80%] max-[205px]:w-full min-[400px]:w-[70%] sm:max-2xl:w-[60%] flex flex-col justify-between items-start gap-2">
          <p className="font-main text-[1.5rem] min-[370px]:text-[1.7rem] sm-max-2xl:text-[2.5rem] lg:text-[3rem] text-shadow-2xs shadow-display-text">
            Raffinerade interiörer av designexperter
          </p>
          <div className="text-[0.8rem] min-[370px]:text-[0.95rem] backdrop-blur-sm bg-white/20 sm:max-2xl:text-[1.1rem] font-brico md:flex md:flex-col md:justify-between md:gap-5">
            <p>
              Anna Katarina är inredare med internationell bakgrund och över 15
              års erfarenhet av att forma miljöer för både privata och
              offentliga sammanhang. Med sin designutbildning från London och en
              gedigen karriär inom skräddarsydd möbelformgivning och inredning
              har hon arbetat med privata hem runt om i England samt barer,
              hotell och universitetsmiljöer i London. Erfarenheten sträcker sig
              även till offentliga projekt i Sverige, däribland bibliotek.
            </p>
            <p className="hidden md:block">
              Idag är fokus på inredningstjänster – att skapa harmoniska,
              personliga och funktionella rum anpassade efter varje kunds behov.
              Med ett skarpt öga för proportioner, material och helhet erbjuder
              Anna Katarina olika tjänster inom inredning för att möta kunders
              varierande behov. Varje uppdrag präglas av lyhördhet, struktur och
              en internationell designkänsla, där det personliga alltid står i
              centrum.
            </p>
          </div>

          <button
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block bg-newsletter-text text-newsletter-bg font-bold px-3 py-2.5 text-[0.8rem] sm:max-2xl:text-[1rem] rounded-3xl font-schib hover:bg-newsletter-text/50 transition-all sm:max-2xl:px-3 sm:max-2xl:py-1.5"
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
