"use client";

import React, { useEffect, useState } from "react";
import GalleryOverlay from "./galleryOverlay";

const AdminButton = () => {
  const [postModalOpen, setPostModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setPostModalOpen(true);
  };

  const closeModal = () => {
    setPostModalOpen(false);
  };
  return (
    <>
      <div className="w-full px-4 flex justify-center items-center">
        <button
          onClick={() => openModal()}
          className="w-full py-4 bg-gold-section-second-color font-bold text-white/80 rounded-md font-nunito max-w-125 hover:py-5 hover:bg-gold-section-color/80 hover:text-white transition-all duration-100 ease-in"
        >
          Make a post
        </button>
      </div>
      <GalleryOverlay isOpen={postModalOpen} onClose={closeModal} />
    </>
  );
};

export default AdminButton;
