import Image from "next/image";
import { benefitValues } from "../arrayValues";

const BenefitSection = () => {
  return (
    <section className=" my-9 sm:max-2xl:my-12 py-5">
      <div className="flex flex-wrap gap-6 justify-evenly items-center w-[90%] mx-auto">
        {benefitValues.map((item, index) => (
          <div key={index} className="w-[16rem] sm:max-2xl:w-76 border-display-text border-3 rounded-3xl px-2 pt-[7vh] pb-2 text-display-text relative flex flex-col justify-between items-center">
            <div className="bg-white text-center w-[30%] h-[7vh] flex justify-center items-center absolute z-10 -top-5">
              <Image
                src={item.icon}
                width={30}
                height={30}
                alt={item.icon}
              />
            </div>
            <p className="font-cabin text-[1.2rem] font-bold sm:max-2xl:text-[1.7rem] text-center">{item.text}</p>
            <p>
              {item.subText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
