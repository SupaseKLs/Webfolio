"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Horizontal = () => {
  const videoRef = useRef([]);
  const videoContainerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(videoRef.current, {
      xPercent: -100 * (videoRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: videoContainerRef.current,
        scrub: 1,
        start: "top top",
        end: "+=" + videoContainerRef.current.offsetWidth,
        pin: true,
        snap: 1 / (videoRef.current.length - 1),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const videos = [
    { src: "/v1.mp4", header: "Confident Socializing", title: "I am not afraid of working in a team because it allows me to learn from many talented people in different ways." },
    { src: "/v2.mp4", header: "Problem Solving", title: "When problems come up, I don’t give up. Instead, I try to find a way to solve them and keep going." },
    { src: "/v3.mp4", header: "Comfort Zone", title: "I stepped out of my comfort zone to search for what I truly love and to challenge myself in new ways." },
    { src: "/v4.mp4", header: "Self Expression", title: "Now, I am brave enough to express myself, unlike before when I was too shy to talk to anyone." },
    { src: "/v5.mp4", header: "Opinion Sharing", title: "I am confident to express myself and share my opinions about the projects I am working on." },
  ];

  return (
    <main className="min-h-screen w-full mb-20 overflow-x-hidden">
      <section
        className="min-h-screen flex flex-nowrap items-center space-x-10 px-20 relative"
        ref={videoContainerRef}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-[400px] md:w-[350px] lg:w-[400px] h-11/12 bg-gray-100 shrink-0 rounded-3xl"
            ref={(el) => (videoRef.current[index] = el)}
          >
            <video
              src={video.src}
              className="w-full h-11/12 pb-4 object-cover mx-auto"
              loop
              muted
              autoPlay
              playsInline
            />
            <div className="py-5 px-5 w-11/12 text-md flex flex-col  items-start">
              <h1 className="text-xl font-bold text-black">{video.header}</h1>
              <p className="text-black">{video.title}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Horizontal;
