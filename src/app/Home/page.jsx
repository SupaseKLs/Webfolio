import React from 'react'
import Navbar from "@/components/Navbar/Navbar";
import Headache from '@/assets/image/headache.gif'
import Image from 'next/image';
import CardProjects from '@/components/CardProjects/page'
import CardHorizontal from '@/components/Horizontal/page'
const HomePage = () => {
    return (
        <>
            <header className='relative'>
                <div className="bg-[url('../assets/image/me.jpg')] bg-cover bg-no-repeat bg-center font-sans h-screen">
                    <Navbar />
                    <div className="w-11/12 mx-auto ">
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
                    </div>
                </div>
            </header>

            <section>
                <div className='h-screen rounded-lg bg-white'>
                </div>
            </section>

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
                <div className='w-11/12 mx-auto flex justify-between'>
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