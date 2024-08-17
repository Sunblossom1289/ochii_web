import React, { useState } from "react";
import Next from "./Next";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

const Features = () => {
  const [isHoveringFyde, setHoveringFyde] = useState(false);
  const [isHoveringVise, setHoveringVise] = useState(false);

  return (
    <div className="w-full h-[230vh] py-20 bg-zinc-800">
      <div className="w-full px-20 border-b-[1px] border-zinc-100 pb-20">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="flex gap-20 cards w-full mt-10">

          <div
            onMouseEnter={() => setHoveringFyde(true)}
            onMouseLeave={() => setHoveringFyde(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#ae1e04f3] z-[9] font-[monospace] tracking-tighter text-6xl overflow-hidden">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringFyde ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-lg overflow-hidden"
              initial={{ scale: 1 }}
              animate={isHoveringFyde ? { scale: 1.1 } : { scale: 1 }}
              transition={{ ease: Power4.easeInOut, duration: 0.5 }}
            >
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </motion.div>
          </div>

          <div
            onMouseEnter={() => setHoveringVise(true)}
            onMouseLeave={() => setHoveringVise(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#CDEA68] z-[9] font-[monospace] tracking-tighter text-6xl overflow-hidden">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringVise ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full rounded-lg overflow-hidden"
              initial={{ scale: 1 }}
              animate={isHoveringVise ? { scale: 1.1 } : { scale: 1 }}
              transition={{ ease: Power4.easeInOut, duration: 0.5 }}
            >
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="VISE"
              />
            </motion.div>
          </div>

        </div>
      </div>
      <Next />
    </div>
  );
};

export default Features;
