"use client"

import Image from "next/image";

import Banner from "./[components]/Banner";
import MainDisplay from "./[components]/MainDisplay";
import Services from "./[components]/Services";
import DisplaySection from "./[components]/DisplaySection";
import DrawingSection from "./[components]/DrawingSection";
import Steps from "./[components]/Steps";
import QuestionSection from "./[components]/QuestionSection";
import BenefitSection from "./[components]/BenefitSection";
import Footer from "./[components]/Footer";
import Form from "./[components]/Form";

export default function Home() {
  return (
    <main className="">
      <MainDisplay />
      <Services />
      <DisplaySection />
      <DrawingSection />
      <Steps />
      <QuestionSection />
      <BenefitSection />
      <Form />
      <Footer />
    </main>
  );
}
