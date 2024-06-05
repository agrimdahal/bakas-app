import React from "react";
import { images } from "./constant";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className=" place-items-start w-full text-black relative  ">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[15vh] text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-white-200">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center mb-10">
            <div
              onClick={clickPrev}
            >
              <CiSquareChevLeft className="w-10 h-10" />
            </div>

            <div 
              onClick={clickNext}
            >
            <CiSquareChevRight  className="w-10 h-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;