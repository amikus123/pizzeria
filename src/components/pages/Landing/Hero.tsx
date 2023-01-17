import React from "react";
import ButtonLink from "../../general/ButtonLnk";

const Hero = () => {
  return (
    <section className="absolute z-10 flex max-w-xs flex-col px-4 pt-56  text-white">
      <h1 className="flex flex-col justify-start text-2xl ">
        <span className="pb-2">Get ready for ...</span>
        <span className="font-bold">THE BEST ITALIAN PIZZA</span>
      </h1>
      <div className="mt-2 h-2 w-8 bg-orange-600"></div>
      <p className="py-4">
        Our recipies are a of great quality, traditional pizza in modern form.
      </p>
      <ButtonLink href="menu">VIEW MENU</ButtonLink>
    </section>
  );
};

export default Hero;
