import {
  Geist,
  Geist_Mono,
  Cardo,
  Bricolage_Grotesque,
  Cinzel_Decorative,
  Space_Grotesk,
  Hanken_Grotesk,
  Cabin_Condensed,
  Schibsted_Grotesk,
  Cagliostro,
} from "next/font/google";


export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cardo',
})

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
})

export const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
})

export const space = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
})

export const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-hanken',
})

export const cabin = Cabin_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cabin',
})

export const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-schibsted',
})

export const cagliostro = Cagliostro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cagliostro',
})