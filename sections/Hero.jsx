'use client';

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";
import { useState, useEffect } from "react";

const Hero = () => {
  return (
    <section className="flex flex-col mt-16 relative">
      <h1 className={`${styles.heroHeading} self-center z-10`}>
        <motion.div
          variants={textVariant(1.1)}
          initial='hidden'
          whileInView='show'
          >METAVERSE</motion.div>
        <motion.div className="flex items-center"
          variants={textVariant(1.3)}
          initial='hidden'
          whileInView='show'
          >
          <div>MA</div>
          <div className={`${styles.heroDText}`}></div>
          <div>NESS</div>
        </motion.div>
      </h1>


      <div className="relative">
        <motion.div className="w-screen sm:h-[500px] h-[350px] object-cover "
          variants={slideIn('right', 'tween', 0.7, 0.7)}
          initial='hidden'
          whileInView='show'
          >
          <img src="/cover.png" alt="Cover Image"
            className="sm:h-[500px] h-[350px] w-[100vw] object-cover rounded-tl-[140px] rounded-b-[42px] relative -top-[50px] -right-24"
          />
        </motion.div>

        <motion.a href="#explore" className="absolute -bottom-3 right-20"
          initial={{scale: 0}}
          whileInView={{scale: 1, transition: {duration: 1, delay: 0.2}}}
          whileHover={{ rotate: 20 }}
          transition={{ duration: 0.7 }}
          >
          <img src="/stamp.png" alt="Stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
        </motion.a>
      </div>


      {/* <motion.div className="flex flex-col gap-7 absolute top-0 right-20"
    initial={{opacity: 0, x:}}>
      <img src="/twitter.svg" alt="Twitter" className="w-[24px] h-[24px] object-contain" />
      <img src="/linkedin.svg" alt="Discord" className="w-[24px] h-[24px] object-contain" />
      <img src="/instagram.svg" alt="Instagram" className="w-[24px] h-[24px] object-contain" />
      <img src="/facebook.svg" alt="Facebook" className="w-[24px] h-[24px] object-contain" />
    </motion.div> */}
    </section>
  )
};

export default Hero;
