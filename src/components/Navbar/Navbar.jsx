"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <motion.nav
      className={`w-full z-50 px-20 fixed top-0 transition-all duration-500 ease-in-out text-white h-16 font-medium flex justify-between items-center 
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
      <div className="lg:hidden flex items-center">
        <button
          className="text-white"
          onClick={toggleMobileMenu}
        >
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-70 text-white p-5">
          <ul>
            {["Home", "About us", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                initial="initial"
                whileHover="hovered"
                className="text-lg font-semibold py-2"
              >
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

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

      {/* Resume Button */}
      <div className="group relative cursor-pointer text-xl p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
        <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          Resume
        </span>
        <div className="flex gap-2 text-white bg-blue-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
          <span>Resume</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
