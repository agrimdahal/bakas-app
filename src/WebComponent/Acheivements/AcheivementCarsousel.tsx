"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "../Acheivements/constant";
import Description from "../Acheivements/Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === images.length - 1 ? 0 : prevActiveImage + 1
    );
  };

  const clickPrev = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === 0 ? images.length - 1 : prevActiveImage - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (

    <>
    <div className="flex flex-col items-center ">
        <nav className="fixed  left-0 right-0 h-16 bg-gray-900 text-white flex items-center justify-center">
        </nav>
        <div className="w-full max-w-5xl mt-20 md:mt-32">
          {/* Image */}
          <div className="">
          <h1 className=" text-4xl lg:text-6xl font-extrabold text-center mb-[50px]">
         Our Acheivements 
       </h1>
            {images.map((elem, idx) => (
              <div
                key={idx}
                className={`${idx === activeImage ? "block" : "hidden"} w-full h-[50vh] relative`}
              >
                <Image
                  src={elem.src}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl" />
              </div>
            ))}
          </div>
          {/* Description */}
          <div className="w-full">
            <Description
              activeImage={activeImage}
              clickNext={clickNext}
              clickPrev={clickPrev} />
          </div>
        </div>
      </div></>
  );
};

export default Slider;
