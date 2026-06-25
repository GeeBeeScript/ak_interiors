import type { Metadata } from "next";

import "./globals.css";
import {
  geistSans,
  geistMono,
  cardo,
  bricolage,
  cinzel,
  space,
  hanken,
  cabin,
  schibsted,
  cagliostro,
  nunito,
} from "./font";
import Footer from "./[components]/Footer";
import Script from "next/script";

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
      <head>
         <Script id="gtm" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTKBDNW9');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cardo.variable} ${bricolage.variable} ${cinzel.variable} ${space.variable} ${hanken.variable} ${cabin.variable} ${schibsted.variable} ${cagliostro.variable} ${nunito.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTKBDNW9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* <Banner /> */}
        {children}
        <Footer />

        {/* Google ads tag */}
       
      </body>
    </html>
  );
}
