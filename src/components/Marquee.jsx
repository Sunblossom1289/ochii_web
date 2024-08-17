import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className="w-full rounded-2xl py-20 bg-[#004D43]">
      <div className="text border-b-2 border-t-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[12vw] leading-none font-semibold uppercase pt-3 mr-2 mb-3"
        >
          We are Ochii
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[12vw] leading-none font-semibold uppercase pt-3 mb-3"
        >
          We are Ochii
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[12vw] leading-none font-semibold uppercase pt-3  mb-3 "
        >
          We are Ochii
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
