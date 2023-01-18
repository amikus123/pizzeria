import Image from "next/image";
import React from "react";
import Cover from "./Cover";
import Hero from "./Hero";
import Location from "./Location";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Cover />
      </div>
      <div className="flex flex-col px-4">
        <Location />
      </div>
    </>
  );
};

export default Landing;
