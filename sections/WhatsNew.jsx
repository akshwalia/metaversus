'use client';

import { NewFeatures,TypingText } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className={`px-16 md:px-36 flex flex-col items-center justify-between gap-10 mt-[100px] lg:mt-[150px] lg:flex-row-reverse`}>
    <motion.img src="/whats-new.png" alt="Planet" className="flex-1 w-[400px]"
      initial={{ x: '100%', rotate: 250 }}
      whileInView={{ x: 0, rotate: 0 }}
      transition={{ duration: 1.5, delay: 0.2, type: 'spring' }} />
    <motion.div className="flex flex-col flex-1"
      variants={fadeIn('right', 'tween', 0.3, 0.8)}
      initial='hidden'
      whileInView='show'>
      <TypingText text={"| What's New?"} align='text-left' />
      <h2 className={`text-white text-[30px] lg:text-[64px] leading-[120%] font-extrabold mx-auto mb-5`}>What's new about Metaversus?</h2>
      <div className="flex gap-10">
        <NewFeatures imgURL={'/headset.svg'} title={'A new world'} text={'we have the latest update with new world for you to try never mind'} />
        <NewFeatures imgURL={'/vrpano.svg'} title={'A new world'} text={'we have the latest update with new world for you to try never mind'} />
      </div>
    </motion.div>

  </section>
);

export default WhatsNew;
