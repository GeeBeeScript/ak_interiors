"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import AdminOverlay from "./adminOverlay";
import { BadgeX, Paperclip, X } from "lucide-react";
import { MouseEvent } from "react";
import uploadImages from "@/lib/upload";
import LoaderText from "@/app/[components]/LoaderText";

const GalleryOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const captionRef = useRef<HTMLTextAreaElement | null>(null)
    const [previewImg, setPreviewImg] = useState<string[] | []>([])
    const [filesToUpload, setFilesToUpload] = useState<File[] | []>([])
    const [postIsUploading, setPostIsUploading] = useState<boolean>(false)


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(fileInputRef.current?.files)
        const files = e.target.files
        if (!files) return 
        const filesArr = Array.from(files)
        const urlObjects: any[] = []
        if (filesArr) {
            filesArr.map((file) => {
                const urlObject = URL.createObjectURL(file)
                urlObjects.push(urlObject)
            })
        } else {
            return
        }
        setPreviewImg(urlObjects)
        setFilesToUpload(filesArr)
    }

    const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setPostIsUploading(true)
      if (!filesToUpload.length) return
      try {
        const uploadResult = await uploadImages(filesToUpload)

        console.log("Upload result ", uploadResult)

        if (!uploadResult) return

        // Save post and metadata
        const res = await fetch("/api/post-images", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            caption: captionRef.current?.value,
            groupId: uploadResult.groupId,
            images: uploadResult.images
          })
        })

        if (!res.ok) throw new Error("Failed to save post")

        const data = await res.json()
        console.log("Post created ", data)
        onClose()

      } catch(error) {
        console.log("Upload failed, ", error)
      } finally {
        setPostIsUploading(false)
        window.location.reload()
      }
    }

    const addImagesHandler = () => {
        fileInputRef.current?.click()
    }


    const removeSingleImage = (indexValue: number) => {
      const removeImg = [...filesToUpload].filter((_, index) => index !== indexValue)
      setFilesToUpload(removeImg)
      setPreviewImg((prevState) => (
        prevState.filter((_, index) => index !== indexValue)
      ))
    }

    
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AdminOverlay className={`flex flex-col transition-all duration-100 ease-in-out ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-6 pointer-events-none"}`}>
      <nav className="w-full ring ring-amber-200 flex justify-center items-center shadow-[-1px_2px_8px_1px_rgba(173,164,164,0.75)]">
        <ul className="flex w-full max-w-[1000px] font-bold text-[#333] text-xl py-3">
          <li className="w-[90%] flex justify-center items-center">Post Art</li>
          <li className="w-[10%] flex justify-center items-center cursor-pointer" onClick={() => onClose()}>
            <X className="stroke-2 size-7 hover:text-gray-400 hover:size-8 transition-all duration-75 ease-in-out"/>
          </li>
        </ul>
      </nav>
      <section className="flex-grow px-3 py-2 sm:flex sm:justify-center w-full">
        <form className="block h-full w-full max-w-250 space-y-2">
          <input type="file" multiple ref={fileInputRef} onChange={handleFileChange} className=""/>
          <div>
            <button className="bg-zinc-950 text-white font-bold flex justify-evenly px-3 py-2 gap-2 rounded-[0.3rem] hover:bg-zinc-950/70 hover:px-4 transition-all duration-75 ease-linear cursor-pointer" type="button" onClick={addImagesHandler}>
              Add Images <Paperclip />
            </button>
          </div>
          <div className="flex space-x-4 px-4 overflow-auto scroll-smooth">
            {previewImg && (
                previewImg.map((img, index) => (
                    <div key={img} className="relative shrink-0 py-2">
                        <img src={img} alt="Preview Image" className="w-40 h-40 rounded-md"/>
                        <BadgeX onClick={() => removeSingleImage(index)} className="absolute top-2 right-2 text-zinc-950/60 cursor-pointer hover:text-zinc-950/90 transition-all duration-75 ease-in-out"/>
                    </div>
                ))
            )}
          </div>
          <textarea ref={captionRef} name="" id="" className="w-full h-40 outline-none rounded-none ring-1 ring-amber-200 py-2 px-2" placeholder="Add a caption..."></textarea>
          <div className="w-full">
            <button onClick={onSubmit} className="w-full bg-zinc-950 text-white font-bold flex justify-evenly px-3 py-3 font-hanken gap-2 rounded-[0.3rem] hover:bg-zinc-950/70 hover:px-4 transition-all duration-75 ease-linear cursor-pointer">
              {!postIsUploading ? "Submit" : <LoaderText className="text-white font-bold"/>}
            </button>
          </div>
        </form>
      </section>
    </AdminOverlay>
  );
};

export default GalleryOverlay;
