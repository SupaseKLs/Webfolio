"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CategoryFilter from "@/components/Categories/page";

const items = [
  { 
    href: "https://much-media-qj5w.vercel.app/", 
    src: "/MuchMedia.png", 
    alt: "works", 
    name: "MuchMedia", 
    description: "Developed the MuchMedia website, a platform that compiles all multimedia content in one place. Work as team project, focused on user interaction with our website. This is a final project in  second year, first semester at university.", 
    category: "Front-End" 
  },
  { 
    href: "https://webfolio-aye-4x1j.vercel.app/", 
    src: "/C2.png", 
    alt: "works", 
    name: "Aye - Webfolio", 
    description: "Developed a web development called Webfolio to store works. It support mobile and desktop, easy to use and responsive to provides a user experience a user friendly and modern.", 
    category: "Front-End" 
  },
  { 
    href: "https://multicamp-workshop.vercel.app/", 
    src: "/C1T2.png", 
    alt: "works", 
    name: "Multicamp", 
    description: "Lecturer in the presentation of basic web application development content, taught the camp members and create all the content into a web application.", 
    category: "Front-End" 
  },
  { 
    href: "https://www.figma.com/design/U5hTokbZyiswLkAitfKKUU/Furniture?node-id=0-1&t=IdOFGuk4UuNf1NRF-1/", 
    src: "/C4.png", 
    alt: "works", 
    name: "Synliving", 
    description: "Designed an E-Commerce website about furniture with features such as product categorization, adding products to cart, user authentication and new  arrivals.", 
    category: "UI/UX Design" 
  },
  { 
    href: "https://www.behance.net/gallery/208395975/PayGuard-help-to-fraud-through-money-transfer", 
    src: "/PG.png", 
    alt: "works", 
    name: "PayGuard", 
    description: "The competition is about creating legal innovations. I designed an application that solves fraud problems in online finance.", 
    category: "UI/UX Design" 
  },
  { 
    href: "https://www.behance.net/gallery/214398637/Wise-", 
    src: "/W.png", 
    alt: "works", 
    name: "Wise+", 
    description: "Designed an application that help solve fraud problems corruption through online financial transactions.", 
    category: "UI/UX Design" 
  },
  { 
    href: "https://www.behance.net/gallery/214398897/AlmFlag-EcoCare", 
    src: "/AF.png", 
    alt: "works", 
    name: "ArmFlag", 
    description: "Innovation competition, I created “ArmFlag” a smart armband that measures fasting blood sugar, PM 2.5 levels, and connects to an application to notify the user’s health status, especially for chronic illnesses. It also have gamification and gained experience in business study.", 
    category: "UI/UX Design" 
  },
];

export default function CardProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="pb-20 w-11/12 mx-auto">
  {/* Category Filter */}
  <CategoryFilter
    categories={categories}
    activeCategory={activeCategory}
    setActiveCategory={setActiveCategory}
  />

  {/* Project Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    {filteredItems.map((item, index) => (
      <Link href={item.href} key={index}>
        <div className="py-10 flex justify-center items-center w-full">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={item.src}
              width={800}
              height={100}
              alt={item.alt}
              className="mx-auto w-full"
            />
            <div>
              <h1 className="py-2 text-3xl font-semibold">{item.name}</h1>
              <p className="text-xl">{item.description}</p>
            </div>
          </motion.div>
        </div>
      </Link>
    ))}
  </div>
</div>

  );
}
