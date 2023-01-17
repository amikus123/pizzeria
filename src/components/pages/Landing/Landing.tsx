import Image from "next/image";
import React from "react";
import Cover from "./Cover";
import Hero from "./Hero";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Cover />
      </div>
    </>
  );
};

export default Landing;
