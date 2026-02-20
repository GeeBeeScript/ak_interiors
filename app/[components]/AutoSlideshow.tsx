type Props = {
  leftImages: string[]
  rightImages: string[]
}

export default function AutoSlideshow({ leftImages, rightImages }: Props) {
  return (
    <section className="my-4 relative h-full overflow-hidden w-full mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)]">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 h-full">

        {/* LEFT COLUMN */}
        <div className="overflow-hidden relative">
          <div className="flex flex-col animate-scroll-up">
            {[...leftImages, ...leftImages].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-full object-cover"
                alt=""
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="overflow-hidden relative">
          <div className="flex flex-col animate-scroll-down">
            {[...rightImages, ...rightImages].map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-full object-cover"
                alt=""
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}