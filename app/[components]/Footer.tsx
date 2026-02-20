import Image from "next/image"


const Footer = () => {
  return (
    <footer className="bg-newsletter-bg text-newsletter-text flex flex-col w-full h-[50vh]">
        <div className="flex h-[85%] max-[350px]:h-[90%]">

            <div className="w-[40%] h-full flex flex-col justify-start items-center pt-10">
                <div className="font-nunito font-light tracking-[0.15em] text-center max-[250px]:text-[0.9rem] text-[1rem] sm:text-[1.6rem] md:max-2xl:text-3xl">
                    <p>ANNA KATARINA</p>
                    <p>INTERIORS</p>
                </div>
            </div>
            <div className="flex items-end pb-7 sm:max-2xl:pb-10 h-full w-[60%]">

                <div className="w-[50%] mx-auto flex flex-col justify-between items-start">
                    <p className="font-main text-[1.2rem] sm:text-[1.5rem] md:max-2xl:text-[1.7rem] max-[250px]:break-all">Har du en fråga?</p>
                    <p className="font-hanken text-[1rem] sm:text-[1.1rem] md:max-2xl:text-[1.2rem] text-wrap break-all">info@annakatarinainterior.se</p>
                </div>
                <div className="w-[40%] mx-auto flex flex-col justify-between items-start">
                    <p className="font-main text-[1.2rem] sm:text-[1.5rem] md:max-2xl:text-[1.7rem]">Ring oss</p>
                    <p className="font-hanken text-[1rem] sm:text-[1.1rem] md:max-2xl:text-[1.2rem] break-all">0720175620</p>
                </div>

            </div>

        </div>
        <div className="flex justify-center items-center w-full h-[15%] max-[350px]:h-[10%] text-[0.8rem] sm:text-[0.9rem] md:max-2xl:text-[1.2rem]">
            <span className="flex justify-between items-center">
                <span>Copyright</span>
                <span>
                    <Image src="resources_new/copyright.svg" width={20} height={20} alt="copyright image"/>
                </span>
            </span>
            <span>2026</span>
        </div>
    </footer>
  )
}

export default Footer