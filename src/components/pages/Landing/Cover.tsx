import Image from "next/image";
import React from "react";

const Cover = () => {
  return (
    <div className="relative  h-[87vw] min-h-[600px] w-full brightness-50">
      <Image src="/pizza-bg.jpg" className="" fill alt="Pizza" />
    </div>
  );
};

export default Cover;
