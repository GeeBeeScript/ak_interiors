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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cardo.variable} ${bricolage.variable} ${cinzel.variable} ${space.variable} ${hanken.variable} ${cabin.variable} ${schibsted.variable} ${cagliostro.variable} ${nunito.variable} antialiased`}
      >
        {/* <Banner /> */}
        {children}
        <Footer />

        {/* Google ads tag */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-790254113"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-790254113');
          `}
        </Script>
      </body>
    </html>
  );
}
