import Image from "next/image";
import { frameValues } from "../arrayValues";
import Link from "next/link";

const Steps = () => {
  return (
    <section className="flex flex-col justify-between items-center gap-9 sm:max-2l:gap-12 my-20">
      <div className="text-[1.6rem] sm:max-2xl:text-[2.3rem] font-main text-display-text text-center">
        Tjänster vi erbjuder
      </div>

      <div className="py-2 px-5 w-full sm:max-2xl:w-[90%] md:max-lg:w-[97%] mx-auto grid grid-cols-2 sm:max-2xl:grid-cols-3 sm:max-2xl:grid-rows-2 place-items-center gap-6 sm:max-2xl:gap-8">
        {frameValues.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gold-section-color rounded-md w-[45vw] h-[70vh] max-[235px]:h-[85vh] sm:w-48 sm:h-88 md:max-2xl:w-60 md:max-2xl:h-88 lg:max-2xl:w-[18rem] lg:max-2xl:h-92 flex flex-col justify-center items-center py-3 md:max-2xl:py-5"
          >
            <div className="w-[85%] mx-auto">
              <div
                style={{ backgroundImage: `url(${item.frameImg})` }}
                className="w-full h-40 max-[260px]:h-28 bg-cover bg-center bg-no-repeat rounded-lg row-span-3"
              ></div>
              <p className="font-hanken text-display-text text-[1rem] sm:max-lg:text-[1.2rem] lg:text-[1.36rem] w-[80%] md:w-full max-[380px]:w-full max-[370px]:break-all">
                {item.frameTxt}
              </p>
              <p className="font-schib text-[0.8rem] md:text-[1.05rem] text-display-text">
                {item.frameComment}
              </p>
              <div className="flex justify-between items-center">
                <div
                  className=""
                >
                  <Link href={item.frameLink} className="cursor-pointer flex justify-between sm:max-2xl:gap-6 gap-2 text-display-text">
                    <p className="font-hanken">Läs mer</p>
                  <Image
                    src="/resources_new/long_arrow.svg"
                    width={20}
                    height={20}
                    alt="materials"
                    className="max-[250px]:hidden"
                  />
                  </Link>
                </div>
                <p className="font-sans text-[1.2rem] md:max-2xl:text-[1.3rem]">
                  0{+index + 1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
