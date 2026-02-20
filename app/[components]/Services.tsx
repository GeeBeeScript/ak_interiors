import Image from "next/image";
import { servicesArray } from "../arrayValues";

const Services = () => {
  return (
    <section className="text-newsletter-bg flex flex-col justify-between items-center gap-10 md:max-2xl:gap-0 w-full my-32">
      <div className="flex flex-col justify-between items-center gap-2.5 text-center">
        <p className="font-bold font-cabin max-sm:text-[1.8rem] text-[2.2rem]">Arbeta med erfarna inredningsarkitekter</p>
        <p className="font-schib text-[1.1rem]">Få personlig hjälp med inredning</p>
      </div>

      <div className="flex max-[304px]:flex-col justify-between items-center flex-wrap w-[95%] md:max-2xl:max-w-[80%] text-center pt-7 mb-5">
        {servicesArray.map((item) => (
          <div className="w-36 h-36 sm:max-md:h-40 md:max-2xl:w-36 md:max-2xl:h-40 border-[#555] border-2 py-0  sm:max-2xl:py-2.5 flex flex-col justify-evenly items-center sm:max-2xl:gap-[0.7rem] mb-7" key={item.id}>
            <Image
              src={item.imageSrc}
              width={10}
              height={10}
              alt={item.imageAlt}
              className="w-[25%] h-[25%] sm:max-2xl:w-[30%] sm:max-2xl:h-[30%]"
            />
            <p className="w-[80%] text-newsletter-bg text-[0.9rem] md:max-2xl:text-[0.96rem] font-hanken">
              {item.title}
            </p>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Services;
