"use client";
import { useState } from "react";
import VlogOverlay from "../components/vlogOverlay";

const VlogButton = () => {
  const [vlogModalOpen, setVlogModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setVlogModalOpen(true);
  };

  const closeModal = () => {
    setVlogModalOpen(false);
  };
  return (
    <>
      <div className="w-full px-4 flex justify-center items-center">
        <button
          onClick={() => openModal()}
          className="w-full py-4 bg-zinc-950 font-bold text-white rounded-md font-nunito max-w-125 hover:py-5 hover:bg-zinc-950/80 hover:text-white/80 transition-all duration-100 ease-in"
        >
          Add a vlog
        </button>
      </div>
      <VlogOverlay isOpen={vlogModalOpen} onClose={closeModal} />
    </>
  );
};

export default VlogButton;
