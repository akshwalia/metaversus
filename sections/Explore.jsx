'use client';

import { TypingText } from "../components";
import styles from "../styles";
import { motion } from "framer-motion";
import { ExploreCard } from "../components";
import { exploreWorlds } from "../constants";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section id="explore" className="mt-[100px] lg:mt-[300px] w-[80%] mx-auto">
      <TypingText text="| The World" align='text-center'/>

      <h2 className={`${styles.innerWidth} sm:px-20 2xl:px-48 px-6 text-white text-[30px] lg:text-[64px] font-extrabold text-center mx-auto`}>Choose the world you want to explore</h2>

      <div className="flex justify-center gap-7 mt-12 flex-col lg:flex-row min-h-[80vh]">
        {exploreWorlds.map((world, index) => (
          <ExploreCard key={index} img={world.imgUrl} title={world.title} id={world.id} index={index} active={active} setActive={setActive}/>
        ))}
      </div>
    </section>
  )
};

export default Explore;
