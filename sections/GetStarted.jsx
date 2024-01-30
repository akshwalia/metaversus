'use client';

import { StartSteps, TypingText } from "../components";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const GetStarted = () => (
  <section className={`px-16 md:px-32 flex flex-col lg:flex-row items-center justify-between gap-10 mt-[100px] lg:mt-[200px]`}>
    <motion.img src="/get-started.png" alt="Planet" className="flex-1 w-[400px]" 
    initial={{x: '-100%', rotate:250}}
    whileInView={{x:0, rotate: 0}}
    transition={{duration: 1.5,delay: 0.2, type: 'spring'}}/>

    <motion.div className="flex flex-col flex-1"
    variants={fadeIn('left','tween',0.3,0.8)}
    initial='hidden'
    whileInView='show'>
      <TypingText text={"| How Metaversus Works"} align='text-left'/>
      <h2 className={`text-white text-[30px] lg:text-[64px] leading-[120%] font-extrabold mx-auto mb-5`}>Get started with just a few clicks</h2>
      <StartSteps number='01' text="Find a world that suits you and you want to enter" />
      <StartSteps number='02' text="Enter the world by reading basmalah to be safe" />
      <StartSteps number='03' text="No need to beat around the bush, just stay on the gas and have fun" />
    </motion.div>


    
  </section>
);

export default GetStarted;
