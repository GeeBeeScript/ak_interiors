"use client";
import { Ellipsis, Trash2 } from "lucide-react";
import { useState } from "react";
import { deleteVlog } from "../action/vlogActions";

interface Vlog {
  id: string;
  vlogLink: string;
  caption: string | null;
  createdAt: Date;
}

const VlogDisplay = ({ vlog, isAdmin }: { vlog: Vlog; isAdmin: boolean }) => {
  const { vlogLink, caption, id } = vlog;
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const handleDeleteVlog = async () => {
    setOpenDelete(false);

    const deleteSeletected = await deleteVlog({ vlogId: vlog.id });
    window.location.reload()
  };

  return (
    <div className="space-y-2 shadow-xl bg-white rounded-tl-2xl rounded-tr-2xl">
      <div className="relative">
        {/* Iframe */}
        <div className="aspect-video">
          <iframe
            src={vlogLink}
            className="w-full h-full"
            title={caption || "generic vlog"}
            allowFullScreen
          ></iframe>
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
              onClick={handleDeleteVlog}
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

export default VlogDisplay;
