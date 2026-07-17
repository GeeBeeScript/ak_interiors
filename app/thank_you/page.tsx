import React from 'react'
import OtherNav from "../[components]/OtherNav";
import Link from 'next/link';


const ThankYouPage = () => {
  return (
    <main>
      <OtherNav />
      <div className="w-full space-y-4 min-h-screen flex flex-col justify-center items-center font-bold font-main text-3xl text-center text-gold-section-color/70 max-[400px]:break-all">
        <p>
          Tack så mycket! Vi ser fram emot att höra från dig.
        </p>
        <Link href="/" className='inline-block'>
            <button
          className="w-full cursor-pointer bg-zinc-950/90 text-newsletter-text font-space text-[0.9rem]  sm:max-2xl:text-[1.2rem] sm:max-2xl:font-bold px-3 block py-1 sm:max-2xl:py-2 sm:px-4 lg:max-2xl:px-7 rounded-lg max-[260px]:break-all hover:bg-zinc-950/70 transition-all duration-100 ease-in-out"
        >
          Boka en konsultation
        </button>
        </Link>
      </div>
    </main>
  )
}

export default ThankYouPage