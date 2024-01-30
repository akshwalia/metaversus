'use client';

import { TypingText } from "../components";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const About = () => (
  <section className={`relative mt-[100px] lg:mt-[300px]`}>
    <div className="gradient-02 "/>

    <div className={`${styles.innerWidth} mx-auto flex flex-col items-center`}>

      <TypingText text="| About Metaverse" align={'text-center'}/>

      <motion.p className="text-white text-center text-[20px] lg:text-[32px] px-8 sm:px-20 mt-2"
      variants={fadeIn('up','tween',0.2,1)}
      initial='hidden'
      whileInView='show'>
        <strong>Metaverse</strong> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <strong>madness of the metaverse</strong> of today, using only <strong>VR</strong> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <strong>explore</strong> the madness of the metaverse by scrolling down
      </motion.p>

      <motion.img src="/arrow-down.svg" alt="Arrow" className="w-[32px] h-[32px] object-contain mt-10" 
      initial={{y: -10, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1, delay: 0.5}}/>

    </div> 
  </section>
);

export default About;
