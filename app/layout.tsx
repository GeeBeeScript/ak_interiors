import type { Metadata } from "next";

import "./globals.css";
import { geistSans, geistMono, cardo, bricolage, cinzel, space, hanken, cabin, schibsted, cagliostro } from "./font";
import Banner from "./[components]/Banner";
import Navigation from "./[components]/Navigation";

export const metadata: Metadata = {
  title: "AnnaKatarina Interiors",
  description: "Interior design services by Anna Katarina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cardo.variable} ${bricolage.variable} ${cinzel.variable} ${space.variable} ${hanken.variable} ${cabin.variable} ${schibsted.variable} ${cagliostro.variable} antialiased`}
      >
        {/* <Banner /> */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
