"use client"
import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import Headache from '@/assets/image/headache.gif'
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
                            className="rounded-lg"  // Initial rounded corners
                            style={{
                                scale,
                                width: "100%",
                                height: "100vh",
                                background: 'white',
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
                        </motion.div>
                    </div>


                </div>
            </header>



            <section className='h-full'>
                <div className='w-11/12 mx-auto'>
                    <div className='flex flex-col justify-center items-center mt-40 text-black'>
                        <h1 className='text-5xl'>Transformations Along</h1>
                        <h1 className='text-7xl'>My Path to Growth</h1>
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