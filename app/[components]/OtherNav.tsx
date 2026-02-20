"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const OtherNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMobileMenuOpen(true);
  };

  const menuCloseHandler = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-20 ">
      <MenuOverlay isOpen={mobileMenuOpen} onClose={menuCloseHandler} />
      {/* Banner section */}
      <div className="w-full py-1.5 bg-newsletter-bg text-newsletter-text">
        <div className="font-bold w-[90%] mx-auto text-center font-schib text-[0.8rem] sm:hidden">
          Gå med oss ​​och få information om förhandsvisningar och rabatter
        </div>

        <div className="font-bold w-[70%] sm:max-2xl:w-[50%] mx-auto text-center font-schib hidden sm:block">
          Gå med oss ​​och få information om förhandsvisningar, rabatter och
          exklusiva kampanjer
        </div>
      </div>
      {/* End of Banner section */}

      {/* Navigation */}
      <nav
        className={`
            w-full shadow-xl
           bg-newsletter-text text-newsletter-bg transition-all
            }
        `}
      >
        <NavContent openMobileMenu={menuOpenHandler} />
      </nav>
    </header>
  );
};

function NavContent(props: { openMobileMenu: () => void }) {
  return (
    <ul className="w-full flex justify-between items-center py-[0.5rem] px-[0.75rem] sm:max-2xl:py-[1rem] sm:max-2xl:px-[1.5rem]">
      <li className="font-nunito font-light text-center tracking-[0.15em]">
        <div>ANNA KATARINA</div>
        <div>INTERIORS</div>
      </li>

      <li className="hidden md:flex md:justify-between md:items-center md:gap-[2.4rem] font-space">
        <p className="cursor-pointer hover:text-bg-section-color/95 transition-all duration-75 ease-in">
          <Link href="/kulorkonsultation">KulorKonsultation</Link>
        </p>
        <p className="cursor-pointer hover:text-bg-section-color/95 transition-all duration-75 ease-in">
          <Link href="/stylingkonsultation">Stylingkonsultation</Link>
        </p>
        <p className="cursor-pointer hover:text-bg-section-color/95 transition-all duration-75 ease-in">
          <Link href="/inredningsuppdrag">Inredningsuppdrag</Link>
        </p>

        <p className="cursor-pointer hover:text-bg-section-color/95 transition-all duration-75 ease-in">
          <Link href="/onlinestyling">OnlineStyling</Link>
        </p>
      </li>

      <li className="flex justify-between items-center gap-8">
        <div className="max-[315px]:hidden">
          <button
            onClick={() => {
              document
                .getElementById("form")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer bg-newsletter-bg text-newsletter-text font-space text-[0.7rem] py-[0.2rem] px-[0.4rem] sm:max-2xl:text-[1rem] sm:max-2xl:py-[0.3rem] sm:max-2xl:px-[0.6rem] rounded-2xl hover:bg-gold-section-second-color/60 transition-all duration-100 ease-in-out"
          >
            Kontakta oss
          </button>
        </div>

        <div className="md:hidden" onClick={props.openMobileMenu}>
          <Image
            src={`resources_new/${"menu_icon.svg"}`}
            width={30}
            height={30}
            alt="menu icon"
            className="w-9 h-9"
          />
        </div>
      </li>
    </ul>
  );
}

export default OtherNav;
