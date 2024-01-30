'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export default function ExploreCard({ img, id, title, active, setActive, index }) {
  return (
    <motion.div
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[8]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => setActive(id)}
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      initial='hidden'
      whileInView='show'
      key={index}
    >
      <motion.img src={img} alt={id} className={`absolute w-full h-full object-cover rounded-[24px] ${id=='world-1'?'object-left':'object-center'}`} />
      {active !== id ?
        <h3 className="font-semibold sm:text-[26px] text-[18px] absolute bottom-3 lg:bottom-20 text-white lg:-rotate-90">
          {title}
        </h3> :
        <div className="absolute w-full h-[55%] sm:h-[40%] lg:h-[36%] bg-[rgba(0,0,0,0.5)] bottom-0 rounded-b-[24px] z-30 p-4 md:p-8 flex flex-col justify-center">
          <div className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-[24px] glassmorphism flex items-center justify-center mb-4">
            <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="text-white md:text-[16px] text-[10px]">ENTER THE METAVERSE</p>
          <h3 className="font-semibold md:text-[32px] text-[24px] text-white">
            {title}
          </h3>
        </div>
      }
    </motion.div>
  )
};

