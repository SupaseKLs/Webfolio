"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Magnetic from '@/components/Magnetic/page'


const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const navLinks = [
    { title: 'About', href: '/' },
    { title: 'Project', href: '/' },
    { title: 'Contact', href: '/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY;

      if (currentScrollState > scrollPosition && currentScrollState > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setScrollPosition(currentScrollState);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={`w-full z-50 px-10 md:px-20 fixed top-0 transition-all duration-1000 ease-in-out text-white h-16 font-medium flex justify-between items-center 
        ${isVisible ? "translate-y-0" : "-translate-y-full"} 
        ${scrollPosition >= 50 ? 'bg-black text-white bg-opacity-30 backdrop-blur-md ' : 'bg-transparent text-black'}`}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        initial={{ y: '-100%' }}
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className='flex'>
            {["Home", "About us", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                initial="initial"
                whileHover="hovered"
                className="relative cursor-pointer px-2 text-lg font-semibold overflow-hidden font-Inter"
              >
                <motion.div
                  className='text-text_color'
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" }
                  }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                </motion.div>
                <motion.div
                  className='absolute inset-0 px-2 text-white'
                  variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0, }
                  }}
                >
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className='cursor-pointer md:hidden p-6'>
          <div className="text-md font-bold" onClick={toggleMenu}>
            {open ? 'Close' : 'Menu'}
          </div>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden lg:flex">
          <div>
            <h1 className='text-gray-700'>Hello, my name is</h1>
            <motion.h1
              initial="initial"
              whileHover="hovered"
              className="relative cursor-pointer text-lg font-semibold overflow-hidden font-Inter"
            >
              <motion.div
                className='text-text_color'
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" }
                }}
              >
                <Link href="/">Supasek Laobutsa</Link>
              </motion.div>
              <motion.div
                className='absolute inset-0 text-white'
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0, }
                }}
              >
                <Link href="/">Supasek Laobutsa</Link>
              </motion.div>
            </motion.h1>
          </div>
        </div>

        {/* Resume Button s*/}
        <Magnetic>
          <div className="group hidden md:block relative cursor-pointer text-xl p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
            <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
              Resume
            </span>
            <div className=" flex gap-2 text-white bg-blue-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
              <span>Resume</span>
            </div>
          </div>
        </Magnetic>

      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="origin-top fixed left-0 top-0 w-full h-screen bg-black bg-opacity-30 backdrop-blur-md text-white p-6">
            <div className="flex h-full flex-col">

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className='flex flex-col h-full justify-center items-center '>
                {
                  navLinks.map((link) => {
                    return (
                      <div className="overflow-hidden pt-2" key={link.title}> {/* Key added here */}
                        <MobileNavLink
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })
                }
                <motion.ul
                  className='flex items-center  mt-6 rounded-full'
                  initial={{ opacity: 0 }} // Start invisible
                  animate={{ opacity: 1 }}  // Fade in
                  exit={{ opacity: 0 }}     // Fade out on exit
                  transition={{ duration: 0.8 }} // Duration of the fade-in/out
                >
                  <Magnetic>
                    <div className="group relative cursor-pointer text-xl p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
                      <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                        Resume
                      </span>
                      <div className="flex gap-2 text-white bg-blue-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
                        <span>Resume</span>
                      </div>
                    </div>
                  </Magnetic>
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence></>
  );
};
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-4xl uppercase text-white">
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
export default Navbar;
