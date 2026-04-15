"use client";

import OtherNav from "../[components]/OtherNav";
// import * as motion from "motion/react-client"
import { motion } from "motion/react";

const Admin = () => {
  return (
    <main>
      <OtherNav />
      <section className="mt-25 sm:mt-30 min-h-screen space-y-4 px-4 sm:px-7">
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
                ease: "easeIn"
              }
            }}
          >
            Make a post to your Art gallery
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
                ease: "easeIn"
              }
            }}
          >
            Add a Vlog
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
