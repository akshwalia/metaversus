'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ title, text, imgURL, index }) => (
  <motion.div className="flex gap-10 items-center mb-10 flex-col lg:flex-row"
    variants={fadeIn('up', 'spring', index * 0.3, 0.7)}
    initial='hidden'
    whileInView='show'>
    <img src={imgURL} alt="Planet image" className="w-full lg:w-[270px] h-[250px] rounded-3xl object-cover" />
    <div className="flex gap-10 items-center flex-col sm:flex-row">
      <div className="flex flex-col ">
        <div className="text-[25px] md:text-[38px] lg:text-[42px] leading-[125%] text-white">
          {title}
        </div>
        <div className="text-[16px] sm:text-[20px] leading-[125%] text-white opacity-40 mt-3 md:mt-7">
          {text}
        </div>
      </div>
      <motion.div className="hidden sm:flex w-[60px] h-[60px] md:w-[100px] md:h-[100px] ml-5 border-2 border-white border-solid rounded-full items-center justify-center flex-shrink-0 cursor-pointer"
        whileHover={{ rotate: 15 }}>
        <img src="/arrow.svg" alt="Arrow" className="w-[20px] h-[20px] md:w-[33%] md:h-[33%]" />
      </motion.div>
    </div>
  </motion.div>
);

export default InsightCard;
