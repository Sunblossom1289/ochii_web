import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Power4 } from 'gsap';

const Next = () => {
  const [isHoveringMarathon, setHoveringMarathon] = useState(false);
  const [isHoveringTrawa, setHoveringTrawa] = useState(false);

  return (
    <div className="px-20">
      <div className="flex gap-20 cards w-full mt-10">
        
      
        <div
          onMouseEnter={() => setHoveringMarathon(true)}
          onMouseLeave={() => setHoveringMarathon(false)}
          className="cardcontainer relative w-1/2 h-[75vh]"
        >
          <button className='h-[3vw] m-9 w-[13vw] rounded-lg text-black font-semibold bg-zinc-300'>
            Pitch Deck
          </button>
          <motion.h1
            className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#c53831e0] z-[9] font-[monospace] tracking-tighter text-6xl overflow-hidden"
            initial={{ opacity: 0, y: "100%" }}
            animate={isHoveringMarathon ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }}
            transition={{ ease: Power4.easeInOut, duration: 0.5 }}
          >
            MARATHON
          </motion.h1>
          <motion.div
            className="card w-full h-full rounded-lg overflow-hidden"
            initial={{ opacity: 1, scale: 1 }}
            animate={isHoveringMarathon ? { opacity: 0.8, scale: 1.1 } : { opacity: 1, scale: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 0.5 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt="MARATHON"
            />
          </motion.div>
        </div>

       
        <div
          onMouseEnter={() => setHoveringTrawa(true)}
          onMouseLeave={() => setHoveringTrawa(false)}
          className="cardcontainer relative w-1/2 h-[75vh]"
        >
          <div className='flex gap-2'>
            <button className='h-[3vw] m-9 w-[13vw] text-black font-semibold rounded-lg bg-zinc-300'>
              BRAND IDENTITY
            </button>
            <button className='h-[3vw] m-9 w-[13vw] text-black font-semibold rounded-lg bg-zinc-300'>
              DESIGN RESEARCH
            </button>
            <button className='h-[3vw] m-9 w-[13vw] text-black font-semibold rounded-lg bg-zinc-300'>
              INVESTOR DECK
            </button>
          </div>
          <motion.h1
            className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-bold text-[#2a90a9e6] z-[9] font-[monospace] tracking-tighter text-6xl overflow-hidden"
            initial={{ opacity: 0, y: "100%" }}
            animate={isHoveringTrawa ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }}
            transition={{ ease: Power4.easeInOut, duration: 0.5 }}
          >
            TRAWA
          </motion.h1>
          <motion.div
            className="card w-full h-full rounded-lg overflow-hidden"
            initial={{ opacity: 1, scale: 1 }}
            animate={isHoveringTrawa ? { opacity: 0.8, scale: 1.1 } : { opacity: 1, scale: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 0.5 }}
          >
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt="TRAWA"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Next;
