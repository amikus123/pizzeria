import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa";
const ImageGallery = () => {
  return (
    <div>
      <ul className="mt-4 flex flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <li
              key={index}
              className={clsx([
                "relative aspect-video min-h-[200px] w-1/3 lg:w-1/4 xl:w-1/5 ",
                index > 5 && index <= 7 && "hidden lg:flex",
                index > 7 && "hidden xl:flex",
              ])}
            >
              <Image
                src={index / 2 === 0 ? "/chef.jpg" : "/couple.jpg"}
                fill
                className="object-fill"
                alt="img"
              />
              <div className="group absolute top-0 bottom-0 left-0   right-0 flex cursor-pointer items-center justify-center   ">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-orange-600 opacity-0 transition duration-300 hover:opacity-40 "></div>
                <FaImage
                  className="z-10  h-10  w-10  opacity-0 transition duration-300 group-hover:opacity-100"
                  color="white"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
