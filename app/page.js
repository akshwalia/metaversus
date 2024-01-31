'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='bg-primary-black overflow-hidden'>
      
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
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
