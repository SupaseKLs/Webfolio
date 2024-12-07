"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { src: "/MuchMedia.png", alt: "works", name: "MuchMedia", description: "I developed the MuchMedia website, a platform that compiles all multimedia content in one place. I worked with my team, focused user interaction with our website. This is a final project in my second year, first term at university." },
  { src: "/C2.png", alt: "works", name: "Aye - Webfolio", description: "I developed a web development called Webfolio to store works.It support mobile and desktop it easy to use and responsive,to provides a user experience a user friendly and modern." },
  { src: "/C1T2.png", alt: "works", name: "Multicamp", description: "I was a lecturer in the presentation of basic web application development content and taught the camp members and create all the content into a web application." },
  { src: "/C4.png", alt: "works", name: "Synliving", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/PG.png", alt: "works", name: "PayGuard", description: "In the competition for creating legal innovations,I am designed an application that help solve fraud problems through online financial by have find research information in website to build application.?" },
  { src: "/W.png", alt: "works", name: "Wise+", description: "In the competition for creating legal innovations,I am designed an application that help solve fraud problems corruption through online financial transactions by have find research information in website to build application." },
  { src: "/AF.png", alt: "works", name: "ArmFlag", description: "In the innovation competition, I created “ArmFlag” a smart armband that measures blood sugar and PM 2.5 levels, and connects to an application to notify the user’s health status, especially for chronic illnesses. It also have gamification and also gained experience in doing business." },
];

export default function CardProjects() {
  return (
    <div className="pb-20 w-11/12 mx-auto grid grid-rows-4 grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div className="py-10 flex justify-center items-center w-full" key={index}>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }} // Start 50px below
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position and fade in
            transition={{ duration: 0.5 }} // Slide up and fade in smoothly
          >
            <Image src={item.src} width={800} height={100} alt={item.alt} className="mx-auto w-full" />
            <div>
              <h1 className="py-2 text-3xl font-semibold">{item.name}</h1>
              <p className="text-xl">{item.description}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
