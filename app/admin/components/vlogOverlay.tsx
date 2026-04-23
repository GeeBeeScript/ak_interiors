"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import AdminOverlay from "./adminOverlay";
import { ArrowRight, BadgeX, Paperclip, X } from "lucide-react";
import { MouseEvent } from "react";
import { createVlogPost } from "@/app/action/vlogActions";
import { useRouter } from "next/navigation";
import LoaderText from "@/app/[components]/LoaderText";

const extractIframeSrc = (iframeString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(iframeString, "text/html");
  const iframe = doc.querySelector("iframe");
  return iframe ? iframe.getAttribute("src") : null;
};

const VlogOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const linkInputRef = useRef<HTMLInputElement | null>(null);
  const vlogCaptionRef = useRef<HTMLTextAreaElement | null>(null)
  const [linkInputError, setLinkInputError] = useState<boolean>(false)
  const [previewVideo, setPreviewVideo] = useState<string | undefined>(
    undefined
  );
  const [vlogIsUploading, setVlogIsUploading] = useState<boolean>(false)

  const onPreviewClick = () => {
    const iframeStr = linkInputRef.current?.value ;
    if (!iframeStr) {
      setLinkInputError(true)
      return
    }
    setLinkInputError(false)
    const src = extractIframeSrc(iframeStr);
    setPreviewVideo(src ?? undefined);
    console.log(src);
  };

  const handleVlogPost = async (e: MouseEvent<HTMLButtonElement>) => {
    setVlogIsUploading(true)
    e.preventDefault()
    const iframeStr = linkInputRef.current?.value ;
    if (!iframeStr) {
      setLinkInputError(true)
      return
    }
    setLinkInputError(false)
    const src = extractIframeSrc(iframeStr)
    if (!src) return
    const res = await createVlogPost({ link: src, caption: vlogCaptionRef.current?.value })
    setVlogIsUploading(false)
    onClose()
    window.location.reload()
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AdminOverlay
      className={`flex flex-col overflow-auto scroll-smooth transition-all duration-100 ease-in-out ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-6 pointer-events-none"}`}
    >
      <nav className="w-full ring ring-amber-200 flex justify-center items-center shadow-[-1px_2px_8px_1px_rgba(173,164,164,0.75)]">
        <ul className="flex w-full max-w-[1000px] font-bold text-[#333] text-xl py-3">
          <li className="w-[90%] flex justify-center items-center">
            Post Vlog
          </li>
          <li
            className="w-[10%] flex justify-center items-center cursor-pointer"
            onClick={() => onClose()}
          >
            <X className="stroke-2 size-7 hover:text-gray-400 hover:size-8 transition-all duration-75 ease-in-out" />
          </li>
        </ul>
      </nav>
      <section className="shrink-0 flex-grow px-3 py-2 sm:flex sm:justify-center w-full">
        <form className="block h-full w-full max-w-250 space-y-2">
          <input
            type="text"
            ref={linkInputRef}
            placeholder="Enter vlog link"
            className="py-2 px-2 border-0 outline-none border-b w-full"
          />
          {linkInputError && (<p className="text-red-400">Please add a valid link</p>)}
          <div>
            <button
              onClick={onPreviewClick}
              className="bg-zinc-950 text-white font-bold flex justify-evenly px-3 py-2 font-nunito gap-2 rounded-[0.3rem] hover:bg-zinc-950/70 hover:px-4 transition-all duration-75 ease-linear cursor-pointer"
              type="button"
            >
              Preview Video <ArrowRight />
            </button>
          </div>
          <div className="overflow-auto scroll-smooth ">
            <iframe src={previewVideo} ></iframe>
          </div>
          <textarea
            ref={vlogCaptionRef}
            name=""
            id=""
            className="w-full h-40 outline-none rounded-none ring-1 ring-amber-200 py-2 px-2"
            placeholder="Add a vlog caption..."
          ></textarea>
          <div className="w-full">
            <button onClick={handleVlogPost} className="w-full bg-zinc-950 text-white font-bold flex justify-evenly px-3 py-3 font-hanken gap-2 rounded-[0.3rem] hover:bg-zinc-950/70 hover:px-4 transition-all duration-75 ease-linear cursor-pointer">
              { !vlogIsUploading ? "Submit" : <LoaderText className="text-white font-bold"/> }
            </button>
          </div>
        </form>
      </section>
    </AdminOverlay>
  );
};

export default VlogOverlay;
