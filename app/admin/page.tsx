"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Admin = () => {
  return (
    <section className="mt-10 min-h-screen space-y-4 px-4 sm:px-7">
      <p className="text-gold-section-second-color font-bold text-xl w-full flex justify-start items-center font-cabin">
        Admin panel
      </p>
      <div className="flex flex-col space-y-4">
        <motion.div
          className="py-5 font-bold text-[#555] bg-white border border-amber-200 shadow-xl px-2 font-brico sm:max-w-[60%] sm:px-4"
          initial={{
            y: 30,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          whileHover={{
            background: "#ebeae8",
            transition: {
              duration: 0.3,
              ease: "easeIn",
            },
          }}
        >
          <Link href="/admin/artgallerypost" className="w-full">
            Make a post to your Art gallery
          </Link>
        </motion.div>
        <motion.div
          className="py-5 font-bold text-[#555] bg-white border border-amber-200 shadow-xl px-2 font-brico sm:max-w-[60%] sm:px-4"
          initial={{
            y: 30,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          whileHover={{
            background: "#ebeae8",
            transition: {
              duration: 0.3,
              ease: "easeIn",
            },
          }}
        >
          <Link href="/admin/vlogpost" className="w-full">
            Add a Vlog
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Admin;
