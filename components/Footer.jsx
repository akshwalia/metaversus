'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Footer = () => (
  <motion.footer className="mx-10 md:mx-40 mt-20"
  variants={fadeIn('up','tween',0.5,1)}
  initial='hidden'
  whileInView='show'>
    <div className="flex justify-between items-center mb-10 flex-col md:flex-row">
      <div className="text-[24px] md:text-[48px] lg:text-[64px] text-white font-bold">Enter the Metaverse</div>
      <button className="bg-[#25618B] px-[32px] py-[20px] flex gap-5 rounded-[32px] items-center h-fit scale-75 md:scale-100">
        <img src="/headset.svg" alt="headset" />
        <span className="text-white text-[16px]">ENTER METAVERSE</span>
      </button>
    </div>
    <hr className="opacity-30 mb-10" />

    <div className="flex justify-between items-center mb-10 flex-col md:flex-row gap-5">
      <div className="text-[24px] font-bold text-white">METAVERSUS</div>
      <div className="text-[14px] text-white opacity-60">Copyright © 2024 Aksh Walia</div>
      <div className="flex gap-5">
        <img src="/twitter.svg" alt="Twitter" className="w-[24px] h-[24px] object-contain cursor-pointer" />
        <img src="/linkedin.svg" alt="Discord" className="w-[24px] h-[24px] object-contain cursor-pointer" />
        <img src="/instagram.svg" alt="Instagram" className="w-[24px] h-[24px] object-contain cursor-pointer" />
        <img src="/facebook.svg" alt="Facebook" className="w-[24px] h-[24px] object-contain cursor-pointer" />
      </div>
    </div>
  </motion.footer>
);

export default Footer;
