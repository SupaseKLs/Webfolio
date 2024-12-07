"use client"
import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import Seek from '@/assets/image/seek.gif'
import World from '@/assets/image/world.gif'
import Supasek from '@/assets/image/s.gif'
import Image from 'next/image';
import CardProjects from '@/components/CardProjects/page'
import CardHorizontal from '@/components/Horizontal/page'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
const HomePage = () => {
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    const scale = useTransform(scrollY, [150, 500], [0.9, 1])
    return (
        <>
            <header className='relative h-[200vh]'>
                <div className="bg-fixed z-10 bg-[url('../assets/image/me.jpg')] bg-cover bg-no-repeat bg-center font-sans h-full">
                    <Navbar />
                    {/* <div className="w-11/12 mx-auto">
                        <div className="absolute bottom-10 flex flex-col text-9xl uppercase text-white">
                            <h1 className="flex items-center">
                                Fr
                                <span className="inline-block">
                                    <Image className="w-24 h-24" src={Headache} alt="seek" />
                                </span>
                                nt-End
                            </h1>
                            <h1>Developer</h1>
                        </div>
                    </div> */}


                    <div className='absolute bottom-0 w-full'>
                        <motion.div
                            className="relative rounded-lg bg-[url('/bg.png')]  bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"  // Initial rounded corners
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
                                    <Image src={Supasek}className='w-20 md:w-30 lg:w-36' />
                                    <h1>I'm S.I come from Thailand,</h1>
                                </div>
                                <div className='flex items-center'>
                                    <h1>"Explore our work to disc<div className='inline-flex items-center'><Image src={World} alt='world' className='w-4 md:w-6 lg:w-8 h-auto' /></div>ver new</h1>
                                </div>
                                <div className='pt-4 flex items-center'>
                                    <h1>creative ideas that might amaze y<div className='inline-flex'><Image src={Seek} alt='seek' className='w-4 md:w-6 lg:w-8 h-auto' /></div>u!"</h1>
                                </div>


                            </div>
                        </motion.div>
                    </div>


                </div>
            </header>



            <section className='h-full'>
                <div className='w-11/12 mx-auto'>
                    <div className='flex flex-col justify-center items-center mt-20 text-black'>
                        <h1 className='text-3xl md:text-5xl'>Transformations Along</h1>
                        <h1 className='text-5xl md:text-7xl'>My Path to Growth</h1>
                    </div>
                    <div>
                        <CardHorizontal />
                    </div>
                </div>
            </section>

            <section>
                <div className='w-11/12 mx-auto flex flex-col lg:flex-row justify-between'>
                    <div>
                        <h1 className='text-8xl'>8</h1>
                        <h1 className='text-2xl'>Years of Experience</h1>
                    </div>
                    <div>
                        <h1 className='text-8xl'>150 +</h1>
                        <h1 className='text-2xl'>Complete Projects</h1>
                    </div>
                    <div className='max-w-96 text-4xl'>
                        <h1>All their front-end parts were completely done by me.These are some of my recentfavorites.</h1>
                    </div>
                </div>

                <div>
                    <CardProjects />
                </div>
            </section>
        </>
    )
}

export default HomePage