import clsx from "clsx";
import React, { useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  imageGalleryAtom,
  imageGalleryIndexAtom,
} from "../../../atoms/galleryImages";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const FullGallery = () => {
  const imageGallery = useRecoilValue(imageGalleryAtom);
  const [imageGalleryIndex, setImageGalleryIndex] = useRecoilState(
    imageGalleryIndexAtom
  );
  const closeGallery = () => setImageGalleryIndex(-1);
  const modifyIndex = (add: boolean) => {
    let newValue;
    if (add) {
      newValue =
        imageGalleryIndex + 1 >= imageGallery.length
          ? 0
          : imageGalleryIndex + 1;
    } else {
      newValue =
        imageGalleryIndex - 1 <= -1
          ? imageGallery.length - 1
          : imageGalleryIndex - 1;
    }
    setImageGalleryIndex(newValue);
  };

  useEffect(() => {
    console.log({ imageGalleryIndex });
    if (imageGalleryIndex >= 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [imageGalleryIndex]);

  return (
    <>
      <div
        className={clsx([
          " absolute top-0 left-0 right-0 z-40 hidden   h-full bg-black",
          imageGalleryIndex >= 0 && "!flex",
        ])}
        onClick={closeGallery}
      >
        <RiCloseFill
          className="visible fixed right-8 top-8 z-50 h-8 w-8 cursor-pointer"
          color="white"
          onClick={closeGallery}
        />
        <div
          className="fixed top-1/2 flex w-full -translate-y-1/2 items-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <FaAngleLeft
            className="mx-8 h-8 w-8 cursor-pointer"
            color="white"
            onClick={() => {
              modifyIndex(false);
            }}
          />
          <div className="relative  flex aspect-video min-h-[200px] flex-1">
            {imageGalleryIndex >= 0 && (
              <Image
                src={imageGallery[imageGalleryIndex]?.src as string}
                alt={imageGallery[imageGalleryIndex]?.alt as string}
                fill
                className="select-none object-fill "
              />
            )}
          </div>
          <FaAngleRight
            className="mx-8 h-8 w-8 cursor-pointer"
            color="white"
            onClick={() => {
              modifyIndex(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FullGallery;
