"use client";
import { useState } from "react";
import { data } from "../gallery/data";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CssGrid = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageStyle =
    "bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center";

  const openImage = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <div className="">
        <h1
          className="pt-40 text-4xl lg:text-8xl font-extrabold text-green-300 text-center"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Our Gallery
        </h1>
      </div>
      <div
        className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10"
        style={{ height: "100%" }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className={`${imageStyle} ${
              i === 0 || i === 8 || i === 8 || i === 30 ? "md:col-span-2" : ""
            } ${i === 2 ? "md:row-span-2" : ""}`}
            onClick={() => openImage(i)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        ))}

        {selectedImageIndex !== null && (
          <div className=" fixed top-10 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
            <div className=" flex justify-center items-center max-w-screen-lg w-full h-full">
              <button
                className="absolute top-[170px] right-4 text-white"
                onClick={closeImage}
              >
                <IoIosCloseCircleOutline size="3rem" />
              </button>
              <img
                src={data[selectedImageIndex].imageUrl}
                className="max-w-full max-h-full"
                alt={data[selectedImageIndex].title}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CssGrid;
