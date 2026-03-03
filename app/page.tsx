"use client";

import Image from "next/image";

import Banner from "./[components]/Banner";
import MainDisplay from "./[components]/MainDisplay";
import Form from "./[components]/Form";
import DesignCategories from "./[components]/DesignCategories";
import Navigation from "./[components]/Navigation";
import NewServices from "./[components]/NewServices";

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <MainDisplay />
      <NewServices />
      <DesignCategories />
      <Form />
    </main>
  );
}
