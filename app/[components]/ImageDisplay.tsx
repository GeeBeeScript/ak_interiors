"use client";
import {
  CircleChevronLeft,
  CircleChevronRight,
  Ellipsis,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Post {
  caption: string;
  createdAt: string;
  groupId: string;
  id: string;
  images: {
    id: string;
    groupId: string;
    key: string;
    order: number;
    createdAt: string;
    url: string;
  }[];
}

const ImageDisplay = ({ post, isAdmin }: { post: Post; isAdmin: boolean }) => {
  const { caption, images, id } = post;
  const [current, setCurrent] = useState<number>(0);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const prev = () => {
    setCurrent((prevState) =>
      prevState === 0 ? images.length - 1 : prevState - 1,
    );
  };

  const next = () => {
    setCurrent((prevState) =>
      prevState === images.length - 1 ? 0 : prevState + 1,
    );
  };

  const handleDeletePost = async () => {
    setOpenDelete(false);

   const res =  await fetch("/api/delete-post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            postId: id,
        })
    })

    window.location.reload()
    if (!res.ok) throw new Error("Could not delete")
  };
  return (
    <div className="space-y-2 shadow-xl bg-white">
      <div className="relative">
        {/* Image */}
        <div>
          <Image
            src={images[current].url}
            alt="image slider"
            width={300}
            height={300}
            loading="eager"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Left Button */}
        <button
          onClick={prev}
          className="border-0 absolute top-1/2 left-2 -translate-y-1/2 bg-black-50 text-white px-3 py-1 cursor-pointer"
        >
          <CircleChevronLeft />
        </button>

        {/* Right btn */}
        <button
          onClick={next}
          className="border-0 absolute top-1/2 right-2 -translate-y-1/2 bg-black-50 text-white px-3 py-1 cursor-pointer"
        >
          <CircleChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 flex justify-center gap-2 m-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 border border-gray-600 rounded-full ${index === current ? "bg-black" : "bg-transparent"}`}
            ></div>
          ))}
        </div>
      </div>

      <div
        onClick={() => setOpenDelete(false)}
        className="py-2 px-3 text-[#444] sm:text-[1.1rem] font-cabin"
      >
        <div>{caption}</div>
      </div>

      {isAdmin && (
        <div className="w-full mt-4 mb-2 flex justify-end items-center relative">
          <div
            className="mr-3 px-3 py-1 cursor-pointer hover:bg-gray-200 transition-all duration-75 ease-in-out"
            onClick={() => setOpenDelete((prevState) => !prevState)}
          >
            <Ellipsis />
          </div>

          <div
            className={`absolute z-30 bg-gray-100 py-1 px-2 shadow-lg top-9 right-0 flex flex-col justify-center items-start cursor-pointer hover:px-3 text-xl font-schib transition-all duration-100 ease-in ${openDelete ? "opacity-100 translate-y-5 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"}`}
          >
            <button
              onClick={handleDeletePost}
              className="text-red-500 text-[0.8rem] font-bold flex space-x-2 items-center cursor-pointer"
            >
              <span>Delete</span>{" "}
              <span>
                <Trash2 className="size-5" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
