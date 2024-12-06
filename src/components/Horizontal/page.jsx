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
        start: "top top",
        end: "+=" + imageContainerRef.current.offsetWidth, 
        pin: true,
        snap: 1 / (imageRef.current.length - 1),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []); 

  const images = [
    { src: image1, title: "Image 1" },
    { src: image2, title: "Image 2" },
    { src: image3, title: "Image 3" },
    { src: image4, title: "Image 4" },
    { src: image5, title: "Image 5" }
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section
        className="min-h-screen flex flex-nowrap items-center space-x-10 px-20 relative"
        ref={imageContainerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[400px] md:w-[500px] h-3/5 shrink-0 rounded-3xl"
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
