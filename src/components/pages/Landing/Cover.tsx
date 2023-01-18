import Image from "next/image";
import React from "react";

const Cover = () => {
  return (
    <div className="pointer-events-none  relative  h-[87vw] max-h-[800px] min-h-[600px] w-full brightness-50">
      <Image src="/pizza-bg.jpg" className="object-cover" fill alt="Pizza" />
    </div>
  );
};

export default Cover;
