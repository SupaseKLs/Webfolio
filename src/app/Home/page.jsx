"use client"
import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import Cursor from "@/components/Cursor/cursor_core/page";
import Seek from '@/assets/image/seek.gif'
import World from '@/assets/image/world.gif'
import Supasek from '@/assets/image/s.gif'
import Image from 'next/image';
import CardProjects from '@/components/CardProjects/page'
import CardHorizontal from '@/components/Horizontal/page'
import NumberTicker from '@/components/Counter/page'
import Footer from '@/components/StickyFooter/page'

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const HomePage = () => {
    
    const { scrollY } = useScroll()

    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    // })
    
    const scale = useTransform(scrollY, [150, 500], [0.9, 1])
    return (
        <>
            <header className='relative h-[200vh]'>
            <div className="bg-fixed z-10 bg-[url('../assets/image/me.jpg')] bg-cover bg-no-repeat bg-center font-sans min-h-screen">

                    <Navbar />

                    <div id='About' className='absolute bottom-0 w-full'>
                        <motion.div
                            className="relative rounded-lg bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"  // Initial rounded corners
                            style={{
                                scale,
                                width: "100%",
                                height: "100vh",
                                borderRadius: "0px", // Initial sharp corners
                            }}
                            animate={{
                                borderRadius: "0px", // Transition to no rounding (sharp corners)
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <div className='relative w-auto text-center text-2xl md:text-4xl lg:text-5xl'>
                                <div className='flex items-center'>
                                    <Image src={Supasek} className='w-20 md:w-30 lg:w-36' alt='Supasek' />
                                    <h1>I am S.I come from Thailand,</h1>
                                </div>
                                <div className='flex items-center'>
                                    <h1>Explore our work to disc<div className='inline-flex items-center'><Image src={World} alt='world' className='w-4 md:w-6 lg:w-8 h-auto' /></div>ver new</h1>
                                </div>
                                <div className='pt-4 flex items-center'>
                                    <h1>creative ideas that might amaze y<div className='inline-flex'><Image src={Seek} alt='seek' className='w-4 md:w-6 lg:w-8 h-auto' /></div>u!</h1>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            <section className='h-full'>
                <div className='w-11/12 mx-auto'>
                    <div className='flex flex-col justify-center items-center mt-20 text-black'>
                        <h1 className='text-2xl md:text-5xl'>Transformations Along</h1>
                        <h1 className='text-4xl md:text-7xl'>My Path to Growth</h1>
                    </div>
                    <div>
                        <CardHorizontal />
                    </div>
                </div>
            </section>

            <section id='Projects'>
                <div className='w-11/12 mx-auto flex flex-col pb-10 md:flex-row lg:flex-row justify-between'>
                    <div>
                        <NumberTicker className="text-8xl text-blue-600 font-bold" value={8} />
                        <h1 className='text-2xl font-medium'>Years of<br /> Experience</h1>
                    </div>
                    <div>
                        <NumberTicker className="text-8xl text-blue-600 font-bold" value={10} /><span className='text-blue-600 text-8xl'>+</span>

                        <h1 className='text-2xl font-medium'>Complete<br /> Projects</h1>
                    </div>
                    <div className='md:max-w-[350px] lg:max-w-[400px] pt-10 md:py-0 text-4xl'>
                        <h1 className='font-Roboto font-semibold'>All parts of these projects were developed by me. Here are some of my latest favorites.</h1>
                    </div>
                </div>

                <div>
                    <CardProjects />
                </div>
            </section>

            <section id="Contact">
            <Footer />
            </section>
        </>
    )
}

export default HomePage