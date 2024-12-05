"use client"
import Image from "next/image";

const items = [
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
  { src: "/orange.jpg", alt: "works", name: "Name", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sit deleniti qui nulla quisquam animi officiis enim nesciunt repellendus exercitationem?" },
];

export default function CardProjects() {
  return (
    <div className="w-11/12 mx-auto grid grid-rows-4 grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div className="flex justify-center items-center w-full" key={index}>
          <div className="w-full">
            <Image src={item.src} width={800} height={100} alt={item.alt} className="mx-auto w-full" />
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
