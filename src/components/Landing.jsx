import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
 
  // Array of strings to display in h1 elements
  const headings = ["We Create", "Eye Opening", "Presentations"];

  return (
    <div data-scroll data-scroll-speed="-.3"  className="w-full bg-zinc-800 h-screen border-t-2">
      <div className="textstruct mt-48 px-10">
        {headings.map((item, index) => (
          <div className="mask" key={index}>
            <div className="w-fit flex items-end overflow-hidden ">
                {index==1 &&(<motion.div initial={{width:0}} animate ={{width:"8vw"}} transition={easeInOut} className="w-[8vw] mr-[0.3vw] h-[6vw] relative top-[0.3vw] bg-red-500 rounded-md"></motion.div>)}
          
            <h1 className="uppercase leading-[6.7vw] font-semibold tracking-tighter text-[8vw]">
              {item}
            </h1>
          </div>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-zinc-800 mt-20 py-5 px-10 flex justify-between items-center">
        {["For public and private companies", "From first pitch to IPO"].map(
          (item, index) => (
            <p key={index} className="text-md font-light leading-none tracking-tighter">
              {item}
            </p>
          )
        )}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 text-sm uppercase font-light border-[1px] border-zinc-500 rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-600 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
