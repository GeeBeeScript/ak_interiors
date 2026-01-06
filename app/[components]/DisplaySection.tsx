import Image from "next/image"

const DisplaySection = () => {
  return (
    <section className="bg-green-section/20 flex flex-col justify-between items-center py-7 w-full gap-10 my-10">
        <p className="font-bold font-caglio text-3xl text-center">Transforming Spaces Into Living Experiences</p>
        <div className="grid grid-cols-2 grid-rows-6 gap-5">

            <div className="bg-[url('/resources_new/living_room.jpg')] w-[40vw]  sm:w-48 md:w-[45vw] bg-cover bg-center bg-no-repeat rounded-lg row-span-3">
            </div>

            <div className="bg-[url('/resources_new/dark_passage.jpg')]  w-[40vw]  sm:w-48 md:w-[45vw] bg-cover bg-center bg-no-repeat rounded-lg row-span-4">
            </div>


            <div className="bg-[url('/resources_new/light_office.jpg')] w-[40vw]  sm:w-48 md:w-[45vw] bg-cover bg-center bg-no-repeat rounded-lg row-span-3">
            </div>

            <div className="bg-[url('/resources_new/no_light.jpg')] h-[20vh] md:h-[35vh] w-[40vw]  sm:w-48 md:w-[45vw] bg-cover bg-center bg-no-repeat rounded-lg row-span-2">
            </div>

        </div>
    </section>
  )
}

export default DisplaySection