'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Feedback = () => (
  <section className="px-16 md:px-40 mt-40 flex flex-col lg:flex-row gap-7 relative">

    <motion.div className="lg:min-w-[370px] lg:h-[610px] relative border border-solid border-[#6A6A6A] rounded-[32px] overflow-hidden p-8 flex flex-col justify-end"
      variants={fadeIn('right', 'tween', 0.5, 0.7)}
      initial='hidden'
      whileInView='show'>
      <div className="feedback-gradient" />

      <h2 className="text-[26px] lg:text-[32px] text-white font-bold">Aksh Walia</h2>
      <h3 className="text-[14px] lg:text-[18px] text-white mb-7">Web Developer</h3>

      <p className="text-white text-[16px] lg:text-[24px] text-wrap">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
    </motion.div>

    <motion.img src="/planet-09.png" alt="Image" className="w-full h-[300px] lg:max-w-[50vw] lg:h-[610px] rounded-[32px] object-cover"
      variants={fadeIn('left', 'tween', 0.5, 0.7)}
      initial='hidden'
      whileInView='show' />

    <motion.a href="#explore" className="w-[115px] h-[115px] absolute left-[485px] top-[50px] cursor-pointer hidden lg:block"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: 1, delay: 0.2 } }}
      whileHover={{ rotate: 20 }}
      transition={{ duration: 0.7 }}
    >
      <img src="/stamp.png" alt="Stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
    </motion.a>
  </section>
);

export default Feedback;
