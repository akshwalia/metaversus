'use client';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { useState, useEffect } from 'react';


const Page = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     console.log(e.clientX, e.clientY);
  //     setMousePosition({ x: e.pageX, y: e.pageY })
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   }
  // },[]);


  return (
    <div className='bg-primary-black overflow-hidden'>
      {/* Cursor */}
      {/* <div className="cursor w-[20px] h-[20px] bg-white rounded-full z-20" 
      style={{position: 'absolute', left: mousePosition.x-10, top: mousePosition.y-10}}
       /> */}
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <motion.div className="gradient-03 z-0"
          animate={{ translateY: [0, 100, 0], scale: [1, 1.4, 1.1, 1.5, 1] }}
          transition={{ duration: 15, repeat: 'Infinity' }} />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>

      <Footer />
    </div>
  )
};

export default Page;
