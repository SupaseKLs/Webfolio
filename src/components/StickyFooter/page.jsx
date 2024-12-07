'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
export default function Footer() {
  const pathArr = [
    'M50.248 105.816C21.448 105.816 4.808 91.864 0.2 84.312L20.296 70.616C20.296 107.608 74.952 114.008 74.952 89.304C74.952 60.632 2.12 75.992 2.12 39C2.12 23.768 12.872 10.584 41.288 10.584C67.912 10.584 84.552 22.104 88.904 29.656L69.576 43.352C69.576 8.79199 16.84 0.855995 16.84 29.016C16.84 57.56 92.232 42.584 92.232 78.296C92.232 93.4 77.512 105.816 50.248 105.816ZM144.572 105.816C121.916 105.816 103.74 94.552 103.74 65.112V32.6C103.74 19.8 100.54 14.04 96.7 14.04V13.4H130.62V14.04C127.42 14.04 124.22 19.8 124.22 32.6V65.112C124.22 93.016 132.54 103.896 144.572 103.896C156.604 103.896 164.924 93.016 164.924 65.112V32.6C164.924 19.8 161.724 14.04 158.524 14.04V13.4H192.444V14.04C188.604 14.04 185.404 19.8 185.404 32.6V65.112C185.404 94.552 167.228 105.816 144.572 105.816ZM247.721 105.816C217.385 105.816 195.625 85.72 195.625 58.2C195.625 30.68 217.129 10.584 247.977 10.584C271.657 10.584 284.713 22.36 289.321 30.68L269.225 44.76C269.225 26.456 252.073 14.936 236.713 14.936C231.849 14.936 227.113 16.088 223.273 18.648C209.449 27.48 209.961 50.776 222.889 71.512C234.793 90.712 249.129 95.192 259.625 95.192C273.833 95.192 287.529 87 287.529 83.16H288.169C288.169 90.072 274.473 105.816 247.721 105.816ZM345.748 105.816C316.948 105.816 300.308 91.864 295.7 84.312L315.796 70.616C315.796 107.608 370.452 114.008 370.452 89.304C370.452 60.632 297.62 75.992 297.62 39C297.62 23.768 308.372 10.584 336.788 10.584C363.412 10.584 380.052 22.104 384.404 29.656L365.076 43.352C365.076 8.79199 312.34 0.855995 312.34 29.016C312.34 57.56 387.732 42.584 387.732 78.296C387.732 93.4 373.012 105.816 345.748 105.816ZM466.651 109.016H465.883C466.011 107.864 463.323 103 450.523 103H394.075V102.36C397.915 102.36 401.115 96.6 401.115 83.8V32.6C401.115 19.8 397.915 14.04 394.075 14.04V13.4H447.707C460.507 13.4 463.195 8.536 463.067 7.384H463.835L470.107 30.808H469.339C468.315 27.096 460.507 14.68 447.707 14.68H421.595V52.824H434.395C447.195 52.824 452.827 39.384 452.955 36.184H453.595V70.744H452.955C452.955 66.776 447.195 54.104 434.395 54.104H421.595V101.72H450.523C463.323 101.72 471.131 89.304 472.155 85.592H472.923L466.651 109.016ZM513.245 103H479.325V102.36C483.165 102.36 486.365 96.6 486.365 83.8V32.6C486.365 19.8 483.165 14.04 479.325 14.04V13.4H513.245V14.04C510.045 14.04 506.845 19.8 506.845 32.6V60.504L540.509 32.6C549.597 25.048 543.709 13.784 540.509 14.04V13.4H573.789V14.04C570.077 14.04 550.877 25.56 541.789 33.112L534.493 39.128L555.613 75.608C561.501 85.848 574.301 102.36 577.373 102.36V103H531.933V102.36C535.773 102.36 541.405 94.552 535.133 83.8L517.469 53.336L506.845 62.168V83.8C506.845 96.6 510.045 102.36 513.245 102.36V103Z',
  ];
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    visible: (i) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),
    hidden: { translateY: 200 },
  };

  const constrainsRef = useRef(null);
  return (
    <div
      className='relative h-[700px]'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >

      <div className='bg-[#fefefe] fixed bottom-0 w-full'>
        <motion.div ref={constrainsRef}>

          <div className="flex-col xl:flex-row flex justify-between px-4 md:px-16">
            <div>
              <h1 className='text-5xl xl:text-8xl py-6 uppercase font-bold'>Get in touch</h1>
              <div className="group relative cursor-pointer p-2 border bg-white rounded-full overflow-hidden text-black text-center font-semibold" aria-label="Copy Email button" onClick={() => navigator.clipboard.writeText('laobutsasupasek@gmail.com')}>
                <span className="text-2xl md:text-6xl px-4 py-8 translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                  laobutsasupasek@gmail.com
                </span>
                <div className="flex gap-2 text-white bg-blue-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
                  <span className='text-2xl md:text-6xl'>Click to copy email !</span>
                </div>
              </div>
            </div>

            <div>
              <h1 className='py-6 text-5xl font-bold uppercase'>Social</h1>
              <ul>
                <li className='my-6'>
                  <Link className="relative text-3xl after:absolute after:bottom-0 after:left-0 after:h-[4px] pb-1 after:w-full after:origin-bottom-right after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] dark:after:bg-black hover:after:origin-bottom-left hover:after:scale-x-100" href="https://www.linkedin.com/in/supasek-laobutsa-83a969318/">
                    LinkedIn
                  </Link>
                </li>
                <li className='my-6'>
                  <Link className="relative text-3xl after:absolute after:bottom-0 after:left-0 after:h-[4px] pb-1 after:w-full after:origin-bottom-right after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] dark:after:bg-black hover:after:origin-bottom-left hover:after:scale-x-100" href="https://www.instagram.com/kesapus__/">
                    Instagram
                  </Link>
                </li>
                <li className='my-6'>
                  <Link className="relative text-3xl after:absolute after:bottom-0 after:left-0 after:h-[4px] pb-1 after:w-full after:origin-bottom-right after:scale-x-0  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] dark:after:bg-black hover:after:origin-bottom-left hover:after:scale-x-100" href="https://www.facebook.com/supasek.laobutsa">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>


          <motion.svg
            width="776"
            ref={ref}
            height="137"
            viewBox="0 0 776 137"
            fill="none"
            className="my-8 sm:h-fit h-20 md:px-8 px-2 footer-logo w-full"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {pathArr.map((path, index) => (
              <motion.path
                key={index}  // Add a unique key for each path
                custom={index}
                variants={variants}
                d={path}
                fill="#3E7AEE"
              />
            ))}
          </motion.svg>


        </motion.div>
      </div>

    </div>
  )
}