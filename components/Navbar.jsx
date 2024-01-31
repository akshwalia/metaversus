'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = ({ showMenu, setShowMenu }) => {

  let transition = { duration: 0.3, height: { delay: 0.3, duration: 0.6 } };
  const displayMenu = () => {
    const menuIcon = document.getElementById('menuIcon');
    if (!menuIcon.classList.contains('menuIconBlacken')) {
      menuIcon.classList.remove('menuIconBlacken');
    }

    setShowMenu(true);
  };
  const removeMenu = () => {
    const menuIcon = document.getElementById('menuIcon');
    if (menuIcon.classList.contains('menuIconBlacken')) {
      menuIcon.classList.remove('menuIconBlacken');
    }

    transition = { height: { duration: 0.6 }, borderRadius: { delay: 0.6, duration: 0.6 }, width: { delay: 0.6, duration: 0.6 } };
    setShowMenu(false);

  };
  const handleMenuClick = () => {
    const menuIcon = document.getElementById('menuIcon');
    if (menuIcon.classList.contains('menuIconBlacken')) {
      menuIcon.classList.remove('menuIconBlacken');
    }
    else {
      menuIcon.classList.add('menuIconBlacken');
    }
    setShowMenu(!showMenu);
  };
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative flex justify-center`}
      viewport={{ once: true }}
    >
      <motion.div className='gradient-01 inset-0 absolute w-1/2'
        animate={{ translateX: [0, 500, 0], scale: [1, 1.4, 1.1, 2, 1.7, 1] }}
        transition={{ duration: 15, repeat: 'Infinity' }} 
      />
      <div className={`${styles.innerWidth} flex justify-between gap-8 relative`}>
        <img src='/search.svg' alt='Search' className='w-[24px] h-[24px] object-contain' />
        <h2 className='font-extrabold leading-[30px] text-white text-[24px]' >METAVERSUS</h2>

        <img src='/menu.svg' alt='menu' id='menuIcon' className='w-[24px] h-[24px] object-contain z-50' onMouseOver={displayMenu} onClick={handleMenuClick} />
        <AnimatePresence>
          {showMenu && <motion.div className='menu bg-white absolute -right-5 -top-3 p-7 rounded-[20px] w-[250px] z-30'
            initial={{ borderRadius: 999, width: 4, height: 4 }}
            animate={{ borderRadius: 20, width: 250, height: 320 }}
            transition={{ duration: 0.15, height: { delay: 0.15, duration: 0.35 } }}
            exit={{ borderRadius: 999, width: 4, height: 4, transition: { duration: 0.35, delay: 0.2, borderRadius: { delay: 0.6, duration: 0.3 }, width: { delay: 0.6, duration: 0.3 } } }}
            onMouseLeave={removeMenu}
            onClick={handleMenuClick}>
            <motion.ul className='flex flex-col gap-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              exit={{ opacity: 0, transition: { delay: 0, duration: 0.3 } }}
              onMouseLeave={removeMenu}
            >
              <a href=''>
                <li>Home</li>
              </a>
              <hr />
              <a href=''>
                <li>About</li>
              </a>
              <hr />
              <a href=''>
                <li>Explore</li>
              </a>
              <hr />
              <a href=''>
                <li>Get Started</li>
              </a>
              <hr />
              <a href=''>
                <li>World</li>
              </a>
              <hr />
              <a href=''>
                <li>Insights</li>
              </a>
              <hr />
              <a href=''>
                <li>Feedback</li>
              </a>
              <hr />
            </motion.ul>
          </motion.div>}
        </AnimatePresence>

      </div>

    </motion.nav>
  )
};

export default Navbar;
