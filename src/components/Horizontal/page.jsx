"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Example image sources
import image1 from "@/assets/image/me.jpg";
import image2 from "@/assets/image/orange.jpg";
import image3 from "@/assets/image/me.jpg";
import image4 from "@/assets/image/orange.jpg";
import image5 from "@/assets/image/me.jpg";

const Horizontal = () => {
  const imageRef = useRef([]);
  const imageContainerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: 1,
        start: "top top", // Start when the image container hits the top of the viewport
        end: "+=" + imageContainerRef.current.offsetWidth, // Scroll length should match the container width
        pin: true, // Pin the image container during the scroll
        snap: 1 / (imageRef.current.length - 1),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  // Array of image sources and titles
  const images = [
    { src: image1, title: "Image 1asddddddddddddddddddddddddddddddddddddddd" },
    { src: image2, title: "Image 2" },
    { src: image3, title: "Image 3" },
    { src: image4, title: "Image 4" },
    { src: image5, title: "Image 5" }
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section className="flex justify-center items-center">
        <h1 className="font-bold text-8xl text-white">Scroll Down</h1>
      </section>
      <section
        className="min-h-screen flex flex-nowrap items-center space-x-10 px-20 relative"
        ref={imageContainerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[400px] md:w-[500px] h-[500px] md:h-[600px] shrink-0 rounded-3xl"
            ref={(el) => (imageRef.current[index] = el)}
          >
            <Image src={image.src} className="w-full h-full object-cover" alt={`Image ${index + 1}`} />
            <h1 className="text-black">sasdfdsf</h1>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Horizontal;
