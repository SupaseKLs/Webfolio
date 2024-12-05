"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
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
      window.removeEventListener('scroll', handleScroll)
    }


  }, [scrollPosition]);


  return (
    <motion.nav className={`w-11/12 mx-auto fixed top-0 transition-transform duration-300 text-white h-16 font-medium flex justify-between items-center ${isVisible ? "translate-y-0" : "-translate-y-full"} `}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      initial={{ y: '-100%' }}
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div
      >
        <ul className='flex'>
          <motion.li
            initial="initial"
            whileHover="hovered"
            className="relative cursor-pointer px-2 text-lg font-semibold overflow-hidden font-Inter "
          >
            <motion.div
              className='text-text_color'
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
              }}
            >
              <Link href="/">Home</Link>
            </motion.div>
            <motion.div
              className='absolute inset-0 px-2 text-white'
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0, }
              }}
            >
              <Link href="/">Home</Link>
            </motion.div>
          </motion.li>

          <motion.li
            initial="initial"
            whileHover="hovered"
            className="relative px-2 cursor-pointer text-lg font-semibold overflow-hidden font-Inter "
          >
            <motion.div
              className='text-text_color'
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
              }}
            >
              <Link href="/">About us</Link>
            </motion.div>
            <motion.div
              className='absolute px-2 inset-0 text-white'
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0, }
              }}
            >
              <Link href="/">About us</Link>
            </motion.div>
          </motion.li>

          <motion.li
            initial="initial"
            whileHover="hovered"
            className="relative cursor-pointer px-2 text-lg font-semibold overflow-hidden font-Inter "
          >
            <motion.div
              className='text-text_color'
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
              }}
            >
              <Link href="/">Projects</Link>
            </motion.div>
            <motion.div
              className='absolute px-2 inset-0 text-white'
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0, }
              }}
            >
              <Link href="/">Projects</Link>
            </motion.div>
          </motion.li>

          <motion.li
            initial="initial"
            whileHover="hovered"
            className="relative px-2 cursor-pointer text-lg font-semibold overflow-hidden font-Inter "
          >
            <motion.div
              className='text-text_color'
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
              }}
            >
              <Link href="/">Contact</Link>
            </motion.div>
            <motion.div
              className='absolute inset-0 px-2 text-white'
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0, }
              }}
            >
              <Link href="/">Contact</Link>
            </motion.div>
          </motion.li>
        </ul>
      </div>

      <div>
        <div>
          <h1 className='text-gray-600'>Hello,my name is</h1>
          <motion.h1
            initial="initial"
            whileHover="hovered"
            className="relative cursor-pointer text-lg font-semibold overflow-hidden font-Inter "
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

      <div className="group relative cursor-pointer text-xl p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
        <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          Resume
        </span>
        <div className="flex gap-2 text-white bg-blue-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
          <span>Resume</span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar