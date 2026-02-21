"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type MenuOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`
        fixed inset-0 z-50
        w-screen h-screen
        bg-newsletter-text text-newsletter-bg
        flex flex-col font-main
        transition-all duration-500 ease-in-out
        ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }
    `}
    >
      {/* Close button */}
      <div>
        <div className="absolute top-30 z-20 w-full font-nunito text-[1.1rem] font-light text-center tracking-[0.15em]">
        <div>ANNA KATARINA</div>
        <div>INTERIORS</div>
      </div>
        <div className="absolute top-6 right-6">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-2xl font-bold"
        >
          {/* Placeholder for X icon */}
          <Image
            src="resources_new/close.svg"
            width={20}
            height={20}
            alt="close icon"
          />
        </button>
      </div>
      </div>

      {/* Menu content */}
      <nav className="flex flex-1 items-center justify-center">
        <ul className="flex flex-col items-center gap-6 text-lg sm:text-xl lg:text-2xl ">
          <li
            className="border-b-2 border-display-text hover:text-[#888] transition-all duration-100"
          >
            <Link
              href="/kulorkonsultation"
              onClick={onClose}
              className="hover:opacity-70 transition"
            >
              KulorKonsultation
            </Link>
          </li>
          <li
            className="border-b-2 border-display-text hover:text-[#888] transition-all duration-100"
          >
            <Link
              href="/stylingkonsultation"
              onClick={onClose}
              className="hover:opacity-70 transition"
            >
              Stylingkonsultation
            </Link>
          </li>
          <li
            className="border-b-2 border-display-text hover:text-[#888] transition-all duration-100"
          >
            <Link
              href="/inredningsuppdrag"
              onClick={onClose}
              className="hover:opacity-70 transition"
            >
              Inredningsuppdrag
            </Link>
          </li>
          <li
            className="border-b-2 border-display-text hover:text-[#888] transition-all duration-100"
          >
            <Link
              href="/onlinestyling"
              onClick={onClose}
              className="hover:opacity-70 transition"
            >
              OnlineStyling
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
